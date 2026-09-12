'use client';

import { useMemo, useState } from 'react';
import { nutritionData } from '@/data/nutrition';
import styles from './AllergenMatrix.module.css';

const ALLERGENS = ['Milk', 'Eggs', 'Wheat', 'Soy', 'Fish', 'Shellfish', 'Tree Nuts'] as const;

type Allergen = (typeof ALLERGENS)[number];

const flatItems = nutritionData.flatMap((category) =>
  category.items.map((item) => ({ ...item, category: category.title })),
);

export default function AllergenMatrix() {
  const [avoid, setAvoid] = useState<Allergen[]>([]);
  const [query, setQuery] = useState('');

  const toggle = (a: Allergen) =>
    setAvoid((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return flatItems.filter((item) => {
      const present = item.allergens ?? [];
      if (avoid.some((a) => present.includes(a))) return false;
      if (q && !item.name.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [avoid, query]);

  return (
    <div className={styles.wrap}>
      <div className={styles.controls}>
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Hide items containing</span>
          <div className={styles.chips}>
            {ALLERGENS.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => toggle(a)}
                aria-pressed={avoid.includes(a)}
                className={`${styles.chip} ${avoid.includes(a) ? styles.chipOn : ''}`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        <label className={styles.search}>
          <span className={styles.filterLabel}>Find an item</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Bourbon Street, House Salad, wings..."
          />
        </label>
      </div>

      <p className={styles.count}>
        Showing <strong>{rows.length}</strong> of {flatItems.length} items
        {avoid.length > 0 && <> with no {avoid.join(', ')}</>}.
      </p>

      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <caption className={styles.caption}>
            Applebee&apos;s allergen matrix by item. A dot means the allergen is present in
            the standard build.
          </caption>
          <thead>
            <tr>
              <th scope="col" className={styles.itemCol}>
                Item
              </th>
              {ALLERGENS.map((a) => (
                <th key={a} scope="col" className={styles.allergenCol}>
                  {a}
                </th>
              ))}
              <th scope="col" className={styles.numCol}>
                Cals
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr key={item.id}>
                <th scope="row" className={styles.itemCol}>
                  {item.name}
                  <span className={styles.cat}>{item.category}</span>
                </th>
                {ALLERGENS.map((a) => {
                  const has = (item.allergens ?? []).includes(a);
                  return (
                    <td key={a} className={styles.allergenCol}>
                      <span className={has ? styles.yes : styles.no} aria-hidden="true">
                        {has ? '●' : '·'}
                      </span>
                      <span className={styles.srOnly}>
                        {has ? `Contains ${a}` : `No ${a}`}
                      </span>
                    </td>
                  );
                })}
                <td className={styles.numCol}>{item.calories.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {rows.length === 0 && (
        <p className={styles.empty}>
          Nothing on the sampled menu clears all of those at once. Drop one filter, or ask
          the kitchen about a plain grilled sirloin with steamed broccoli, which is the
          usual fallback.
        </p>
      )}
    </div>
  );
}
