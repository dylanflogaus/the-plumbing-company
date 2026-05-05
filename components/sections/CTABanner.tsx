"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { trackPhoneClick } from "@/lib/analytics";
import { buttonClasses } from "@/lib/button-classes";

const dashPattern =
  "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 8px, transparent 8px 16px)";

export function CTABanner() {
  return (
    <section
      className="relative overflow-hidden bg-orange py-16 text-white"
      aria-labelledby="cta-banner-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ backgroundImage: dashPattern }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-6">
        <h2
          id="cta-banner-heading"
          className="font-display text-3xl font-bold md:text-4xl"
        >
          Plumbing Emergency? We&apos;re Ready Right Now.
        </h2>
        <p className="mt-4 text-lg text-white/90">
          Don&apos;t wait. Our team is standing by 24/7.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={PHONE_HREF}
            onClick={() => trackPhoneClick("cta-banner")}
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-white px-8 py-3 font-display text-lg font-bold text-navy shadow-lg transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange sm:w-auto"
            aria-label={`Call ${PHONE}`}
          >
            <Phone className="h-5 w-5" aria-hidden />
            Call {PHONE}
          </a>
          <Link
            href="/contact"
            className={buttonClasses(
              "outline",
              "lg",
              "w-full border-2 border-white text-white hover:bg-white hover:text-orange sm:w-auto bg-transparent"
            )}
          >
            Book Online
          </Link>
        </div>
      </div>
    </section>
  );
}
