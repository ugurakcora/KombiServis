import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumb from "../../../components/Breadcrumb";
import ContactCTA from "../../../components/ContactCTA";

export const metadata: Metadata = {
  title: "Radyatör Vana Değişimi | Mert Teknik",
  description:
    "Profesyonel radyatör vana değişimi hizmeti. Termostatik vana, manuel vana ve otomatik vana değişimi. Hızlı ve garantili hizmet.",
  keywords:
    "radyatör vana değişimi, termostatik vana, manuel vana, otomatik vana, ısıtma sistemi, mert teknik",
};

const RadyatorVanaDegisimi = () => {
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
                  Profesyonel Radyatör Vana Değişimi
                </h1>
                <p className="text-lg mb-6">
                  Eski ve arızalı radyatör vanalarınızı değiştirerek ısıtma
                  sisteminizin kontrolünü iyileştirin. Termostatik, manuel ve
                  otomatik vana seçenekleriyle profesyonel hizmet sunuyoruz.
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
                      src="/images/services/radyator-vana.jpg"
                      alt="Radyatör vana değişimi yapan teknisyen"
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
                Radyatör Vana Değişimi Neden Önemlidir?
              </h2>
              <p className="mb-6">
                Radyatör vanaları, ısıtma sisteminizin kontrol merkezi görevini
                görür. Arızalı veya eski vanalar, enerji kaybına ve istenmeyen
                ısı dağılımına neden olur. Modern termostatik vanalar ile hem
                enerji tasarrufu sağlayabilir hem de konforunuzu
                artırabilirsiniz.
              </p>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Vana Değişimi Hizmeti Neleri İçerir?
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mevcut vana sisteminin incelenmesi</li>
                  <li>Uygun vana tipinin belirlenmesi</li>
                  <li>Sistem kapatılması ve boşaltılması</li>
                  <li>Eski vananın sökülmesi</li>
                  <li>Yeni vananın montajı</li>
                  <li>Sistem test edilmesi</li>
                  <li>Ayar ve kalibrasyon</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Vana Türleri ve Özellikleri
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Termostatik Vana
                  </h3>
                  <p className="mb-4">
                    Otomatik sıcaklık kontrolü sağlar. Oda sıcaklığına göre
                    kendiliğinden ayar yapar.
                  </p>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>%20-30 enerji tasarrufu</li>
                    <li>Otomatik kontrol</li>
                    <li>Oda bazında ayar</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Manuel Vana</h3>
                  <p className="mb-4">
                    Elle kontrol edilen klasik vana türü. Basit ve ekonomik
                    çözümdür.
                  </p>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>Ekonomik seçenek</li>
                    <li>Basit kullanım</li>
                    <li>Dayanıklı yapı</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Otomatik Vana</h3>
                  <p className="mb-4">
                    Akıllı sistemlerle entegre çalışan modern vana türüdür.
                  </p>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>Uzaktan kontrol</li>
                    <li>Akıllı ev entegrasyonu</li>
                    <li>Program yapılabilir</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Vana Değişim Sürecimiz
              </h2>
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Sistem İncelemesi
                      </h3>
                      <p>
                        Uzman teknisyenlerimiz mevcut vana sistemini detaylı
                        şekilde inceleyerek en uygun vana tipini belirler.
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
                        İnceleme sonrası, vana tipi ve montaj işlemi için şeffaf
                        ve detaylı bir fiyat teklifi sunulur.
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
                        Sistem Kapatma
                      </h3>
                      <p>
                        Güvenli çalışma için ısıtma sistemi kapatılır ve gerekli
                        önlemler alınır. Su boşaltma işlemi yapılır.
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
                        Vana Montajı
                      </h3>
                      <p>
                        Eski vana sökülür ve yeni vana profesyonel şekilde monte
                        edilir. Tüm bağlantılar kontrol edilir.
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
                        Test ve Ayarlama
                      </h3>
                      <p>
                        Sistem tekrar devreye alınır, vana test edilir ve
                        gerekli ayarlamalar yapılır. Kullanım eğitimi verilir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Vana Değişimi Gerektiğinde Belirtiler
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Teknik Sorunlar
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Radyatörden su sızıntısı</li>
                    <li>Vananın kapanmaması veya açılmaması</li>
                    <li>Isı kontrolünün yapılamaması</li>
                    <li>Vanadan gelen sesler</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Verimlilik Sorunları
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Yüksek enerji tüketimi</li>
                    <li>Eşitsiz ısı dağılımı</li>
                    <li>Pas ve korozyon</li>
                    <li>Eski tip vana kullanımı</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3">
                  Neden Mert Teknik'i Tercih Etmelisiniz?
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Vana sistemleri konusunda uzman teknisyenler</li>
                  <li>Kaliteli marka vana seçenekleri</li>
                  <li>Orijinal ürün ve montaj garantisi</li>
                  <li>Şeffaf ve rekabetçi fiyatlandırma</li>
                  <li>Hızlı ve randevuya sadık servis</li>
                  <li>Montaj sonrası teknik destek</li>
                </ul>
              </div>

              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Radyatör Vana Değişimi İçin Hemen Randevu Alın
                </h2>
                <p className="mb-6">
                  Eski ve arızalı radyatör vanalarınızı değiştirmek için Mert
                  Teknik'in uzman ekibiyle hemen iletişime geçin.
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
      <ContactCTA />
    </>
  );
};

export default RadyatorVanaDegisimi;
