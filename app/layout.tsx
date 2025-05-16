import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ordu Kombi Servisi",
  description:
    "Ordu bölgesinde profesyonel kombi bakım, onarım ve servis hizmetleri",
  keywords:
    "kombi servisi, kombi bakımı, kombi tamiri, Ordu kombi servisi, kombi arıza",
  robots: "index, follow",
  openGraph: {
    title: "Ordu Kombi Servisi",
    description:
      "Ordu bölgesinde profesyonel kombi bakım, onarım ve servis hizmetleri",
    url: "https://www.ordukombi.com",
    siteName: "Ordu Kombi Servisi",
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
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
