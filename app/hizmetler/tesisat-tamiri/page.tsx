import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tesisat Tamiri | Mert Teknik",
  description:
    "Profesyonel tesisat tamiri hizmeti. Su tesisatı, ısıtma tesisatı, kaçak tamiri ve tıkanıklık açma. 7/24 acil servis.",
};

const TesisatTamiri = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-primary-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Profesyonel Tesisat Tamiri Hizmeti
                </h1>
                <p className="text-lg mb-6">
                  Su ve ısıtma tesisatı sorunlarınız için 7/24 profesyonel
                  hizmet. Kaçak tamiri, tıkanıklık açma, boru değişimi ve tüm
                  tesisat işlerinizde yanınızdayız.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/iletisim" className="btn btn-secondary">
                    Acil Servis Talebi
                  </Link>
                  <a
                    href="tel:+905530105040"
                    className="btn bg-white text-primary-700 hover:bg-gray-100 px-4"
                  >
                    7/24 Acil Hat
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="bg-white p-2 rounded-lg shadow-lg">
                  <div className="relative h-80 md:h-80">
                    <Image
                      src="/images/services/tesisat-tamiri.png"
                      alt="Tesisat tamiri yapan teknisyen"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                      className="object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Tesisat Sorunlarında Uzman Çözümler
              </h2>
              <p className="mb-6">
                Su ve ısıtma tesisatı sorunları günlük yaşamınızı olumsuz
                etkileyebilir. Mert Teknik olarak, 7/24 hizmet veren uzman
                ekibimizle tüm tesisat sorunlarınıza hızlı ve kalıcı çözümler
                sunuyoruz.
              </p>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Tesisat Tamiri Hizmetlerimiz
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Su kaçağı tespiti ve tamiri</li>
                  <li>Boru patlaması onarımı</li>
                  <li>Tıkanıklık açma (lavabo, klozet, gider)</li>
                  <li>Musluk ve armatür değişimi</li>
                  <li>Isıtma sistemi tamiri</li>
                  <li>Radyatör montajı ve tamiri</li>
                  <li>Gizli kaçak tespiti</li>
                  <li>Acil müdahale hizmeti</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Hizmet Alanlarımız
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">
                    Su Tesisatı
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Su kaçağı tamiri</li>
                    <li>• Boru patlaması onarımı</li>
                    <li>• Musluk ve armatür değişimi</li>
                    <li>• Lavabo ve klozet montajı</li>
                    <li>• Su sayacı değişimi</li>
                    <li>• Şofben bağlantısı</li>
                    <li>• Tıkanıklık açma</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">
                    Isıtma Tesisatı
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Kombi bağlantısı</li>
                    <li>• Radyatör montajı</li>
                    <li>• Petek temizliği</li>
                    <li>• Yerden ısıtma sistemi</li>
                    <li>• Vana değişimi</li>
                    <li>• Sistem basınç ayarı</li>
                    <li>• Kalorifer borusu değişimi</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Yaygın Tesisat Sorunları
              </h2>
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Su Kaçağı</h3>
                      <p className="text-gray-600">
                        Boru ekleri, musluk altları veya gizli boru kaçakları.
                        Hızlı tespit ve onarım gerekir. Su faturalarında artış
                        ve nem lekelerine dikkat edin.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Düşük Su Basıncı
                      </h3>
                      <p className="text-gray-600">
                        Musluktan zayıf su gelmesi, tıkanıklık veya boru
                        daralmalarından kaynaklanabilir. Sistem temizliği veya
                        boru değişimi gerekebilir.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-3 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Tıkanıklık</h3>
                      <p className="text-gray-600">
                        Lavabo, klozet, gider tıkanıklıkları. Özel ekipmanlarla
                        açılır. Kimyasal yöntemler veya mekanik müdahale
                        uygulanır.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Isıtma Sorunu
                      </h3>
                      <p className="text-gray-600">
                        Radyatörlerin ısınmaması, sistem dengesizliği veya hava
                        kaçağı sorunları. Sistem temizliği ve ayarı gerekebilir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Çalışma Sürecimiz
              </h2>
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Çağrı ve Randevu
                      </h3>
                      <p>
                        7/24 çağrı merkezimizden randevu alın. Acil durumlarda
                        aynı gün müdahale sağlanır.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Keşif ve Teşhis
                      </h3>
                      <p>
                        Uzman teknisyenimiz gelir ve sorunu tespit eder. Gerekli
                        malzeme ve işlem süresi belirlenir.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Fiyat Teklifi
                      </h3>
                      <p>
                        Net ve şeffaf fiyat teklifi sunulur. Malzeme ve işçilik
                        ücretleri ayrı ayrı belirtilir.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Onarım İşlemi
                      </h3>
                      <p>
                        Onayınızla hızlı ve güvenli onarım yapılır. Kaliteli
                        malzemeler ve uygun teknikler kullanılır.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Test ve Teslim
                      </h3>
                      <p>
                        Sistem test edilir ve garanti belgesi verilir. Kullanım
                        hakkında bilgi verilir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3">
                  Neden Mert Teknik'i Tercih Etmelisiniz?
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>7/24 acil servis hizmeti</li>
                  <li>Deneyimli ve sertifikalı teknisyenler</li>
                  <li>Modern ekipman ve kaliteli malzemeler</li>
                  <li>Şeffaf ve rekabetçi fiyatlandırma</li>
                  <li>Tüm işçilik ve malzemelerimizde garanti</li>
                  <li>Hızlı müdahale ve kalıcı çözümler</li>
                </ul>
              </div>

              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Tesisat Sorununuz İçin Hemen İletişime Geçin
                </h2>
                <p className="mb-6">
                  Su kaçağı, tıkanıklık veya ısıtma sorunlarınız için Mert
                  Teknik'in uzman ekibiyle hemen iletişime geçin.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/iletisim" className="btn btn-primary">
                    Servis Talebi
                  </Link>
                  <a href="tel:+905530105040" className="btn btn-secondary">
                    7/24 Acil: 0553 010 50 40
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TesisatTamiri;
