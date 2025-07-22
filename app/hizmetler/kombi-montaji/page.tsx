import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kombi Montajı | Mert Teknik",
  description:
    "Profesyonel kombi montaj hizmeti. Tüm marka ve modellerde güvenli, hızlı ve garantili kombi kurulum hizmeti.",
};

const KombiMontaji = () => {
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
                  Profesyonel Kombi Montaj Hizmeti
                </h1>
                <p className="text-lg mb-6">
                  Yeni kombilerinizin montajını uzman ekibimize güvenle
                  bırakabilirsiniz. Tüm marka ve modellerde, güvenli ve
                  garantili montaj hizmeti sunuyoruz.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/iletisim" className="btn btn-secondary">
                    Montaj Teklifi Alın
                  </Link>
                  <a
                    href="tel:+905530105040"
                    className="btn bg-white text-primary-700 hover:bg-gray-100 px-4"
                  >
                    Hemen Arayın
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="bg-white p-2 rounded-lg shadow-lg">
                  <div className="relative h-80 md:h-80">
                    <Image
                      src="/images/services/kombi-montaj.png"
                      alt="Kombi montajı yapan teknisyen"
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
                Doğru Kombi Montajının Önemi
              </h2>
              <p className="mb-6">
                Kombilerinizin verimli çalışması, uzun ömürlü olması ve
                güvenliği için doğru montaj hayati önem taşır. Yanlış yapılan
                montajlar, enerji kaybına, arızalara ve hatta güvenlik
                sorunlarına yol açabilir.
              </p>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Profesyonel Kombi Montajı Neleri İçerir?
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Montaj öncesi keşif ve planlama</li>
                  <li>Eski kombinin sökülmesi (varsa)</li>
                  <li>Yeni kombinin uygun konumlandırılması</li>
                  <li>Baca bağlantılarının yapılması</li>
                  <li>Su, gaz ve elektrik bağlantıları</li>
                  <li>Sistem testi ve basınç ayarı</li>
                  <li>İlk çalıştırma ve ayarlar</li>
                  <li>Kullanım eğitimi</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Montaj Sürecimiz
              </h2>
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Keşif ve Planlama
                      </h3>
                      <p>
                        Uzman teknisyenlerimiz evinizi ziyaret ederek, en uygun
                        kombi tipi, kapasitesi ve montaj konumu için
                        değerlendirme yapar.
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
                        Teklif ve Anlaşma
                      </h3>
                      <p>
                        Keşif sonrası, montaj işlemi için detaylı ve şeffaf bir
                        fiyat teklifi sunulur. Anlaşma sağlandıktan sonra montaj
                        için randevu oluşturulur.
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
                        Eski Kombinin Sökülmesi
                      </h3>
                      <p>
                        Eğer eski bir kombi değişimi yapılıyorsa, öncelikle
                        mevcut kombi güvenli şekilde sökülür ve uygun şekilde
                        bertaraf edilir.
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
                        Yeni Kombi Montajı
                      </h3>
                      <p>
                        Yeni kombi, belirlenen konuma monte edilir. Tüm su, gaz
                        ve elektrik bağlantıları, standartlara uygun şekilde
                        yapılır.
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
                        Baca Bağlantısı
                      </h3>
                      <p>
                        Kombinin baca bağlantısı, güvenlik standartlarına uygun
                        şekilde yapılır. Hermetik veya konvansiyonel baca
                        sistemleri kurulur.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      6
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Test ve Devreye Alma
                      </h3>
                      <p>
                        Montaj tamamlandıktan sonra, tüm sistem test edilir, gaz
                        kaçağı kontrolü yapılır ve kombi ilk kez çalıştırılır.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      7
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Kullanım Eğitimi ve Garanti
                      </h3>
                      <p>
                        Montaj tamamlandığında, kombinin verimli kullanımı
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
                  <li>Yetkilendirilmiş ve sertifikalı montaj ekibi</li>
                  <li>Tüm marka ve modellerde uzmanlık</li>
                  <li>Standartlara uygun, güvenli montaj</li>
                  <li>Montaj sonrası destek ve bakım hizmetleri</li>
                  <li>Rekabetçi fiyatlar ve şeffaf fiyatlandırma</li>
                  <li>İşçilik ve montaj garantisi</li>
                </ul>
              </div>

              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Kombi Montajı İçin Hemen Bize Ulaşın
                </h2>
                <p className="mb-6">
                  Yeni kombilerinizin güvenli ve profesyonel montajı için Ordu
                  Kombi'nin uzman ekibiyle iletişime geçin.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/iletisim" className="btn btn-primary">
                    İletişim Formu
                  </Link>
                  <a href="tel:+905530105040" className="btn btn-secondary">
                    0553 010 50 40
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

export default KombiMontaji;
