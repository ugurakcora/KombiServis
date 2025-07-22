"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    role: "Ev Sahibi",
    content:
      "Kombim arızalandığında aynı gün içinde geldiler ve sorunu hızlıca çözdüler. Çok profesyonel ve güler yüzlü bir ekip. Kesinlikle tavsiye ederim.",
    avatar: "/images/testimonials/person1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Ayşe Kaya",
    role: "Apartman Yöneticisi",
    content:
      "Binamızdaki tüm kombilerin bakımını yaptırdık. İşlerini titizlikle yapan, dakik ve profesyonel bir firma. Fiyatları da oldukça uygun.",
    avatar: "/images/testimonials/person2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Mehmet Demir",
    role: "İşyeri Sahibi",
    content:
      "İşyerimizde yaşadığımız kombi sorununu çözmek için birçok servis denedik ama hiçbiri kalıcı çözüm sunamadı. Mert Teknik ekibi geldi ve sorunu kökten halletti. Teşekkürler!",
    avatar: "/images/testimonials/person3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Zeynep Aydın",
    role: "Ev Sahibi",
    content:
      "Kombi değişimi için araştırma yaparken Mert Teknik ile tanıştım. Hem fiyat hem de hizmet kalitesi açısından beklentilerimin üzerinde bir deneyim yaşadım.",
    avatar: "/images/testimonials/person4.jpg",
    rating: 4,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-20 bg-primary-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Memnun müşterilerimizin deneyimlerini okuyun ve neden bizi tercih
            ettiklerini öğrenin.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Testimonial */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
            <div className="flex items-center mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-gray-600">
                  {testimonials[activeIndex].role}
                </p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonials[activeIndex].rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <blockquote className="text-lg md:text-xl italic text-gray-700 mb-6">
              "{testimonials[activeIndex].content}"
            </blockquote>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none z-40"
            aria-label="Önceki yorum"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none z-40"
            aria-label="Sonraki yorum"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-colors hover:scale-110 ${
                  index === activeIndex
                    ? "bg-primary-600"
                    : "bg-gray-300 hover:bg-primary-300"
                }`}
                aria-label={`Yorum ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
