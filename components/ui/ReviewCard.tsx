"use client";

function StarRow({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-orange"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewCard({
  name,
  location,
  text,
  date,
  rating = 5,
}: {
  name: string;
  location: string;
  text: string;
  date: string;
  rating?: number;
}) {
  return (
    <figure className="relative flex h-full flex-col rounded-xl border border-navy/5 bg-white p-6 shadow-card">
      <StarRow rating={rating} />
      <blockquote className="mt-3 flex-1 font-sans text-base italic leading-relaxed text-navy/90">
        “{text}”
      </blockquote>
      <figcaption className="mt-4 border-t border-slate-100 pt-4">
        <span className="font-semibold text-navy">{name}</span>
        <span className="mt-0.5 block text-xs text-slate-500">{location}</span>
        <span className="mt-1 block text-xs text-slate-400">{date}</span>
      </figcaption>
      <div
        className="pointer-events-none absolute bottom-4 right-4 opacity-[0.12]"
        aria-hidden
      >
        <svg viewBox="0 0 74 24" className="h-6 w-16 text-slate-800">
          <text x="0" y="18" className="fill-current text-[14px] font-bold">
            Google
          </text>
        </svg>
      </div>
    </figure>
  );
}
