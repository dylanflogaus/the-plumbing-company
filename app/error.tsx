"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="font-display text-2xl font-bold text-navy">
        Something interrupted that request.
      </p>
      <p className="mt-4 text-slate-600">{error.message}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-md bg-orange px-6 py-3 font-semibold text-white hover:bg-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
      >
        Try again
      </button>
    </div>
  );
}
