"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { BLUR_DATA_URL, IMAGES, PHONE, PHONE_HREF } from "@/lib/constants";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics";
import { buttonClasses } from "@/lib/button-classes";

const pattern =
  "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 38h2v2H0zm38 0h2v2h-2zm0-38h2v2h-2zM0 0h2v2H0z'/%3E%3Cpath d='M20 0l1 1-1 1-1-1 1-1zm0 38l1 1-1 1-1-1 1-1zM0 20l1 1-1 1-1-1 1-1zm38 0l1 1-1 1-1-1 1-1z'/%3E%3C/g%3E%3C/svg%3E\")";

function useReveal(delayMs: number) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setOn(true), delayMs);
    return () => window.clearTimeout(t);
  }, [delayMs]);
  return on;
}

export function Hero() {
  const r0 = useReveal(0);
  const r1 = useReveal(100);
  const r2 = useReveal(200);
  const r3 = useReveal(300);
  const r4 = useReveal(400);

  const fade = (show: boolean) =>
    `transition-all duration-700 ease-out ${show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`;

  return (
    <section
      className="relative min-h-[600px] md:min-h-screen bg-navy text-white"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ backgroundImage: pattern }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-12 md:items-center md:py-24 lg:px-6">
        <div className="md:col-span-7">
          <div className={fade(r0)}>
            <TrustBadge light />
          </div>
          <h1
            id="hero-heading"
            className={`font-display mt-6 text-4xl font-bold leading-tight tracking-tight md:text-[52px] ${fade(r1)}`}
          >
            Wilmington&apos;s Most Trusted Plumbers — Available 24/7
          </h1>
          <p
            className={`mt-5 max-w-xl text-lg text-slate-300 md:text-[18px] ${fade(r2)}`}
          >
            Same-day service · Upfront pricing · No hidden fees · Satisfaction
            guaranteed
          </p>
          <div
            className={`mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap ${fade(r3)}`}
          >
            <Link
              href="/contact"
              onClick={() => trackCTAClick("book-online", "hero")}
              className={buttonClasses("primary", "lg", "shadow-lg")}
            >
              <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
              Book Service Online
            </Link>
            <a
              href={PHONE_HREF}
              onClick={() => trackPhoneClick("hero")}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border-2 border-white px-8 py-3 font-display font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              aria-label={`Call ${PHONE}`}
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call {PHONE}
            </a>
          </div>
          <dl
            className={`mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 ${fade(r4)}`}
          >
            <div className="text-center sm:text-left">
              <dt className="sr-only">Experience</dt>
              <dd className="font-display text-2xl font-bold text-orange md:text-3xl">
                15+
              </dd>
              <dd className="text-xs text-slate-400 sm:text-sm">Years Experience</dd>
            </div>
            <div className="border-x border-white/10 text-center sm:border-x-0 sm:px-6 sm:text-left">
              <dt className="sr-only">Reviews</dt>
              <dd className="font-display text-2xl font-bold text-orange md:text-3xl">
                500+
              </dd>
              <dd className="text-xs text-slate-400 sm:text-sm">5-Star Reviews</dd>
            </div>
            <div className="text-center sm:text-left">
              <dt className="sr-only">Emergency</dt>
              <dd className="font-display text-2xl font-bold text-orange md:text-3xl">
                24/7
              </dd>
              <dd className="text-xs text-slate-400 sm:text-sm">
                Emergency Service
              </dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-5">
          <div
            className={`relative overflow-hidden rounded-xl border border-white/15 shadow-lift ${fade(r2)}`}
          >
            <div className="relative aspect-[4/5] w-full bg-navy-light md:aspect-square">
              <Image
                src={IMAGES.heroTeam}
                alt="Commercial piping, valves, and fittings installed on brick — expert plumbing work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
