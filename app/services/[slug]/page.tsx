import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/Button";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TrackedPhoneLink } from "@/components/ui/TrackedPhoneLink";
import { PHONE, SERVICES } from "@/lib/constants";
import {
  getServiceBySlug,
  relatedReviewsForService,
  relatedServices,
} from "@/lib/service-helpers";
import { serviceIcon } from "@/lib/service-icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} in Wilmington, DE`,
    description: `${service.shortDesc} Licensed Delaware plumbers — ${PHONE}.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const reviews = relatedReviewsForService(service);
  const others = relatedServices(slug);

  const steps = [
    { title: "Inspect", body: "We diagnose thoroughly and document findings." },
    { title: "Quote", body: "You approve a firm price before we begin." },
    { title: "Fix", body: "We complete work cleanly with written warranty." },
  ];

  return (
    <div className="bg-[#f8fafc]">
      <section className="bg-navy pb-16 pt-12 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <nav className="text-sm text-slate-300" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link href="/" className="text-orange hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-white">{service.name}</li>
            </ol>
          </nav>
          <h1 className="font-display mt-8 max-w-3xl text-4xl font-bold md:text-5xl">
            {service.name} in Wilmington, DE
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            {service.shortDesc}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <TrackedPhoneLink
              location="service-hero"
              showIcon
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-orange px-6 py-3 font-display font-bold text-white hover:bg-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              aria-label={`Call ${PHONE}`}
            >
              Call Now
            </TrackedPhoneLink>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Book Online
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <section aria-labelledby="included-heading">
              <h2
                id="included-heading"
                className="font-display text-2xl font-bold text-navy"
              >
                What&apos;s Included
              </h2>
              <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-700">
                {service.includedTasks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="how-heading">
              <h2
                id="how-heading"
                className="font-display text-2xl font-bold text-navy"
              >
                How It Works
              </h2>
              <ol className="mt-6 grid gap-6 sm:grid-cols-3">
                {steps.map((s, i) => (
                  <li
                    key={s.title}
                    className="rounded-xl border border-navy/10 bg-white p-5 shadow-card"
                  >
                    <span className="font-display text-sm font-bold text-orange">
                      Step {i + 1}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-navy">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">{s.body}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="reviews-heading-service">
              <h2
                id="reviews-heading-service"
                className="font-display text-2xl font-bold text-navy"
              >
                Recent Reviews
              </h2>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {reviews.map((r) => (
                  <ReviewCard key={`${r.name}-${r.date}`} {...r} />
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 rounded-2xl border border-navy/10 bg-white p-6 shadow-lift">
              <h3 className="font-display text-xl font-bold text-navy">
                Typical cost range
              </h3>
              <p className="mt-3 font-display text-3xl font-bold text-orange">
                ${service.priceLow} – ${service.priceHigh}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Final pricing depends on site conditions. We always provide a
                free, firm quote before starting any work.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full min-h-[48px] items-center justify-center rounded-md bg-navy font-display font-semibold text-white hover:bg-navy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                Request exact pricing
              </Link>
            </div>
          </aside>
        </div>

        <section className="mt-20" aria-labelledby="related-services-heading">
          <h2
            id="related-services-heading"
            className="font-display text-2xl font-bold text-navy"
          >
            Related Services
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((s) => (
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
        </section>
      </div>

      <CTABanner />
    </div>
  );
}
