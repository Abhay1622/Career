'use client';

import React from 'react';
import {
  Compass,
  Cpu,
  FileCode,
  Link2,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useInView } from '@/hooks/useInView';
import styles from './About.module.css';

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section-wrapper" ref={ref}>
      <div className="container">
        <SectionHeading
          badgeText="Core Philosophy"
          badgeIcon={<Sparkles size={14} />}
          title="Engineered for Sustainable Search Equity"
          highlightWord="Search Equity"
        />

        {/* Bento Grid Layout (4 classical pillars) */}
        <div className={styles.aboutBentoGrid}>
          {/* Card 1: Core Strategy */}
          <div className={`clay-card ${styles.bentoCard} ${styles.cardExpertise} ${isInView ? 'reveal-init reveal-visible stagger-1' : 'reveal-init'}`}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconWrapCyan}>
                <Compass size={22} className={styles.iconCyan} />
              </div>
              <span className={styles.cardPillarTag}>01 / Strategy</span>
            </div>
            <h3 className={styles.cardTitle}>Algorithmic Alignment & Organic Growth</h3>
            <p className={styles.cardText}>
              A data-first methodology turning search engine visibility into sustainable, compounding pipeline growth.
            </p>
            <div className={styles.pillBadges}>
              <span className={styles.specBadge}>Algorithm Compliance</span>
              <span className={styles.specBadge}>Traffic Compounding</span>
              <span className={styles.specBadge}>Penalty Protection</span>
            </div>
          </div>

          {/* Card 2: Technical */}
          <div className={`clay-card ${styles.bentoCard} ${styles.cardTech} ${isInView ? 'reveal-init reveal-visible stagger-2' : 'reveal-init'}`}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconWrapEmerald}>
                <Cpu size={22} className={styles.iconEmerald} />
              </div>
              <span className={styles.cardPillarTag}>02 / Technical</span>
            </div>
            <h3 className={styles.cardTitle}>Technical & Core Web Vitals</h3>
            <p className={styles.cardText}>
              Zero-friction crawlability, sub-second LCP, and structured data hierarchy.
            </p>
            <div className={styles.pillBadges}>
              <span className={styles.specBadge}>Core Web Vitals</span>
              <span className={styles.specBadge}>Crawl Efficiency</span>
              <span className={styles.specBadge}>Schema Markup</span>
            </div>
          </div>

          {/* Card 3: Keywords */}
          <div className={`clay-card ${styles.bentoCard} ${styles.cardContent} ${isInView ? 'reveal-init reveal-visible stagger-3' : 'reveal-init'}`}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconWrapIndigo}>
                <FileCode size={22} className={styles.iconIndigo} />
              </div>
              <span className={styles.cardPillarTag}>03 / Content</span>
            </div>
            <h3 className={styles.cardTitle}>Intent & Topical Authority</h3>
            <p className={styles.cardText}>
              High-intent keyword discovery and scalable location page architectures.
            </p>
            <div className={styles.pillBadges}>
              <span className={styles.specBadge}>Intent Mapping</span>
              <span className={styles.specBadge}>Topical Clusters</span>
              <span className={styles.specBadge}>Local Geo Pages</span>
            </div>
          </div>

          {/* Card 4: Off-Page */}
          <div className={`clay-card ${styles.bentoCard} ${styles.cardOffPage} ${isInView ? 'reveal-init reveal-visible stagger-4' : 'reveal-init'}`}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconWrapAmber}>
                <Link2 size={22} className={styles.iconAmber} />
              </div>
              <span className={styles.cardPillarTag}>04 / Authority</span>
            </div>
            <h3 className={styles.cardTitle}>Backlinks & Toxic Cleanup</h3>
            <p className={styles.cardText}>
              White-hat editorial link acquisition and forensic toxic link disavowal dossiers.
            </p>
            <div className={styles.pillBadges}>
              <span className={styles.specBadge}>Editorial PR</span>
              <span className={styles.specBadge}>Forensic Disavow</span>
              <span className={styles.specBadge}>Outreach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
