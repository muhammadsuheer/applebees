// Central publisher identity. Change values here and they update the header,
// footer, schema, bylines and legal pages everywhere.
//
// This site is an independent publisher. It must never present itself using the
// Applebee's wordmark as its own identity. The brand name appears in page titles
// and body copy (nominative use, which is fine); it is not the site's name.

export const SITE_NAME = 'Menu Almanac';
export const SITE_URL = 'https://applebees-menus.us';
export const SITE_EMAIL = 'contact@applebees-menus.us';

export const DISCLAIMER_SHORT =
  "Independent guide. Not affiliated with, endorsed by, or operated by Applebee's Neighborhood Grill + Bar or Dine Brands Global. Prices are a guide and vary by restaurant.";

// A real, named person responsible for the data. Leave `name` empty until you
// have one: bylines fall back to the publisher name. Do NOT fill this with an
// invented persona. A fake author is worse for trust than no author.
export const EDITOR = {
  name: '',
  role: '',
  image: '',
  bio: '',
};

export const BYLINE = EDITOR.name || `${SITE_NAME} Editors`;

export const PUBLISHER_BIO =
  "Menu Almanac is an independent site that maintains the price, calorie and allergen tables published here. Send corrections to contact@applebees-menus.us.";

// Ground truth for counts, so no page can contradict another.
export const MENU_FACTS = {
  categories: 20,
  items: 88,
  allergenItems: 30,
  statesListed: 6,
  locationsListed: 129,
};

// Bump this when the menu data is re-checked. Drives the visible
// "last checked" line on price pages.
export const PRICES_LAST_VERIFIED = '2026-09-08';
