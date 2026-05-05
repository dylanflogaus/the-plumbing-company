/** Stub — wire to gtag when NEXT_PUBLIC_GA_ID is set */
export function trackPhoneClick(location: string) {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_GA_ID) {
    console.debug("[analytics] phone", location);
  }
}

export function trackFormSubmit(serviceType: string) {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_GA_ID) {
    console.debug("[analytics] form", serviceType);
  }
}

export function trackCTAClick(ctaName: string, location: string) {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_GA_ID) {
    console.debug("[analytics] cta", ctaName, location);
  }
}
