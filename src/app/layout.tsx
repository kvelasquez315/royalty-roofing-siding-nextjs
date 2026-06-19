import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free Siding Estimate | Royalty Roofing and Siding | Omaha, NE",
  description:
    "Get a free siding estimate from Omaha's most trusted siding contractor. Family owned since 2010. 4.9 stars on Google. Best of Omaha 7 years running. No pressure, no obligation.",
  robots: { index: false, follow: false },
  icons: { icon: { url: "/favicon.ico", type: "image/x-icon" } },
  openGraph: {
    title: "Free Siding Estimate | Royalty Roofing and Siding | Omaha, NE",
    description:
      "Get a free siding estimate from Omaha's most trusted siding contractor. Family owned since 2010. 4.9 stars on Google. Best of Omaha 7 years running. No pressure, no obligation.",
    type: "website",
    url: "https://siding.royaltyroofing.org",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const ANALYTICS_ENDPOINT = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;
const ANALYTICS_WEBSITE_ID = process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        {/* Google tag (gtag.js) */}
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
          <Script defer src={`${ANALYTICS_ENDPOINT}/umami`} data-website-id={ANALYTICS_WEBSITE_ID} strategy="afterInteractive" />
        )}
      </body>
    </html>
  );
}
