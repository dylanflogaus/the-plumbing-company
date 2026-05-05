"use client";

import { PHONE, PHONE_HREF } from "@/lib/constants";
import { trackPhoneClick } from "@/lib/analytics";

export function EmergencyBar() {
  return (
    <div
      className="sticky top-0 z-[60] bg-orange pt-[env(safe-area-inset-top,0px)] text-white"
      role="banner"
    >
      <div className="mx-auto flex min-h-[40px] items-center justify-between gap-2 px-3 sm:min-h-[44px] sm:gap-3 sm:px-4 md:h-10 md:min-h-0 md:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-2 md:flex-none">
          <span
            className="relative flex h-2 w-2 shrink-0"
            aria-hidden
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <p className="min-w-0 truncate text-[0.8125rem] font-medium leading-snug sm:text-sm md:max-w-none md:overflow-visible md:whitespace-normal">
            <span className="md:hidden">
              24/7 emergency plumbers — open now
            </span>
            <span className="hidden md:inline">
              24/7 Emergency Plumbing — We&apos;re Available Now
            </span>
          </p>
        </div>
        <a
          href={PHONE_HREF}
          onClick={() => trackPhoneClick("emergency-bar")}
          className="inline-flex h-9 shrink-0 touch-manipulation items-center justify-center whitespace-nowrap rounded-full bg-white px-2.5 text-xs font-bold leading-none text-orange shadow-sm transition active:scale-[0.98] hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange md:h-7 md:px-2.5"
          aria-label={`Call emergency line ${PHONE}`}
        >
          {PHONE}
        </a>
      </div>
    </div>
  );
}
