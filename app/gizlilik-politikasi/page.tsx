import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Mert Teknik",
  description:
    "Mert Teknik gizlilik politikası ve kişisel verilerin korunması hakkında bilgiler",
};

const GizlilikPolitikasi = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Gizlilik Politikası
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">Son güncelleme tarihi: 15 Mayıs 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Giriş</h2>
            <p>
              Mert Teknik olarak kişisel verilerinizin gizliliği bizim için
              önemlidir. Bu Gizlilik Politikası, web sitemizi ziyaret
              ettiğinizde veya hizmetlerimizi kullandığınızda kişisel
              verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu
              açıklamaktadır.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              2. Toplanan Bilgiler
            </h2>
            <p>Sizden aşağıdaki bilgileri toplayabiliriz:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                İsim, e-posta adresi, telefon numarası ve adres gibi iletişim
                bilgileri
              </li>
              <li>Servis talepleriniz ve hizmet geçmişiniz</li>
              <li>Web sitemizi nasıl kullandığınıza dair bilgiler</li>
              <li>IP adresi ve çerez bilgileri</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              3. Bilgilerin Kullanımı
            </h2>
            <p>Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Talep ettiğiniz hizmetleri sağlamak</li>
              <li>Müşteri hizmetleri ve destek sağlamak</li>
              <li>Hizmetlerimizi iyileştirmek ve geliştirmek</li>
              <li>Sizinle iletişim kurmak ve bilgilendirmek</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              4. Bilgilerin Paylaşımı
            </h2>
            <p>
              Kişisel bilgilerinizi aşağıdaki durumlar dışında üçüncü taraflarla
              paylaşmayız:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Yasal bir zorunluluk olduğunda</li>
              <li>
                Hizmetlerimizi sağlamak için gerekli olduğunda (örneğin, servis
                teknisyenleri)
              </li>
              <li>Açık izniniz olduğunda</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              5. Veri Güvenliği
            </h2>
            <p>
              Kişisel verilerinizi korumak için uygun teknik ve organizasyonel
              önlemler alıyoruz. Ancak, internet üzerinden veri iletiminin %100
              güvenli olmadığını unutmayın.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              6. Çerezler (Cookies)
            </h2>
            <p className="mb-4">
              Web sitemizde deneyiminizi geliştirmek ve hizmetlerimizi analiz
              etmek için çeşitli çerezler kullanıyoruz.
            </p>

            <h3 className="text-lg font-medium mb-3">6.1 Çerez Türleri:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Gerekli Çerezler:</strong> Sitenin temel işlevleri için
                zorunlu çerezlerdir. İletişim formu ve güvenlik için gereklidir.
              </li>
              <li>
                <strong>Analiz Çerezleri (Google Analytics):</strong> Ziyaretçi
                istatistikleri, hangi sayfaların görüntülendiği, hangi cihaz ve
                lokasyonlardan erişim sağlandığı bilgilerini toplar.
              </li>
            </ul>

            <h3 className="text-lg font-medium mb-3">6.2 Google Analytics:</h3>
            <p className="mb-4">
              Sitemizdeki ziyaretçi davranışlarını anlayabilmek için Google
              Analytics kullanıyoruz. Bu hizmet şu bilgileri toplar:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Sayfa görüntülemeleri ve ziyaret süreleri</li>
              <li>Cihaz türü (masaüstü, mobil, tablet)</li>
              <li>Coğrafi konum (şehir/ülke bazında)</li>
              <li>Hangi sayfalarda ne kadar zaman geçirildiği</li>
              <li>
                Trafiğin geldiği kaynaklar (Google arama, sosyal medya vb.)
              </li>
            </ul>

            <h3 className="text-lg font-medium mb-3">6.3 Çerez Kontrolü:</h3>
            <p className="mb-4">
              Çerez tercihlerinizi sitemiz üzerindeki çerez banner'ından
              yönetebilirsiniz. Ayrıca:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Tarayıcı ayarlarınızdan tüm çerezleri engelleyebilirsiniz</li>
              <li>Sadece belirli çerez türlerini kabul edebilirsiniz</li>
              <li>İstediğiniz zaman tercihlerinizi değiştirebilirsiniz</li>
            </ul>

            <p className="mb-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm">
              <strong>Önemli:</strong> Analiz çerezlerini reddetseniz bile
              sitenin tüm özellikleri normal çalışacaktır. Bu çerezler sadece
              size daha iyi hizmet verebilmemiz için kullanılır.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Haklarınız</h2>
            <p>
              Kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Verilerinize erişim talep etme</li>
              <li>Verilerinizin düzeltilmesini talep etme</li>
              <li>Verilerinizin silinmesini talep etme</li>
              <li>Verilerinizin işlenmesine itiraz etme</li>
              <li>Veri taşınabilirliği talep etme</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              8. Değişiklikler
            </h2>
            <p>
              Bu Gizlilik Politikası'nı zaman zaman güncelleyebiliriz.
              Değişiklikler bu sayfada yayınlanacaktır.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. İletişim</h2>
            <p>
              Gizlilik Politikamız hakkında sorularınız veya talepleriniz varsa,
              lütfen aşağıdaki iletişim bilgilerinden bize ulaşın:
            </p>
            <p className="mb-6">
              E-posta: ordumertteknik@gmail.com
              <br />
              Telefon: 0553 010 50 40
              <br />
              Adres: Bahçelievler Mahallesi Erol Ataşan Bulvarı, 293. Sk. No:3,
              52200 Altınordu/Ordu
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GizlilikPolitikasi;
