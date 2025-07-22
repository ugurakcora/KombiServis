import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panel Radyatör Değişimi | Mert Teknik",
  description:
    "Profesyonel panel radyatör değişimi hizmeti. Tüm marka ve modellerde güvenli, hızlı ve garantili radyatör kurulum hizmeti.",
  keywords:
    "panel radyatör değişimi, radyatör kurulumu, radyatör montajı, ısıtma sistemi, mert teknik",
};

const PanelRadyatorDegisimi = () => {
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
                  Profesyonel Panel Radyatör Değişimi
                </h1>
                <p className="text-lg mb-6">
                  Eski ve verimsiz radyatörlerinizi modern panel radyatörlerle
                  değiştirerek ısıtma verimliliğinizi artırın. Mert Teknik
                  olarak, tüm marka ve modellerde profesyonel kurulum hizmeti
                  sunuyoruz.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/iletisim" className="btn btn-secondary">
                    Hemen Randevu Alın
                  </Link>
                  <a
                    href="tel:+905530105040"
                    className="btn bg-white text-primary-700 hover:bg-gray-100 px-4"
                  >
                    Bizi Arayın
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="bg-white p-2 rounded-lg shadow-lg">
                  <div className="relative h-80 md:h-80">
                    <Image
                      src="/images/services/panel-radyator.png"
                      alt="Panel radyatör değişimi"
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
                Panel Radyatör Değişimi Neden Gereklidir?
              </h2>
              <p className="mb-6">
                Eski döküm radyatörler hem enerji verimliliği açısından
                yetersizdir hem de modern dekorasyon anlayışına uygun değildir.
                Panel radyatörler, daha hızlı ısınma, daha az enerji tüketimi ve
                estetik görünüm sunar.
              </p>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Panel Radyatör Değişimi Neleri İçerir?
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mevcut radyatör sisteminin analizi</li>
                  <li>Uygun panel radyatör modelinin seçimi</li>
                  <li>Eski radyatörün güvenli sökümü</li>
                  <li>Boru bağlantılarının kontrolü ve düzenlenmesi</li>
                  <li>Yeni panel radyatörün montajı</li>
                  <li>Sistem test edilmesi ve ayarlanması</li>
                  <li>Temizlik ve düzen</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Panel Radyatör Türleri
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Tip 11</h3>
                  <p>
                    Tek panelli, tek konvektörlü radyatörler. Küçük odalar ve
                    düşük ısı ihtiyacı olan alanlar için idealdir.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Tip 21</h3>
                  <p>
                    Çift panelli, tek konvektörlü radyatörler. Orta büyüklükteki
                    odalar için uygun, dengeli ısı dağılımı sağlar.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Tip 22</h3>
                  <p>
                    Çift panelli, çift konvektörlü radyatörler. Büyük odalar
                    için yüksek ısı kapasitesi sunar.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Tip 33</h3>
                  <p>
                    Üç panelli, üç konvektörlü radyatörler. En yüksek ısı
                    kapasitesi, geniş alanlar için ideal.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Değişim Sürecimiz
              </h2>
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Keşif ve Ölçüm
                      </h3>
                      <p>
                        Uzman teknisyenlerimiz evinizi ziyaret ederek mevcut
                        radyatör sistemini inceler ve uygun panel radyatör
                        tipini belirler.
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
                        Keşif sonrası, radyatör tipi, boyutu ve montaj işlemi
                        için detaylı ve şeffaf bir fiyat teklifi sunulur.
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
                        Eski Radyatör Sökümü
                      </h3>
                      <p>
                        Sistem kapatılır ve eski radyatör güvenli şekilde
                        sökülür. Boru bağlantıları kontrol edilir ve gerekirse
                        yenilenir.
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
                        Panel Radyatör Montajı
                      </h3>
                      <p>
                        Yeni panel radyatör, belirlenen konuma monte edilir. Tüm
                        bağlantılar standartlara uygun şekilde yapılır.
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
                        Montaj tamamlandıktan sonra sistem test edilir, su
                        basıncı kontrol edilir ve radyatörün düzgün çalıştığı
                        doğrulanır.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Panel Radyatör Avantajları
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Yüksek Enerji Verimliliği
                  </h3>
                  <p>
                    Panel radyatörler, döküm radyatörlere göre %30'a varan
                    oranda daha verimli çalışır ve enerji tasarrufu sağlar.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Hızlı Isınma</h3>
                  <p>
                    Düşük su hacmi sayesinde çok daha hızlı ısınır ve soğur.
                    Anlık ısı ihtiyacınızı karşılar.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Modern Tasarım</h3>
                  <p>
                    Şık ve modern görünümü ile her türlü dekorasyona uyum
                    sağlar. Kompakt tasarımı ile alan tasarrufu sağlar.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Kolay Bakım</h3>
                  <p>
                    Düz yüzeyleri sayesinde temizlik çok kolaydır. Toz
                    birikmesini önler ve hijyenik ortam sağlar.
                  </p>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3">
                  Neden Mert Teknik'i Tercih Etmelisiniz?
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Uzman teknisyenler ve kaliteli işçilik</li>
                  <li>Tüm marka ve modellerde geniş ürün yelpazesi</li>
                  <li>Orijinal ürün ve montaj garantisi</li>
                  <li>Şeffaf ve rekabetçi fiyatlandırma</li>
                  <li>Hızlı ve randevuya sadık servis</li>
                  <li>Montaj sonrası teknik destek</li>
                </ul>
              </div>

              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Panel Radyatör Değişimi İçin Hemen Randevu Alın
                </h2>
                <p className="mb-6">
                  Eski radyatörlerinizi modern panel radyatörlerle değiştirmek
                  için Mert Teknik'in uzman ekibiyle hemen iletişime geçin.
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

export default PanelRadyatorDegisimi;
