import type { Metadata } from "next";
import { BookingForm } from "@/components/sections/BookingForm";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { Hero } from "@/components/sections/Hero";
import { ReviewCarousel } from "@/components/sections/ReviewCarousel";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { LICENSE, PHONE, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Plumbing Company | Wilmington, DE Plumbers — 24/7 Emergency Service",
  description:
    "Wilmington's most trusted plumbers. Licensed, insured, upfront pricing. Call (555) 123-4567 for 24/7 emergency plumbing service. 500+ 5-star reviews.",
  keywords: [
    "plumber Wilmington DE",
    "emergency plumber",
    "drain cleaning",
    "water heater repair Delaware",
  ],
  openGraph: {
    title: "The Plumbing Company | Wilmington, DE Plumbers — 24/7 Emergency Service",
    description:
      "Wilmington's most trusted plumbers. Licensed, insured, upfront pricing.",
    type: "website",
    url: SITE_URL,
  },
};

const localBusinessJson = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "The Plumbing Company",
  telephone: PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Market St",
    addressLocality: "Wilmington",
    addressRegion: "DE",
    postalCode: "19801",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  url: SITE_URL,
  license: LICENSE,
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: localBusinessJson }}
      />
      <Hero />
      <ServicesGrid />
      <ReviewCarousel />
      <WhyUs />
      <CTABanner />
      <BookingForm />
      <FAQSection />
      <ServiceAreaMap />
      <CTABanner />
    </>
  );
}
