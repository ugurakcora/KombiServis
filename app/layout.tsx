import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "../components/CookieConsent";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mert Teknik - Kombi ve Tesisat Teknik Servisi",
  description: "Profesyonel kombi bakım, onarım ve servis hizmetleri",
  keywords:
    "kombi servisi, kombi bakımı, kombi tamiri, Mert Teknik kombi servisi, kombi arıza",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome",
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Mert Teknik - Kombi ve Tesisat Teknik Servisi",
    description: "Profesyonel kombi bakım, onarım ve servis hizmetleri",
    url: "https://www.kombiservisiordu.com",
    siteName: "Mert Teknik - Kombi ve Tesisat Teknik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="min-h-screen bg-gray-50">
        {children}
        <CookieConsent />
        <WhatsAppButton />
      </body>
    </html>
  );
}
