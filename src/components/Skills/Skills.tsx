'use client';

import React, { useState } from 'react';
import {
  Terminal,
  Zap,
  FileText,
  Search,
  Sparkles,
  MapPin,
  Link2,
  ExternalLink,
  ShieldAlert,
  Send,
  TrendingUp,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillsData } from '@/data/skills';
import { SkillItem } from '@/types';
import { useInView } from '@/hooks/useInView';
import styles from './Skills.module.css';

const ICON_MAP: Record<string, React.ReactNode> = {
  Terminal: <Terminal size={20} />,
  Zap: <Zap size={20} />,
  FileText: <FileText size={20} />,
  Search: <Search size={20} />,
  Sparkles: <Sparkles size={20} />,
  MapPin: <MapPin size={20} />,
  Link2: <Link2 size={20} />,
  ExternalLink: <ExternalLink size={20} />,
  ShieldAlert: <ShieldAlert size={20} />,
  Send: <Send size={20} />,
  TrendingUp: <TrendingUp size={20} />,
};

const CATEGORIES = ['All', 'Technical SEO', 'On-Page SEO', 'Off-Page SEO', 'Strategy & Growth'];

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="section-wrapper" ref={ref}>
      <div className="container">
        <SectionHeading
          badgeText="Expertise"
          badgeIcon={<Terminal size={14} />}
          title="SEO Competencies"
          highlightWord="Competencies"
        />

        {/* Category Filters */}
        <div className={styles.filterContainer}>
          <div className={styles.filterTrack}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${selectedCategory === cat ? styles.filterBtnActive : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Bento Grid of Skills */}
        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill: SkillItem, idx: number) => {
            const icon = ICON_MAP[skill.icon] || <Sparkles size={20} />;
            return (
              <div
                key={skill.id}
                className={`clay-card ${styles.skillCard} ${isInView ? `reveal-init reveal-visible stagger-${(idx % 6) + 1}` : 'reveal-init'}`}
              >
                <div className={styles.skillHeader}>
                  <div className={styles.skillIconWrap}>
                    {icon}
                  </div>
                  <span className={styles.skillCategoryTag}>{skill.category}</span>
                </div>

                <h3 className={styles.skillTitle}>{skill.name}</h3>

                <div className={styles.pillRow}>
                  {skill.keyDeliverables.slice(0, 3).map((item, itemIdx) => (
                    <span key={itemIdx} className={styles.pillTag}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
