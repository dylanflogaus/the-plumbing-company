"use client";

import { Calendar, Phone } from "lucide-react";
import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { trackPhoneClick } from "@/lib/analytics";

export function MobileCallBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden h-14 pb-[env(safe-area-inset-bottom)] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      role="navigation"
      aria-label="Quick contact"
    >
      <a
        href={PHONE_HREF}
        onClick={() => trackPhoneClick("mobile-bar")}
        className="flex flex-1 items-center justify-center gap-2 bg-orange font-display font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white min-h-[56px]"
        aria-label={`Call now ${PHONE}`}
      >
        <Phone className="h-5 w-5 shrink-0" aria-hidden />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 bg-navy font-display font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-500 min-h-[56px]"
        aria-label="Book online"
      >
        <Calendar className="h-5 w-5 shrink-0" aria-hidden />
        Book Online
      </Link>
    </div>
  );
}
