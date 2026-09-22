'use client';

import React from 'react';
import {
  TrendingUp,
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  BarChart2,
  FileCheck,
  User,
} from 'lucide-react';
import styles from './Hero.module.css';

export function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        {/* Left / Top: Hero Pitch */}
        <div className={styles.heroContent}>
          {/* Designation Pill */}
          <div className={`clay-badge ${styles.designationBadge}`}>
            <span className={styles.statusPulse} />
            <Search size={14} className={styles.searchIcon} />
            <span>SEO Analyst &bull; Organic Growth Strategist</span>
          </div>

          {/* Main Headline */}
          <h1 className={styles.headline}>
            Turning Search Visibility Into{' '}
            <span className="gradient-text-hero">Sustainable Organic Growth</span>
          </h1>

          {/* Introduction */}
          <p className={styles.subheadline}>
            Technical search architecture, algorithmic penalty recovery, and sustainable organic growth.
          </p>

          {/* CTAs */}
          <div className={styles.ctaGroup}>
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className={styles.primaryCta}
            >
              <span>View Case Studies</span>
              <ArrowRight size={17} />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className={styles.secondaryCta}
            >
              <span>Let&apos;s Connect</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className={styles.proofStrip}>
            <div className={styles.proofItem}>
              <span className={styles.proofNum}>10x</span>
              <span className={styles.proofLabel}>Traffic Scale</span>
            </div>
            <div className={styles.proofDivider} />
            <div className={styles.proofItem}>
              <span className={styles.proofNum}>#1 Ranking</span>
              <span className={styles.proofLabel}>Google Search</span>
            </div>
            <div className={styles.proofDivider} />
            <div className={styles.proofItem}>
              <span className={styles.proofNum}>100%</span>
              <span className={styles.proofLabel}>White-Hat</span>
            </div>
          </div>
        </div>

        {/* Right / Visual: Interactive Floating SEO Dashboard Bento */}
        <div className={styles.heroVisualWrap}>
          <div className={styles.heroVisualGlow} />

          {/* Main Dashboard Card */}
          <div className={styles.mainVisualCard}>
            {/* Header / Identity Slot */}
            <div className={styles.visualHeader}>
              <div className={styles.profileAvatarPlaceholder}>
                <span className={styles.avatarInitials}>FS</span>
                <span className={styles.onlineBadge} />
              </div>
              <div className={styles.avatarMeta}>
                <div className={styles.avatarName}>Fiza Shaikh</div>
                <div className={styles.avatarRole}>SEO Analyst & Search Strategist</div>
              </div>
              <span className={`clay-badge ${styles.verifiedBadge}`}>
                <ShieldCheck size={13} />
                <span>Verified Specialist</span>
              </span>
            </div>

            {/* Live Search Console Visual Simulation */}
            <div className={styles.gscCardInner}>
              <div className={styles.gscTopRow}>
                <div className={styles.gscMetricBox}>
                  <span className={styles.gscLabel}>Organic Impressions</span>
                  <span className={styles.gscValue}>+348%</span>
                </div>
                <div className={styles.gscMetricBox}>
                  <span className={styles.gscLabel}>Average Position</span>
                  <span className={styles.gscValueGreen}>1.4 SERP</span>
                </div>
                <div className={styles.gscMetricBox}>
                  <span className={styles.gscLabel}>Click-Through Rate</span>
                  <span className={styles.gscValue}>8.4%</span>
                </div>
              </div>

              {/* SVG Organic Trend Graph */}
              <div className={styles.svgGraphContainer}>
                <svg
                  viewBox="0 0 400 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.svgGraph}
                >
                  <defs>
                    <linearGradient id="heroGradientFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="heroLineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                  </defs>

                  {/* Area fill */}
                  <path
                    d="M0,105 Q60,95 100,75 T200,60 T290,30 T400,10 L400,120 L0,120 Z"
                    fill="url(#heroGradientFill)"
                  />

                  {/* Line */}
                  <path
                    d="M0,105 Q60,95 100,75 T200,60 T290,30 T400,10"
                    stroke="url(#heroLineGrad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Highlight Nodes */}
                  <circle cx="100" cy="75" r="4.5" fill="#38bdf8" />
                  <circle cx="200" cy="60" r="4.5" fill="#818cf8" />
                  <circle cx="290" cy="30" r="4.5" fill="#34d399" />
                  <circle cx="395" cy="12" r="5.5" fill="#34d399" />
                </svg>

                <div className={styles.graphAnnotation}>
                  <TrendingUp size={14} className={styles.trendIcon} />
                  <span>Sustained Compound Organic Lift</span>
                </div>
              </div>
            </div>

            {/* Bottom Status Tickers */}
            <div className={styles.auditTickers}>
              <div className={styles.tickerItem}>
                <Zap size={14} className={styles.tickerZap} />
                <span>Core Web Vitals: 98/100 Mobile</span>
              </div>
              <div className={styles.tickerItem}>
                <FileCheck size={14} className={styles.tickerCheck} />
                <span>Clean Indexation: Zero 4xx Errors</span>
              </div>
            </div>
          </div>

          {/* Floating Widget 1: #1 Ranking Badge (Claymorphism) */}
          <div className={`${styles.floatingWidget} ${styles.widgetTopRight}`}>
            <div className={styles.widgetIconWrap}>
              <Award size={18} className={styles.widgetGold} />
            </div>
            <div>
              <div className={styles.widgetValue}>#1 Ranking</div>
              <div className={styles.widgetSub}>Targeted Software SERP</div>
            </div>
          </div>

          {/* Floating Widget 2: 10x Recovery Multiplier */}
          <div className={`${styles.floatingWidget} ${styles.widgetBottomLeft}`}>
            <div className={styles.widgetIconWrapGreen}>
              <TrendingUp size={18} className={styles.widgetGreen} />
            </div>
            <div>
              <div className={styles.widgetValue}>10x Traffic</div>
              <div className={styles.widgetSub}>Black-Hat Penalty Recovery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
