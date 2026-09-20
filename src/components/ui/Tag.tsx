import React from 'react';
import styles from './Tag.module.css';

interface TagProps {
  label: string;
  variant?: 'cyan' | 'emerald' | 'indigo' | 'amber' | 'neutral';
  size?: 'sm' | 'md';
}

export function Tag({ label, variant = 'cyan', size = 'sm' }: TagProps) {
  return (
    <span className={`${styles.tag} ${styles[variant]} ${size === 'md' ? styles.sizeMd : styles.sizeSm}`}>
      <span className={styles.dot} />
      {label}
    </span>
  );
}
