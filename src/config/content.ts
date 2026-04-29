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

export const projects = projectsJson as readonly Project[];
export const services = servicesJson as readonly Service[];
export const values = valuesJson as readonly Value[];
export const team = teamJson as readonly TeamMember[];
export const processSteps = processJson as readonly ProcessStep[];
export const stats = statsJson as Stats;
export const budgets = budgetsJson as readonly Budget[];

export const projectCategories: ProjectCategory[] = ["Web", "Mobile", "Web3"];
