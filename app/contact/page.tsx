import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ADDRESS, EMAIL, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call ${PHONE} or book online. ${ADDRESS}`,
};

export default function ContactPage() {
  return (
    <div className="bg-[#f8fafc] pb-20">
      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <Badge variant="emergency">24/7 dispatch</Badge>
          <h1 className="font-display mt-4 text-4xl font-bold md:text-5xl">
            Reach The Plumbing Company
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Talk with a dispatcher now or submit a booking request—we respond on
            live jobs in minutes.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 lg:grid-cols-2 lg:px-6">
        <div className="rounded-2xl border border-white bg-white p-8 shadow-card">
          <h2 className="font-display text-2xl font-bold text-navy">
            Call / Email
          </h2>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500">
                Phone
              </dt>
              <dd className="mt-1">
                <a
                  href={PHONE_HREF}
                  className="font-display text-3xl font-bold text-orange hover:text-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
                  aria-label={`Call ${PHONE}`}
                >
                  {PHONE}
                </a>
                <p className="mt-2 text-sm text-slate-600">
                  Dispatch answers around the clock.
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-lg font-semibold text-navy underline-offset-2 hover:underline"
                >
                  {EMAIL}
                </a>
              </dd>
            </div>
          </dl>
          <Button href="/#contact-estimate" variant="primary" size="lg" className="mt-10 w-full">
            Submit quick form
          </Button>
        </div>

        <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-card">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-6 w-6 text-orange" aria-hidden />
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">
                Office &amp; hours
              </h2>
              <p className="mt-4 text-slate-700">{ADDRESS}</p>
              <p className="mt-4 text-slate-600">
                Mon–Fri 7am–8pm · Sat–Sun 8am–6pm · 24/7 emergency service across the greater Wilmington area
              </p>
            </div>
          </div>

          <div
            className="mt-8 flex h-48 items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500"
            role="presentation"
          >
            Map preview — embed during launch
          </div>

          <Link
            href="/services"
            className="mt-8 inline-flex font-semibold text-brand hover:text-brand-dark"
          >
            Browse specialties →
          </Link>
        </div>
      </div>
    </div>
  );
}
