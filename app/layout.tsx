import type { Metadata } from "next";
import localFont from "next/font/local";
import { INDEXABLE, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "./lib/seo";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-SDHFM6J83L";

const geistSans = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "Zikorra",
  robots: { index: INDEXABLE, follow: true },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    locale: "en_NG",
    siteName: "Zikorra",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/images/social/zikorra-share.png", width: 1200, height: 630, alt: "Zikorra — home services and verified artisans" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/images/social/zikorra-share.png", alt: "Zikorra — home services and verified artisans" }],
  },
  icons: { apple: "/apple-icon.png" },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#0b1220]">
        <a href="#main-content" className="skip-link">Skip to content</a>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
