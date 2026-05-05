import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="font-display text-5xl font-bold text-navy">404</p>
      <h1 className="mt-6 text-2xl font-semibold text-navy">
        That page drip-dried away.
      </h1>
      <p className="mt-4 text-slate-600">
        Double-check the URL or jump back home to book service.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-md bg-orange px-6 font-semibold text-white hover:bg-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
      >
        Back home
      </Link>
    </div>
  );
}
