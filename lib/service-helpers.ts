import type { Review } from "@/types";
import type { Service } from "@/types";
import { REVIEWS, SERVICES } from "@/lib/constants";

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function relatedReviewsForService(service: Service, limit = 3): Review[] {
  const hint = service.reviewHint;
  const matched = REVIEWS.filter(
    (r) => r.topic === hint || r.topic === "general"
  );
  const rest = REVIEWS.filter((r) => !matched.includes(r));
  return [...matched, ...rest].slice(0, limit);
}

export function relatedServices(slug: string, limit = 3): Service[] {
  return SERVICES.filter((s) => s.slug !== slug).slice(0, limit);
}
