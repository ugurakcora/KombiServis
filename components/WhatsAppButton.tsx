"use client";

import { useState } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // WhatsApp numarası (international format: +90 yerine sadece 90)
  const phoneNumber = "905530105040";

  // Ön tanımlı mesaj
  const message =
    "Merhaba! Web sitenizden ulaşıyorum. Kombi servisi hakkında bilgi almak istiyorum.";

  // WhatsApp link
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Ana WhatsApp butonu */}
        <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
          <svg
            className="w-8 h-8 animate-pulse"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </div>

        {/* Hover'da görünen tooltip */}
        <div
          className={`absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"}`}
        >
          <div className="text-sm font-medium">WhatsApp'tan Yazın</div>
          <div className="text-xs text-gray-300">Hızlı destek için</div>

          {/* Ok işareti */}
          <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
            <div className="w-0 h-0 border-l-8 border-l-gray-800 border-t-4 border-b-4 border-t-transparent border-b-transparent"></div>
          </div>
        </div>

        {/* Animasyonlu çember efekti */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></div>
      </a>

      {/* Mobil için ek stil */}
      <style jsx>{`
        @media (max-width: 640px) {
          .fixed {
            bottom: 20px;
            right: 20px;
          }
        }
      `}</style>
    </div>
  );
}
