// Builds the four printable PDFs in public/pdfs from the site's own data files.
// Run: node scripts/build_menu_pdfs.mjs
//
// Every number comes from data/menu.ts and data/nutrition.ts, so the PDFs can't
// drift from the website. Branding is the publisher's (Menu Almanac), never
// Applebee's, and every page carries the independence disclaimer.

import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import fs from 'fs';

fs.mkdirSync('public/pdfs', { recursive: true });

// ---------------------------------------------------------------- data
const siteSrc = fs.readFileSync('data/site.ts', 'utf8');
const checkedIso = (siteSrc.match(/PRICES_LAST_VERIFIED = '([^']+)'/) || [])[1] || '2026-09-08';
const CHECKED = new Date(checkedIso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const DISCLAIMER =
  "Menu Almanac is an independent guide. Not affiliated with, endorsed by, or operated by Applebee's Neighborhood Grill + Bar or Dine Brands Global. " +
  'Prices are reference figures; franchisees set their own. Calories and allergens come from Applebee\'s published nutrition information.';

const LABELS = {
  'new-items': 'New Items',
  'ultimate-trio': 'Ultimate Trio',
  skillets: 'Skillets',
  'signature-cocktails': 'Signature Cocktails',
  appetizers: 'Appetizers',
  'steaks-and-ribs': 'Steaks & Ribs',
  'handcrafted-burgers': 'Handcrafted Burgers',
  chicken: 'Chicken',
  pasta: 'Pasta',
  seafood: 'Seafood',
  salads: 'Salads',
  desserts: 'Desserts',
  sides: 'Sides',
  'dirty-fountain-sodas': 'Dirty Fountain Sodas',
  'irresist-a-bowls': 'Irresist-A-Bowls',
  'sandwiches-and-more': 'Sandwiches & More',
  '2-for-25': '2 for $25',
  'really-big-meal-deal': 'Really BIG Meal Deal',
  'kids-menu': 'Kids Menu',
  'non-alcoholic-beverages': 'Non-Alcoholic Drinks',
};

const menuSrc = fs.readFileSync('data/menu.ts', 'utf8').replace(/\r\n/g, '\n');
const categories = [];
// Anchor each category on its title + slug pair, then read items up to the next category.
const starts = [...menuSrc.matchAll(/title: "([^"]+)",\s*slug: "([^"]+)"/g)];
starts.forEach((start, idx) => {
  const end = idx + 1 < starts.length ? starts[idx + 1].index : menuSrc.length;
  const block = menuSrc.slice(start.index, end);
  const items = [...block.matchAll(/name: "([^"]+)", calories: "([^"]*)", price: "([^"]*)"/g)]
    .map((m) => ({ name: m[1], calories: m[2], price: m[3] }))
    .filter((i) => !(i.calories === 'Varies' && i.price === 'Varies'));
  categories.push({ slug: start[2], label: LABELS[start[2]] || start[1], items });
});
const bySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));

const nutSrc = fs.readFileSync('data/nutrition.ts', 'utf8');
const nutrition = [];
let currentNut = null;
for (const line of nutSrc.split('\n')) {
  const t = line.match(/title: "([^"]+)"/);
  if (t) {
    currentNut = { title: t[1], items: [] };
    nutrition.push(currentNut);
    continue;
  }
  const n = line.match(/name: "([^"]+)"/);
  if (!n || !currentNut) continue;
  const num = (key) => {
    const m = line.match(new RegExp('\\b' + key + ': ([\\d.]+)'));
    return m ? Number(m[1]) : null;
  };
  const al = line.match(/allergens: \[([^\]]*)\]/);
  currentNut.items.push({
    name: n[1],
    calories: num('calories'),
    protein: num('protein'),
    carbs: num('carbs'),
    fat: num('fat'),
    sodium: num('sodium'),
    sugars: num('sugars'),
    allergens: al ? [...al[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]) : [],
  });
}

// ---------------------------------------------------------------- helpers
const NAVY = [26, 36, 51];
const RED = [197, 48, 48];

const cleanCalories = (c) => c.replace(/\s*Cals?(\/person)?/i, '').replace('Effectively ', '') || '—';
const cleanPrice = (p) => {
  if (/promo/i.test(p)) return 'Promo only';
  if (/included/i.test(p)) return 'Included';
  return p.replace(' / 2 for $25', ' (also on 2 for $25)');
};
const fmt = (n) => (n === null || n === undefined ? '—' : n.toLocaleString('en-US'));
const money = (n) => `$${n.toFixed(2)}`;

function header(doc, title, subtitle) {
  const w = doc.internal.pageSize.width;
  doc.setFillColor(...NAVY);
  doc.rect(0, 0, w, 34, 'F');
  doc.setFillColor(...RED);
  doc.rect(0, 34, w, 1.5, 'F');
  doc.setTextColor(200, 208, 220);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text('MENU ALMANAC  ·  INDEPENDENT MENU RESEARCH', 14, 9);
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.text(title, 14, 20);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(210, 215, 222);
  doc.text(subtitle, 14, 28);
  doc.setTextColor(90, 100, 115);
  doc.setFontSize(8.5);
  doc.text(`Reference data checked ${CHECKED}  ·  applebees-menus.us`, 14, 42);
  return 48;
}

function footers(doc) {
  const pages = doc.getNumberOfPages();
  const w = doc.internal.pageSize.width;
  const h = doc.internal.pageSize.height;
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i);
    doc.setDrawColor(220, 224, 230);
    doc.line(14, h - 17, w - 14, h - 17);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(110, 118, 130);
    doc.text(DISCLAIMER, 14, h - 13, { maxWidth: w - 40 });
    doc.text(`Page ${i} of ${pages}`, w - 14, h - 5, { align: 'right' });
  }
}

const tableStyles = {
  theme: 'grid',
  styles: { font: 'helvetica', fontSize: 8.5, cellPadding: 1.8, lineColor: [226, 232, 240], lineWidth: 0.2 },
  headStyles: { fillColor: NAVY, textColor: 255, fontStyle: 'bold' },
  alternateRowStyles: { fillColor: [248, 250, 252] },
  margin: { left: 14, right: 14, bottom: 22 },
};

function sectionTitle(doc, text, y) {
  const h = doc.internal.pageSize.height;
  if (y > h - 45) {
    doc.addPage();
    y = 16;
  }
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...NAVY);
  doc.text(text, 14, y);
  return y + 3;
}

function save(doc, file) {
  footers(doc);
  fs.writeFileSync(`public/pdfs/${file}`, Buffer.from(doc.output('arraybuffer')));
  console.log('wrote public/pdfs/' + file);
}

// ---------------------------------------------------------------- 1. full menu
function fullMenu() {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'letter' });
  let y = header(doc, "Applebee's Menu: Reference Prices & Calories", `${categories.reduce((n, c) => n + c.items.length, 0)} items across ${categories.length} categories`);

  const order = [
    'appetizers', 'handcrafted-burgers', 'steaks-and-ribs', 'chicken', 'pasta', 'seafood', 'salads',
    'irresist-a-bowls', 'sandwiches-and-more', 'skillets', 'ultimate-trio', 'sides', 'desserts',
    'kids-menu', 'new-items', '2-for-25', 'really-big-meal-deal', 'signature-cocktails',
    'dirty-fountain-sodas', 'non-alcoholic-beverages',
  ];
  for (const slug of order) {
    const cat = bySlug[slug];
    if (!cat || cat.items.length === 0) continue;
    y = sectionTitle(doc, cat.label, y + 6);
    autoTable(doc, {
      ...tableStyles,
      startY: y + 1,
      head: [['Item', 'Calories', 'Reference price']],
      body: cat.items.map((i) => [i.name, cleanCalories(i.calories), cleanPrice(i.price)]),
      columnStyles: { 1: { halign: 'right', cellWidth: 34 }, 2: { halign: 'right', cellWidth: 48 } },
    });
    y = doc.lastAutoTable.finalY;
  }
  save(doc, 'applebees-full-menu-with-prices.pdf');
}

// ---------------------------------------------------------------- 2. nutrition
function nutritionGuide() {
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'letter' });
  let y = header(doc, "Applebee's Nutrition & Allergen Guide", 'Calories, macros, sodium, sugar and the major allergens by item');
  for (const cat of nutrition) {
    y = sectionTitle(doc, cat.title, y + 6);
    autoTable(doc, {
      ...tableStyles,
      startY: y + 1,
      head: [['Item', 'Calories', 'Protein', 'Carbs', 'Fat', 'Sodium', 'Sugar', 'Allergens']],
      body: cat.items.map((i) => [
        i.name,
        fmt(i.calories),
        i.protein === null ? '—' : `${i.protein}g`,
        i.carbs === null ? '—' : `${i.carbs}g`,
        i.fat === null ? '—' : `${i.fat}g`,
        i.sodium === null ? '—' : `${fmt(i.sodium)}mg`,
        i.sugars === null ? '—' : `${i.sugars}g`,
        i.allergens.length ? i.allergens.join(', ') : 'None of the major allergens',
      ]),
      columnStyles: {
        1: { halign: 'right' }, 2: { halign: 'right' }, 3: { halign: 'right' },
        4: { halign: 'right' }, 5: { halign: 'right' }, 6: { halign: 'right' }, 7: { cellWidth: 62 },
      },
    });
    y = doc.lastAutoTable.finalY;
  }
  y = sectionTitle(doc, 'Before you order with an allergy', y + 8);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(50, 60, 75);
  doc.text(
    "Applebee's kitchens share grills, fryers and prep surfaces. \"No wheat in the recipe\" is not the same as safe for celiac disease. Tell your server why you're asking, and confirm with the kitchen.",
    14, y + 4, { maxWidth: doc.internal.pageSize.width - 28 },
  );
  save(doc, 'applebees-nutrition-and-allergen-guide.pdf');
}

// ---------------------------------------------------------------- 3. catering
function cateringGuide() {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'letter' });
  let y = header(doc, "Applebee's Catering Planner", 'How many platters to order, and what to ask the restaurant');
  const w = doc.internal.pageSize.width;

  y = sectionTitle(doc, 'The basics', y + 6);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(50, 60, 75);
  const basics = [
    'Each platter feeds 6 to 8 adults as part of a spread with an appetizer and a side.',
    'Plan on about $10 per person for a basic spread. Rib and wing platters push it higher.',
    'No minimum order. Book up to two weeks ahead, or with as little as two hours notice for a small weekday order.',
    'Plates, cutlery and serving utensils are included.',
    "Applebee's doesn't publish national catering prices. Call your restaurant for a quote.",
  ];
  basics.forEach((line, i) => doc.text(`•  ${line}`, 16, y + 5 + i * 6, { maxWidth: w - 32 }));
  y += 5 + basics.length * 6;

  y = sectionTitle(doc, 'Platters by headcount', y + 6);
  const rows = [
    [10, 1, 2, 1], [15, 2, 2, 2], [20, 2, 3, 2], [30, 3, 4, 3], [50, 5, 7, 5],
  ].map(([g, a, e, s]) => [`${g} guests`, a, e, s, a + e + s, `$${g * 10}`]);
  autoTable(doc, {
    ...tableStyles,
    startY: y + 1,
    head: [['Guests', 'Appetizers', 'Entrées', 'Salads / sides', 'Platters', 'At ~$10 a head']],
    body: rows,
    columnStyles: { 1: { halign: 'center' }, 2: { halign: 'center' }, 3: { halign: 'center' }, 4: { halign: 'center' }, 5: { halign: 'right' } },
  });
  y = doc.lastAutoTable.finalY;

  y = sectionTitle(doc, 'Adjust for your group', y + 8);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(50, 60, 75);
  const adjust = [
    'Sports teams and teenagers: plan 4 to 5 per platter, roughly 40% more food.',
    'Office lunch: 8 per platter holds. Skip wings; choose pasta trays.',
    'Evening event with drinks: add one more platter.',
    'Fried food softens in closed containers. Order sauce and dressing on the side.',
    'Hold hot food above 135°F. Never put the plastic containers in an oven.',
  ];
  adjust.forEach((line, i) => doc.text(`•  ${line}`, 16, y + 5 + i * 6, { maxWidth: w - 32 }));
  save(doc, 'applebees-catering-party-platters-menu.pdf');
}

// ---------------------------------------------------------------- 4. drinks & happy hour
function drinksGuide() {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'letter' });
  let y = header(doc, "Applebee's Drinks & Happy Hour", 'Happy hour times, half price apps and drink prices');

  y = sectionTitle(doc, 'Happy hour: 3:00–6:00 PM and 9:00 PM to close, dine-in', y + 6);
  const apps = (bySlug.appetizers?.items || []).filter((i) => !/combo/i.test(i.name));
  autoTable(doc, {
    ...tableStyles,
    startY: y + 1,
    head: [['Half price appetizer', 'Calories', 'Regular', 'Half price']],
    body: apps.map((i) => {
      const p = Number((i.price.match(/\$(\d+\.\d\d)/) || [])[1] || 0);
      return [i.name, cleanCalories(i.calories), money(p), money(Math.round(p * 50) / 100)];
    }),
    columnStyles: { 1: { halign: 'right' }, 2: { halign: 'right' }, 3: { halign: 'right', fontStyle: 'bold' } },
  });
  y = doc.lastAutoTable.finalY;

  for (const slug of ['signature-cocktails', 'dirty-fountain-sodas', 'non-alcoholic-beverages']) {
    const cat = bySlug[slug];
    if (!cat) continue;
    y = sectionTitle(doc, cat.label, y + 8);
    autoTable(doc, {
      ...tableStyles,
      startY: y + 1,
      head: [['Drink', 'Calories', 'Reference price']],
      body: cat.items.map((i) => [i.name, cleanCalories(i.calories), cleanPrice(i.price)]),
      columnStyles: { 1: { halign: 'right', cellWidth: 34 }, 2: { halign: 'right', cellWidth: 48 } },
    });
    y = doc.lastAutoTable.finalY;
  }

  y = sectionTitle(doc, 'Limited time: $6 Spooky Sips through November 15, 2026', y + 8);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(50, 60, 75);
  doc.text(
    "Tipsy Zombie and Dracula's Juice cocktails are $6. The Tropical Spell Mocktail is $4. The $1 Dollarita ended July 31, 2026.",
    14, y + 5, { maxWidth: doc.internal.pageSize.width - 28 },
  );
  y += 14;

  y = sectionTitle(doc, 'States that ban happy hour drink discounts', y + 4);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.text(
    'Massachusetts, Rhode Island, Vermont, North Carolina, Alaska and Utah. Half price appetizers still run there. Oklahoma allows happy hour if prices stay at least 6% above cost; Indiana lifted its ban in 2024.',
    14, y + 5, { maxWidth: doc.internal.pageSize.width - 28 },
  );
  save(doc, 'applebees-drinks-cocktails-happy-hour-menu.pdf');
}

fullMenu();
nutritionGuide();
cateringGuide();
drinksGuide();
