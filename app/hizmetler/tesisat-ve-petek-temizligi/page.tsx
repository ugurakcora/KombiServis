import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tesisat ve Petek Temizliği | Mert Teknik",
  description:
    "Profesyonel tesisat ve petek temizliği hizmeti ile ısınma performansınızı artırın, enerji tasarrufu sağlayın.",
};

const PetekTemizligi = () => {
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
                  Profesyonel Tesisat ve Petek Temizliği Hizmeti
                </h1>
                <p className="text-lg mb-6">
                  Peteklerinizin verimli çalışması ve enerji tasarrufu sağlaması
                  için düzenli temizlik şarttır. Mert Teknik olarak, özel
                  ekipmanlarımızla profesyonel tesisat ve petek temizliği
                  hizmeti sunuyoruz.
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
                      src="/images/services/petek-temizligi.jpg"
                      alt="Tesisat ve petek temizliği"
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
                Petek Temizliği Neden Önemlidir?
              </h2>
              <p className="mb-6">
                Peteklerinizin içinde zamanla biriken kireç, tortu ve çamur,
                ısınma performansını düşürür ve enerji tüketimini artırır.
                Düzenli petek temizliği ile hem daha iyi ısınır hem de enerji
                faturalarınızda tasarruf sağlarsınız.
              </p>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Petek Temizliğinin Faydaları
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Daha iyi ısınma performansı</li>
                    <li>%25'e varan enerji tasarrufu</li>
                    <li>Isınma süresinin kısalması</li>
                    <li>Kombi ömrünün uzaması</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Tesisattaki arızaların azalması</li>
                    <li>Peteklerde eşit ısı dağılımı</li>
                    <li>Tıkanıklıkların giderilmesi</li>
                    <li>Daha sessiz çalışma</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Petek Temizliği Ne Zaman Yapılmalıdır?
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Şu belirtileri fark ettiğinizde petek temizliği yaptırmanız
                  önerilir:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Peteklerin alt ve üst kısımları arasında ısı farkı olması
                  </li>
                  <li>Bazı peteklerin hiç ısınmaması veya geç ısınması</li>
                  <li>Kombinin sık sık arıza vermesi</li>
                  <li>Isınma için normalden fazla enerji harcanması</li>
                  <li>Peteklerden ses gelmesi</li>
                  <li>Son petek temizliğinden bu yana 4-5 yıl geçmesi</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Tesisat ve Petek Temizliği Nasıl Yapılır?
              </h2>
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Ön İnceleme
                      </h3>
                      <p>
                        Teknisyenlerimiz, ısıtma sisteminizi inceleyerek
                        peteklerin durumunu değerlendirir.
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
                        Sistem Boşaltma
                      </h3>
                      <p>
                        Temizlik öncesi, sistemdeki su boşaltılır ve peteklerin
                        bağlantıları hazırlanır.
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
                        Basınçlı Temizlik
                      </h3>
                      <p>
                        Kompresörlü temizlik makinesi ile tesisat ve peteklere
                        basınçlı su gönderilerek içlerindeki tortu, kireç ve
                        kalıntılar tesisattan temizlenerek atılır.
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
                        Sistem Doldurma ve Test
                      </h3>
                      <p>
                        Sistem tekrar doldurulur, hava tahliyesi yapılır ve
                        peteklerin ısınma performansı test edilir.
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
                  <li>Profesyonel ve deneyimli teknisyenler</li>
                  <li>Modern temizlik ekipmanları</li>
                  <li>Garantili hizmet</li>
                  <li>Uygun ve şeffaf fiyatlandırma</li>
                  <li>Temizlik sonrası detaylı rapor</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Sık Sorulan Sorular
              </h2>
              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Tesisat ve Petek temizliği ne kadar sürer?
                  </h3>
                  <p>
                    Ortalama bir ev için petek temizliği işlemi 1-2 saat
                    arasında tamamlanır. Bu süre, petek sayısına ve kirlilik
                    düzeyine göre değişebilir.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Tesisat ve Petek temizliği sırasında evde olmam gerekir mi?
                  </h3>
                  <p>
                    İşlem sırasında evde olmanız tercih edilir, ancak gerekli
                    durumlarda güvenilir bir kişinin evde bulunması da
                    yeterlidir.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Tesisat ve Petek temizliği için en uygun zaman nedir?
                  </h3>
                  <p>
                    Petek temizliği için en uygun zaman, ısıtma sezonu öncesi
                    (genellikle sonbahar ayları) veya ısıtma sezonu sonrasıdır.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Tesisat ve Petek Temizliği sırasında evim kirlenir mi?
                  </h3>
                  <p>
                    Profesyonel petek temizliği sırasında evinizin kirlenmemesi
                    için gerekli tüm önlemler alınır. Çalışma alanı koruyucu
                    örtülerle kaplanır ve özel ekipmanlar kullanılarak temizlik
                    işlemi gerçekleştirilir. İşlem sonrasında çalışma alanı
                    temizlenir.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Tesisat ve Petek Temizliği İçin Hemen Randevu Alın
                </h2>
                <p className="mb-6">
                  Daha verimli ısınma ve enerji tasarrufu için peteklerinizin
                  temizliğini ihmal etmeyin. Mert Teknik'in uzman ekibiyle hemen
                  iletişime geçin.
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

export default PetekTemizligi;
