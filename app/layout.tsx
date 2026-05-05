import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { EmergencyBar } from "@/components/layout/EmergencyBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { BackToTop } from "@/components/layout/BackToTop";
import { SITE_URL } from "@/lib/constants";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Plumbing Company",
    template: "%s | The Plumbing Company",
  },
  description:
    "Wilmington's most trusted plumbers. 24/7 emergency service, upfront pricing, 500+ 5-star reviews. Licensed & insured.",
};

export const viewport: Viewport = {
  themeColor: "#1a2e4a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] font-sans antialiased text-[var(--foreground)]">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <EmergencyBar />
        <Header />
        <main
          id="main-content"
          className="pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] md:pb-0"
        >
          {children}
        </main>
        <Footer />
        <MobileCallBar />
        <BackToTop />
      </body>
    </html>
  );
}
