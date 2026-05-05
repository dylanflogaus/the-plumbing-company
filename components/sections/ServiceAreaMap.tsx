import Link from "next/link";

const pills = [
  "Wilmington",
  "Newark",
  "Hockessin",
  "Bear",
  "New Castle",
  "Middletown",
  "Pike Creek",
  "Claymont",
];

export function ServiceAreaMap() {
  return (
    <section
      id="service-areas"
      className="scroll-mt-28 bg-white py-20"
      aria-labelledby="areas-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="areas-heading"
            className="font-display text-3xl font-semibold text-navy md:text-[38px]"
          >
            Serving Wilmington &amp; Northern Delaware
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Same-day appointments across New Castle County and nearby communities
            — tell us your neighborhood when you book.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div
            className="flex min-h-[320px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-500 shadow-inner"
            role="img"
            aria-label="Interactive map placeholder"
          >
            Interactive Map
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-navy">
              Our Service Areas
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {pills.map((p) => (
                <span
                  key={p}
                  className="rounded-full bg-brand/15 px-4 py-2 text-sm font-semibold text-navy"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="mt-8 font-medium text-slate-700">
              Same-day service available in all areas
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex font-semibold text-orange hover:text-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
            >
              Check if we serve your area →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
