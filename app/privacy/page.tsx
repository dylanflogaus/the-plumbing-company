import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: "noindex, follow",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl font-bold text-navy">Privacy Policy</h1>
      <p className="mt-6 text-slate-600 leading-relaxed">
        The Plumbing Company respects your privacy. Information submitted through our
        website is used solely to coordinate service appointments and estimates. We
        do not sell personal data.
      </p>
      <p className="mt-4">
        <Link href="/contact" className="text-orange font-semibold hover:underline">
          Contact us
        </Link>{" "}
        with any privacy-specific questions.
      </p>
    </div>
  );
}
