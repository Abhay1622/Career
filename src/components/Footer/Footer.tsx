'use client';

import React from 'react';
import { Search, ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Top Row */}
        <div className={styles.topRow}>
          <div className={styles.brandCol}>
            <div className={styles.brand}>
              <div className={styles.brandIconWrapper}>
                <Search size={16} className={styles.brandSearchIcon} />
              </div>
              <div>
                <span className={styles.brandName}>SEO Analyst Portfolio</span>
                <span className={styles.brandTag}>Search Architecture & Organic Growth</span>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Delivering compounding search visibility, algorithmic penalty recoveries, and
              high-intent organic rankings through principled white-hat methodology.
            </p>
          </div>

          <div className={styles.linksCol}>
            <span className={styles.linksHeader}>Navigation</span>
            <ul className={styles.linksList}>
              <li>
                <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About Strategy</a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Core Skills</a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Case Studies</a>
              </li>
              <li>
                <a href="#impact" onClick={(e) => handleNavClick(e, '#impact')}>SEO Impact</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact & Inquiries</a>
              </li>
            </ul>
          </div>

          <div className={styles.disclaimerCol}>
            <span className={styles.linksHeader}>Professional Standards</span>
            <div className={styles.standardsCard}>
              <ShieldCheck size={16} className={styles.standardsIcon} />
              <span>Strict compliance with Google Search Essentials and Webmaster Guidelines. Zero synthetic PBNs or black-hat shortcuts.</span>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className={styles.bottomRow}>
          <div className={styles.copyrightText}>
            &copy; {new Date().getFullYear()} SEO Analyst. All rights reserved. Crafted with Next.js, TypeScript & Vanilla CSS.
          </div>

          <button
            onClick={scrollToTop}
            className={styles.backToTopBtn}
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
