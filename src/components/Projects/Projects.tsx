'use client';

import React, { useState } from 'react';
import {
  Layers,
  ShieldCheck,
  ChevronRight,
  Info,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tag } from '@/components/ui/Tag';
import { CaseStudyModal } from '@/components/ui/CaseStudyModal';
import { projectsData } from '@/data/projects';
import { Project } from '@/types';
import { useInView } from '@/hooks/useInView';
import styles from './Projects.module.css';

const TABS = [
  { id: 'all', label: 'All Projects' },
  { id: 'featured', label: 'Highlights' },
  { id: 'software', label: 'Software' },
  { id: 'local-recovery', label: 'Local & Recovery' },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isInView } = useInView({ threshold: 0.08 });

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'featured') return project.featured;
    if (activeTab === 'software') {
      return (
        project.id === 'bm-coder' ||
        project.id === 'agami-technologies' ||
        project.id === 'data-storage-solutions'
      );
    }
    if (activeTab === 'local-recovery') {
      return (
        project.id === 'miracuves' ||
        project.id === 'chiku-cab-taxi-yatri' ||
        project.id === 'chest-clinic-vns'
      );
    }
    return true;
  });

  return (
    <section id="projects" className="section-wrapper" ref={ref}>
      <div className="container">
        <SectionHeading
          badgeText="Featured Work"
          badgeIcon={<Layers size={14} />}
          title="Case Studies & Results"
          highlightWord="Results"
        />

        {/* Filter Tabs */}
        <div className={styles.tabsTrack}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bento Grid of Projects */}
        <div className={styles.projectsBentoGrid}>
          {filteredProjects.map((project: Project, idx: number) => {
            const isHeroCard = project.id === 'miracuves' || project.id === 'bm-coder';

            return (
              <div
                key={project.id}
                className={`clay-card ${styles.projectCard} ${isHeroCard ? styles.cardHero : ''} ${project.isPlaceholder ? styles.cardPlaceholder : ''} ${isInView ? `reveal-init reveal-visible stagger-${(idx % 4) + 1}` : 'reveal-init'}`}
              >
                <div className={styles.cardGradientBorder} />

                {/* Top Meta */}
                <div className={styles.cardTopRow}>
                  <div className={styles.categoryWrap}>
                    <span className={styles.categoryBadge}>{project.category}</span>
                    {project.companyType && (
                      <span className={styles.companyBadge}>{project.companyType}</span>
                    )}
                  </div>

                  <span className={styles.verifiedTag}>
                    <ShieldCheck size={12} />
                    <span>Documented</span>
                  </span>
                </div>

                {/* Title & Short Summary */}
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectSummary}>{project.summary}</p>

                {/* Highlight Metric Pill */}
                {project.highlightMetric && (
                  <div className={styles.metricCallout}>
                    <span className={styles.metricCalloutVal}>
                      {project.highlightMetric.value}
                    </span>
                    <div className={styles.metricCalloutMeta}>
                      <span className={styles.metricCalloutLabel}>
                        {project.highlightMetric.label}
                      </span>
                    </div>
                  </div>
                )}

                {/* Services Tags */}
                <div className={styles.servicesRow}>
                  {project.services.slice(0, 3).map((service, sIdx) => (
                    <Tag
                      key={sIdx}
                      label={service}
                      variant={sIdx % 2 === 0 ? 'cyan' : 'emerald'}
                    />
                  ))}
                  {project.services.length > 3 && (
                    <span className={styles.moreServicesTag}>
                      +{project.services.length - 3}
                    </span>
                  )}
                </div>

                {/* Card Action Button */}
                <div className={styles.cardFooter}>
                  <button
                    className={styles.openCaseStudyBtn}
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>View Case Study</span>
                    <ChevronRight size={15} className={styles.btnArrow} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Case Study Deep Dive Modal */}
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
