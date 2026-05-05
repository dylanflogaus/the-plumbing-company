"use client";

import type { AnchorHTMLAttributes } from "react";
import { Phone } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { trackPhoneClick } from "@/lib/analytics";

export function TrackedPhoneLink({
  location,
  className,
  children,
  showIcon,
  "aria-label": ariaLabel,
  onClick,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  location: string;
  showIcon?: boolean;
}) {
  return (
    <a
      {...rest}
      href={PHONE_HREF}
      className={className}
      aria-label={ariaLabel ?? `Call ${PHONE}`}
      onClick={(e) => {
        onClick?.(e);
        trackPhoneClick(location);
      }}
    >
      {showIcon ? <Phone className="h-5 w-5 shrink-0" aria-hidden /> : null}
      {children ?? PHONE}
    </a>
  );
}
