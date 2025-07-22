import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kombi Yedek Parça ve Aksesuar | Mert Teknik",
  description:
    "Orijinal kombi yedek parçaları ve aksesuarları. Tüm marka ve modeller için uygun fiyatlı, kaliteli yedek parça hizmeti.",
};

const KombiYedekParca = () => {
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
                  Orijinal Kombi Yedek Parça ve Aksesuar
                </h1>
                <p className="text-lg mb-6">
                  Kombilerinizin uzun ömürlü ve verimli çalışması için orijinal
                  yedek parçalar ve kaliteli aksesuarlar. Mert Teknik olarak,
                  tüm marka ve modeller için geniş ürün yelpazesi ile
                  hizmetinizdeyiz.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/iletisim" className="btn btn-secondary">
                    Parça Sorgula
                  </Link>
                  <a
                    href="tel:+905530105040"
                    className="btn bg-white text-primary-700 hover:bg-gray-100 px-4"
                  >
                    Acil Parça Hattı
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="bg-white p-2 rounded-lg shadow-lg">
                  <div className="relative h-80 md:h-80">
                    <Image
                      src="/images/services/kombi-yedek-parca.jpg"
                      alt="Kombi yedek parça ve aksesuar hizmeti"
                      fill
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
                Neden Orijinal Yedek Parça Kullanmalısınız?
              </h2>
              <p className="mb-6">
                Kombi yedek parçalarında kalite, güvenlik ve uyumluluk çok
                önemlidir. Orijinal parçalar, kombilerinizin garanti kapsamında
                kalmasını sağlar, optimal performans sunar ve uzun ömür
                garantisi verir.
              </p>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Yedek Parça Hizmetimiz Neleri İçerir?
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Arızanın teşhisi ve parça ihtiyacının belirlenmesi</li>
                  <li>Orijinal yedek parçanın temini</li>
                  <li>Profesyonel montaj hizmeti</li>
                  <li>Sistem testleri ve kontrolü</li>
                  <li>Parça ve işçilik garantisi</li>
                  <li>Teknik destek ve danışmanlık</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Yedek Parça Kategorilerimiz
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">
                    Ana Parçalar
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Isı Eşanjörü</li>
                    <li>• Yanma Odası</li>
                    <li>• Gaz Valfi</li>
                    <li>• Pompa Grubu</li>
                    <li>• Elektronik Kart</li>
                    <li>• Fan Motoru</li>
                    <li>• Ekspanzyon Tankı</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">
                    Kontrol ve Sensörler
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Sıcaklık Sensörü</li>
                    <li>• Basınç Sensörü</li>
                    <li>• Akış Sensörü</li>
                    <li>• Termostat</li>
                    <li>• Kumanda Paneli</li>
                    <li>• Oda Termostatı</li>
                    <li>• Programlanabilir Termostat</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">
                    Güvenlik Parçaları
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Emniyet Valfi</li>
                    <li>• Basınç Valfi</li>
                    <li>• Gaz Kaçak Sensörü</li>
                    <li>• Aşırı Isınma Koruması</li>
                    <li>• Duman Sensörü</li>
                    <li>• Yanma Güvenlik Sistemi</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-600">
                    Aksesuarlar
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Baca Borusu</li>
                    <li>• Hava Alma Borusu</li>
                    <li>• Kondenzat Borusu</li>
                    <li>• Gaz Bağlantı Hortumu</li>
                    <li>• Su Filtresi</li>
                    <li>• Manyetik Filtre</li>
                    <li>• Dolum Hortumu</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Parça Tedarik Sürecimiz
              </h2>
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Arıza Teşhisi
                      </h3>
                      <p>
                        Uzman teknisyenlerimiz kombinizdeki arızayı detaylı
                        şekilde inceleyerek hangi parçanın değişmesi gerektiğini
                        tespit eder.
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
                        Parça Sorgulama
                      </h3>
                      <p>
                        Kombinin marka, model ve seri numarasına göre orijinal
                        yedek parça sorgulaması yapılır ve temin süresi
                        belirlenir.
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
                        Parça fiyatı ve montaj ücreti dahil olmak üzere şeffaf
                        bir fiyat teklifi sunulur. Onay sonrası sipariş verilir.
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
                        Hızlı Tedarik
                      </h3>
                      <p>
                        Geniş stok ağımız sayesinde çoğu parça aynı gün veya en
                        geç 1-2 gün içinde temin edilir.
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
                        Montaj ve Test
                      </h3>
                      <p>
                        Parça geldiğinde uzman teknisyenlerimiz tarafından
                        montajı yapılır, sistem test edilir ve garanti belgesi
                        düzenlenir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                En Çok Değişen Parçalar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Elektronik Kart
                  </h3>
                  <p className="mb-2">
                    Kombi beyninin arızalanması durumunda değişim gerekir.
                    Genellikle elektrik kesintileri sonrası arızalanır.
                  </p>
                  <span className="text-sm text-gray-600">
                    Ortalama Ömür: 5-8 yıl
                  </span>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Sıcaklık Sensörü
                  </h3>
                  <p className="mb-2">
                    Yanlış sıcaklık okuması durumunda değişim gerekir. Su
                    kalitesinden etkilenir.
                  </p>
                  <span className="text-sm text-gray-600">
                    Ortalama Ömür: 3-5 yıl
                  </span>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Pompa Grubu</h3>
                  <p className="mb-2">
                    Su dolaşımı sağlayan pompa arızalarında değişim. Yoğun
                    kullanımda aşınır.
                  </p>
                  <span className="text-sm text-gray-600">
                    Ortalama Ömür: 8-12 yıl
                  </span>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Emniyet Valfi</h3>
                  <p className="mb-2">
                    Güvenlik için kritik olan valf arızalarında değişim. Basınç
                    değişimlerinden etkilenir.
                  </p>
                  <span className="text-sm text-gray-600">
                    Ortalama Ömür: 2-4 yıl
                  </span>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3">
                  Neden Mert Teknik'i Tercih Etmelisiniz?
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>%100 orijinal ve garantili yedek parçalar</li>
                  <li>Tüm marka ve modellerde geniş stok ağı</li>
                  <li>Hızlı parça temini ve aynı gün montaj</li>
                  <li>Rekabetçi fiyatlar ve şeffaf ücretlendirme</li>
                  <li>Uzman teknisyenler tarafından montaj</li>
                  <li>Parça ve işçilik garantisi</li>
                </ul>
              </div>

              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Kombi Yedek Parça İhtiyacınız İçin Hemen İletişime Geçin
                </h2>
                <p className="mb-6">
                  Kombinizin arızalı parçalarını orijinal yedek parçalarla
                  değiştirmek için Mert Teknik'in uzman ekibiyle hemen iletişime
                  geçin.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/iletisim" className="btn btn-primary">
                    Parça Sorgula
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

export default KombiYedekParca;
