"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState, useMemo, useCallback} from "react";
import franceFlag from "../../public/images/flags/france.png";
import EnglandFlag from "../../public/images/flags/united-kingdom.png";

const Header = () => {
  // Check if there is a saved language in LocalStorage
  const storedLanguage = typeof window !== "undefined" ? localStorage.getItem("language") : null;

  // Initializing state based on the saved language or default to France
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState<StaticImageData>(
    storedLanguage === "en" ? EnglandFlag : franceFlag
  );

  // Memoizing flags to avoid unnecessary re-renders
  const flags = useMemo(
    () => ({
      france: franceFlag,
      england: EnglandFlag,
    }),
    []
  );

  // Toggle language dropdown menu
  const toggleLanguageMenu = useCallback(() => {
    setLanguageMenuOpen((prev) => !prev);
  }, []);

  // Change language and persist to LocalStorage
  const changeLanguage = useCallback((flag: StaticImageData, lang: string) => {
    setSelectedFlag(flag);
    localStorage.setItem("language", lang); // Store the selected language in LocalStorage
    setLanguageMenuOpen(false); // Close the dropdown after selection
    alert(`Language changed to ${lang === "en" ? "English" : "Français"}`);
  }, []);

  return (
    <header className="bg-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Logo-Black.png"
            alt="BagGo Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium hover:text-primary">
            Accueil
          </Link>
          <Link href="/services" className="font-roboto font-medium hover:text-primary">
            A propos
          </Link>
          <Link href="/contact" className="font-medium hover:text-primary">
            Comment ça marche
          </Link>
          <Link href="/contact" className="font-medium hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              type="button"
              className="font-medium hover:text-primary flex items-center"
              onClick={toggleLanguageMenu}
              title="Dropdown menu"
            >
              <Image
                src={selectedFlag.src}
                alt="Selected Language"
                width={20}
                height={14}
                className="mr-2"
              />
            </button>

            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-20">
                <button
                  type="button"
                  className="w-full text-left px-4 py-2 hover:bg-gray-200"
                  onClick={() => changeLanguage(flags.england, "en")}
                  title="English Language"
                >
                  <Image
                    src={flags.england.src}
                    alt="English"
                    width={20}
                    height={14}
                    className="mr-2"
                  />
                </button>
                <button
                  type="button"
                  className="w-full text-left px-4 py-2 hover:bg-gray-200"
                  onClick={() => changeLanguage(flags.france, "fr")}
                  title="Français Language"
                >
                  <Image
                    src={flags.france.src}
                    alt="Français"
                    width={20}
                    height={14}
                    className="mr-2"
                  />
                </button>
              </div>
            )}
          </div>

          <Link href="/auth/signup">
            <button type="button" className="font-medium hover:text-primary">
              S&apos;inscrire
            </button>
          </Link>

          <Link href="/auth/login">
            <button type="button" className="bg-primary text-white rounded-md px-6 py-2">
              Se connecter
            </button>
          </Link>

          <button
            type="button"
            className="md:hidden text-primary focus:outline-none"
            onClick={() => alert("Mobile menu coming soon!")}
            title="Open mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
