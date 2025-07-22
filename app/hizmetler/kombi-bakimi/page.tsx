import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kombi Bakımı | Mert Teknik",
  description:
    "Profesyonel kombi bakım hizmetimiz ile kombilerinizin ömrünü uzatın, enerji tasarrufu sağlayın ve arızaları önleyin.",
};

const KombiBakimi = () => {
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
                  Profesyonel Kombi Bakım Hizmeti
                </h1>
                <p className="text-lg mb-6">
                  Kombilerinizin verimli çalışması, enerji tasarrufu sağlaması
                  ve uzun ömürlü olması için düzenli bakım şarttır. Mert Teknik
                  olarak, uzman ekibimizle profesyonel kombi bakım hizmeti
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
                      src="/images/services/kombi-bakimi.jpg"
                      alt="Kombi bakımı yapan teknisyen"
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
                Kombi Bakımı Neden Önemlidir?
              </h2>
              <p className="mb-6">
                Düzenli kombi bakımı, cihazınızın verimli çalışmasını sağlar,
                enerji tüketimini azaltır ve olası arızaları önler. Bakım
                yaptırmadığınız takdirde, kombileriniz daha fazla enerji
                tüketebilir, arızalanabilir ve hatta güvenlik sorunları
                oluşturabilir.
              </p>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Kombi Bakımı Neleri İçerir?
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Kombi içi temizlik ve kontrol</li>
                  <li>Brülör temizliği ve ayarı</li>
                  <li>Elektronik kart kontrolü</li>
                  <li>Pompa kontrolü ve temizliği</li>
                  <li>Genleşme tankı basınç kontrolü</li>
                  <li>Gaz kaçak kontrolü</li>
                  <li>Su basınç kontrolü</li>
                  <li>Filtre temizliği</li>
                  <li>Genel performans testi</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Kombi Bakımının Faydaları
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Enerji Tasarrufu
                  </h3>
                  <p>
                    Düzenli bakım yaptırılan kombiler %25'e varan oranda daha az
                    enerji tüketir. Bu da faturalarınızda önemli bir tasarruf
                    sağlar.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Arızaları Önleme
                  </h3>
                  <p>
                    Bakım sırasında tespit edilen küçük sorunlar, büyük
                    arızalara dönüşmeden çözülür. Bu da yüksek tamir
                    masraflarından kaçınmanızı sağlar.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Cihaz Ömrünü Uzatma
                  </h3>
                  <p>
                    Düzenli bakım yaptırılan kombiler, bakım yapılmayanlara göre
                    çok daha uzun süre sorunsuz çalışır.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Güvenlik</h3>
                  <p>
                    Bakım sırasında yapılan gaz kaçağı ve yanma kontrolü, olası
                    tehlikeleri önleyerek ev güvenliğinize katkıda bulunur.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Ne Sıklıkta Kombi Bakımı Yaptırmalısınız?
              </h2>
              <p className="mb-8">
                Kombilerinizin yılda en az bir kez, tercihen kış sezonu
                öncesinde (Eylül-Ekim aylarında) bakımının yapılması önerilir.
                Yoğun kullanılan kombilerde ise 6 ayda bir bakım yaptırmak daha
                uygun olacaktır.
              </p>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3">
                  Neden Mert Teknik'i Tercih Etmelisiniz?
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Deneyimli ve sertifikalı teknisyenler</li>
                  <li>Tüm marka ve modellerde uzman servis</li>
                  <li>Garantili bakım hizmeti</li>
                  <li>Uygun ve şeffaf fiyatlandırma</li>
                  <li>Hızlı ve randevuya sadık servis</li>
                  <li>Bakım sonrası detaylı rapor</li>
                </ul>
              </div>

              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Kombi Bakımı İçin Hemen Randevu Alın
                </h2>
                <p className="mb-6">
                  Kombilerinizin bakımını ertelemeyin. Mert Teknik'in uzman
                  ekibiyle hemen iletişime geçin ve randevunuzu oluşturun.
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

export default KombiBakimi;
