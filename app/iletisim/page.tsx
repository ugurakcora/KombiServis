import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim - Mert Teknik",
  description:
    "Mert Teknik ile iletişime geçin. Kombi bakım, onarım ve servis hizmetleri için bize ulaşın.",
  keywords:
    "kombi servisi iletişim, mert teknik iletişim, kombi servis telefon",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            İletişim
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  İletişim Bilgileri
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Adres</h3>
                      <p className="text-gray-600">
                        Bahçelievler Mahallesi Erol Ataşan Bulvarı
                        <br />
                        293. Sk. No:3, 52200 Altınordu/Ordu
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
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
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Telefon</h3>
                      <p className="text-gray-600">
                        <a
                          href="tel:+905530105040"
                          className="hover:text-primary-600"
                        >
                          0553 010 50 40
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">E-posta</h3>
                      <p className="text-gray-600">
                        <a
                          href="mailto:ordumertteknik@gmail.com"
                          className="hover:text-primary-600"
                        >
                          ordumertteknik@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
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
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Çalışma Saatleri</h3>
                      <p className="text-gray-600">
                        Pazartesi - Cumartesi: 08:00 - 22:00
                        <br />
                        Pazar: 12:00 - 18:00
                      </p>
                      <p className="text-sm text-primary-600 mt-1 font-medium">
                        * Acil durumlar için 7/24 hizmet vermekteyiz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Konum</h2>
                <div className="aspect-video bg-gray-200 rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.2!2d37.8971213!3d40.9829275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406321d032bc33bf%3A0x2c0a8c14624dcc23!2sMert%20Teknik%20Kombi%20Servisi!5e0!3m2!1str!2str!4v1652345678901!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mert Teknik Kombi Servisi Konumu"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Bize Ulaşın</h2>
              <p className="text-gray-600 mb-6">
                Sorularınız, önerileriniz veya servis talepleriniz için
                aşağıdaki formu doldurabilirsiniz. En kısa sürede size geri
                dönüş yapacağız.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
