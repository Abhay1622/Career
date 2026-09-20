'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggleButton}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className={`${styles.iconContainer} ${isDark ? styles.isDark : styles.isLight}`}>
        <Sun className={styles.sunIcon} size={18} />
        <Moon className={styles.moonIcon} size={18} />
      </div>
      <span className={styles.toggleTrack}>
        <span className={`${styles.toggleThumb} ${isDark ? styles.thumbDark : styles.thumbLight}`} />
      </span>
    </button>
  );
}
