"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Mert Teknik - Kombi ve Tesisat Teknik Servisi"
                width={200}
                height={120}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Ana Sayfa
            </Link>
            <Link
              href="/hizmetler"
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Hizmetlerimiz
            </Link>
            <Link
              href="/hakkimizda"
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Hakkımızda
            </Link>
            <Link
              href="/iletisim"
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              İletişim
            </Link>
          </nav>

          {/* Phone Numbers and Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex flex-col space-y-1">
              <a
                href="tel:+905530105040"
                className="text-red-600 font-semibold text-sm hover:text-red-700"
              >
                0553 010 50 40
              </a>
              <a
                href="tel:+905079042085"
                className="text-red-600 font-semibold text-sm hover:text-red-700"
              >
                0507 904 20 85
              </a>
            </div>
            <Link href="/iletisim" className="btn btn-primary">
              Hemen Ara
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-2 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-600 font-medium px-2"
              >
                Ana Sayfa
              </Link>
              <Link
                href="/hizmetler"
                className="text-gray-700 hover:text-primary-600 font-medium px-2"
              >
                Hizmetlerimiz
              </Link>
              <Link
                href="/hakkimizda"
                className="text-gray-700 hover:text-primary-600 font-medium px-2"
              >
                Hakkımızda
              </Link>
              <Link
                href="/iletisim"
                className="text-gray-700 hover:text-primary-600 font-medium px-2"
              >
                İletişim
              </Link>
              {/* Mobile Phone Numbers */}
              <div className="flex flex-col space-y-2 px-2">
                <a
                  href="tel:+905530105040"
                  className="text-red-600 font-semibold text-sm hover:text-red-700"
                >
                  0553 010 50 40
                </a>
                <a
                  href="tel:+905079042085"
                  className="text-red-600 font-semibold text-sm hover:text-red-700"
                >
                  0507 904 20 85
                </a>
              </div>
              <Link
                href="/iletisim"
                className="btn btn-primary w-full text-center"
              >
                Hemen Ara
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
