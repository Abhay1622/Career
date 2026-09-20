import React from 'react';
import styles from './AuroraBackground.module.css';

export function AuroraBackground() {
  return (
    <div className={styles.auroraContainer} aria-hidden="true">
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />
      <div className={styles.gridOverlay} />
    </div>
  );
}
