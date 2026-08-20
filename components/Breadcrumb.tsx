import Link from 'next/link';
import styles from './Breadcrumb.module.css';

interface BreadcrumbProps {
  items: { label: string; href: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} aria-current={isLast ? 'page' : undefined}>
              <span className={styles.separator}>/</span>
              {isLast ? (
                <span>{item.label}</span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
