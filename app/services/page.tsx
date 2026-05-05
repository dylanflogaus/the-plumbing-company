import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/constants";
import { serviceIcon } from "@/lib/service-icons";

export const metadata: Metadata = {
  title: "Plumbing Services",
  description:
    "Emergency plumbing, drains, water heaters, leaks, and more — licensed Wilmington, DE plumbers at The Plumbing Company.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#f8fafc] pb-20 pt-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <nav className="text-sm text-slate-600" aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="text-orange hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-navy">Services</li>
          </ol>
        </nav>
        <h1 className="font-display mt-6 text-4xl font-bold text-navy md:text-5xl">
          Plumbing Services in Wilmington &amp; Delaware
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Residential and commercial plumbing with upfront pricing, licensed
          technicians, and same-day availability across Wilmington and northern
          Delaware.
        </p>

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
      </div>
    </div>
  );
}
