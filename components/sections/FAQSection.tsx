"use client";

import { useMemo, useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = useMemo(
    () =>
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }),
    []
  );

  return (
    <section
      id="faq"
      className="scroll-mt-28 bg-white py-20"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <h2
          id="faq-heading"
          className="text-center font-display text-3xl font-semibold text-navy md:text-[38px]"
        >
          Frequently Asked Questions
        </h2>
        <div className="mt-12 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-[#f8fafc] overflow-hidden">
          {FAQ_ITEMS.map((item, i) => {
            const expanded = open === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-button-${i}`;
            return (
              <div key={item.question} className="bg-white">
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-lg font-semibold text-navy transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-500 min-h-[52px]"
                    onClick={() => setOpen(expanded ? null : i)}
                  >
                    {item.question}
                    <span
                      className={cn(
                        "text-orange transition-transform",
                        expanded && "rotate-180"
                      )}
                      aria-hidden
                    >
                      ▾
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-slate-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
