import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz - Mert Teknik",
  description:
    "Mert Teknik olarak sunduğumuz tüm kombi bakım, onarım, tesisat tamiri ve yedek parça hizmetleri.",
  keywords:
    "kombi servisi, kombi bakımı, kombi tamiri, petek temizliği, kombi montajı, panel radyatör, tesisat tamiri, kombi yedek parça, mert teknik",
};

const services = [
  {
    id: "kombi-bakimi",
    title: "Kombi Bakımı",
    description:
      "Kombilerinizin ömrünü uzatmak, enerji tasarrufu sağlamak ve güvenli çalışmasını sağlamak için düzenli bakım şarttır. Profesyonel ekibimizle yıllık bakım hizmetleri sunuyoruz.",
    image: "/images/services/kombi-bakimi.jpg",
    features: [
      "Kombi iç temizliği",
      "Filtre temizliği",
      "Kazan temizliği",
      "Brülör ayarı",
      "Gaz kaçak kontrolü",
      "Verimlilik testi",
    ],
  },
  {
    id: "kombi-tamiri",
    title: "Kombi Tamiri",
    description:
      "Arızalanan kombileriniz için hızlı ve profesyonel onarım hizmetleri sunuyoruz. Tüm marka ve modellere uygun yedek parça tedariki ile sorunlarınızı çözüyoruz.",
    image: "/images/services/kombi-tamiri.jpg",
    features: [
      "Arıza tespiti",
      "Elektronik kart tamiri",
      "Pompa değişimi",
      "Eşanjör değişimi",
      "Gaz valfi değişimi",
      "Su kaçağı tamiri",
      "Sensör değişimi",
    ],
  },
  {
    id: "kombi-montaji",
    title: "Kombi Montajı",
    description:
      "Yeni kombilerinizin profesyonel kurulum ve montaj hizmetlerini sağlıyoruz. Doğru montaj ile kombilerinizin verimli çalışmasını sağlıyoruz.",
    image: "/images/services/kombi-montaj.png",
    features: [
      "Eski kombi sökümü",
      "Yeni kombi montajı",
      "Boru tesisatı",
      "Baca bağlantısı",
      "Test ve devreye alma",
      "Kullanım eğitimi",
    ],
  },
  {
    id: "tesisat-ve-petek-temizligi",
    title: "Tesisat ve Petek Temizliği",
    description:
      "Isınma verimini artırmak ve enerji tasarrufu sağlamak için petek temizliği hizmetleri sunuyoruz. Özel ekipmanlarımızla peteklerinizi temizliyoruz.",
    image: "/images/services/petek-temizligi.jpg",
    features: [
      "Kimyasal petek temizliği",
      "Fiziksel petek temizliği",
      "Tesisat yıkama",
      "Kireç çözme",
      "Tortu temizleme",
      "Verim artırma",
      "Isı kaybını önleme",
    ],
  },
  {
    id: "acil-servis",
    title: "Acil Servis",
    description:
      "7/24 acil kombi arıza ve tamir hizmetleri sunuyoruz. Soğuk kış günlerinde sizi mağdur etmemek için hızlı müdahale ediyoruz.",
    image: "/images/services/acil-servis.png",
    features: [
      "7/24 hizmet",
      "Aynı gün müdahale",
      "Hızlı arıza tespiti",
      "Yerinde onarım",
      "Telefon desteği",
      "Öncelikli servis",
      "Acil parça temini",
    ],
  },
  {
    id: "panel-radyator-degisimi",
    title: "Panel Radyatör Değişimi",
    description:
      "Eski ve verimsiz radyatörlerinizi modern panel radyatörlerle değiştirerek ısıtma verimliliğinizi artırın. Tüm marka ve modellerde profesyonel kurulum hizmeti.",
    image: "/images/services/panel-radyator.png",
    features: [
      "Eski radyatör sökümü",
      "Panel radyatör montajı",
      "Boru bağlantıları",
      "Sistem test edilmesi",
      "Tüm marka ve modeller",
      "Garantili hizmet",
    ],
  },
  {
    id: "radyator-vana-degisimi",
    title: "Radyatör Vana Değişimi",
    description:
      "Arızalı radyatör vanalarınızı değiştirerek ısıtma sisteminizin kontrolünü iyileştirin. Termostatik, manuel ve otomatik vana seçenekleri.",
    image: "/images/services/radyator-vana.png",
    features: [
      "Termostatik vana montajı",
      "Manuel vana değişimi",
      "Otomatik vana kurulumu",
      "Enerji tasarrufu",
      "Sıcaklık kontrolü",
      "Uzun ömürlü çözümler",
    ],
  },
  {
    id: "kombi-yedek-parca",
    title: "Kombi Yedek Parça ve Aksesuar",
    description:
      "Kombilerinizin uzun ömürlü çalışması için orijinal yedek parçalar ve kaliteli aksesuarlar. Tüm marka ve modeller için geniş ürün yelpazesi.",
    image: "/images/services/kombi-yedek-parca.png",
    features: [
      "Orijinal yedek parçalar",
      "Tüm marka ve modeller",
      "Hızlı parça temini",
      "Uygun fiyatlar",
      "Garantili ürünler",
      "Profesyonel montaj",
    ],
  },
  {
    id: "tesisat-tamiri",
    title: "Tesisat Tamiri",
    description:
      "Su ve ısıtma tesisatı sorunlarınız için 7/24 profesyonel hizmet. Kaçak tamiri, tıkanıklık açma, boru değişimi ve tüm tesisat işleri.",
    image: "/images/services/tesisat-tamiri.png",
    features: [
      "Su kaçağı tamiri",
      "Tıkanıklık açma",
      "Boru değişimi",
      "Isıtma tesisatı",
      "7/24 acil müdahale",
      "Gizli kaçak tespiti",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Hizmetlerimiz
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Türkiye genelinde kombi bakım, onarım, montaj ve tesisat hizmetleri
            sunuyoruz. Profesyonel ekibimizle tüm kombi markalarına ve tesisat
            işlerinize hizmet veriyoruz.
          </p>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <Link href={`/hizmetler/${service.id}`}>
                    <div className="absolute inset-0 bg-black/10 z-10 rounded-lg hover:bg-black/20 transition-colors"></div>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className="object-cover"
                    />
                  </Link>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:pr-8" : "lg:pl-8"}`}>
                  <Link href={`/hizmetler/${service.id}`}>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-primary-600 transition-colors">
                      {service.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <h3 className="font-semibold text-lg mb-3">
                    Hizmet Kapsamı:
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-primary-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/hizmetler/${service.id}`}
                      className="btn btn-primary"
                    >
                      Detaylı Bilgi
                    </Link>
                    <Link href="/iletisim" className="btn btn-outline">
                      Servis Talebi Oluştur
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
