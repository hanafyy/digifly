"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const locale = pathname.split("/")[1];

  const switchLanguage = (lang: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${lang}`);
    router.push(newPath);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="relative flex flex-row items-center justify-between px-4 md:px-8 py-2 w-full">
      {/* Left Logo Section */}
      <div className="flex flex-row items-center justify-between w-1/2">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={75}
            className="w-[100px] h-[75px] cursor-pointer"
          />
        </div>

        {/* Center Navigation Links - Desktop */}
        <div className="hidden md:flex flex-row justify-center items-center gap-6 font-medium flex-grow w-fit">
          <Link href="/" className="text-defaultGreen hover:text-defaultGreen">
            {t("Home")}
          </Link>
          <Link
            href="/categories"
            className="text-gray-700 hover:text-defaultGreen"
          >
            {t("Categories")}
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-defaultGreen"
          >
            {t("Contact us")}
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-defaultGreen">
            {t("About")}
          </Link>
        </div>
      </div>

      {/* Right Language Selector */}
      <div className="flex items-center">
        <button
          className="flex flex-row items-center gap-2 cursor-pointer"
          onClick={() => switchLanguage(locale === "en" ? "ar" : "en")}
        >
          <span className="font-medium">
            {locale === "ar" ? "en" : "العربية"}
          </span>
          <Image
            src={locale === "en" ? "/ar.png" : "/en.png"}
            alt="language flag"
            width={24}
            height={16}
            className="w-6 h-6 rounded-full"
          />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="ml-4 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-20 md:hidden`}
      >
        <div className="flex flex-col h-full justify-start pt-20 px-6 space-y-6">
          <Link
            href="/"
            className="text-defaultGreen hover:text-defaultGreen font-medium"
          >
            {t("Home")}
          </Link>
          <Link
            href="/categories"
            className="text-gray-700 hover:text-defaultGreen font-medium"
          >
            {t("Categories")}
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-defaultGreen font-medium"
          >
            {t("Contact us")}
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-defaultGreen font-medium"
          >
            {t("About")}
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
