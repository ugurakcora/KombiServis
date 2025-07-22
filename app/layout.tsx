import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mert Teknik - Kombi ve Tesisat Teknik Servisi",
  description: "Profesyonel kombi bakım, onarım ve servis hizmetleri",
  keywords:
    "kombi servisi, kombi bakımı, kombi tamiri, Mert Teknik kombi servisi, kombi arıza",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg",
        color: "#2563eb",
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
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
