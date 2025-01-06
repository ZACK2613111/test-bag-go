"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Logo from "../../public/images/Logo.png";
import { useLanguage } from "../context/LanguageContext";
import translationsEnglish from "../locales/en/translation.json";
import translationsFrench from "../locales/fr/translation.json";

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState(translationsEnglish);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (language === "fr") {
      setTranslations(translationsFrench);
    } else {
      setTranslations(translationsEnglish);
    }
  }, [language]);

  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        <div className="flex flex-col items-center lg:items-start">
          <div className="w-20 h-20 bg-white rounded-full flex justify-center items-center mb-4">
            <Image src={Logo} alt="Logo" className="object-contain" />
          </div>
          <p className="text-center lg:text-left">
            &copy; {new Date().getFullYear()} Bag&Go. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">{translations.about}</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-primary">
                {translations.about}
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="hover:text-primary">
                {translations.how_it_works}
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-primary">
                {translations.faq}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">{translations.support}</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/contact" className="hover:text-primary">
                {translations.contact}
              </Link>
            </li>
            <li>
              <Link href="/claims" className="hover:text-primary">
                {translations.claims}
              </Link>
            </li>
            <li>
              <Link href="/help-center" className="hover:text-primary">
                {translations.help_center}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">{translations.legal_information}</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/legal-notice" className="hover:text-primary">
                {translations.legal_notice}
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-primary">
                {translations.privacy_policy}
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-primary">
                {translations.terms_and_conditions}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">{translations.newsletter}</h3>
          <div className="space-y-4 mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={translations.newsletter_placeholder}
              className="w-full mt-2 border-b-2 border-primary focus:outline-none text-gray-600"
            />
          </div>
          <button
              className="bg-primary text-white px-6 py-2 rounded-lg w-full hover:opacity-80 text-base"
              type="button"
            >
              {translations.subscribe_button}
            </button>

          <div className="flex justify-center lg:justify-start items-center mt-4 space-x-4">
            <h1 className="font-bold text-nowrap text-center text-large font-roboto">{translations.follow_us}</h1>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:opacity-80">
              <FontAwesomeIcon icon={faFacebook} className="text-primary w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:opacity-80">
              <FontAwesomeIcon icon={faLinkedin} className="text-primary w-6 h-6" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:opacity-80">
              <FontAwesomeIcon icon={faInstagram} className="text-primary w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
