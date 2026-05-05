import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: "noindex, follow",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl font-bold text-navy">Terms of Service</h1>
      <p className="mt-6 text-slate-600 leading-relaxed">
        By booking service with The Plumbing Company you agree to review and approve
        written estimates before work begins. Warranty terms are provided on the
        invoice for each job.
      </p>
      <p className="mt-4">
        <Link href="/contact" className="text-orange font-semibold hover:underline">
          Speak with our team
        </Link>{" "}
        for full documentation.
      </p>
    </div>
  );
}
