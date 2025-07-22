import Link from "next/link";

const ContactCTA = () => {
  return (
    <section className="bg-primary-700 text-white py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Kombi Sorununuz mu Var? Hemen Bize Ulaşın!
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Ordu ve çevresinde kombi bakım, onarım ve kurulum hizmetleri için
            7/24 hizmetinizdeyiz. Alanında uzman teknisyenlerimizle hızlı ve
            kaliteli çözümler sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/iletisim"
              className="btn bg-white text-primary-700 hover:bg-gray-100 text-lg py-3 px-8"
            >
              İletişime Geç
            </Link>
            <a
              href="tel:+905530105040"
              className="btn bg-primary-600 border border-white hover:bg-primary-800 text-lg py-3 px-8 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
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
              0553 010 50 40
            </a>
          </div>
          <div className="mt-8 text-sm opacity-80">
            <p>
              Acil durumlarda 7/24 hizmet veriyoruz. Aynı gün servis garantisi!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
