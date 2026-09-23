import type { CtaLink, ProjectCategory, Screenshot } from "@/config/content";

export type PublicationState = "draft" | "verified" | "published";
export type EvidenceStatus = "verified" | "restricted";
export type OutcomeKind = "metric" | "qualitative";
export type EngagementModelId =
  | "product-rescue"
  | "agency-partner"
  | "full-build"
  | "maintenance";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProofItem {
  label: string;
  value: string;
  status: EvidenceStatus;
  source?: string;
}

export interface Outcome {
  kind: OutcomeKind;
  statement: string;
  source: string;
  metric?: {
    value: string;
    baseline: string;
    period: string;
  };
}

export interface EngagementModel {
  id: EngagementModelId;
  name: string;
  summary: string;
  idealFor: readonly string[];
  workingRhythm: string;
  startingPrice?: string;
  cta: CtaLink;
}

export interface Offer {
  slug: string;
  name: string;
  summary: string;
  scope: readonly string[];
  exclusions: readonly string[];
  duration: string;
  deliverables: readonly string[];
  faq: readonly FaqItem[];
  cta: CtaLink;
}

export interface CaseStudySeo {
  title: string;
  description: string;
  shareImage: string;
}

export interface CaseStudyPermission {
  approvedAt: string;
  approvalReference: string;
  name: boolean;
  domain: boolean;
  screenshots: boolean;
  roleAndDeliverables: boolean;
  stack: boolean;
  outcomes: boolean;
  testimonial: boolean;
}

export interface CaseStudy {
  slug: string;
  projectSlug: string;
  publicationState: PublicationState;
  name: string;
  category: ProjectCategory;
  summary: string;
  clientProblem: string;
  xplRole: string;
  services: readonly string[];
  timeline: string;
  stack: readonly string[];
  deliverables: readonly string[];
  approach: readonly string[];
  proof: readonly ProofItem[];
  outcomes: readonly Outcome[];
  gallery: readonly Screenshot[];
  faq: readonly FaqItem[];
  testimonial?: {
    quote: string;
    person: string;
    role: string;
  };
  domain?: string;
  permission?: CaseStudyPermission;
  seo: CaseStudySeo;
  cta: CtaLink;
}
