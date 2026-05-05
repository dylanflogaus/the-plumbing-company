"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { REVIEWS } from "@/lib/constants";

function useVisibleCount() {
  const [n, setN] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setN(1);
      else if (w < 1024) setN(2);
      else setN(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return n;
}

export function ReviewCarousel() {
  const visible = useVisibleCount();
  const maxStart = Math.max(0, REVIEWS.length - visible);
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prev = useCallback(() => {
    setStart((s) => Math.max(0, s - 1));
  }, []);

  const next = useCallback(() => {
    setStart((s) => Math.min(maxStart, s + 1));
  }, [maxStart]);

  useEffect(() => {
    setStart((s) => Math.min(s, maxStart));
  }, [maxStart]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setStart((s) => (s >= maxStart ? 0 : s + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [paused, maxStart]);

  const slice = REVIEWS.slice(start, start + visible);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0]?.screenX ?? null;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX == null) return;
    const endX = e.changedTouches[0]?.screenX ?? startX;
    const dx = endX - startX;
    if (dx > 50) prev();
    else if (dx < -50) next();
  };

  const dots = maxStart + 1;

  return (
    <section
      id="reviews"
      className="scroll-mt-28 bg-[#f8fafc] py-20"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="max-w-3xl">
          <h2
            id="reviews-heading"
            className="font-display text-3xl font-semibold text-navy md:text-[38px]"
          >
            500+ Happy Customers Across Delaware
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="sr-only">Google rating</span>
            <span className="rounded bg-white px-2 py-1 text-sm font-bold text-navy shadow-sm">
              Google
            </span>
            <span className="font-display text-3xl font-bold text-navy">4.9</span>
            <span className="flex gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-orange"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </span>
            <span className="text-sm text-slate-600">(500+ reviews)</span>
          </div>
        </div>

        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            aria-live="polite"
            aria-atomic="true"
          >
            {slice.map((r) => (
              <ReviewCard key={`${r.name}-${r.date}`} {...r} />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              disabled={start === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white shadow-md transition hover:bg-navy-light disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Review slides">
              {Array.from({ length: dots }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={start === i}
                  aria-label={`Go to review slide ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    start === i ? "bg-orange scale-125" : "bg-navy/25 hover:bg-navy/40"
                  }`}
                  onClick={() => setStart(i)}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              disabled={start >= maxStart}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white shadow-md transition hover:bg-navy-light disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-6 w-6" aria-hidden />
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-6 border-t border-slate-200 pt-10">
          {[
            { label: "Google", score: "4.9" },
            { label: "Yelp", score: "5.0" },
            { label: "HomeAdvisor", score: "4.8" },
            { label: "BBB", score: "A+" },
          ].map((b) => (
            <div
              key={b.label}
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-center shadow-sm"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {b.label}
              </div>
              <div className="font-display text-xl font-bold text-navy">{b.score}</div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center">
          <Link
            href="#contact-estimate"
            className="text-sm font-semibold text-orange hover:text-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
          >
            Read all reviews on Google →
          </Link>
        </p>
      </div>
    </section>
  );
}
