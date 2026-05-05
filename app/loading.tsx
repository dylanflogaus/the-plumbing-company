export default function Loading() {
  return (
    <div className="min-h-[60vh] bg-[#f8fafc] px-4 py-20 animate-pulse">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="h-12 w-2/3 rounded-lg bg-navy/10" />
        <div className="h-4 w-full rounded bg-navy/10" />
        <div className="h-4 w-5/6 rounded bg-navy/10" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="h-40 rounded-xl bg-white shadow-sm" />
          <div className="h-40 rounded-xl bg-white shadow-sm" />
        </div>
      </div>
    </div>
  );
}
