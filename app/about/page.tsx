import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TRUST_ITEMS, LICENSE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Family-owned plumbers headquartered in Wilmington, DE since 2005. Licensed, insured, and committed to respectful service.",
};

export default function AboutPage() {
  return (
    <div className="bg-white pb-20">
      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <Badge variant="trust">Locally owned</Badge>
          <h1 className="font-display mt-4 text-4xl font-bold md:text-5xl">
            Respect for Your Home Comes First
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Founded in Wilmington and trusted across northern Delaware, The
            Plumbing Company is a family operation built on workmanship,
            cleanliness, and clear communication.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
        <p className="text-lg leading-relaxed text-slate-700">
          Our technicians arrive in marked vans, explain every finding in plain
          English, and back every job with a written warranty. Whether it is an
          emergency at 2&nbsp;AM or a planned remodel, you get the same
          standards across every neighborhood we serve.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {TRUST_ITEMS.map((t) => (
            <li
              key={t.title}
              className="rounded-xl border border-navy/10 bg-[#f8fafc] p-6 shadow-sm"
            >
              <p className="font-display font-bold text-navy">{t.title}</p>
              <p className="mt-2 text-sm text-slate-600">{t.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-xl border border-orange/40 bg-orange/5 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange">
            Credential
          </p>
          <p className="mt-2 text-navy">{LICENSE}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact" variant="primary" size="lg">
            Meet with Estimator
          </Button>
          <Link
            href="/services"
            className="inline-flex min-h-[48px] items-center px-6 font-semibold text-brand hover:text-brand-dark underline-offset-4 hover:underline"
          >
            View services
          </Link>
        </div>
      </div>
    </div>
  );
}
