import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"></div>
      </div>

      <div className="container relative z-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Evinizi Sıcak Tutan Güçlü Çözümler
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-xl">
              Profesyonel ekibimizle kombi bakım, onarım ve kurulum hizmetleri
              sunuyoruz. 7/24 hızlı ve güvenilir servis garantisi. 1 Yıl Garanti
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/iletisim" className="btn btn-secondary">
                Servis Talebi Oluştur
              </Link>
              <Link
                href="/hizmetler"
                className="btn bg-white text-primary-700 hover:bg-gray-100 px-4"
              >
                Hizmetlerimizi İncele
              </Link>
            </div>

            {/* Trust badges */}
            <div className="pt-6">
              <p className="text-sm font-medium mb-3">Güvenilir Hizmet</p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>7/24 Servis</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Aynı Gün Servis</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>1 Yıl Garanti</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-black/20 z-10 rounded-lg"></div>
            <Image
              src="/images/hero-technician.jpg"
              alt="Kombi servisi teknisyeni çalışırken"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
