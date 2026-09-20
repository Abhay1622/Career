import React from 'react';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  badgeText?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlightWord?: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  badgeText,
  badgeIcon,
  title,
  highlightWord,
  description,
  align = 'center',
}: SectionHeadingProps) {
  let renderedTitle: React.ReactNode = title;

  if (highlightWord && title.includes(highlightWord)) {
    const parts = title.split(highlightWord);
    renderedTitle = (
      <>
        {parts[0]}
        <span className="gradient-text-hero">{highlightWord}</span>
        {parts[1]}
      </>
    );
  }

  return (
    <div className={`${styles.wrapper} ${align === 'left' ? styles.alignLeft : styles.alignCenter}`}>
      {badgeText && (
        <div className={`clay-badge ${styles.badge}`}>
          {badgeIcon && <span className={styles.badgeIcon}>{badgeIcon}</span>}
          <span>{badgeText}</span>
        </div>
      )}
      <h2 className={styles.title}>{renderedTitle}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
