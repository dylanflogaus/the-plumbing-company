"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import {
  ADDRESS,
  EMAIL,
  PHONE,
  PHONE_HREF,
  SERVICES,
} from "@/lib/constants";
import { trackFormSubmit } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState(SERVICES[0]?.slug ?? "");
  const [notes, setNotes] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    trackFormSubmit(serviceType);
    setSent(true);
  }

  const inputClass =
    "mt-1 w-full rounded-md border border-white/30 bg-navy-dark/80 px-4 py-3 text-white placeholder:text-slate-400 shadow-inner transition focus:border-orange focus:outline-none focus:shadow-[0_0_0_3px_rgba(249,115,22,0.2)]";

  return (
    <section
      id="contact-estimate"
      className="scroll-mt-28 bg-navy py-20 text-white"
      aria-labelledby="booking-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-6">
        <div>
          <h2
            id="booking-heading"
            className="font-display text-3xl font-bold md:text-[38px]"
          >
            Get a Free Estimate
          </h2>
          <p className="mt-3 text-slate-300">
            We&apos;ll call you back within 5 minutes
          </p>

          {sent ? (
            <div
              className="mt-10 flex items-start gap-3 rounded-xl border border-success/40 bg-success/10 p-6 text-success"
              role="status"
            >
              <CheckCircle2 className="h-8 w-8 shrink-0" aria-hidden />
              <div>
                <p className="font-display text-xl font-bold text-white">
                  Thanks! We&apos;ll call you within 5 minutes.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  If this is an emergency, call us now at{" "}
                  <a className="font-semibold text-orange" href={PHONE_HREF}>
                    {PHONE}
                  </a>
                  .
                </p>
              </div>
            </div>
          ) : (
            <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  id="full-name"
                  required
                  autoComplete="name"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="service-type" className="sr-only">
                  Service type
                </label>
                <select
                  id="service-type"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className={cn(inputClass, "appearance-none bg-navy-dark")}
                  aria-label="Service type"
                >
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug} className="text-navy">
                      {s.name}
                    </option>
                  ))}
                  <option value="other" className="text-navy">
                    Other
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="notes" className="sr-only">
                  Brief description (optional)
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Brief description (optional)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className={inputClass}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-orange px-6 py-4 font-display text-lg font-bold text-white shadow-lg transition hover:bg-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 active:scale-[0.99]"
              >
                Request Free Estimate →
              </button>
              <p className="text-center text-xs text-slate-400">
                By submitting you agree to be contacted. We never spam.
              </p>
            </form>
          )}
        </div>

        <div className="space-y-8">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-wide text-slate-400">
              Phone
            </p>
            <a
              href={PHONE_HREF}
              className="mt-2 block font-display text-3xl font-bold text-orange hover:text-orange-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded"
              aria-label={`Call ${PHONE}`}
            >
              {PHONE}
            </a>
            <p className="mt-2 text-sm text-slate-300">
              Available 24/7 for emergencies
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-wide text-slate-400">
              Email
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 block text-lg font-semibold text-white hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded break-all"
            >
              {EMAIL}
            </a>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-wide text-slate-400">
              Office
            </p>
            <p className="mt-2 text-lg text-white">{ADDRESS}</p>
            <p className="mt-3 text-sm text-slate-300">
              Mon–Fri 7am–8pm · Sat–Sun 8am–6pm · 24/7 Emergency
            </p>
          </div>
          <div
            className="flex h-48 items-center justify-center rounded-xl border border-dashed border-white/25 bg-navy-dark/50 text-slate-400"
            role="img"
            aria-label="Map placeholder"
          >
            Map embed placeholder
          </div>
        </div>
      </div>
    </section>
  );
}
