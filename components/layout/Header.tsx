"use client";

import Link from "next/link";
import { useState } from "react";
import { Calendar, Menu, Phone, Wrench, X } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics";
import { buttonClasses } from "@/lib/button-classes";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/#service-areas", label: "Service Areas" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-[calc(2.75rem+env(safe-area-inset-top,0px))] z-50 border-b border-white/10 bg-navy shadow-md md:top-[calc(2.5rem+env(safe-area-inset-top,0px))]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-md"
          aria-label="The Plumbing Company home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange/20 text-orange">
            <Wrench className="h-5 w-5" aria-hidden />
          </span>
          <span className="font-display text-lg font-bold tracking-tight md:text-xl">
            THE PLUMBING COMPANY
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/95 transition hover:text-orange hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={PHONE_HREF}
            onClick={() => trackPhoneClick("header")}
            className="font-display text-lg font-bold text-orange hover:text-orange-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded px-1"
            aria-label={`Call ${PHONE}`}
          >
            {PHONE}
          </a>
          <Link
            href="/contact"
            onClick={() => trackCTAClick("book-online", "header")}
            className={buttonClasses(
              "outline",
              "sm",
              "border-white text-white hover:bg-white hover:text-navy"
            )}
          >
            Book Online
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-white md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-white/10 bg-navy-dark transition-[max-height] duration-300 ease-out md:hidden",
          open ? "max-h-[420px]" : "max-h-0"
        )}
      >
        <nav
          className="flex flex-col gap-1 px-4 py-4"
          aria-label="Mobile main"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-3 text-base font-medium text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
            <a
              href={PHONE_HREF}
              onClick={() => {
                trackPhoneClick("header-mobile");
                setOpen(false);
              }}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-orange px-4 py-3 font-display font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              aria-label={`Call ${PHONE}`}
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border-2 border-orange px-4 py-3 font-display font-semibold text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              onClick={() => setOpen(false)}
            >
              <Calendar className="h-5 w-5" aria-hidden />
              Book Online
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
