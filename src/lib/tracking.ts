// Centralized lead-tracking for the landing page.
//
// Two responsibilities:
//   1. Push a "generate_lead" event to GTM/gtag (Google dataLayer) so paid-traffic
//      conversions are attributed correctly.
//   2. Forward the lead to our CRM via a single webhook function (postLeadToCRM).
//
// Point CRM_WEBHOOK_URL at the endpoint you want leads POSTed to.

// TODO: Replace with your CRM / webhook endpoint (e.g. a Zapier catch hook,
// a GoHighLevel inbound webhook, or your own /api/lead route).
const CRM_WEBHOOK_URL = "";

// Google Ads conversion for "Submit lead form" (siding.royaltyroofing.org).
// The base gtag.js tag for AW-931355603 is loaded in app/layout.tsx; this is
// the per-conversion send_to label fired when the lead form is submitted.
const GOOGLE_ADS_FORM_CONVERSION = "AW-931355603/4kKWCLv58MccENO3jbwD";

// "form" covers any form submission; the specific form instance (hero,
// bottom_form, …) is passed through so leads can be attributed by source.
type LeadMethod = "form" | "call" | "text" | (string & {});

interface LeadDetails {
  firstName?: string;
  lastName?: string;
  phone?: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fire a single "generate_lead" conversion event into the Google dataLayer
 * (works with both gtag.js and GTM). Safe to call on the client only.
 */
export function trackLead(method: LeadMethod, details: LeadDetails = {}): void {
  if (typeof window === "undefined") return;

  const payload = {
    event: "generate_lead",
    method,
    ...details,
  };

  // dataLayer (GTM)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  // gtag.js (direct)
  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", { method, ...details });

    // Google Ads conversion — fires only on actual form submissions, not on
    // call/text link clicks (which also route through trackLead).
    if (method !== "call" && method !== "text") {
      window.gtag("event", "conversion", { send_to: GOOGLE_ADS_FORM_CONVERSION });
    }
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("[v0] generate_lead", payload);
  }
}

/**
 * POST a submitted lead to the CRM webhook. Fire-and-forget; never throws so it
 * can't block the user-facing thank-you state.
 */
export async function postLeadToCRM(details: LeadDetails): Promise<void> {
  if (!CRM_WEBHOOK_URL) return;
  try {
    await fetch(CRM_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...details, submittedAt: new Date().toISOString() }),
      keepalive: true,
    });
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[v0] postLeadToCRM failed", err);
    }
  }
}

/**
 * Convenience helper for tel:/sms: links. Attach to onClick on any phone/text
 * link so calls and texts are counted as leads too.
 */
export function trackContactClick(method: "call" | "text"): void {
  trackLead(method);
}

/** Attach to onClick of any tel: link. `location` records where it was clicked. */
export function trackCall(location?: string): void {
  trackLead("call", location ? { location } : {});
}

/** Attach to onClick of any sms: link. `location` records where it was clicked. */
export function trackText(location?: string): void {
  trackLead("text", location ? { location } : {});
}

/**
 * Fire a lightweight CTA-click event (e.g. "Free Estimate" buttons that scroll
 * to the form). Not a lead yet, but useful for funnel analysis.
 */
export function trackCTA(label: string): void {
  if (typeof window === "undefined") return;
  const payload = { event: "cta_click", label };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  if (typeof window.gtag === "function") {
    window.gtag("event", "cta_click", { label });
  }
  if (process.env.NODE_ENV !== "production") {
    console.log("[v0] cta_click", payload);
  }
}
