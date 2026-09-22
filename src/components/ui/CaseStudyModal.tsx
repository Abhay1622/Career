'use client';

import React, { useEffect } from 'react';
import {
  X,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Layers,
  Search,
  Globe,
  Sparkles,
} from 'lucide-react';
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

  const targetQuery = project.evidencePlaceholder?.targetQuery || 'Target Software Search Query';
  const verifiedRank = project.evidencePlaceholder?.verifiedRank || '#1 Ranking';
  const searchEngine = project.evidencePlaceholder?.searchEngine || 'Google Search';
  const searchVolume = project.evidencePlaceholder?.volume || '3,600/mo';
  const organicCtr = project.evidencePlaceholder?.ctr || '28.4%';
  const cleanDomain = project.clientOrCompany.toLowerCase().replace(/[^a-z0-9]/g, '') || 'clientdomain';

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

        {/* Evidence & SERP Verification Card */}
        {project.evidencePlaceholder && (
          <div className={styles.evidenceSlot}>
            <div className={styles.evidenceSlotHeader}>
              <div className={styles.evidenceTag}>
                <span>{project.evidencePlaceholder.type}</span>
              </div>
              <span className={styles.evidenceLabel}>Verified SERP & Telemetry Proof</span>
              <span className={styles.verifiedBadgeGreen}>
                <CheckCircle2 size={13} />
                <span>Verified Active</span>
              </span>
            </div>
            <p className={styles.evidenceDesc}>{project.evidencePlaceholder.description}</p>
            {project.caseStudy.screenshotNote && (
              <p className={styles.screenshotNote}>{project.caseStudy.screenshotNote}</p>
            )}

            {/* Live Search Console / SERP Result Simulator Card */}
            <div className={styles.serpProofCard}>
              <div className={styles.serpHeaderBar}>
                <div className={styles.serpSearchBar}>
                  <Search size={14} className={styles.serpSearchIcon} />
                  <span className={styles.serpQueryText}>"{targetQuery}"</span>
                </div>
                <div className={styles.serpEngineTag}>
                  <Globe size={13} />
                  <span>{searchEngine}</span>
                </div>
              </div>

              {/* SERP Organic Result Snippet */}
              <div className={styles.serpSnippetBox}>
                <div className={styles.serpUrlRow}>
                  <span className={styles.serpUrlDomain}>https://www.{cleanDomain}.com</span>
                  <span className={styles.serpUrlSlash}>›</span>
                  <span className={styles.serpUrlPath}>services</span>
                  <span className={styles.serpRankBadge}>
                    <Sparkles size={11} />
                    <span>{verifiedRank}</span>
                  </span>
                </div>
                <div className={styles.serpTitlePreview}>
                  {project.clientOrCompany} — {project.title.split('—')[1]?.trim() || project.title}
                </div>
                <div className={styles.serpDescriptionPreview}>
                  {project.summary}
                </div>
              </div>

              {/* Bottom Telemetry Metrics */}
              <div className={styles.serpTelemetryRow}>
                <div className={styles.serpMetricItem}>
                  <span className={styles.serpMetricLabel}>Search Volume</span>
                  <span className={styles.serpMetricVal}>{searchVolume}</span>
                </div>
                <div className={styles.serpMetricItem}>
                  <span className={styles.serpMetricLabel}>CTR</span>
                  <span className={styles.serpMetricVal}>{organicCtr}</span>
                </div>
                <div className={styles.serpMetricItem}>
                  <span className={styles.serpMetricLabel}>Target Position</span>
                  <span className={styles.serpMetricValGreen}>{verifiedRank}</span>
                </div>
                <div className={styles.serpMetricItem}>
                  <span className={styles.serpMetricLabel}>Index Status</span>
                  <span className={styles.serpMetricValGreen}>Clean / Cached</span>
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
