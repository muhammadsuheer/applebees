import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import fs from 'fs';

// Ensure public/pdfs directory exists
if (!fs.existsSync('public/pdfs')) {
  fs.mkdirSync('public/pdfs', { recursive: true });
}

// ----------------------------------------------------
// 1. Applebee's Full Menu with Prices & Calories PDF
// ----------------------------------------------------
function generateFullMenuPDF() {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;

  // Header Banner
  doc.setFillColor(26, 36, 51); // Dark Navy
  doc.rect(0, 0, pageWidth, 35, 'F');
  doc.setFillColor(200, 16, 46); // Applebee's Red Accent Line
  doc.rect(0, 35, pageWidth, 2.5, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text("APPLEBEE'S GRILL + BAR", 15, 18);

  doc.setTextColor(220, 225, 230);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text("Complete Menu with Prices, Calories & Specials (2026 Edition)", 15, 28);

  doc.setTextColor(100, 116, 139);
  doc.setFontSize(9);
  doc.text("Official Reference Guide • Updated August 2026 • applebees-menus.us", 15, 43);

  const menuRows = [
    // APPETIZERS
    ["APPETIZERS & STARTERS", "", "", ""],
    ["Boneless Wings (Honey BBQ / Buffalo / Sweet Asian)", "860 - 1100 Cal", "$12.99", "Crispy tossed boneless chicken wings"],
    ["Classic Combo (Wings, Mozzarella Sticks, Quesadilla, Dip)", "2200 Cal", "$18.99", "Large shareable appetizer sampler"],
    ["Chicken Quesadilla", "1280 Cal", "$11.99", "Chipotle chicken, melted cheddar, salsa & sour cream"],
    ["Spinach & Artichoke Dip", "960 Cal", "$10.99", "Warm creamy dip served with tortilla chips"],
    ["Brew Pub Pretzels & Beer Cheese Dip", "1160 Cal", "$10.49", "Soft pretzel sticks with Blue Moon cheese dip"],
    ["Mozzarella Sticks (8 pc)", "840 Cal", "$9.99", "Golden fried mozzarella with marinara sauce"],
    
    // STEAKS & RIBS
    ["STEAKS & RIBS", "", "", ""],
    ["8 oz. Top Sirloin Steak", "370 Cal", "$18.99", "USDA Choice sirloin with potatoes & broccoli"],
    ["12 oz. Ribeye Steak Dinner", "640 Cal", "$24.99", "Marbled ribeye served with two classic sides"],
    ["Bourbon Street Steak", "790 Cal", "$21.99", "Cajun-seasoned steak with sautéed onions & mushrooms"],
    ["Double-Glazed Baby Back Ribs (Full Rack)", "1620 Cal", "$23.99", "Slow-cooked ribs with Honey BBQ or Spicy Texas glaze"],
    ["Double-Glazed Baby Back Ribs (Half Rack)", "810 Cal", "$16.99", "Served with classic fries and coleslaw"],
    ["Sizzling Bourbon Street Chicken & Shrimp", "780 Cal", "$18.49", "Cajun chicken breast, seasoned shrimp, potatoes"],

    // HANDCRAFTED BURGERS
    ["HANDCRAFTED BURGERS", "", "", ""],
    ["Classic Bacon Cheeseburger", "1180 Cal", "$13.99", "All-beef patty, bacon, cheddar, lettuce, tomato"],
    ["Whiskey Bacon Burger", "1310 Cal", "$14.99", "Pepper jack, crispy onions, whiskey bacon sauce"],
    ["Quesadilla Burger", "1290 Cal", "$14.49", "Served on a warm cheddar quesadilla with Mexi-ranch"],
    ["Whole Lotta Bacon Burger", "1150 Cal", "$15.99", "Bacon-forward burger with Applewood-smoked bacon"],
    ["The Classic Cheeseburger", "980 Cal", "$12.49", "American cheese, lettuce, tomato, onion, pickles"],
    ["Impossible™ Burger (Plant-Based)", "920 Cal", "$14.99", "100% plant-based patty with American cheese & fries"],

    // CHICKEN & PASTA
    ["CHICKEN & PASTA", "", "", ""],
    ["Fiesta Lime Chicken®", "1140 Cal", "$16.49", "Grilled chicken, Mexi-ranch, melted cheese, rice"],
    ["Crispy Chicken Tenders Platter", "1190 Cal", "$14.49", "Served with honey Dijon mustard, fries, coleslaw"],
    ["Three-Cheese Chicken Penne", "1280 Cal", "$16.99", "Penne in Asiago-Parmesan sauce with bruschetta"],
    ["Four-Cheese Mac & Cheese with Honey Pepper Chicken", "1350 Cal", "$17.49", "Crispy chicken tenders tossed in sweet honey pepper"],
    ["Broccoli Chicken Alfredo", "1420 Cal", "$16.49", "Juicy grilled chicken, fresh broccoli, fettuccine alfredo"],

    // DESSERTS & VALUE
    ["DESSERTS & VALUE DEALS", "", "", ""],
    ["2 for $25 Value Deal (1 App + 2 Entrees)", "Varies", "$25.00", "Includes Fiesta Lime Chicken, Burgers, Riblets"],
    ["Triple Chocolate Meltdown®", "920 Cal", "$8.99", "Warm chocolate cake with molten center & vanilla ice cream"],
    ["Sizzling Caramel Apple Blondie", "1040 Cal", "$8.99", "Baked blondie with nuts, apples, ice cream & caramel"]
  ];

  autoTable(doc, {
    startY: 47,
    head: [["Category / Menu Item", "Calories", "Price", "Description & Sides"]],
    body: menuRows.map(row => {
      if (row[1] === "" && row[2] === "") {
        return [{ content: row[0], colSpan: 4, styles: { fillColor: [26, 36, 51], textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 10 } }];
      }
      return row;
    }),
    theme: 'grid',
    headStyles: {
      fillColor: [200, 16, 46],
      textColor: 255,
      fontStyle: 'bold',
      fontSize: 9,
      cellPadding: 2.5
    },
    bodyStyles: {
      fontSize: 8,
      cellPadding: 2,
      textColor: [40, 40, 40]
    },
    columnStyles: {
      0: { cellWidth: 70, fontStyle: 'bold' },
      1: { cellWidth: 30, halign: 'center' },
      2: { cellWidth: 22, halign: 'center', fontStyle: 'bold', textColor: [200, 16, 46] },
      3: { cellWidth: 'auto' }
    }
  });

  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`Applebee's Complete Menu Guide • Page ${i} of ${pageCount} • applebees-menus.us`, pageWidth / 2, pageHeight - 8, { align: 'center' });
  }

  const pdfData = doc.output('arraybuffer');
  fs.writeFileSync('public/pdfs/applebees-full-menu-with-prices.pdf', Buffer.from(pdfData));
  console.log("Created public/pdfs/applebees-full-menu-with-prices.pdf");
}

// ----------------------------------------------------
// 2. Applebee's Nutrition & Allergen Guide PDF
// ----------------------------------------------------
function generateNutritionPDF() {
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;

  doc.setFillColor(26, 36, 51);
  doc.rect(0, 0, pageWidth, 28, 'F');
  doc.setFillColor(200, 16, 46);
  doc.rect(0, 28, pageWidth, 2, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text("APPLEBEE'S NUTRITION & ALLERGEN REFERENCE GUIDE", 15, 14);

  doc.setTextColor(220, 225, 230);
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  doc.text("Complete Calorie, Macro Breakdown & Common Allergen Data (2026 Reference)", 15, 22);

  const nutRows = [
    ["Boneless Wings (Honey BBQ)", "1020", "48g", "12g", "115g", "38g", "2680mg", "Wheat, Soy, Milk"],
    ["Classic Combo Platter", "2200", "134g", "42g", "168g", "84g", "4920mg", "Wheat, Milk, Soy, Egg"],
    ["Spinach & Artichoke Dip", "960", "64g", "22g", "78g", "20g", "2140mg", "Milk, Soy"],
    ["Mozzarella Sticks with Marinara", "840", "46g", "18g", "74g", "32g", "2210mg", "Wheat, Milk"],
    ["8 oz. Top Sirloin Steak", "370", "14g", "5g", "2g", "58g", "1460mg", "Soy"],
    ["Bourbon Street Steak", "790", "42g", "16g", "38g", "64g", "2480mg", "Soy, Milk"],
    ["Baby Back Ribs (Full Rack)", "1620", "96g", "34g", "112g", "78g", "3120mg", "Soy"],
    ["Classic Bacon Cheeseburger", "1180", "72g", "28g", "56g", "68g", "2340mg", "Wheat, Milk, Soy, Egg"],
    ["Whiskey Bacon Burger", "1310", "84g", "32g", "72g", "74g", "2790mg", "Wheat, Milk, Soy, Egg"],
    ["Quesadilla Burger", "1290", "82g", "34g", "48g", "76g", "2860mg", "Wheat, Milk, Soy"],
    ["Fiesta Lime Chicken®", "1140", "62g", "19g", "76g", "69g", "3150mg", "Milk, Soy, Egg"],
    ["Crispy Chicken Tenders", "1190", "66g", "12g", "96g", "54g", "2840mg", "Wheat, Egg, Soy"],
    ["Three-Cheese Chicken Penne", "1280", "68g", "28g", "98g", "72g", "2640mg", "Wheat, Milk, Soy"],
    ["Four-Cheese Mac & Cheese", "1350", "74g", "30g", "116g", "62g", "3280mg", "Wheat, Milk, Soy"],
    ["Blackened Cajun Salmon", "520", "28g", "6g", "4g", "62g", "1580mg", "Fish, Soy"],
    ["Grilled Chicken Caesar Salad", "860", "56g", "14g", "32g", "58g", "2140mg", "Milk, Fish, Egg, Wheat"],
    ["Oriental Chicken Salad", "1240", "78g", "13g", "104g", "36g", "1980mg", "Wheat, Soy, Egg, Peanut/Tree Nut"],
    ["Triple Chocolate Meltdown®", "920", "44g", "24g", "124g", "12g", "560mg", "Wheat, Milk, Egg, Soy"]
  ];

  autoTable(doc, {
    startY: 34,
    head: [["Menu Item", "Calories", "Total Fat", "Sat Fat", "Carbs", "Protein", "Sodium", "Allergens Contains"]],
    body: nutRows,
    theme: 'grid',
    headStyles: {
      fillColor: [200, 16, 46],
      textColor: 255,
      fontStyle: 'bold',
      fontSize: 8.5,
      cellPadding: 2
    },
    bodyStyles: {
      fontSize: 7.5,
      cellPadding: 1.8,
      textColor: [40, 40, 40]
    },
    columnStyles: {
      0: { cellWidth: 65, fontStyle: 'bold' },
      1: { halign: 'center', fontStyle: 'bold' },
      2: { halign: 'center' },
      3: { halign: 'center' },
      4: { halign: 'center' },
      5: { halign: 'center', fontStyle: 'bold', textColor: [26, 36, 51] },
      6: { halign: 'center' },
      7: { cellWidth: 50, textColor: [180, 20, 20] }
    }
  });

  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(7.5);
    doc.setTextColor(150, 150, 150);
    doc.text(`Applebee's Nutrition & Allergen Guide • Page ${i} of ${pageCount} • Consult restaurant manager for severe allergies • applebees-menus.us`, pageWidth / 2, pageHeight - 6, { align: 'center' });
  }

  const pdfData = doc.output('arraybuffer');
  fs.writeFileSync('public/pdfs/applebees-nutrition-and-allergen-guide.pdf', Buffer.from(pdfData));
  console.log("Created public/pdfs/applebees-nutrition-and-allergen-guide.pdf");
}

// ----------------------------------------------------
// 3. Applebee's Catering Party Platters PDF
// ----------------------------------------------------
function generateCateringPDF() {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;

  doc.setFillColor(26, 36, 51);
  doc.rect(0, 0, pageWidth, 35, 'F');
  doc.setFillColor(200, 16, 46);
  doc.rect(0, 35, pageWidth, 2.5, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text("APPLEBEE'S CATERING GUIDE", 15, 18);

  doc.setTextColor(220, 225, 230);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text("Party Platters, Ordering Math & Headcount Blueprint (2026)", 15, 28);

  const cateringRows = [
    ["10 Guests", "1 Platter", "2 Platters", "1 Platter", "4 Platters (~$100 total)"],
    ["15 Guests", "2 Platters", "2 Platters", "2 Platters", "6 Platters (~$150 total)"],
    ["20 Guests", "2 Platters", "3 Platters", "2 Platters", "7 Platters (~$190 total)"],
    ["30 Guests", "3 Platters", "4 Platters", "3 Platters", "10 Platters (~$280 total)"],
    ["50 Guests", "5 Platters", "7 Platters", "5 Platters", "17 Platters (~$480 total)"]
  ];

  autoTable(doc, {
    startY: 45,
    head: [["Event Headcount", "Appetizer Platters", "Entrée Platters", "Salads & Sides", "Recommended Total & Budget"]],
    body: cateringRows,
    theme: 'grid',
    headStyles: {
      fillColor: [200, 16, 46],
      textColor: 255,
      fontStyle: 'bold',
      fontSize: 9
    },
    bodyStyles: {
      fontSize: 8.5,
      cellPadding: 3
    }
  });

  const platterMenu = [
    ["Boneless Wings Party Platter", "Serves 6 - 8", "Choice of Honey BBQ, Classic Buffalo, or Sweet Asian Chile."],
    ["Classic Appetizer Sampler Pan", "Serves 6 - 8", "Wings, Mozzarella Sticks, and Spinach Artichoke Dip."],
    ["Three-Cheese Chicken Penne Pan", "Serves 6 - 8", "Penne pasta, grilled chicken, parmesan cream sauce."],
    ["Double-Glazed Baby Back Ribs Pan", "Serves 6 - 8", "Slow-cooked tender pork ribs cut into individual portions."],
    ["House or Caesar Salad Party Bowl", "Serves 8 - 10", "Dressing served separately to maintain crisp freshness."]
  ];

  // @ts-ignore
  const nextY = doc.lastAutoTable.finalY + 10;
  doc.setTextColor(26, 36, 51);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text("CORE CATERING PLATTER SELECTIONS", 15, nextY);

  autoTable(doc, {
    startY: nextY + 3,
    head: [["Platter Name", "Yield", "Description & Serving Notes"]],
    body: platterMenu,
    theme: 'grid',
    headStyles: {
      fillColor: [26, 36, 51],
      textColor: 255,
      fontStyle: 'bold',
      fontSize: 9
    },
    bodyStyles: {
      fontSize: 8.5,
      cellPadding: 2.5
    }
  });

  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`Applebee's Catering Blueprint • Page ${i} of ${pageCount} • applebees-menus.us/catering`, pageWidth / 2, pageHeight - 8, { align: 'center' });
  }

  const pdfData = doc.output('arraybuffer');
  fs.writeFileSync('public/pdfs/applebees-catering-party-platters-menu.pdf', Buffer.from(pdfData));
  console.log("Created public/pdfs/applebees-catering-party-platters-menu.pdf");
}

// ----------------------------------------------------
// 4. Applebee's Drinks & Cocktails PDF
// ----------------------------------------------------
function generateDrinksPDF() {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;

  doc.setFillColor(26, 36, 51);
  doc.rect(0, 0, pageWidth, 35, 'F');
  doc.setFillColor(200, 16, 46);
  doc.rect(0, 35, pageWidth, 2.5, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text("APPLEBEE'S DRINKS & COCKTAILS", 15, 18);

  doc.setTextColor(220, 225, 230);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text("Signature Cocktails, Mucho Drinks & Non-Alcoholic Beverages (2026)", 15, 28);

  const drinkRows = [
    ["SIGNATURE COCKTAILS & MUCHOS", "", "", ""],
    ["The Legendary Dollarita®", "220 Cal", "$1.00 - $3.00", "Tequila, triple sec, signature margarita mix"],
    ["Mucho Blue Hawaiian", "340 Cal", "$8.99", "Tito's vodka, Malibu coconut rum, Blue Curaçao, pineapple"],
    ["Shark Bowl Mucho Cocktail", "410 Cal", "$9.49", "Rum punch cocktail served with gummy shark candy"],
    ["Top Shelf Long Island Iced Tea", "290 Cal", "$8.99", "Vodka, rum, gin, tequila, triple sec, cola splash"],
    ["Strawberry Lemonade Swirl Margarita", "320 Cal", "$8.49", "Tequila, strawberry purée, tart lemonade swirl"],
    
    ["DIRTY FOUNTAIN SODAS (NON-ALCOHOLIC)", "", "", ""],
    ["Passion Blue Dew", "190 Cal", "$3.99", "Mountain Dew infused with blue raspberry & passionfruit"],
    ["Cherry Charmed Pepsi", "210 Cal", "$3.99", "Pepsi with sweet cherry syrup and vanilla creamer"],
    ["Mango Dream Dew", "200 Cal", "$3.99", "Mountain Dew infused with tropical mango and coconut cream"],
    ["Flavored Strawberry Lemonade", "160 Cal", "$3.79", "Classic lemonade infused with real strawberry purée"]
  ];

  autoTable(doc, {
    startY: 45,
    head: [["Beverage Name", "Calories", "Price", "Ingredients & Flavor Profile"]],
    body: drinkRows.map(row => {
      if (row[1] === "" && row[2] === "") {
        return [{ content: row[0], colSpan: 4, styles: { fillColor: [26, 36, 51], textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 10 } }];
      }
      return row;
    }),
    theme: 'grid',
    headStyles: {
      fillColor: [200, 16, 46],
      textColor: 255,
      fontStyle: 'bold',
      fontSize: 9
    },
    bodyStyles: {
      fontSize: 8.5,
      cellPadding: 2.5
    },
    columnStyles: {
      0: { cellWidth: 65, fontStyle: 'bold' },
      1: { cellWidth: 25, halign: 'center' },
      2: { cellWidth: 25, halign: 'center', fontStyle: 'bold', textColor: [200, 16, 46] },
      3: { cellWidth: 'auto' }
    }
  });

  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`Applebee's Drinks & Beverage Guide • Page ${i} of ${pageCount} • Must be 21+ for alcohol • applebees-menus.us`, pageWidth / 2, pageHeight - 8, { align: 'center' });
  }

  const pdfData = doc.output('arraybuffer');
  fs.writeFileSync('public/pdfs/applebees-drinks-cocktails-happy-hour-menu.pdf', Buffer.from(pdfData));
  console.log("Created public/pdfs/applebees-drinks-cocktails-happy-hour-menu.pdf");
}

generateFullMenuPDF();
generateNutritionPDF();
generateCateringPDF();
generateDrinksPDF();
