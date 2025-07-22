import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-primary-100 rounded-full mb-6">
              <svg
                className="w-16 h-16 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.485 0-4.735-1.133-6.222-2.916C4.267 10.887 3 9.01 3 7c0-4.418 7.164-8 12-8s9 3.582 9 8c0 2.01-1.267 3.887-2.778 5.084A7.962 7.962 0 0112 15z"
                />
              </svg>
            </div>
          </div>

          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">
              4<span className="text-primary-600">0</span>4
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Sayfa Bulunamadı
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Aradığınız sayfa kaldırılmış, taşınmış veya hiç var olmamış
              olabilir. Merak etmeyin, size yardımcı olmak için buradayız!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/" className="btn btn-primary px-8 py-3 text-lg">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Ana Sayfaya Dön
            </Link>
            <Link
              href="/iletisim"
              className="btn btn-secondary px-8 py-3 text-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Bizimle İletişime Geç
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Popüler Sayfalar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/hizmetler"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <svg
                  className="w-8 h-8 text-primary-600 mr-3 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">Hizmetlerimiz</h4>
                  <p className="text-sm text-gray-600">Kombi servisleri</p>
                </div>
              </Link>

              <Link
                href="/hizmetler/acil-servis"
                className="flex items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors group"
              >
                <svg
                  className="w-8 h-8 text-red-600 mr-3 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-left">
                  <h4 className="font-semibold text-red-900">Acil Servis</h4>
                  <p className="text-sm text-red-600">7/24 hizmet</p>
                </div>
              </Link>

              <Link
                href="/hakkimizda"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <svg
                  className="w-8 h-8 text-primary-600 mr-3 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">Hakkımızda</h4>
                  <p className="text-sm text-gray-600">Firmamız</p>
                </div>
              </Link>

              <Link
                href="/blog"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <svg
                  className="w-8 h-8 text-primary-600 mr-3 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">Blog</h4>
                  <p className="text-sm text-gray-600">Faydalı ipuçları</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 p-6 bg-primary-50 border border-primary-200 rounded-lg">
            <h3 className="text-lg font-semibold text-primary-900 mb-2">
              Hâlâ aradığınızı bulamadınız mı?
            </h3>
            <p className="text-primary-700 mb-4">
              Size yardımcı olmaktan memnuniyet duyarız. Hemen bizi arayın!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="tel:+905530105040"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                0553 010 50 40
              </a>
              <a
                href="https://wa.me/905530105040"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
