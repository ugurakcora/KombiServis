import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kombi Değişimi | Ordu Kombi Servisi",
  description:
    "Profesyonel kombi değişim hizmeti. Eski kombilerinizi yeni, verimli ve ekonomik kombilerle değiştirin.",
};

const KombiDegisimi = () => {
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
                  Profesyonel Kombi Değişim Hizmeti
                </h1>
                <p className="text-lg mb-6">
                  Eski ve verimsiz kombilerinizi, yeni teknolojiye sahip, daha
                  ekonomik ve çevre dostu kombilerle değiştirin. Ordu Kombi
                  olarak, kombi değişim sürecinde yanınızdayız.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/iletisim" className="btn btn-secondary">
                    Ücretsiz Keşif İsteyin
                  </Link>
                  <a
                    href="tel:+905001234567"
                    className="btn bg-white text-primary-700 hover:bg-gray-100 px-4"
                  >
                    Hemen Arayın
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="bg-white p-2 rounded-lg shadow-lg">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src="/images/services/kombi-degisimi.jpg"
                      alt="Kombi değişimi yapan teknisyen"
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
                Kombi Değişimi Ne Zaman Gereklidir?
              </h2>
              <p className="mb-6">
                Kombilerinizin ekonomik ömrü genellikle 10-15 yıl arasındadır.
                Bu süre sonunda veya aşağıdaki belirtileri gözlemlediğinizde
                kombi değişimi düşünmeniz gerekebilir.
              </p>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Kombi Değişimi İçin Belirtiler
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sık sık arıza yapması ve tamir masraflarının artması</li>
                  <li>Enerji faturalarının yükselmesi</li>
                  <li>Isıtma performansının düşmesi</li>
                  <li>Gürültülü çalışma</li>
                  <li>Yedek parça bulunamaması</li>
                  <li>10 yaşından büyük olması</li>
                  <li>Eski teknoloji ve düşük verimlilik</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Yeni Kombi Seçiminde Dikkat Edilmesi Gerekenler
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Kapasite</h3>
                  <p>
                    Evinizin büyüklüğüne, oda sayısına ve ısı ihtiyacına uygun
                    kapasitede kombi seçimi yapılmalıdır. Düşük kapasiteli bir
                    kombi yetersiz ısıtma sağlarken, gereğinden yüksek
                    kapasiteli bir kombi gereksiz enerji tüketimine yol açar.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Verimlilik</h3>
                  <p>
                    Yeni nesil yoğuşmalı kombiler, eski konvansiyonel kombilere
                    göre %30'a varan oranda daha verimlidir. Enerji verimliliği
                    yüksek kombiler, uzun vadede önemli tasarruf sağlar.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Marka ve Model</h3>
                  <p>
                    Güvenilir markaların kaliteli modelleri, uzun ömürlü ve
                    sorunsuz kullanım sunar. Ayrıca, yaygın servis ağı olan
                    markaları tercih etmek, bakım ve onarım süreçlerinde
                    kolaylık sağlar.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Teknolojik Özellikler
                  </h3>
                  <p>
                    Akıllı termostat uyumluluğu, modülasyonlu çalışma, sessiz
                    operasyon gibi özellikler, kombinin kullanım konforunu ve
                    verimliliğini artırır.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Kombi Değişim Sürecimiz
              </h2>
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Ücretsiz Keşif ve Danışmanlık
                      </h3>
                      <p>
                        Uzman ekibimiz evinizi ziyaret ederek mevcut durumu
                        değerlendirir ve ihtiyaçlarınıza en uygun kombi
                        seçeneklerini sunar.
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
                        Keşif sonrası, kombi ve montaj işlemi için detaylı ve
                        şeffaf bir fiyat teklifi sunulur. Anlaşma sağlandıktan
                        sonra değişim için randevu oluşturulur.
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
                        Değişim günü, eski kombiniz güvenli şekilde sökülür ve
                        çevre düzenlemelerine uygun olarak bertaraf edilir.
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
                        Yeni kombiniz, standartlara uygun şekilde monte edilir.
                        Tüm bağlantılar (su, gaz, elektrik, baca) profesyonel
                        ekibimiz tarafından yapılır.
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
                        Test ve Devreye Alma
                      </h3>
                      <p>
                        Montaj tamamlandıktan sonra, tüm sistem test edilir, gaz
                        kaçağı kontrolü yapılır ve kombinin ilk çalıştırması
                        gerçekleştirilir.
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
                        Kullanım Eğitimi ve Garanti
                      </h3>
                      <p>
                        Yeni kombinizin verimli kullanımı hakkında bilgi
                        verilir, garanti belgesi düzenlenir ve gerekli evraklar
                        teslim edilir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3">
                  Neden Ordu Kombi ile Kombi Değişimi?
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ücretsiz keşif ve uzman danışmanlık</li>
                  <li>Tüm marka ve modellerde geniş seçenek</li>
                  <li>Rekabetçi fiyatlar ve ödeme kolaylıkları</li>
                  <li>Profesyonel montaj ekibi</li>
                  <li>Hızlı ve güvenilir servis</li>
                  <li>Garanti ve satış sonrası destek</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Çalıştığımız Kombi Markaları
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
              </div>

              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Kombi Değişimi İçin Hemen Bize Ulaşın
                </h2>
                <p className="mb-6">
                  Eski kombinizi yeni, verimli bir kombi ile değiştirmek ve
                  enerji tasarrufu sağlamak için Ordu Kombi'nin uzman ekibiyle
                  iletişime geçin.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/iletisim" className="btn btn-primary">
                    İletişim Formu
                  </Link>
                  <a href="tel:+905001234567" className="btn btn-secondary">
                    0500 123 45 67
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

export default KombiDegisimi;
