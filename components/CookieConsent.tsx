"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    } else {
      const consentData = JSON.parse(consent);
      setPreferences(consentData.preferences);

      // Load Google Analytics if consented
      if (consentData.preferences.analytics) {
        loadGoogleAnalytics();
      }
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Google Analytics GA4
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
        page_title: document.title,
        page_location: window.location.href,
      });
    `;
    document.head.appendChild(script2);
  };

  const acceptAll = () => {
    const consentData = {
      timestamp: new Date().toISOString(),
      preferences: {
        necessary: true,
        analytics: true,
        marketing: false, // Şimdilik sadece analytics
      },
    };

    localStorage.setItem("cookie-consent", JSON.stringify(consentData));
    setPreferences(consentData.preferences);
    setShowBanner(false);
    loadGoogleAnalytics();
  };

  const acceptNecessaryOnly = () => {
    const consentData = {
      timestamp: new Date().toISOString(),
      preferences: {
        necessary: true,
        analytics: false,
        marketing: false,
      },
    };

    localStorage.setItem("cookie-consent", JSON.stringify(consentData));
    setPreferences(consentData.preferences);
    setShowBanner(false);
  };

  const acceptCustom = () => {
    const consentData = {
      timestamp: new Date().toISOString(),
      preferences,
    };

    localStorage.setItem("cookie-consent", JSON.stringify(consentData));
    setShowBanner(false);

    if (preferences.analytics) {
      loadGoogleAnalytics();
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center p-2 sm:p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md sm:max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 sm:p-6 rounded-t-lg">
          <h3 className="text-lg sm:text-xl font-bold flex items-center">
            🍪 <span className="ml-2">Çerez Politikası</span>
          </h3>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-6">
          <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
            Deneyiminizi geliştirmek için çerezler kullanıyoruz. Tercihlerinizi
            seçin.
          </p>

          {/* Cookie Types */}
          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="mt-1 rounded border-gray-300 text-sm"
              />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                  Gerekli Çerezler
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  Sitenin çalışması için zorunlu.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2 sm:space-x-3">
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    analytics: e.target.checked,
                  })
                }
                className="mt-1 rounded border-gray-300"
              />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                  Analiz Çerezleri
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  Site istatistikleri ve performans analizi için.
                </p>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-500 mb-4 sm:mb-6 p-2 sm:p-3 bg-gray-50 rounded">
            <strong>KVKK:</strong> Detaylar için{" "}
            <a
              href="/gizlilik-politikasi"
              className="text-blue-600 hover:underline"
            >
              politikamızı
            </a>{" "}
            inceleyin.
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <button
              onClick={acceptAll}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
            >
              ✅ Tümünü Kabul Et
            </button>
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={acceptCustom}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold transition-colors text-xs sm:text-sm flex-1"
              >
                💾 Kaydet
              </button>
              <button
                onClick={acceptNecessaryOnly}
                className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold transition-colors text-xs sm:text-sm flex-1"
              >
                🚫 Reddet
              </button>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-3 sm:mt-4 text-center">
            Ayarlar değiştirilebilir.
          </p>
        </div>
      </div>
    </div>
  );
}
