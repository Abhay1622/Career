'use client';

import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, TrendingUp, Layers } from 'lucide-react';
import { Project } from '@/types';
import { Tag } from './Tag';
import styles from './CaseStudyModal.module.css';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className={styles.header}>
          <div className={styles.headerMeta}>
            <div className={`clay-badge ${styles.categoryBadge}`}>
              <Layers size={14} />
              <span>{project.category}</span>
            </div>
            {project.companyType && (
              <span className={styles.companyType}>{project.companyType}</span>
            )}
          </div>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close case study modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Title & Summary */}
        <div className={styles.titleSection}>
          <h2 className={styles.projectTitle}>{project.title}</h2>
          <p className={styles.projectSummary}>{project.summary}</p>
        </div>

        {/* Services Pills */}
        <div className={styles.servicesWrap}>
          {project.services.map((service, idx) => (
            <Tag key={idx} label={service} variant={idx % 2 === 0 ? 'cyan' : 'emerald'} size="md" />
          ))}
        </div>

        {/* Metric Highlight (if available) */}
        {project.highlightMetric && (
          <div className={styles.highlightBanner}>
            <div className={styles.metricVal}>{project.highlightMetric.value}</div>
            <div>
              <div className={styles.metricLabel}>{project.highlightMetric.label}</div>
              {project.highlightMetric.sublabel && (
                <div className={styles.metricSub}>{project.highlightMetric.sublabel}</div>
              )}
            </div>
          </div>
        )}

        {/* Before / After Comparison (Miracuves / recovery projects) */}
        {project.beforeAfter && (
          <div className={styles.beforeAfterContainer}>
            <div className={styles.beforeCol}>
              <div className={styles.colHeaderBad}>
                <AlertTriangle size={16} />
                <span>{project.beforeAfter.beforeTitle}</span>
              </div>
              <ul className={styles.comparisonList}>
                {project.beforeAfter.beforeItems.map((item, idx) => (
                  <li key={idx}>
                    <span className={styles.bulletBad}>×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.afterCol}>
              <div className={styles.colHeaderGood}>
                <CheckCircle2 size={16} />
                <span>{project.beforeAfter.afterTitle}</span>
              </div>
              <ul className={styles.comparisonList}>
                {project.beforeAfter.afterItems.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={15} className={styles.bulletGood} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Timeline Journey (if available) */}
        {project.timeline && project.timeline.length > 0 && (
          <div className={styles.timelineSection}>
            <h3 className={styles.sectionSubtitle}>Optimization Roadmap & Timeline</h3>
            <div className={styles.timelineList}>
              {project.timeline.map((step, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}>
                    <span className={styles.stepNum}>{idx + 1}</span>
                    {idx < project.timeline!.length - 1 && <span className={styles.timelineLine} />}
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.stepHeader}>
                      <span className={styles.stepStage}>{step.stage}</span>
                      <h4 className={styles.stepTitle}>{step.title}</h4>
                    </div>
                    <p className={styles.stepDesc}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deep Dive: Strategy & Execution */}
        <div className={styles.deepDiveGrid}>
          <div className={styles.diveCard}>
            <h3 className={styles.diveTitle}>The Strategic Approach</h3>
            <ul className={styles.diveList}>
              {project.caseStudy.strategy.map((item, idx) => (
                <li key={idx}>
                  <ArrowRight size={14} className={styles.diveIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.diveCard}>
            <h3 className={styles.diveTitle}>Execution & Engineering</h3>
            <ul className={styles.diveList}>
              {project.caseStudy.execution.map((item, idx) => (
                <li key={idx}>
                  <ShieldCheck size={14} className={styles.diveIconEmerald} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Verified Outcomes */}
        <div className={styles.outcomesSection}>
          <h3 className={styles.diveTitle}>
            <TrendingUp size={18} className={styles.diveIconEmerald} />
            Documented Results & Verified Milestones
          </h3>
          <ul className={styles.outcomesList}>
            {project.caseStudy.verifiedOutcomes.map((outcome, idx) => (
              <li key={idx}>
                <CheckCircle2 size={16} className={styles.diveIconEmerald} />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Evidence & Analytics Screenshot Placeholder */}
        {project.evidencePlaceholder && (
          <div className={styles.evidenceSlot}>
            <div className={styles.evidenceSlotHeader}>
              <div className={styles.evidenceTag}>
                <span>{project.evidencePlaceholder.type}</span>
              </div>
              <span className={styles.evidenceLabel}>Verified Proof & Reporting Slot</span>
            </div>
            <p className={styles.evidenceDesc}>{project.evidencePlaceholder.description}</p>
            {project.caseStudy.screenshotNote && (
              <p className={styles.screenshotNote}>{project.caseStudy.screenshotNote}</p>
            )}
            <div className={styles.evidenceBox}>
              <div className={styles.placeholderMockSERP}>
                <div className={styles.mockBar} />
                <div className={styles.mockLineLg} />
                <div className={styles.mockLineSm} />
                <div className={styles.mockBadgesRow}>
                  <span className={styles.mockBadge}>Status: Verified</span>
                  <span className={styles.mockBadge}>Top Positions Locked</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className={styles.modalFooter}>
          <button className={styles.closeFooterBtn} onClick={onClose}>
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
