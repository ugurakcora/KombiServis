import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kombi Tamiri | Mert Teknik",
  description:
    "Tüm marka ve model kombilerde profesyonel tamir hizmeti. Hızlı, güvenilir ve garantili kombi tamir servisi.",
};

const KombiTamiri = () => {
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
                  Profesyonel Kombi Tamir Hizmeti
                </h1>
                <p className="text-lg mb-6">
                  Kombileriniz arızalandığında, Mert Teknik'in uzman
                  teknisyenleri yanınızda. Tüm marka ve modellerde hızlı,
                  güvenilir ve garantili tamir hizmeti sunuyoruz.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/iletisim" className="btn btn-secondary">
                    Servis Talebi Oluşturun
                  </Link>
                  <a
                    href="tel:+905530105040"
                    className="btn bg-white text-primary-700 hover:bg-gray-100 px-4"
                  >
                    Acil Servis Hattı
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="bg-white p-2 rounded-lg shadow-lg">
                  <div className="relative h-80 md:h-80">
                    <Image
                      src="/images/services/kombi-tamiri.jpg"
                      alt="Kombi tamiri yapan teknisyen"
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
                Kombi Arızalarında Uzman Çözümler
              </h2>
              <p className="mb-6">
                Kombilerinizde oluşabilecek her türlü arıza için profesyonel
                çözümler sunuyoruz. Deneyimli teknisyenlerimiz, modern
                ekipmanlar ve orijinal yedek parçalar kullanarak kombilerinizi
                hızlı ve kalıcı şekilde tamir ediyoruz.
              </p>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Sık Karşılaşılan Kombi Arızaları
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Su basıncı düşmesi veya yükselmesi</li>
                    <li>Kombinin ateşleme yapmaması</li>
                    <li>Sıcak su gelmemesi</li>
                    <li>Peteklerde zayıf ısınma</li>
                    <li>Gürültülü çalışma</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Elektronik kart arızaları</li>
                    <li>Pompa arızaları</li>
                    <li>Gaz valfi sorunları</li>
                    <li>NTC sensör arızaları</li>
                    <li>Eşanjör tıkanıklığı</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Tamir Sürecimiz
              </h2>
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Arıza Tespiti
                      </h3>
                      <p>
                        Teknisyenlerimiz kombinizdeki arızayı detaylı şekilde
                        inceleyerek sorunun kaynağını tespit eder.
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
                        Fiyat Teklifi
                      </h3>
                      <p>
                        Arıza tespitinden sonra, gerekli işlemler ve yedek
                        parçalar için şeffaf bir fiyat teklifi sunulur.
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
                        Tamir İşlemi
                      </h3>
                      <p>
                        Onayınız alındıktan sonra, gerekli tamir işlemleri uzman
                        teknisyenlerimiz tarafından gerçekleştirilir.
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
                        Test ve Kontrol
                      </h3>
                      <p>
                        Tamir işlemi tamamlandıktan sonra, kombinin düzgün
                        çalıştığından emin olmak için detaylı testler yapılır.
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
                        Garanti ve Takip
                      </h3>
                      <p>
                        Yapılan tüm tamir işlemleri ve değiştirilen parçalar
                        için garanti sağlanır. Sonrasında da düzenli takip
                        hizmeti sunulur.
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
                  <li>20+ yıllık sektör deneyimi</li>
                  <li>Tüm marka ve modellerde uzman servis</li>
                  <li>Orijinal yedek parça garantisi</li>
                  <li>Şeffaf fiyatlandırma politikası</li>
                  <li>7/24 acil servis hizmeti</li>
                  <li>İşçilik ve parça garantisi</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Hizmet Verdiğimiz Kombi Markaları
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  Vaillant
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  Buderus
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  Viessmann
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  Baymak
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  Bosch
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  Demirdöküm
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  Ariston
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  ECA
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  Ferroli
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  Protherm
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  Alarko
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  Daikin
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Kombi Tamiri İçin Hemen Arayın
                </h2>
                <p className="mb-6">
                  Kombilerinizle ilgili sorunlarda zaman kaybetmeyin. Ordu
                  Kombi'nin uzman ekibiyle hemen iletişime geçin.
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

export default KombiTamiri;
