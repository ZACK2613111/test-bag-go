"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState, useMemo, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import franceFlag from "../../public/images/flags/france.png";
import EnglandFlag from "../../public/images/flags/united-kingdom.png";

const Header = () => {
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState<StaticImageData | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  const flags = useMemo(
    () => ({
      france: franceFlag,
      england: EnglandFlag,
    }),
    []
  );

  useEffect(() => {
    const storedLanguage = typeof window !== "undefined" ? localStorage.getItem("language") : null;

    if (storedLanguage) {
      setSelectedFlag(storedLanguage === "en" ? EnglandFlag : franceFlag);
    } else {
      setSelectedFlag(franceFlag); 
    }

    setIsLoaded(true);
  }, []);

  const toggleLanguageMenu = useCallback(() => {
    setLanguageMenuOpen((prev) => !prev);
  }, []);

  const changeLanguage = useCallback((flag: StaticImageData, lang: string) => {
    setSelectedFlag(flag);
    localStorage.setItem("language", lang);

    const currentPath = window.location.pathname;
    router.push(`/${lang}${currentPath.replace(/^\/(en|fr)/, '')}`);
    setLanguageMenuOpen(false);
  }, [router]);

  if (!isLoaded) {
    return null; // Render nothing while loading
  }

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
            priority
          />
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium hover:text-primary">
            {selectedFlag === flags.england ? "Home" : "Accueil"}
          </Link>
          <Link href="/services" className="font-roboto font-medium hover:text-primary">
            {selectedFlag === flags.england ? "About" : "A propos"}
          </Link>
          <Link href="/contact" className="font-medium hover:text-primary">
            {selectedFlag === flags.england ? "How it works" : "Comment ça marche"}
          </Link>
          <Link href="/contact" className="font-medium hover:text-primary">
            {selectedFlag === flags.england ? "Contact" : "Contact"}
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
              {selectedFlag && (
                <Image
                  src={selectedFlag.src}
                  alt="Selected Language"
                  width={20}
                  height={14}
                  className="mr-2"
                  priority
                />
              )}
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
                    priority
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
                    priority
                  />
                </button>
              </div>
            )}
          </div>

          <Link href="/auth/signup">
            <button type="button" className="font-medium hover:text-primary">
              {selectedFlag === flags.england ? "Sign Up" : "S'inscrire"}
            </button>
          </Link>

          <Link href="/auth/login">
            <button type="button" className="bg-primary text-white rounded-md px-6 py-2">
              {selectedFlag === flags.england ? "Log In" : "Se connecter"}
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
