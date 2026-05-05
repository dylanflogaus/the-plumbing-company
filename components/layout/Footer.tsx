import Link from "next/link";
import { Wrench } from "lucide-react";
import {
  ADDRESS,
  COMPANY_LINKS,
  EMAIL,
  FOOTER_SERVICE_LINKS,
  LICENSE,
  PHONE,
  PHONE_HREF,
} from "@/lib/constants";

const areas = [
  { href: "/#service-areas", label: "Wilmington" },
  { href: "/#service-areas", label: "Newark" },
  { href: "/#service-areas", label: "Hockessin" },
  { href: "/#service-areas", label: "Trolley Square" },
  { href: "/#service-areas", label: "Brandywine" },
  { href: "/#service-areas", label: "Pike Creek" },
];

function SocialCircle({
  href,
  label,
  letter,
}: {
  href: string;
  label: string;
  letter: string;
}) {
  return (
    <a
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-bold text-white/90 transition hover:border-orange hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {letter}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-2 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange/20 text-orange">
                <Wrench className="h-5 w-5" aria-hidden />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                THE PLUMBING COMPANY
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Wilmington&apos;s most trusted plumbers since 2005
            </p>
            <div className="mt-6 flex gap-3">
              <SocialCircle href="#" label="Facebook" letter="f" />
              <SocialCircle href="#" label="Google Business" letter="G" />
              <SocialCircle href="#" label="Yelp" letter="Y" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-orange">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-orange">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {COMPANY_LINKS.map((l) => (
                <li key={`${l.href}-${l.label}`}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-orange">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-2">
              {areas.map((a) => (
                <li key={a.label}>
                  <Link
                    href={a.href}
                    className="text-sm text-slate-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
                  >
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-orange">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href={PHONE_HREF}
                  className="font-semibold text-orange hover:text-orange-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
                  aria-label={`Call ${PHONE}`}
                >
                  {PHONE}
                </a>
              </li>
              <li>{ADDRESS}</li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="leading-relaxed">
                Mon–Fri 7am–8pm, Sat–Sun 8am–6pm
                <br />
                <span className="text-orange">24/7 Emergency</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 The Plumbing Company. All rights reserved.</p>
          <p className="text-center">{LICENSE}</p>
          <p className="text-center md:text-right">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span className="mx-2">·</span>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
