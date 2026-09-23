import { getCaseStudyBySlug, getSystemBySlug } from "@/config/content";
import { site } from "@/config/site";

export interface PageMetadata {
  title: string;
  description: string;
  path: string;
  robots?: "index, follow" | "noindex, follow";
  image?: string;
}

const pages: Readonly<Record<string, PageMetadata>> = {
  "/": {
    title: "XPL Developers | Web, Mobile & Web3 Product Agency",
    description: "XPL Developers designs and engineers dependable web, mobile, and Web3 products for ambitious teams worldwide.",
    path: "/",
  },
  "/about": {
    title: "About XPL Developers | Global Software Agency",
    description: "Meet the distributed software team behind XPL Developers and learn how we build digital products for ambitious teams worldwide.",
    path: "/about",
  },
  "/services": {
    title: "Software Development Services | XPL Developers",
    description: "Explore XPL Developers services across product design, web, mobile, backend, Web3, technical rescue, and ongoing maintenance.",
    path: "/services",
  },
  "/portfolio": {
    title: "Web, Mobile & Web3 Portfolio | XPL Developers",
    description: "See selected web, mobile, Web3, and design-system work engineered by XPL Developers.",
    path: "/portfolio",
  },
  "/work": {
    title: "Software Product Case Studies | XPL Developers",
    description: "Explore evidence-backed web, mobile, and Web3 product case studies from XPL Developers.",
    path: "/work",
  },
  "/agency-partner": {
    title: "White-label Agency Development Partner | XPL Developers",
    description: "Add dependable web, mobile, backend, and Web3 engineering capacity while keeping your agency in control of the client relationship.",
    path: "/agency-partner",
  },
  "/engagements": {
    title: "Software Development Engagements | XPL Developers",
    description: "Compare Product Rescue, agency support, full product builds, and maintenance engagements from XPL Developers.",
    path: "/engagements",
  },
  "/product-rescue": {
    title: "Product Rescue for SaaS & Digital Products | XPL Developers",
    description: "Stabilize a troubled SaaS or digital product with a focused technical assessment, agreed critical correction, and prioritized recovery roadmap.",
    path: "/product-rescue",
  },
  "/contact": {
    title: "Contact XPL Developers | Start a Software Project",
    description: "Tell XPL Developers about your web, mobile, Web3, product rescue, or software delivery needs.",
    path: "/contact",
  },
  "/privacy": {
    title: "Privacy Policy | XPL Developers",
    description: "Read how XPL Developers collects, uses, and protects information shared through its website and contact channels.",
    path: "/privacy",
  },
  "/terms": {
    title: "Terms of Service | XPL Developers",
    description: "Read the terms governing use of the XPL Developers website and its published information.",
    path: "/terms",
  },
};

const notFoundMetadata: PageMetadata = {
  title: "Page Not Found | XPL Developers",
  description: "The requested page could not be found on the XPL Developers website.",
  path: "/",
  robots: "noindex, follow",
};

export function resolvePageMetadata(pathname: string): PageMetadata {
  const staticPage = pages[pathname];
  if (staticPage) return staticPage;

  const caseStudyMatch = /^\/work\/([^/]+)$/.exec(pathname);
  if (caseStudyMatch) {
    const study = getCaseStudyBySlug(decodeURIComponent(caseStudyMatch[1]));
    if (study) {
      return {
        title: study.seo.title,
        description: study.seo.description,
        path: `/work/${study.slug}`,
        image: study.seo.shareImage,
      };
    }
  }

  const systemMatch = /^\/systems\/([^/]+)$/.exec(pathname);
  if (systemMatch) {
    const system = getSystemBySlug(decodeURIComponent(systemMatch[1]));
    if (system) {
      return {
        title: `${system.name} Design System | ${site.name}`,
        description: `Explore the ${system.name} design system for ${system.audience}, including its ${system.aesthetic} visual direction, product surfaces, and implementation status.`,
        path: `/systems/${system.slug}`,
      };
    }
  }

  return notFoundMetadata;
}
