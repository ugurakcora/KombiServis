import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acil Kombi Servisi | Mert Teknik",
  description:
    "7/24 acil kombi servis hizmeti. Hızlı müdahale, güvenilir çözüm ve uygun fiyatlarla acil kombi sorunlarınız için yanınızdayız.",
};

const AcilServis = () => {
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
                  7/24 Acil Kombi Servisi
                </h1>
                <p className="text-lg mb-6">
                  Kombilerinizle ilgili acil sorunlarda, günün her saati
                  yanınızdayız. Hızlı müdahale ve kalıcı çözümlerle sizi soğukta
                  bırakmıyoruz.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+905530105040" className="btn btn-secondary">
                    Hemen Arayın
                  </a>
                  <Link
                    href="/iletisim"
                    className="btn bg-white text-primary-700 hover:bg-gray-100 px-4"
                  >
                    İletişim Formu
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="bg-white p-2 rounded-lg shadow-lg">
                  <div className="relative h-80 md:h-80">
                    <Image
                      src="/images/services/acil-servis.png"
                      alt="Acil kombi servisi teknisyeni"
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
                Acil Servis Hizmetimiz
              </h2>
              <p className="mb-6">
                Mert Teknik olarak, kombilerinizle ilgili acil durumlarda 7/24
                hizmet veriyoruz. Deneyimli teknisyenlerimiz, en kısa sürede
                adresinize ulaşarak sorununuzu çözüyor.
              </p>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Acil Servis Kapsamındaki Durumlar
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Kombinin tamamen çalışmaması</li>
                    <li>Gaz kaçağı şüphesi</li>
                    <li>Su kaçağı</li>
                    <li>Anormal sesler</li>
                    <li>Basınç düşmesi</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Isıtma yapmaması</li>
                    <li>Sıcak su gelmemesi</li>
                    <li>Sürekli arıza vermesi</li>
                    <li>Elektronik kart arızaları</li>
                    <li>Donma riski durumları</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Acil Servis Avantajlarımız
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">Hızlı Müdahale</h3>
                  <p>
                    Çağrınızdan sonra en kısa sürede adresinize ulaşarak
                    sorununuza müdahale ediyoruz. Ordu ve çevresinde geniş
                    servis ağımızla her zaman yakınınızdayız.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Deneyimli Teknisyenler
                  </h3>
                  <p>
                    Acil durumlarda, deneyimli ve sertifikalı teknisyenlerimiz
                    hızlı teşhis ve etkili çözümler sunar. Tüm marka ve
                    modellerde uzmanlık.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Yedek Parça Stoku
                  </h3>
                  <p>
                    Servis araçlarımızda bulunan geniş yedek parça stoku
                    sayesinde, çoğu sorunu ilk ziyarette çözüyoruz. Zaman kaybı
                    yaşamıyorsunuz.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Şeffaf Fiyatlandırma
                  </h3>
                  <p>
                    Acil durumlarda bile şeffaf fiyatlandırma politikamızı
                    sürdürüyoruz. İşlem öncesi maliyet hakkında bilgilendirme
                    yapıyoruz.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Acil Servis Süreci
              </h2>
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Çağrı Merkezi
                      </h3>
                      <p>
                        Acil servis hattımızı arayarak sorununuzu bildirin.
                        Çağrı merkezimiz gerekli bilgileri alarak en yakın
                        teknisyeni yönlendirir.
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
                        Teknisyen Yönlendirme
                      </h3>
                      <p>
                        En yakın teknisyenimiz adresinize yönlendirilir ve
                        tahmini varış süresi hakkında bilgilendirilirsiniz.
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
                        Yerinde Teşhis
                      </h3>
                      <p>
                        Teknisyenimiz adresinize ulaştığında, sorunu detaylı
                        şekilde inceleyerek teşhis koyar.
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
                        Çözüm ve Onarım
                      </h3>
                      <p>
                        Tespit edilen sorun için çözüm önerilir ve onayınız
                        alındıktan sonra gerekli onarım işlemleri
                        gerçekleştirilir.
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
                        Test ve Kontrol
                      </h3>
                      <p>
                        Onarım sonrası, kombinin düzgün çalıştığından emin olmak
                        için gerekli testler yapılır.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3">
                  Acil Durumlar İçin Öneriler
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Gaz kokusu alırsanız, pencereyi açın ve gazı ana vanadan
                    kapatın
                  </li>
                  <li>
                    Su kaçağı varsa, kombinin altındaki su vanasını kapatın
                  </li>
                  <li>
                    Elektrikle ilgili sorunlarda, kombinin sigortasını kapatın
                  </li>
                  <li>
                    Anormal sesler duyarsanız, kombiyi kapatın ve yardım isteyin
                  </li>
                  <li>Acil durumlarda panik yapmadan servisimizi arayın</li>
                </ul>
              </div>

              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  7/24 Acil Servis Hattımız
                </h2>
                <p className="mb-6">
                  Kombi sorunlarınız için gece gündüz hizmetinizdeyiz. Acil
                  durumlar için hemen arayın, en kısa sürede yanınızda olalım.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="tel:+905530105040"
                    className="btn btn-primary text-xl"
                  >
                    0553 010 50 40
                  </a>
                  <Link href="/iletisim" className="btn btn-secondary">
                    İletişim Formu
                  </Link>
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

export default AcilServis;
