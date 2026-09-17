// One place for the "last checked" date so every page shows the same thing.
// The time part matters: `new Date('2026-09-08')` is parsed as UTC midnight, which
// renders as the previous day in any timezone behind UTC. Parsing it as local time
// keeps the printed date the same everywhere.
const asLocalDate = (iso: string) => new Date(`${iso}T00:00:00`);

export const formatLongDate = (iso: string) =>
  asLocalDate(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export const formatMonthYear = (iso: string) =>
  asLocalDate(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
