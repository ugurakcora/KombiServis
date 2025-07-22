import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda - Mert Teknik",
  description:
    "Mert Teknik olarak 25 yılı aşkın deneyimimizle kombi bakım, onarım ve servis hizmetleri sunuyoruz.",
  keywords:
    "mert teknik hakkında, kombi servisi, kombi bakım firması, kombi servis ekibi",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Hakkımızda
          </h1>

          {/* Company Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about/company.jpg"
                alt="Mert Teknik Ekibi"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Mert Teknik
              </h2>
              <p className="text-gray-600 mb-4">
                2000 yılında İstanbul'da kurulan firmamız, Türkiye genelinde
                kombi bakım, onarım ve montaj hizmetleri sunmaktadır. 25 yılı
                aşkın deneyimimizle, müşteri memnuniyetini ön planda tutarak
                kaliteli hizmet vermeye devam ediyoruz.
              </p>
              <p className="text-gray-600 mb-4">
                Alanında uzman teknisyenlerimiz, sürekli eğitimlerle bilgi ve
                becerilerini güncel tutarak, en son teknolojik gelişmeleri takip
                etmekte ve uygulamaktadır. Tüm kombi marka ve modellerine hizmet
                veren firmamız, orijinal yedek parça kullanarak kombilerinizin
                uzun ömürlü olmasını sağlamaktadır.
              </p>
              <p className="text-gray-600">
                Müşterilerimize sunduğumuz hizmetin kalitesinden ödün vermeden,
                uygun fiyatlarla çözüm odaklı yaklaşımımızla sektörde güvenilir
                bir firma olarak tanınmaktayız.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Misyonumuz</h2>
              </div>
              <p className="text-gray-600">
                Müşterilerimize kaliteli, güvenilir ve ekonomik kombi servis
                hizmetleri sunarak, enerji verimliliği sağlamak ve çevreye
                duyarlı çözümler üretmek. Teknolojik gelişmeleri takip ederek,
                sürekli kendimizi yenilemek ve müşteri memnuniyetini en üst
                düzeyde tutmak.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Vizyonumuz</h2>
              </div>
              <p className="text-gray-600">
                Türkiye genelinde kombi servis sektöründe lider firma olmak,
                yenilikçi çözümlerle sektöre yön vermek ve müşterilerimizin ilk
                tercihi olmaya devam etmek. Çevreye duyarlı, enerji tasarrufuna
                önem veren ve sürdürülebilir hizmet anlayışıyla bölgesel pazarda
                büyümeyi hedefliyoruz.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-primary-50 p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Neden Bizi Seçmelisiniz?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4 shadow-md">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Güvenilir Hizmet
                  </h3>
                  <p className="text-gray-600">
                    25 yılı aşkın deneyimimizle güvenilir ve kaliteli hizmet
                    sunuyoruz.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4 shadow-md">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Hızlı Servis</h3>
                  <p className="text-gray-600">
                    Acil durumlarda aynı gün servis garantisi ile hızlı çözümler
                    sunuyoruz.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4 shadow-md">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Uzman Ekip</h3>
                  <p className="text-gray-600">
                    Alanında uzman ve deneyimli teknisyenlerimizle kaliteli
                    hizmet sunuyoruz.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4 shadow-md">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Uygun Fiyat</h3>
                  <p className="text-gray-600">
                    Kaliteli hizmeti uygun fiyatlarla sunarak bütçenizi
                    zorlamıyoruz.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4 shadow-md">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Garantili İşçilik
                  </h3>
                  <p className="text-gray-600">
                    Tüm bakım ve onarım işlemlerimiz 1 yıl servis garantisi
                    altındadır.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4 shadow-md">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">7/24 Destek</h3>
                  <p className="text-gray-600">
                    Acil durumlarda 7/24 hizmet vererek yanınızda oluyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Hizmetlerimizden Yararlanmak İster misiniz?
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Kombi bakım, onarım ve montaj hizmetlerimiz hakkında detaylı bilgi
              almak veya servis talebi oluşturmak için bizimle iletişime geçin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/iletisim" className="btn btn-primary">
                İletişime Geç
              </Link>
              <Link
                href="/hizmetler"
                className="btn bg-white text-primary-700 border border-primary-600 hover:bg-gray-50 px-4"
              >
                Hizmetlerimizi İncele
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
