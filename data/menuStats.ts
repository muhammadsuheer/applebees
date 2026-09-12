import { menuData } from './menu';

// Price and calorie ranges computed straight from menu.ts, so summary tables can
// never drift away from the item data again.

export type Range = { min: number; max: number } | null;

function range(values: number[]): Range {
  if (values.length === 0) return null;
  return { min: Math.min(...values), max: Math.max(...values) };
}

export function pricesFrom(raw: string): number[] {
  // Expired or promo-only prices ("Limited Promo ($1.00)") aren't a menu price.
  if (/promo/i.test(raw)) return [];
  const found = Array.from(raw.matchAll(/\$(\d+(?:\.\d{2})?)/g)).map((m) => Number(m[1]));
  // "$14.99 / 2 for $25" is a $14.99 item that also appears in the bundle.
  if (/2 for \$25/i.test(raw) && found.length > 1) return found.filter((n) => n !== 25);
  return found;
}

export function caloriesFrom(raw: string): number[] {
  if (/effectively 0/i.test(raw)) return [0];
  return Array.from(raw.replace(/,/g, '').matchAll(/(\d+)/g)).map((m) => Number(m[1]));
}

export function categoryStats(slug: string) {
  const category = menuData.find((c) => c.slug === slug);
  if (!category) return null;
  return {
    title: category.title,
    items: category.items.length,
    price: range(category.items.flatMap((i) => pricesFrom(i.price))),
    calories: range(category.items.flatMap((i) => caloriesFrom(i.calories))),
  };
}

export function formatPriceRange(r: Range): string {
  if (!r) return 'Varies';
  if (r.min === r.max) return `$${r.min.toFixed(2)}`;
  return `$${r.min.toFixed(2)} – $${r.max.toFixed(2)}`;
}

export function formatCalorieRange(r: Range): string {
  if (!r) return 'Varies';
  if (r.min === r.max) return r.min.toLocaleString('en-US');
  return `${r.min.toLocaleString('en-US')} – ${r.max.toLocaleString('en-US')}`;
}
