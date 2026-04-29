import emailjs from "@emailjs/browser";
import { isEmailjsConfigured, site } from "@/config/site";

export interface ContactPayload {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  brief: string;
}

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: "not-configured" | "network" | "validation"; message: string };

export async function sendContactBrief(payload: ContactPayload): Promise<SubmitResult> {
  if (!isEmailjsConfigured) {
    return {
      ok: false,
      reason: "not-configured",
      message:
        "Form is not configured yet. Please email us directly or set the VITE_EMAILJS_* env vars.",
    };
  }
  try {
    await emailjs.send(
      site.emailjs.serviceId,
      site.emailjs.templateId,
      payload as unknown as Record<string, unknown>,
      { publicKey: site.emailjs.publicKey },
    );
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      reason: "network",
      message: err instanceof Error ? err.message : "Submission failed. Please try again.",
    };
  }
}
