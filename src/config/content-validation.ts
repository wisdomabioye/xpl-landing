import type {
  CaseStudy,
  CaseStudyPermission,
  EvidenceStatus,
  FaqItem,
  Outcome,
  PublicationState,
} from "@/config/content-models";
import type { ProjectCategory, ProjectKind, Screenshot } from "@/config/content";

type JsonObject = Record<string, unknown>;

const publicationStates: readonly PublicationState[] = ["draft", "verified", "published"];
const evidenceStatuses: readonly EvidenceStatus[] = ["verified", "restricted"];
const projectCategories: readonly ProjectCategory[] = ["Web", "Mobile", "Web3"];
const projectKinds: readonly ProjectKind[] = ["browser", "phone"];

function fail(path: string, message: string): never {
  throw new Error(`Invalid case-study content at ${path}: ${message}`);
}

function object(value: unknown, path: string): JsonObject {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    fail(path, "expected an object");
  }
  return value as JsonObject;
}

function string(value: unknown, path: string): string {
  if (typeof value !== "string" || value.trim() === "") fail(path, "expected a non-empty string");
  return value;
}

function boolean(value: unknown, path: string): boolean {
  if (typeof value !== "boolean") fail(path, "expected a boolean");
  return value;
}

function stringList(value: unknown, path: string): readonly string[] {
  if (!Array.isArray(value)) fail(path, "expected an array");
  return value.map((item, index) => string(item, `${path}[${index}]`));
}

function member<T extends string>(value: unknown, allowed: readonly T[], path: string): T {
  if (typeof value !== "string" || !allowed.includes(value as T)) {
    fail(path, `expected one of: ${allowed.join(", ")}`);
  }
  return value as T;
}

function array<T>(value: unknown, path: string, parse: (item: unknown, path: string) => T): readonly T[] {
  if (!Array.isArray(value)) fail(path, "expected an array");
  return value.map((item, index) => parse(item, `${path}[${index}]`));
}

function optionalString(value: unknown, path: string): string | undefined {
  return value === undefined ? undefined : string(value, path);
}

function screenshot(value: unknown, path: string): Screenshot {
  const record = object(value, path);
  const kind = record.kind === undefined ? undefined : member(record.kind, projectKinds, `${path}.kind`);
  return { src: string(record.src, `${path}.src`), label: string(record.label, `${path}.label`), kind };
}

function faq(value: unknown, path: string): FaqItem {
  const record = object(value, path);
  return { question: string(record.question, `${path}.question`), answer: string(record.answer, `${path}.answer`) };
}

function outcome(value: unknown, path: string): Outcome {
  const record = object(value, path);
  const kind = member(record.kind, ["metric", "qualitative"] as const, `${path}.kind`);
  const base = {
    kind,
    statement: string(record.statement, `${path}.statement`),
    source: string(record.source, `${path}.source`),
  };
  if (kind === "qualitative") return base;
  const metric = object(record.metric, `${path}.metric`);
  return {
    ...base,
    metric: {
      value: string(metric.value, `${path}.metric.value`),
      baseline: string(metric.baseline, `${path}.metric.baseline`),
      period: string(metric.period, `${path}.metric.period`),
    },
  };
}

function permission(value: unknown, path: string): CaseStudyPermission {
  const record = object(value, path);
  return {
    approvedAt: string(record.approvedAt, `${path}.approvedAt`),
    approvalReference: string(record.approvalReference, `${path}.approvalReference`),
    name: boolean(record.name, `${path}.name`),
    domain: boolean(record.domain, `${path}.domain`),
    screenshots: boolean(record.screenshots, `${path}.screenshots`),
    roleAndDeliverables: boolean(record.roleAndDeliverables, `${path}.roleAndDeliverables`),
    stack: boolean(record.stack, `${path}.stack`),
    outcomes: boolean(record.outcomes, `${path}.outcomes`),
    testimonial: boolean(record.testimonial, `${path}.testimonial`),
  };
}

function caseStudy(value: unknown, path: string): CaseStudy {
  const record = object(value, path);
  const publicationState = member(record.publicationState, publicationStates, `${path}.publicationState`);
  const permissionRecord = record.permission === undefined ? undefined : permission(record.permission, `${path}.permission`);
  if (publicationState === "published") {
    if (permissionRecord === undefined) {
      fail(`${path}.permission`, "is required for a published case study");
    }
    const requiredApprovals = [
      permissionRecord.name,
      permissionRecord.screenshots,
      permissionRecord.roleAndDeliverables,
      permissionRecord.stack,
      permissionRecord.outcomes,
    ];
    if (requiredApprovals.some((approved) => !approved)) {
      fail(`${path}.permission`, "all used case-study fields must have publication approval");
    }
    if (record.domain !== undefined && !permissionRecord.domain) {
      fail(`${path}.permission.domain`, "must be approved when a domain is published");
    }
    if (record.testimonial !== undefined && !permissionRecord.testimonial) {
      fail(`${path}.permission.testimonial`, "must be approved when a testimonial is published");
    }
  }
  const testimonialRecord = record.testimonial === undefined ? undefined : object(record.testimonial, `${path}.testimonial`);
  const seo = object(record.seo, `${path}.seo`);
  const cta = object(record.cta, `${path}.cta`);
  return {
    slug: string(record.slug, `${path}.slug`),
    projectSlug: string(record.projectSlug, `${path}.projectSlug`),
    publicationState,
    name: string(record.name, `${path}.name`),
    category: member(record.category, projectCategories, `${path}.category`),
    summary: string(record.summary, `${path}.summary`),
    clientProblem: string(record.clientProblem, `${path}.clientProblem`),
    xplRole: string(record.xplRole, `${path}.xplRole`),
    services: stringList(record.services, `${path}.services`),
    timeline: string(record.timeline, `${path}.timeline`),
    stack: stringList(record.stack, `${path}.stack`),
    deliverables: stringList(record.deliverables, `${path}.deliverables`),
    approach: stringList(record.approach, `${path}.approach`),
    proof: array(record.proof, `${path}.proof`, (item, itemPath) => {
      const proofRecord = object(item, itemPath);
      return {
        label: string(proofRecord.label, `${itemPath}.label`),
        value: string(proofRecord.value, `${itemPath}.value`),
        status: member(proofRecord.status, evidenceStatuses, `${itemPath}.status`),
        source: optionalString(proofRecord.source, `${itemPath}.source`),
      };
    }),
    outcomes: array(record.outcomes, `${path}.outcomes`, outcome),
    gallery: array(record.gallery, `${path}.gallery`, screenshot),
    faq: array(record.faq, `${path}.faq`, faq),
    testimonial: testimonialRecord === undefined ? undefined : {
      quote: string(testimonialRecord.quote, `${path}.testimonial.quote`),
      person: string(testimonialRecord.person, `${path}.testimonial.person`),
      role: string(testimonialRecord.role, `${path}.testimonial.role`),
    },
    domain: optionalString(record.domain, `${path}.domain`),
    permission: permissionRecord,
    seo: {
      title: string(seo.title, `${path}.seo.title`),
      description: string(seo.description, `${path}.seo.description`),
      shareImage: string(seo.shareImage, `${path}.seo.shareImage`),
    },
    cta: { label: string(cta.label, `${path}.cta.label`), to: string(cta.to, `${path}.cta.to`) },
  };
}

export function validateCaseStudies(value: unknown): readonly CaseStudy[] {
  const records = array(value, "caseStudies", caseStudy);
  const slugs = new Set<string>();
  for (const record of records) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(record.slug)) fail(record.slug, "slug must be URL-safe");
    if (slugs.has(record.slug)) fail(record.slug, "slug must be unique");
    slugs.add(record.slug);
  }
  return records;
}
