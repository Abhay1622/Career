'use client';

import React from 'react';
import {
  Award,
  ShieldCheck,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { impactStatsData } from '@/data/impact';
import { ImpactStat } from '@/types';
import { useInView } from '@/hooks/useInView';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import styles from './Impact.module.css';

function StatCard({ stat, inView, index }: { stat: ImpactStat; inView: boolean; index: number }) {
  const animatedNumber = useAnimatedCounter(stat.numericTarget || 0, 1800, inView);

  let displayMetric = stat.metric;
  if (stat.numericTarget !== undefined && inView) {
    displayMetric = `${stat.prefix || ''}${animatedNumber}${stat.suffix || ''}`;
  }

  return (
    <div
      className={`clay-card ${styles.statCard} ${inView ? `reveal-init reveal-visible stagger-${index + 1}` : 'reveal-init'}`}
    >
      <div className={styles.statGlow} />

      <div className={styles.statHeader}>
        <span className={styles.highlightTag}>{stat.highlightTag}</span>
        <ShieldCheck size={16} className={styles.verifiedIcon} />
      </div>

      <div className={styles.metricWrapper}>
        <span className={styles.metricNumber}>{displayMetric}</span>
      </div>

      <h3 className={styles.statLabel}>{stat.label}</h3>
    </div>
  );
}

export function Impact() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section id="impact" className="section-wrapper" ref={ref}>
      <div className="container">
        <SectionHeading
          badgeText="Verified Outcomes"
          badgeIcon={<Award size={14} />}
          title="Documented Benchmarks"
          highlightWord="Benchmarks"
        />

        {/* Minimal Stats Grid */}
        <div className={styles.statsGrid}>
          {impactStatsData.map((stat, idx) => (
            <StatCard key={stat.id} stat={stat} inView={isInView} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
