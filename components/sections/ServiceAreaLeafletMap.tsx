"use client";

import type { ComponentType } from "react";
import { useEffect, useState } from "react";

function MapSkeleton() {
  return (
    <div
      className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 md:min-h-[420px]"
      role="status"
      aria-live="polite"
    >
      <span className="text-sm font-medium text-slate-500">Loading map…</span>
    </div>
  );
}

export function ServiceAreaLeafletMap() {
  const [Inner, setInner] = useState<ComponentType<object> | null>(null);

  useEffect(() => {
    let cancelled = false;
    void import("./ServiceAreaLeafletMapInner").then((m) => {
      if (!cancelled) setInner(() => m.ServiceAreaLeafletMapInner);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!Inner) return <MapSkeleton />;
  return <Inner />;
}
