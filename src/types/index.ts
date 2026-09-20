export type ThemeMode = 'dark' | 'light';

export interface HighlightMetric {
  value: string;
  label: string;
  sublabel?: string;
  trend?: 'up' | 'neutral';
}

export interface ProjectTimelineItem {
  stage: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface BeforeAfterComparison {
  beforeTitle: string;
  beforeItems: string[];
  afterTitle: string;
  afterItems: string[];
}

export interface CaseStudyDetails {
  overview: string;
  challenge: string;
  strategy: string[];
  execution: string[];
  verifiedOutcomes: string[];
  screenshotNote?: string;
}

export interface Project {
  id: string;
  title: string;
  clientOrCompany: string;
  companyType?: string;
  isPlaceholder?: boolean;
  featured?: boolean;
  category: string;
  summary: string;
  services: string[];
  achievements: string[];
  highlightMetric?: HighlightMetric;
  timeline?: ProjectTimelineItem[];
  beforeAfter?: BeforeAfterComparison;
  caseStudy: CaseStudyDetails;
  evidencePlaceholder?: {
    type: 'Search Console' | 'Analytics' | 'Keyword Tracker' | 'Audit Report';
    description: string;
  };
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Technical SEO' | 'On-Page SEO' | 'Off-Page SEO' | 'Strategy & Growth';
  icon: string;
  description: string;
  keyDeliverables: string[];
}

export interface ImpactStat {
  id: string;
  metric: string;
  numericTarget?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  context: string;
  verificationSource: string;
  highlightTag: string;
}
