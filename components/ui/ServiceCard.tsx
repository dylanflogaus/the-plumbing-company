import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServiceCard({
  name,
  shortDesc,
  slug,
  icon: Icon,
  featured,
}: {
  name: string;
  shortDesc: string;
  slug: string;
  icon: LucideIcon;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-xl border border-navy/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-l-4 hover:border-l-orange"
      )}
    >
      {featured ? (
        <span className="absolute right-3 top-3 rounded-full bg-orange/15 px-2 py-0.5 text-xs font-semibold text-orange-dark">
          Popular
        </span>
      ) : null}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange/15 text-orange">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="font-display text-xl font-semibold text-navy">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {shortDesc}
      </p>
      <Link
        href={`/services/${slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange hover:text-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded"
      >
        Learn more <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
