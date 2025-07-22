import Image from "next/image";

const reasons = [
  {
    id: 1,
    title: "Profesyonel Ekip",
    description:
      "Alanında uzman ve deneyimli teknisyenlerimizle kaliteli hizmet sunuyoruz.",
    icon: (
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        ></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Hızlı Servis",
    description:
      "Acil durumlarda aynı gün servis garantisi ile hızlı çözümler sunuyoruz.",
    icon: (
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Uygun Fiyat",
    description:
      "Kaliteli hizmeti uygun fiyatlarla sunarak bütçenizi zorlamıyoruz.",
    icon: (
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Garantili İşçilik",
    description:
      "Tüm bakım ve onarım işlemlerimiz 1 yıl servis garantisi altındadır.",
    icon: (
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        ></path>
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src="/images/technician-working.jpg"
              alt="Kombi teknisyeni çalışırken"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ordu ve çevresinde 25 yılı aşkın tecrübemizle, tüm kombi marka ve
              modellerine profesyonel servis hizmeti sunuyoruz. Müşteri
              memnuniyeti odaklı çalışma prensibiyle, kaliteli ve güvenilir
              hizmet garantisi veriyoruz.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div key={reason.id} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">{reason.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
