import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Şartları | Ordu Kombi Servisi",
  description:
    "Ordu Kombi Servisi web sitesi ve hizmetleri kullanım şartları ve koşulları",
};

const KullanimSartlari = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Kullanım Şartları
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">Son güncelleme tarihi: 15 Mayıs 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              1. Kabul Edilen Şartlar
            </h2>
            <p>
              Ordu Kombi Servisi web sitesini kullanarak, bu kullanım şartlarını
              kabul etmiş olursunuz. Bu şartları kabul etmiyorsanız, lütfen web
              sitemizi kullanmayın.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              2. Hizmetlerimiz
            </h2>
            <p>
              Ordu Kombi Servisi olarak, kombi bakım, onarım, montaj ve petek
              temizliği hizmetleri sunmaktayız. Web sitemiz, bu hizmetler
              hakkında bilgi vermek ve müşterilerimizle iletişim kurmak amacıyla
              tasarlanmıştır.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              3. Kullanıcı Sorumlulukları
            </h2>
            <p>
              Web sitemizi kullanırken aşağıdaki kurallara uymayı kabul
              edersiniz:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Yasalara uygun hareket etmek</li>
              <li>Başkalarının haklarına saygı göstermek</li>
              <li>Doğru ve eksiksiz bilgi sağlamak</li>
              <li>Web sitemizin güvenliğini tehlikeye atmamak</li>
              <li>Web sitemizi kötüye kullanmamak</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              4. Fikri Mülkiyet Hakları
            </h2>
            <p>
              Web sitemizdeki tüm içerikler (metinler, görseller, logolar,
              tasarımlar vb.) Ordu Kombi Servisi'ne aittir veya lisanslı
              kullanım hakkına sahiptir. Bu içeriklerin izinsiz kullanımı,
              kopyalanması veya dağıtılması yasaktır.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              5. Hizmet Garantisi ve Sorumluluk Reddi
            </h2>
            <p>
              Hizmetlerimizi en yüksek kalitede sunmak için çalışıyoruz, ancak
              web sitemizdeki bilgilerin her zaman güncel ve hatasız olacağını
              garanti edemeyiz. Web sitemizi "olduğu gibi" sunuyoruz ve herhangi
              bir açık veya zımni garanti vermiyoruz.
            </p>
            <p>
              Ordu Kombi Servisi, web sitesinin kullanımından kaynaklanan
              doğrudan veya dolaylı zararlardan sorumlu tutulamaz.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              6. Fiyatlandırma ve Ödemeler
            </h2>
            <p>
              Hizmetlerimizin fiyatları, hizmet türüne, kapsamına ve diğer
              faktörlere göre değişiklik gösterebilir. Web sitemizde belirtilen
              fiyatlar bilgi amaçlıdır ve değişiklik gösterebilir. Kesin fiyat,
              servis talebiniz değerlendirildikten sonra belirlenecektir.
            </p>
            <p>
              Ödemeler, hizmet tamamlandıktan sonra nakit, kredi kartı veya
              banka havalesi ile yapılabilir.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              7. İptal ve İade Politikası
            </h2>
            <p>
              Servis randevularınızı, randevu saatinden en az 24 saat önce iptal
              etmeniz durumunda herhangi bir ücret talep edilmez. Daha kısa
              sürede yapılan iptallerde veya randevuya gelinmemesi durumunda,
              servis ücreti talep edilebilir.
            </p>
            <p>
              Hizmetlerimizden memnun kalmamanız durumunda, lütfen bizimle
              iletişime geçin. Şikayetinizi değerlendirecek ve gerekli
              düzeltmeleri yapacağız.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              8. Değişiklikler
            </h2>
            <p>
              Bu Kullanım Şartları'nı zaman zaman güncelleyebiliriz.
              Değişiklikler bu sayfada yayınlanacaktır. Web sitemizi kullanmaya
              devam ederek, güncellenmiş şartları kabul etmiş olursunuz.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              9. Uygulanacak Hukuk
            </h2>
            <p>
              Bu Kullanım Şartları, Türkiye Cumhuriyeti kanunlarına tabidir.
              Herhangi bir anlaşmazlık durumunda, Ordu Mahkemeleri yetkilidir.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. İletişim</h2>
            <p>
              Kullanım Şartlarımız hakkında sorularınız veya talepleriniz varsa,
              lütfen aşağıdaki iletişim bilgilerinden bize ulaşın:
            </p>
            <p className="mb-6">
              E-posta: info@ordukombi.com
              <br />
              Telefon: 0452 123 45 67
              <br />
              Adres: Atatürk Bulvarı No: 123, Ordu Merkez
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default KullanimSartlari;
