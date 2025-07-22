import Link from "next/link";
import Image from "next/image";

const serviceItems = [
  {
    id: 1,
    title: "Kombi Bakımı",
    description:
      "Düzenli bakım ile kombilerinizin ömrünü uzatın ve enerji tasarrufu sağlayın.",
    icon: (
      <svg
        className="w-10 h-10 text-primary-600"
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
    ),
    link: "/hizmetler/kombi-bakimi",
  },
  {
    id: 2,
    title: "Kombi Tamiri",
    description:
      "Arızalanan kombileriniz için hızlı ve profesyonel onarım hizmetleri.",
    icon: (
      <svg
        className="w-10 h-10 text-primary-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        ></path>
      </svg>
    ),
    link: "/hizmetler/kombi-tamiri",
  },
  {
    id: 3,
    title: "Kombi Montajı",
    description:
      "Yeni kombilerinizin profesyonel kurulum ve montaj hizmetleri.",
    icon: (
      <svg
        className="w-10 h-10 text-primary-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        ></path>
      </svg>
    ),
    link: "/hizmetler/kombi-montaji",
  },
  {
    id: 4,
    title: "Tesisat ve Petek Temizliği",
    description:
      "Isınma verimini artırmak için profesyonel petek temizlik hizmetleri.",
    icon: (
      <svg
        className="w-10 h-10 text-primary-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        ></path>
      </svg>
    ),
    link: "/hizmetler/tesisat-ve-petek-temizligi",
  },
  {
    id: 6,
    title: "Panel Radyatör Değişimi",
    description: "Eski ve arızalı panel radyatörlerinizin yenisi ile değişimi.",
    icon: (
      <svg
        className="w-10 h-10 text-primary-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        ></path>
      </svg>
    ),
    link: "/hizmetler/panel-radyator-degisimi",
  },
  {
    id: 7,
    title: "Radyatör Vana Değişimi",
    description: "Radyatör vanalarınızın bakım, onarım ve yenileme hizmetleri.",
    icon: (
      <svg
        className="w-10 h-10 text-primary-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
      </svg>
    ),
    link: "/hizmetler/radyator-vana-degisimi",
  },
  {
    id: 9,
    title: "Kombi Yedek Parça ve Aksuar",
    description:
      "Orijinal kombi yedek parçaları ve aksesuarların temin ve montajı.",
    icon: (
      <svg
        className="w-10 h-10 text-primary-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        ></path>
      </svg>
    ),
    link: "/hizmetler/kombi-yedek-parca",
  },
  {
    id: 5,
    title: "Tesisat Tamiri",
    description:
      "Su ve ısıtma tesisatı sorunlarınız için profesyonel tamir hizmeti.",
    icon: (
      <svg
        className="w-10 h-10 text-primary-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        ></path>
      </svg>
    ),
    link: "/hizmetler/tesisat-tamiri",
  },
  {
    id: 8,
    title: "Acil Servis",
    description: "7/24 acil kombi arıza ve tamir hizmetleri.",
    icon: (
      <svg
        className="w-10 h-10 text-primary-600"
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
    ),
    link: "/hizmetler/acil-servis",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hizmetlerimiz</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ordu ve çevresinde kombi bakım, onarım ve montaj hizmetleri
            sunuyoruz. Profesyonel ekibimizle tüm kombi markalarına hizmet
            veriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href={service.link}
                className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
              >
                Detaylı Bilgi
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/hizmetler" className="btn btn-primary">
            Tüm Hizmetlerimizi İncele
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
