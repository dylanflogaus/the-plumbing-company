import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-orange text-white hover:bg-orange-dark active:scale-95 shadow-md hover:shadow-lg",
  secondary: "bg-navy text-white hover:bg-navy-light active:scale-95",
  outline:
    "border-2 border-orange text-orange hover:bg-orange hover:text-white bg-transparent",
  ghost: "text-navy hover:bg-navy/10 bg-transparent",
};

const sizes = {
  sm: "text-sm px-4 py-2 min-h-[44px]",
  md: "text-base px-5 py-2.5 min-h-[44px]",
  lg: "text-lg px-8 py-3 min-h-[48px]",
};

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string
) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-display font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 active:scale-[0.97]",
    variants[variant],
    sizes[size],
    className
  );
}
