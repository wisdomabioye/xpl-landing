/**
 * Loads JSON content into typed shapes. To add a portfolio project, value,
 * service, etc. — edit the corresponding file under `/content/`. No code
 * changes required.
 */

import projectsJson from "@content/projects.json";
import servicesJson from "@content/services.json";
import valuesJson from "@content/values.json";
import teamJson from "@content/team.json";
import processJson from "@content/process.json";
import statsJson from "@content/stats.json";
import budgetsJson from "@content/budgets.json";
import systemsJson from "@content/systems.json";

export type IconName =
  | "code"
  | "smartphone"
  | "server"
  | "box"
  | "palette"
  | "wrench"
  | "arrow-right"
  | "arrow-up-right"
  | "chevron-down"
  | "linkedin"
  | "github"
  | "x"
  | "instagram"
  | "tiktok"
  | "send"
  | "calendar"
  | "mail"
  | "message-circle"
  | "check";

export type ProjectKind = "browser" | "phone";
export type ProjectCategory = "Web" | "Mobile" | "Web3";

/**
 * A single UI screenshot. Files live under `public/portfolio/` —
 * `src` is the public path, e.g. "/portfolio/projects/tenda/home.png".
 * `kind` picks the mockup frame; when omitted it falls back to the
 * owning project's `kind` (or "browser" for design-system screens).
 */
export interface Screenshot {
  src: string;
  label: string;
  kind?: ProjectKind;
}

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  kind: ProjectKind;
  domain: string;
  description: string;
  stack: string[];
  year: string;
  url?: string;
  image?: string;
  screenshots?: Screenshot[];
}

export interface Service {
  slug: string;
  number: string;
  name: string;
  icon: IconName;
  shortDesc: string;
  stack: string;
  description: string;
  bullets: string[];
}

export interface Value {
  title: string;
  body: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface Stats {
  hero: StatItem[];
  why: StatItem[];
}

export interface Budget {
  value: string;
  label: string;
}

export type SystemStatus = "planned" | "in-progress" | "live";

export type SystemApp = "marketing" | "dashboard" | "mobile";

export interface SystemDemos {
  marketing: string | null;
  dashboard: string | null;
  mobile: string | null;
}

/** Screenshots grouped by app surface. Keys are optional — add as screens land. */
export type SystemScreenshots = Partial<Record<SystemApp, Screenshot[]>>;

export interface DesignSystem {
  slug: string;
  name: string;
  aesthetic: string;
  audience: string;
  status: SystemStatus;
  phase: number;
  themes: string[];
  componentCount: number;
  screenCount: number;
  demos: SystemDemos;
  repoUrl: string;
  briefPath: string;
  moodReferences: string[];
  screenshots?: SystemScreenshots;
}

export const projects = projectsJson as readonly Project[];
export const services = servicesJson as readonly Service[];
export const values = valuesJson as readonly Value[];
export const team = teamJson as readonly TeamMember[];
export const processSteps = processJson as readonly ProcessStep[];
export const stats = statsJson as Stats;
export const budgets = budgetsJson as readonly Budget[];
export const systems = systemsJson as readonly DesignSystem[];

export const projectCategories: ProjectCategory[] = ["Web", "Mobile", "Web3"];

export function getSystemBySlug(slug: string): DesignSystem | undefined {
  return systems.find((s) => s.slug === slug);
}
