/**
 * Single source of truth for brand metadata + env-driven URLs.
 * Edit content/*.json for editorial copy. Edit .env.local for URLs.
 */

const env = import.meta.env;

const trim = (v: unknown): string => (typeof v === "string" ? v.trim() : "");

export const site = {
  name: "XPL Developers",
  tagline: "We Build. You Scale.",
  description:
    "A software agency engineering web, mobile, and Web3 products for ambitious teams worldwide.",
  origin: "Nigerian roots · Available worldwide",
  contact: {
    email: trim(env.VITE_CONTACT_EMAIL),
    whatsapp: trim(env.VITE_WHATSAPP_NUMBER),
    calendly: trim(env.VITE_CALENDLY_URL),
  },
  social: {
    x: trim(env.VITE_SOCIAL_X),
    instagram: trim(env.VITE_SOCIAL_INSTAGRAM),
    tiktok: trim(env.VITE_SOCIAL_TIKTOK),
    linkedin: trim(env.VITE_SOCIAL_LINKEDIN),
  },
  emailjs: {
    serviceId: trim(env.VITE_EMAILJS_SERVICE_ID),
    templateId: trim(env.VITE_EMAILJS_TEMPLATE_ID),
    publicKey: trim(env.VITE_EMAILJS_PUBLIC_KEY),
  },
} as const;

export const isEmailjsConfigured = Boolean(
  site.emailjs.serviceId && site.emailjs.templateId && site.emailjs.publicKey,
);

export const whatsappLink = (message?: string): string => {
  if (!site.contact.whatsapp) return "";
  const num = site.contact.whatsapp.replace(/[^\d]/g, "");
  const text = encodeURIComponent(
    message ?? `Hi ${site.name}, I'd like to discuss a project.`,
  );
  return `https://wa.me/${num}?text=${text}`;
};
