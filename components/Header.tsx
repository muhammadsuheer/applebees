"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = (path: string) => {
    return pathname === path ? styles.active : '';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Lock body scroll when offcanvas is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="Home" onClick={closeMenu}>
        <span aria-hidden="true">🍎</span>
        <div>
          <strong>Applebee's</strong>
          <em>MENU</em>
        </div>
      </Link>
      
      {/* Mobile Toggle Button */}
      <button 
        className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconOpen : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
      </button>

      {/* Offcanvas Backdrop overlay */}
      {isMenuOpen && (
        <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true"></div>
      )}

      {/* Navigation */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        
        {/* Mobile Sidebar Header (Logo + Close button placeholder area) */}
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.sidebarLogo} aria-label="Home" onClick={closeMenu}>
            <span aria-hidden="true">🍎</span>
            <div>
              <strong>Applebee's</strong>
              <em>MENU</em>
            </div>
          </Link>
          <button 
            className={styles.closeBtn} 
            onClick={closeMenu}
            aria-label="Close menu"
          >
            &#x2715;
          </button>
        </div>

        <ul>
          <li><Link href="/" className={getLinkClass('/')} onClick={closeMenu}>HOME</Link></li>
          <li><Link href="/menu" className={getLinkClass('/menu')} onClick={closeMenu}>MENU (FULL)</Link></li>
          <li><Link href="/nutrition" className={getLinkClass('/nutrition')} onClick={closeMenu}>NUTRITION</Link></li>
          <li><Link href="/locations" className={getLinkClass('/locations')} onClick={closeMenu}>LOCATIONS</Link></li>
          <li><Link href="/specials-and-deals" className={getLinkClass('/specials-and-deals')} onClick={closeMenu}>SPECIALS, DEALS</Link></li>
          <li><Link href="/happy-hour" className={getLinkClass('/happy-hour')} onClick={closeMenu}>HAPPY HOUR</Link></li>
          <li><Link href="/delivery" className={getLinkClass('/delivery')} onClick={closeMenu}>DELIVERY</Link></li>
          <li><Link href="/takeout" className={getLinkClass('/takeout')} onClick={closeMenu}>TAKEOUT</Link></li>
          <li><Link href="/operating-hours" className={getLinkClass('/operating-hours')} onClick={closeMenu}>OPERATING HOURS</Link></li>
          <li><Link href="/catering" className={getLinkClass('/catering')} onClick={closeMenu}>CATERING</Link></li>
          <li className={styles.mobileOnly}><Link href="/careers" className={getLinkClass('/careers')} onClick={closeMenu}>CAREERS</Link></li>
          <li><Link href="/gift-card-deals" className={getLinkClass('/gift-card-deals')} onClick={closeMenu}>GIFT CARD</Link></li>
          <li><Link href="/blog" className={getLinkClass('/blog')} onClick={closeMenu}>BLOG</Link></li>
        </ul>
      </nav>
    </header>
  );
}
