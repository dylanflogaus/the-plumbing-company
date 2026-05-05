import { CheckCircle2 } from "lucide-react";
import { LICENSE } from "@/lib/constants";

const features = [
  {
    title: "Upfront, Transparent Pricing",
    body: "No surprise bills. We give you the price before we start work.",
  },
  {
    title: "Same-Day Emergency Response",
    body: "Most jobs completed same day. We answer at 2 AM.",
  },
  {
    title: "Licensed & Fully Insured",
    body: `${LICENSE}. Fully bonded and insured for your protection.`,
  },
  {
    title: "Satisfaction Guaranteed",
    body: "If you're not happy, we make it right. No questions asked.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-white py-20" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-orange">
            Why choose us
          </p>
          <h2
            id="why-heading"
            className="font-display mt-3 text-3xl font-semibold text-navy md:text-[38px]"
          >
            The Plumbing Company Difference
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            We&apos;re family-owned, Wilmington-based, and obsessive about clear
            pricing and respectful service. Our technicians arrive on time,
            explain options in plain English, and leave your home cleaner than we
            found it.
          </p>

          <ul className="mt-10 space-y-6">
            {features.map((f) => (
              <li key={f.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                  <CheckCircle2 className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-slate-600">{f.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-xl border border-navy/10 bg-slate-50 p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/15 font-display font-bold text-brand"
                aria-hidden
              >
                JD
              </div>
              <div>
                <p className="font-display font-bold text-navy">John D., Owner</p>
                <p className="mt-1 text-sm text-slate-600">
                  Family-owned since 2005. We treat every home like our own.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {["BBB A+", "Google Guaranteed", "HomeAdvisor Elite"].map((t) => (
              <span
                key={t}
                className="rounded-lg border border-navy/10 bg-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-navy"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
