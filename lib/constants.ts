import type { FAQItem, Review, Service, TrustItem } from "@/types";

export const PHONE = "(555) 123-4567";
export const PHONE_HREF = "tel:+15551234567";
export const EMAIL = "contact@theplumbingco.com";
export const ADDRESS = "123 Market Street, Wilmington, DE 19801";
export const LICENSE = "DE Lic. #MP-123456";

/** Default when env is missing, empty, or not a valid http(s) URL (layout metadataBase throws otherwise). */
const SITE_URL_FALLBACK = "https://theplumbingcompany.example";

function normalizeSiteUrl(raw: string | undefined): string {
  const trimmed = raw?.trim();
  if (!trimmed) return SITE_URL_FALLBACK;
  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  try {
    const url = new URL(withProtocol);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return SITE_URL_FALLBACK;
    }
    const path = url.pathname.replace(/\/$/, "");
    return path && path !== "" ? `${url.origin}${path}` : url.origin;
  } catch {
    return SITE_URL_FALLBACK;
  }
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const SERVICES: Service[] = [
  {
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    shortDesc: "Burst pipes, overflows, and urgent repairs — fast.",
    icon: "Zap",
    featured: true,
    includedTasks: [
      "Same-day emergency dispatch",
      "Shut-off and leak containment",
      "Pipe burst repair or temporary repair",
      "Fixture and supply line fixes",
      "Water damage mitigation guidance",
      "Post-repair testing and cleanup checklist",
    ],
    priceLow: 175,
    priceHigh: 650,
    reviewHint: "emergency",
  },
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    shortDesc: "Clear clogs and restore flow without damaging pipes.",
    icon: "Waves",
    includedTasks: [
      "Kitchen and bathroom drain clearing",
      "Main line camera assessment (when needed)",
      "Hydro jetting for stubborn buildup",
      "Preventive maintenance recommendations",
      "Odor investigation",
      "Follow-up flow testing",
    ],
    priceLow: 125,
    priceHigh: 450,
    reviewHint: "drain",
  },
  {
    slug: "water-heater",
    name: "Water Heater Repair & Install",
    shortDesc: "Reliable hot water — repair, replace, or upgrade.",
    icon: "Flame",
    includedTasks: [
      "Tank and tankless diagnostics",
      "Heating element and thermostat fixes",
      "Anode rod and valve replacements",
      "New unit sizing and installation",
      "Permit coordination when required",
      "Manufacturer warranty registration support",
    ],
    priceLow: 199,
    priceHigh: 3200,
    reviewHint: "heater",
  },
  {
    slug: "leak-detection",
    name: "Leak Detection",
    shortDesc: "Pinpoint hidden leaks behind walls and under slabs.",
    icon: "Droplets",
    includedTasks: [
      "Acoustic and moisture tracing",
      "Pressure testing isolation",
      "Slab and wall leak locating",
      "Minimal-access exposure planning",
      "Repair scope with upfront pricing",
      "Dry-out coordination referrals",
    ],
    priceLow: 249,
    priceHigh: 899,
    reviewHint: "leak",
  },
  {
    slug: "pipe-repair",
    name: "Pipe Repair & Replacement",
    shortDesc: "Repiping sections or whole-home solutions.",
    icon: "Wrench",
    includedTasks: [
      "Copper, PEX, and PVC repairs",
      "Corrosion and pinhole fixes",
      "Whole-home repipe assessments",
      "Drywall-safe access planning",
      "Pressure tests after repair",
      "Code compliance upgrades",
    ],
    priceLow: 225,
    priceHigh: 5500,
    reviewHint: "pipe",
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    shortDesc: "Rough-in and finish plumbing for beautiful baths.",
    icon: "Bath",
    includedTasks: [
      "Fixture relocation planning",
      "Valve and trim upgrades",
      "Shower and tub installations",
      "Vanity and toilet rough-ins",
      "Moisture barrier coordination",
      "Final leak testing and walkthrough",
    ],
    priceLow: 800,
    priceHigh: 12000,
    reviewHint: "remodel",
  },
  {
    slug: "sewer-line",
    name: "Sewer Line Services",
    shortDesc: "Inspections, repairs, and replacements done right.",
    icon: "ArrowDownCircle",
    includedTasks: [
      "Camera sewer inspections",
      "Spot repairs and spot liners",
      "Full line replacement options",
      "Cleanout installs",
      "City tap coordination",
      "Site restoration guidance",
    ],
    priceLow: 350,
    priceHigh: 8500,
    reviewHint: "sewer",
  },
  {
    slug: "gas-line",
    name: "Gas Line Services",
    shortDesc: "Licensed gas work with safety-first protocols.",
    icon: "Wind",
    includedTasks: [
      "Leak detection with soap and sensors",
      "Appliance connection upgrades",
      "New gas line runs",
      "Shut-off valve replacements",
      "Pressure testing and tagging",
      "Code inspection readiness",
    ],
    priceLow: 275,
    priceHigh: 2200,
    reviewHint: "gas",
  },
];

export const TRUST_ITEMS: TrustItem[] = [
  {
    icon: "shield",
    title: "Licensed pros",
    description:
      "Master plumbers with Wilmington and northern Delaware experience on every job.",
  },
  {
    icon: "clock",
    title: "On-time arrivals",
    description: "We call before we arrive and stick to the schedule.",
  },
  {
    icon: "badge",
    title: "Written warranties",
    description: "Labor coverage plus manufacturer protection on parts.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How quickly can you respond to an emergency?",
    answer:
      "We offer 24/7 emergency service and typically arrive within 60–90 minutes across Wilmington and surrounding New Castle County.",
  },
  {
    question: "Do you provide upfront pricing?",
    answer:
      "Yes. We give you a firm quote before any work begins. No hourly bait-and-switch and no surprise charges.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. We hold Delaware Master Plumber License #MP-123456 and carry full liability and workers' compensation insurance.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes, we offer 0% financing on qualifying jobs over $500. Ask us about flexible payment plans.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Wilmington, Newark, and communities throughout northern Delaware — plus nearby areas in southeastern Pennsylvania and Maryland when scheduling allows.",
  },
  {
    question: "Do you guarantee your work?",
    answer:
      "All work is backed by our 1-year labor warranty plus manufacturer warranties on parts.",
  },
];

export const REVIEWS: Review[] = [
  {
    name: "Marcus T.",
    location: "Wilmington, DE",
    text: "Pipe burst at midnight — they arrived within an hour, contained the water, and fixed it same night.",
    date: "March 12, 2026",
    rating: 5,
    topic: "emergency",
  },
  {
    name: "Elena R.",
    location: "Newark, DE",
    text: "Water heater died on a Friday. Clear pricing, same-day install, and they hauled away the old tank.",
    date: "February 2, 2026",
    rating: 5,
    topic: "heater",
  },
  {
    name: "David K.",
    location: "Hockessin, DE",
    text: "Kitchen drain was completely clogged. Quick camera check, cleared it properly, no upsells.",
    date: "January 18, 2026",
    rating: 5,
    topic: "drain",
  },
  {
    name: "Priya S.",
    location: "Bear, DE",
    text: "Professional crew, boot covers, spotless cleanup. This is how plumbing service should feel.",
    date: "December 4, 2025",
    rating: 5,
    topic: "general",
  },
  {
    name: "Angela M.",
    location: "Middletown, DE",
    text: "Called about a hidden leak — they found it behind the shower wall and repaired it on schedule.",
    date: "November 22, 2025",
    rating: 5,
    topic: "leak",
  },
  {
    name: "James L.",
    location: "Claymont, DE",
    text: "Excellent communication from booking to completion. Fair quote and they stood by it.",
    date: "October 9, 2025",
    rating: 5,
    topic: "general",
  },
];

export const SERVICE_AREA_LINKS = [
  "Wilmington",
  "Newark",
  "Hockessin",
  "Bear",
  "New Castle",
  "Middletown",
];

export const FOOTER_SERVICE_LINKS = SERVICES.slice(0, 6).map((s) => ({
  href: `/services/${s.slug}`,
  label: s.name,
}));

export const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/about", label: "Our Team" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Careers" },
];

/** Tiny blur placeholder for next/image */
export const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=";

/** Curated Unsplash assets */
export const IMAGES = {
  heroTeam:
    "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=80",
  whyOwner:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
};
