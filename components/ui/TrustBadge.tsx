"use client";

import { CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";

const chips = [
  "BBB A+ Rated",
  "Google Guaranteed",
  "Licensed & Insured",
  "500+ Reviews",
];

export function TrustBadge({ light }: { light?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-4 gap-y-2 text-sm",
        light ? "text-slate-200" : "text-slate-600"
      )}
      aria-label="Trust indicators"
    >
      {chips.map((label) => (
        <span key={label} className="inline-flex items-center gap-1">
          <CheckCircle2
            className={cn(
              "h-3.5 w-3.5 shrink-0",
              light ? "text-orange" : "text-brand"
            )}
            aria-hidden
          />
          {label}
        </span>
      ))}
    </div>
  );
}
