'use client';

import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, ArrowUpRight, Search } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Case Studies', href: '#projects' },
  { label: 'SEO Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['hero', 'about', 'skills', 'projects', 'impact', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className={styles.brand}
          aria-label="SEO Analyst Portfolio Home"
        >
          <div className={styles.brandIconWrapper}>
            <Search size={17} className={styles.brandSearchIcon} />
            <span className={styles.brandPulseDot} />
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>Fiza Shaikh</span>
            <span className={styles.brandTag}>SEO Analyst</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                  >
                    {item.label}
                    {isActive && <span className={styles.activePill} />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions (Theme toggle + CTA) */}
        <div className={styles.navActions}>
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={styles.contactBtn}
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            className={styles.hamburgerBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight size={16} />
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className={styles.mobileDrawerCta}>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className={styles.mobileCtaBtn}
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
