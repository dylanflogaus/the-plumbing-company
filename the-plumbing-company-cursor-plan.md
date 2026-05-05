# The Plumbing Company — Cursor AI Build Plan
> Paste each section into Cursor as a prompt. Work through phases in order. Each prompt is self-contained and builds on the previous.

---

## Project Overview

**Client:** The Plumbing Company  
**Goal:** High-converting local plumbing website for Wilmington, DE and surrounding areas  
**Stack:** Next.js 14 (App Router) + Tailwind CSS + TypeScript  
**Target conversion rate:** 8–12% (industry average is 2–4%)  
**Design palette:**
- Deep Navy: `#1a2e4a`
- Trust Blue: `#1e6ba8`
- Action Orange: `#f97316`
- Clean White: `#f8fafc`
- Trust Green: `#22c55e`

---

## PHASE 1 — Project Scaffold

### Prompt 1A: Initialize the project

```
Create a new Next.js 14 project with App Router and TypeScript called "the-plumbing-company". Set up:

1. Install dependencies:
   - next, react, react-dom, typescript
   - tailwindcss, postcss, autoprefixer
   - @types/node, @types/react, @types/react-dom
   - lucide-react (for icons)
   - clsx (for conditional classnames)

2. Configure tailwind.config.ts with a custom theme extending the default:
   - colors:
     - navy: { DEFAULT: '#1a2e4a', light: '#243d5e', dark: '#0f1e30' }
     - brand: { DEFAULT: '#1e6ba8', light: '#2d8fd4', dark: '#155a8a' }
     - orange: { DEFAULT: '#f97316', light: '#fb923c', dark: '#ea6c0a' }
     - success: '#22c55e'
   - fontFamily:
     - sans: ['var(--font-body)', 'sans-serif']
     - display: ['var(--font-display)', 'sans-serif']
   - extend with custom box shadows and border radius values

3. Create a global CSS file with CSS custom properties matching the above

4. Set up the app directory structure:
   app/
     layout.tsx          (root layout with fonts, metadata)
     page.tsx            (homepage)
     services/
       page.tsx
       [slug]/
         page.tsx
     about/page.tsx
     contact/page.tsx
     blog/
       page.tsx
       [slug]/page.tsx
   components/
     layout/
       Header.tsx
       Footer.tsx
       EmergencyBar.tsx
       MobileCallBar.tsx
     sections/
       Hero.tsx
       ServicesGrid.tsx
       ReviewCarousel.tsx
       WhyUs.tsx
       ServiceAreaMap.tsx
       BookingForm.tsx
       FAQSection.tsx
       CTABanner.tsx
     ui/
       Button.tsx
       Badge.tsx
       ServiceCard.tsx
       ReviewCard.tsx
       TrustBadge.tsx
   lib/
     constants.ts        (phone number, address, services list, reviews data)
     utils.ts
   types/
     index.ts

5. In app/layout.tsx:
   - Import two Google Fonts: 'Barlow Condensed' (display, weight 600,700) and 'Source Sans 3' (body, weight 400,500,600)
   - Set default metadata: title template "%s | The Plumbing Company", description "Wilmington's most trusted plumbers. 24/7 emergency service, upfront pricing, 500+ 5-star reviews. Licensed & insured."
   - Add viewport meta for mobile
   - Include the EmergencyBar and MobileCallBar components

6. In lib/constants.ts export:
   - PHONE: '(555) 123-4567'
   - PHONE_HREF: 'tel:5551234567'
   - ADDRESS: '123 Market Street, Wilmington, DE 19801'
   - LICENSE: 'DE Lic. #MP-123456'
   - SERVICES array with 8 items: { slug, name, shortDesc, icon (lucide name), featured }
   - TRUST_ITEMS array: 3 items with icon, title, description
   - FAQ_ITEMS array: 6 common plumbing questions and answers
   - REVIEWS array: 6 sample 5-star reviews with name, location, text, date
```

---

### Prompt 1B: Create shared UI components

```
Using the project structure from Prompt 1A, create the following reusable UI components in components/ui/:

1. components/ui/Button.tsx
   - Props: variant ('primary' | 'secondary' | 'ghost' | 'outline'), size ('sm' | 'md' | 'lg'), href (optional), onClick, children, className, icon (optional lucide component)
   - primary: bg-orange, white text, hover darken, active scale-95, font-display font-semibold
   - secondary: bg-navy, white text, hover lighten
   - outline: border-2 border-orange, orange text, hover fill orange
   - ghost: transparent, navy text, hover bg-navy/10
   - All variants: rounded-md, transition-all, flex items-center gap-2
   - If href provided, render as Next.js Link; otherwise render as button

2. components/ui/Badge.tsx
   - Props: variant ('trust' | 'emergency' | 'success'), children
   - Small pill badge with dot indicator
   - trust: blue bg tint, navy text, blue dot
   - emergency: orange bg tint, orange text, orange pulse dot
   - success: green bg tint, green text, green dot

3. components/ui/TrustBadge.tsx
   - Displays a row of small trust chips: "BBB A+ Rated", "Google Guaranteed", "Licensed & Insured", "500+ Reviews"
   - Each chip has a small checkmark icon (lucide CheckCircle2 at 14px), gray text
   - Horizontal flex wrap layout

4. components/ui/ServiceCard.tsx
   - Props: name, shortDesc, slug, icon (lucide component), featured
   - Card with subtle navy border, white bg, hover: lift shadow + orange left border accent
   - Icon in orange circle, service name in display font, short desc in muted body
   - "Learn more →" link in orange at bottom
   - If featured: add a small "Popular" badge top-right

5. components/ui/ReviewCard.tsx
   - Props: name, location, text, date, rating (default 5)
   - White card, subtle shadow
   - Star row using filled star SVGs in orange
   - Reviewer name bold, location muted small
   - Review text italic in body font
   - Google logo watermark (small, bottom right)

6. In types/index.ts, export TypeScript interfaces for: Service, Review, FAQItem, TrustItem
```

---

## PHASE 2 — Layout Shell

### Prompt 2A: Emergency bar + header

```
Create two layout components:

1. components/layout/EmergencyBar.tsx
   - Full-width bar that sits above the header, NEVER scrolls away (sticky top-0 z-50)
   - Background: orange (#f97316)
   - Content: pulsing green dot + "24/7 Emergency Plumbing — We're Available Now" on the left
   - Phone number as a <a href="tel:..."> link on the right styled as a white pill button
   - On mobile: center the phone CTA, hide the long text
   - Height: 40px desktop, 44px mobile (tap target)

2. components/layout/Header.tsx
   - Sits below EmergencyBar, sticky
   - Background: deep navy (#1a2e4a), subtle bottom shadow
   - Left: Logo — "THE PLUMBING COMPANY" in Barlow Condensed 700, white, with a small pipe/wrench SVG icon before it in orange
   - Center (desktop only): Nav links — Services, About, Reviews, Blog, Service Areas — white, hover orange underline
   - Right: Phone number in orange bold + "Book Online" orange outline button
   - Mobile: hamburger menu icon (lucide Menu), opens a slide-down drawer with nav links + big call button at bottom
   - The mobile drawer should animate in smoothly (CSS transition translateY)
   - Use useState for mobile menu open/close
   - Add aria-labels for accessibility

3. components/layout/MobileCallBar.tsx
   - Fixed bottom bar, ONLY visible on mobile (md:hidden)
   - z-50, full width
   - Two equal-width buttons side by side:
     Left: "Call Now" with phone icon — orange bg, white text
     Right: "Book Online" with calendar icon — navy bg, white text
   - Height 56px, no border radius (flush to screen edges)
   - Add padding-bottom for iOS safe area: pb-[env(safe-area-inset-bottom)]
```

---

### Prompt 2B: Footer

```
Create components/layout/Footer.tsx:

Structure (dark navy background #0f1e30, white/muted text):

Row 1 — Logo + tagline + social icons
- Logo same as header
- Tagline: "Wilmington's most trusted plumbers since 2005"
- Social icons row: Facebook, Google, Yelp (lucide or simple SVG circles with letters)

Row 2 — 4-column grid:
  Col 1 - Services: list of 6 service links
  Col 2 - Company: About Us, Our Team, Reviews, Blog, Careers
  Col 3 - Service Areas: 6 Wilmington-area neighborhood names as links
  Col 4 - Contact:
    - Phone (click-to-call)
    - Address
    - Email
    - Hours: "Mon–Fri 7am–8pm, Sat–Sun 8am–6pm, 24/7 Emergency"

Row 3 — Bottom bar (border-top, smaller text):
- Left: "© 2025 The Plumbing Company. All rights reserved."
- Center: License number (DE Lic. #MP-123456)
- Right: Privacy Policy · Terms of Service

Styling notes:
- Links: muted gray, hover white
- Section headings: orange, uppercase, small tracking
- Mobile: stack all columns, reduce to single column
```

---

## PHASE 3 — Homepage Sections

### Prompt 3A: Hero section

```
Create components/sections/Hero.tsx — this is the most important section of the site.

Visual design:
- Full viewport height on desktop (min-h-screen), min-h-[600px] on mobile
- Background: deep navy (#1a2e4a) with a subtle geometric pattern overlay (use CSS background-image with SVG data URI of a diagonal pipe/grid pattern at 5% opacity)
- Left column (60% wide): content
- Right column (40% wide): image placeholder div with a rounded-xl border, showing "Team Photo" placeholder text with an icon — in production this will be a real photo of uniformed technicians

Left column content (top to bottom):
1. Trust badge row: "Licensed & Insured" + "Google Guaranteed" + "500+ 5-Star Reviews" using the TrustBadge component
2. H1 headline (Barlow Condensed 700, 52px desktop / 36px mobile, white):
   "Wilmington's Most Trusted Plumbers — Available 24/7"
3. Subheadline (Source Sans 3, 18px, slate-300):
   "Same-day service · Upfront pricing · No hidden fees · Satisfaction guaranteed"
4. CTA row: two buttons side by side
   - Primary: "Book Service Online" with arrow icon (orange, large)
   - Secondary: "Call (555) 123-4567" with phone icon (white outline)
5. Trust stats row: three small stats with dividers between them:
   "15+ Years" / "Experience"
   "500+" / "5-Star Reviews"  
   "24/7" / "Emergency Service"
   (stat number in orange display font, label in muted small)

Animations:
- On mount, stagger-reveal each element: trust badge (0ms), h1 (100ms), subheadline (200ms), CTAs (300ms), stats (400ms)
- Use CSS animation with opacity 0 → 1 and translateY(16px) → translateY(0)
- Use 'use client' directive

Mobile layout: Stack columns, image goes below content, reduce font sizes
```

---

### Prompt 3B: Services grid

```
Create components/sections/ServicesGrid.tsx:

Layout:
- Section padding: py-20
- White background
- Centered section header:
  - Small orange label above: "WHAT WE DO"
  - H2 (Barlow Condensed 600, 38px): "Complete Plumbing Services for Home & Business"
  - Subtext: "From emergency repairs to full installations — licensed experts you can trust"

Grid:
- 2 columns mobile, 3 columns tablet, 4 columns desktop
- 8 service cards using ServiceCard component
- Services to include:
  1. Emergency Plumbing (featured) — Zap icon
  2. Drain Cleaning — Waves icon
  3. Water Heater Repair/Install — Flame icon
  4. Leak Detection — Droplets icon
  5. Pipe Repair & Replacement — Wrench icon
  6. Bathroom Remodeling — Bath icon
  7. Sewer Line Services — ArrowDownCircle icon
  8. Gas Line Services — Wind icon

Below the grid:
- Centered text: "Don't see your problem? We handle all plumbing issues."
- Link: "View all services →" in orange
```

---

### Prompt 3C: Review carousel

```
Create components/sections/ReviewCarousel.tsx (use 'use client'):

This is a critical trust section. Design it to feel authentic, not promotional.

Header:
- Section background: light gray (#f8fafc)
- py-20 padding
- Left-aligned header (not centered):
  H2: "500+ Happy Customers Across Delaware"
  Below: Google rating display — Google logo + "4.9" in large bold + 5 filled orange stars + "(500+ reviews)"

Carousel:
- Shows 3 cards at once on desktop, 1 on mobile, 2 on tablet
- Auto-advances every 5 seconds, pauses on hover
- Manual prev/next arrow buttons (navy circles with white chevron icons)
- Dot indicators below
- Cards use ReviewCard component
- Add 6 sample reviews in the data covering: emergency repair, water heater, drain clog, general praise, quick response, professional team

Below carousel:
- Row of 4 platform badges: Google, Yelp, HomeAdvisor, BBB — each showing the company's rating on that platform
- "Read all reviews on Google →" text link
```

---

### Prompt 3D: Why Us section

```
Create components/sections/WhyUs.tsx:

Layout: Two columns on desktop — left is content, right is a "team photo" image placeholder

Left column:
- Small orange label: "WHY CHOOSE US"
- H2 (Barlow Condensed): "The Plumbing Company Difference"
- Body text: 2 sentences about being family-owned, licensed, transparent pricing
- 4 feature rows, each with:
  - Orange checkmark circle icon (lucide CheckCircle2)
  - Feature title (bold)
  - Feature description (muted)
  Features:
  1. "Upfront, Transparent Pricing" — No surprise bills. We give you the price before we start work.
  2. "Same-Day Emergency Response" — Most jobs completed same day. We answer at 2 AM.
  3. "Licensed & Fully Insured" — DE Lic. #MP-123456. Fully bonded and insured for your protection.
  4. "Satisfaction Guaranteed" — If you're not happy, we make it right. No questions asked.
- Below features: row of accreditation logos (BBB A+, Google Guaranteed, Home Advisor) — use simple text badges styled as logo-like elements

Right column:
- Large image placeholder with rounded-2xl
- Floating card overlaid bottom-left of the image:
  Background white, shadow, padding
  "John D., Owner" with a small avatar circle
  "Family-owned since 2005. We treat every home like our own."
```

---

### Prompt 3E: Booking form + FAQ

```
Create components/sections/BookingForm.tsx and components/sections/FAQSection.tsx:

BOOKING FORM:
- Background: deep navy (#1a2e4a)
- py-20 padding
- Two-column layout: left = form, right = contact info

Left — Form:
  Header: "Get a Free Estimate" (white, display font)
  Subtext: "We'll call you back within 5 minutes" (muted)
  Form fields (use 'use client', useState for form state):
  1. Full Name (text input)
  2. Phone Number (tel input)  
  3. Service Type (select dropdown with all 8 services + "Other")
  4. Brief description (textarea, 3 rows, optional)
  Submit button: full-width orange "Request Free Estimate →"
  Below button: small text "By submitting you agree to be contacted. We never spam."
  
  On submit: show a success state with green checkmark: "Thanks! We'll call you within 5 minutes."
  
  Input styling: dark navy bg, white border (opacity 30%), white placeholder, white text, focus ring orange

Right — Contact info:
  Three info blocks:
  - Phone: big orange number, "Available 24/7 for emergencies"
  - Email: contact@theplumbingco.com
  - Office: address + hours
  
  Plus a small map placeholder div (will be replaced with Google Maps embed)

FAQ SECTION:
- White background, py-20
- Centered header: "Frequently Asked Questions"
- Accordion component (use 'use client', useState for open index):
  6 FAQ items — clicking expands to show answer, smooth height transition
  FAQ items:
  1. Q: "How quickly can you respond to an emergency?" A: "We offer 24/7 emergency service and typically arrive within 60-90 minutes across Wilmington and surrounding New Castle County."
  2. Q: "Do you provide upfront pricing?" A: "Yes. We give you a firm quote before any work begins. No hourly rates, no surprise charges."
  3. Q: "Are you licensed and insured?" A: "Absolutely. We hold Delaware Master Plumber License #MP-123456 and carry full liability and workers' comp insurance."
  4. Q: "Do you offer financing?" A: "Yes, we offer 0% financing on qualifying jobs over $500. Ask us about payment plans."
  5. Q: "What areas do you serve?" A: "We serve Wilmington, Newark, and communities throughout northern Delaware — plus nearby southeastern Pennsylvania and Maryland when scheduling allows."
  6. Q: "Do you guarantee your work?" A: "All work is backed by our 1-year labor warranty plus manufacturer warranties on parts."
  
  Add JSON-LD schema markup for FAQPage in a <script type="application/ld+json"> tag inside the component
```

---

### Prompt 3F: CTA Banner + Service Areas

```
Create two final homepage sections:

1. components/sections/CTABanner.tsx
   - Full-width section with orange background
   - py-16 padding
   - Centered content:
     H2 (white, display font, large): "Plumbing Emergency? We're Ready Right Now."
     Subtext (white, 80% opacity): "Don't wait. Our team is standing by 24/7."
     Two buttons side by side:
       - "Call (555) 123-4567" — white bg, navy text, large
       - "Book Online" — white outline, white text, large
   - Add a subtle pattern (pipe dashes) in white at 5% opacity on the orange bg

2. components/sections/ServiceAreaMap.tsx
   - White background, py-20
   - Header: "Serving Wilmington & Northern Delaware" with subtitle
   - Left: a simple styled div acting as a map placeholder (gray rounded box with "Interactive Map" text — to be replaced with Google Maps embed)
   - Right: 
     H3: "Our Service Areas"
     Grid of neighborhood badges (blue bg, navy text pills):
     Wilmington, Newark, Hockessin, Bear, New Castle, Middletown, Pike Creek, Claymont
     Below the grid: "Same-day service available in all areas"
     CTA: "Check if we serve your area →" link
```

---

## PHASE 4 — Homepage Assembly + SEO

### Prompt 4A: Assemble the homepage

```
Update app/page.tsx to assemble the full homepage using all sections created in Phase 3.

Import and render sections in this exact order:
1. Hero
2. ServicesGrid
3. ReviewCarousel
4. WhyUs
5. CTABanner (first instance — after WhyUs)
6. BookingForm
7. FAQSection
8. ServiceAreaMap
9. CTABanner (second instance at the bottom — this is intentional, CTAs should be repeated)

Add Next.js metadata export:
- title: "The Plumbing Company | Wilmington, DE Plumbers — 24/7 Emergency Service"
- description: "Wilmington's most trusted plumbers. Licensed, insured, upfront pricing. Call (555) 123-4567 for 24/7 emergency plumbing service. 500+ 5-star reviews."
- keywords: plumber Wilmington DE, emergency plumber, drain cleaning, water heater repair Delaware
- openGraph: include title, description, and type: 'website'
- Add JSON-LD LocalBusiness schema in a <script type="application/ld+json">:
  {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "name": "The Plumbing Company",
    "telephone": "(555) 123-4567",
    "address": { "@type": "PostalAddress", "streetAddress": "123 Market St", "addressLocality": "Wilmington", "addressRegion": "DE", "postalCode": "19801" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$"
  }
```

---

### Prompt 4B: Individual service pages

```
Create a dynamic service page at app/services/[slug]/page.tsx.

This page template should work for any of the 8 services. It receives the slug as a param, looks up the service from lib/constants.ts, and renders:

1. Hero section (smaller than homepage):
   - Navy background
   - Breadcrumb: Home > Services > [Service Name]
   - H1: "[Service Name] in Wilmington, DE"
   - Subtext: "[Service short description]"
   - Two CTAs: Call Now + Book Online

2. Service detail section:
   - H2: "What's Included"
   - Bulleted list of 5–6 common tasks for this service
   - "How It Works" — 3-step process (Inspect → Quote → Fix)

3. Pricing transparency box:
   - "Typical cost range" with low/high estimate
   - Disclaimer about free quotes

4. Related reviews (3 reviews filtered to this service)

5. Related services grid (3 other service cards)

6. Final CTA banner

Also add generateStaticParams() to pre-render all service pages at build time.
Add appropriate metadata for each service page.
```

---

## PHASE 5 — Performance & Polish

### Prompt 5A: Performance optimizations

```
Apply the following performance optimizations across the project:

1. Images:
   - Replace all image placeholder divs with next/image components
   - Use placeholder="blur" with blurDataURL for all images
   - Set priority={true} on the hero image only
   - All other images: lazy loading (default)
   - Wrap all external image domains in next.config.js

2. Fonts:
   - Ensure Google Fonts load via next/font/google with display: 'swap'
   - Use CSS variables to pass fonts to Tailwind

3. Add a loading.tsx file in the app directory showing a skeleton UI

4. Add error.tsx for graceful error handling

5. In next.config.js:
   - Enable image optimization
   - Set headers for cache-control on static assets
   - Enable React strict mode

6. Create a sitemap.ts (app/sitemap.ts) that generates XML sitemap dynamically listing:
   - Homepage
   - All service pages
   - About, Contact, Blog pages

7. Create app/robots.ts returning appropriate robots.txt content

8. Add rel="preconnect" for Google Fonts and analytics in the root layout
```

---

### Prompt 5B: Accessibility + mobile polish

```
Audit and improve accessibility and mobile experience across all components:

1. Accessibility:
   - All interactive elements must have aria-labels
   - Form inputs must have associated <label> elements (can be sr-only)
   - Images must have descriptive alt text
   - Focus rings must be visible (add focus-visible:ring-2 ring-orange-500)
   - Add skip-to-content link as first element in layout
   - Accordion FAQ must use proper aria-expanded and aria-controls
   - Review carousel must have aria-live region for screen readers
   - Color contrast: ensure all text meets WCAG AA (4.5:1 ratio minimum)

2. Mobile:
   - Test and fix all touch targets: minimum 44×44px
   - The MobileCallBar must not overlap page content — add pb-14 to main content on mobile
   - Swipe gesture on review carousel (use touch events: touchstart, touchend, calculate swipe direction)
   - Ensure all modals/drawers trap focus correctly
   - Test hamburger menu at 320px viewport width

3. Micro-interactions:
   - Add hover animations to all ServiceCard components (translateY -4px, shadow increase)
   - Button press feedback: scale(0.97) on active state
   - Form field focus: subtle orange glow (box-shadow: 0 0 0 3px rgba(249,115,22,0.2))
   - Smooth scroll behavior on anchor links: add scroll-behavior: smooth to html element

4. Add a "Back to Top" floating button that appears after scrolling 400px:
   - Fixed bottom-right on desktop (above MobileCallBar on mobile)
   - Navy circle with white arrow icon
   - Smooth scroll to top on click
   - Fade in/out with CSS transition
```

---

### Prompt 5C: Analytics + conversion tracking setup

```
Set up analytics and conversion tracking:

1. Create lib/analytics.ts with helper functions:
   - trackPhoneClick(location: string) — fires when phone number is clicked
   - trackFormSubmit(serviceType: string) — fires on booking form submit
   - trackCTAClick(ctaName: string, location: string) — fires on any CTA button click

2. Create a GoogleAnalytics component (components/analytics/GoogleAnalytics.tsx):
   - Accepts measurementId prop from env variable
   - Loads gtag.js via next/script with strategy="afterInteractive"
   - Exports the trackEvent function

3. Add the GoogleAnalytics component to root layout using NEXT_PUBLIC_GA_ID env variable

4. Wire up tracking calls:
   - Header phone number click → trackPhoneClick('header')
   - EmergencyBar phone click → trackPhoneClick('emergency-bar')
   - MobileCallBar call button → trackPhoneClick('mobile-bar')
   - Hero CTA click → trackCTAClick('book-online', 'hero')
   - BookingForm submit → trackFormSubmit(selectedService)

5. Create .env.local.example with all required environment variables:
   NEXT_PUBLIC_GA_ID=
   NEXT_PUBLIC_PHONE=
   NEXT_PUBLIC_SITE_URL=
   GOOGLE_MAPS_API_KEY=
   
6. Add a CookieConsent component (simple banner, bottom of screen):
   - "We use cookies to improve your experience."
   - "Accept" and "Decline" buttons
   - Store consent in localStorage
   - Only load GA script if consent is given
```

---

## PHASE 6 — Optional Enhancements

### Prompt 6A: Live chat widget integration

```
Integrate a live chat widget placeholder:

1. Create components/ui/ChatWidget.tsx ('use client'):
   - A floating button (bottom-right, above back-to-top button)
   - Navy circle with white message-circle icon (lucide)
   - Pulsing orange dot indicator (shows agent is "available")
   - On click: opens a simple chat popup card (or redirects to Tidio/Intercom embed)
   
2. Add a comment block showing how to replace with real Tidio embed:
   // To integrate Tidio: 
   // 1. Sign up at tidio.com
   // 2. Add your Tidio script key to .env.local as NEXT_PUBLIC_TIDIO_KEY
   // 3. Replace this component with: <script src="//code.tidio.co/{key}.js" async></script>
   
3. Show the widget on all pages via root layout
4. On mobile: position above the MobileCallBar, not overlapping it
```

---

### Prompt 6B: Blog/content section

```
Create a basic blog structure for SEO:

1. app/blog/page.tsx:
   - Header: "Plumbing Tips & Guides"
   - Subtitle: "Expert advice from licensed Wilmington, DE plumbers"
   - Grid of 6 blog post preview cards
   - Each card: thumbnail placeholder, category tag, title, excerpt, "Read more →" link
   - Sample posts:
     "5 Signs You Need to Replace Your Water Heater"
     "How to Unclog a Drain Without Chemicals"
     "What to Do in a Plumbing Emergency (Step by Step)"
     "How Much Does a Plumber Cost in Delaware?"
     "Preventive Plumbing Maintenance Checklist"
     "Winter Plumbing Tips: Preventing Frozen Pipes"

2. app/blog/[slug]/page.tsx:
   - Full blog post layout with sidebar
   - Sidebar contains: sticky CTA card ("Need a plumber now?"), related posts list
   - Add Article JSON-LD schema
   - Reading time estimate

3. In next.config.js or middleware: set cache headers for blog pages (revalidate every 3600s)
```

---

### Prompt 6C: Google Maps service area

```
Add a real interactive map to the ServiceAreaMap section:

1. Install @react-google-maps/api

2. Create components/ui/ServiceAreaMapEmbed.tsx ('use client'):
   - Loads Google Maps using GOOGLE_MAPS_API_KEY from env
   - Centers on Wilmington, DE (lat: 39.7447, lng: -75.5484)
   - Zoom level 10
   - Adds markers for key service area towns (e.g. Wilmington, Newark, Hockessin)
   - Adds a semi-transparent blue polygon overlay showing the service boundary
   - Custom map style (dark navy-tinted map matching brand colors)
   - On marker click: show info window with "We serve [area]" + "Book Service" button

3. Wrap in Suspense with the existing placeholder as fallback

4. Only load the map component on client side to avoid SSR issues:
   import dynamic from 'next/dynamic'
   const Map = dynamic(() => import('@/components/ui/ServiceAreaMapEmbed'), { ssr: false })
```

---

## Quick Reference: File Structure

```
the-plumbing-company/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── blog/
│       ├── page.tsx
│       └── [slug]/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── EmergencyBar.tsx
│   │   └── MobileCallBar.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── ReviewCarousel.tsx
│   │   ├── WhyUs.tsx
│   │   ├── CTABanner.tsx
│   │   ├── BookingForm.tsx
│   │   ├── FAQSection.tsx
│   │   └── ServiceAreaMap.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── TrustBadge.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ReviewCard.tsx
│   │   └── ChatWidget.tsx
│   └── analytics/
│       └── GoogleAnalytics.tsx
├── lib/
│   ├── constants.ts
│   ├── analytics.ts
│   └── utils.ts
├── types/
│   └── index.ts
├── public/
│   └── images/
├── .env.local.example
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Tips for Using This in Cursor

1. **Work in order** — each prompt assumes the previous is complete
2. **Use Cursor's Composer** (Cmd+I) for multi-file tasks like Phase 1A
3. **Use inline edit** (Cmd+K) for quick component tweaks
4. **After each prompt**, run `npm run dev` and check the browser before moving on
5. **If a component breaks**, paste the error into Cursor chat and ask it to fix
6. **For the review carousel**, tell Cursor to test swipe on mobile using Chrome DevTools device emulation
7. **Final check**: run `npm run build` — fix any TypeScript errors before deployment

---

*Generated for The Plumbing Company website project. Stack: Next.js 14 + Tailwind CSS + TypeScript.*
