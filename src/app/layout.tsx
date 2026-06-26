import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

// Self-hosted via next/font — generates size-adjusted fallback metrics that
// eliminate the layout shift (CLS) the prior <link>+swap approach caused.
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bebas",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-dm",
});

const SITE_URL = "https://siding.royaltyroofing.org";
const TITLE = "Free Siding Estimate | Royalty Roofing and Siding | Omaha, NE";
const DESCRIPTION =
  "Get a free, no-obligation siding estimate from Omaha's most trusted siding contractor. Family owned since 2010, 4.9 stars on Google with 500+ reviews, and Best of Omaha 7 years running. We call within 1 business day.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  // Paid-traffic landing page: keep it out of the organic index.
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
  icons: { icon: { url: "/favicon.ico", type: "image/x-icon" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: "Royalty Roofing and Siding",
    locale: "en_US",
    images: [
      {
        url: "/images/hero/hero-1920.jpg",
        width: 1200,
        height: 900,
        alt: "Omaha home with new siding installed by Royalty Roofing and Siding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/hero/hero-1920.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1220",
};

const ANALYTICS_ENDPOINT = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;
const ANALYTICS_WEBSITE_ID = process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID;

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Royalty Roofing and Siding",
  image: `${SITE_URL}/images/hero/hero-1920.jpg`,
  url: SITE_URL,
  telephone: "+1-402-216-8850",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Omaha",
    addressRegion: "NE",
    addressCountry: "US",
  },
  areaServed: { "@type": "City", name: "Omaha, NE" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`bg-background ${bebasNeue.variable} ${dmSans.variable}`}>
      <head>
        {/* Preload the LCP hero image (AVIF, responsive) so it starts downloading immediately */}
        <link
          rel="preload"
          as="image"
          type="image/avif"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...({
            imageSrcSet:
              "/images/hero/hero-640.avif 640w, /images/hero/hero-1024.avif 1024w, /images/hero/hero-1920.avif 1920w",
            imageSizes: "100vw",
            fetchPriority: "high",
          } as any)}
        />
        {/* LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
        />
        {/* Google tag (gtag.js) — loaded after the page is interactive */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-931355603" strategy="afterInteractive" />
        <Script id="gtag-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-931355603');`}
        </Script>
      </head>
      <body>
        {children}
        {ANALYTICS_ENDPOINT && ANALYTICS_WEBSITE_ID && (
          <Script defer src={`${ANALYTICS_ENDPOINT}/umami`} data-website-id={ANALYTICS_WEBSITE_ID} strategy="lazyOnload" />
        )}
      </body>
    </html>
  );
}
