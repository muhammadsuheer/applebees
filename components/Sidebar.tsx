import Link from 'next/link';
import { menuData } from '@/data/menu';
import { blogs } from '@/data/blogs';
import styles from './Sidebar.module.css';

interface SidebarProps {
  currentSlug?: string;
  pageType?: 'menu' | 'blog';
}

export default function Sidebar({ currentSlug, pageType = 'menu' }: SidebarProps) {
  // Filter out the current page so we don't recommend what they are already reading
  const availableCategories = menuData.filter(c => c.slug !== currentSlug);
  const availableBlogs = blogs.filter(b => b.slug !== currentSlug);

  // Grab items for recommendations
  const recommendedCategories = availableCategories.slice(0, 5);
  const recentBlogs = availableBlogs.slice(0, 5);
  const moreCategories = availableCategories.slice(5, 10);

  return (
    <aside className={styles.sidebar}>
      
      {/* Search Widget */}
      <div className={styles.widget}>
        <form className={styles.searchForm}>
          <input 
            type="text" 
            placeholder="Search..." 
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>Search</button>
        </form>
      </div>

      {/* Recent Blogs Widget (Shown primarily on blogs, or as a cross-link) */}
      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>RECENT BLOGS</h3>
        <ul className={styles.widgetList}>
          {recentBlogs.map(blog => (
            <li key={`blog-${blog.slug}`}>
              <Link href={`/blog/${blog.slug}`}>
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recommended Menu Guides */}
      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>TOP MENU GUIDES</h3>
        <ul className={styles.widgetList}>
          {recommendedCategories.map(category => (
            <li key={`rec-${category.id || category.slug}`}>
              <Link href={`/menu/${category.slug}`}>
                Applebee's {category.title} Prices & Menu
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories Widget */}
      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>EXPLORE MORE</h3>
        <ul className={styles.widgetList}>
          {moreCategories.map(category => (
            <li key={`cat-${category.id || category.slug}`}>
              <Link href={`/menu/${category.slug}`}>
                {category.title}
              </Link>
            </li>
          ))}
          <li><Link href="/locations">Locations</Link></li>
          <li><Link href="/menu">Nutrition & Diet</Link></li>
        </ul>
      </div>

      {/* Pages Widget */}
      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>PAGES</h3>
        <ul className={styles.widgetList}>
          <li><Link href="#">About Us</Link></li>
          <li><Link href="#">Contact Us</Link></li>
          <li><Link href="#">Privacy Policy</Link></li>
          <li><Link href="#">Terms and Conditions</Link></li>
        </ul>
      </div>

    </aside>
  );
}
