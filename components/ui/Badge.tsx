import { cn } from "@/lib/utils";

const variants = {
  trust: "bg-brand/15 text-navy border-brand/30",
  emergency: "bg-orange/15 text-orange-dark border-orange/40",
  success: "bg-success/15 text-success border-success/40",
};

const dots = {
  trust: "bg-brand",
  emergency: "bg-orange animate-pulse",
  success: "bg-success",
};

export function Badge({
  variant,
  children,
  className,
}: {
  variant: keyof typeof variants;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className
      )}
    >
      <span
        className={cn("h-1.5 w-1.5 shrink-0 rounded-full", dots[variant])}
        aria-hidden
      />
      {children}
    </span>
  );
}
