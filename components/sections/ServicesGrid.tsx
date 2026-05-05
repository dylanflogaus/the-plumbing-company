import Link from "next/link";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/constants";
import { serviceIcon } from "@/lib/service-icons";

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="scroll-mt-28 bg-white py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-orange">
            What we do
          </p>
          <h2
            id="services-heading"
            className="font-display mt-3 text-3xl font-semibold text-navy md:text-[38px]"
          >
            Complete Plumbing Services for Home &amp; Business
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From emergency repairs to full installations — licensed experts you
            can trust
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.slug}
              name={s.name}
              shortDesc={s.shortDesc}
              slug={s.slug}
              icon={serviceIcon(s.icon)}
              featured={s.featured}
            />
          ))}
        </div>

        <p className="mt-12 text-center text-slate-600">
          Don&apos;t see your problem? We handle all plumbing issues.{" "}
          <Link
            href="/services"
            className="font-semibold text-orange hover:text-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
          >
            View all services →
          </Link>
        </p>
      </div>
    </section>
  );
}
