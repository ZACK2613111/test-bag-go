"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Logo from "../../public/images/Logo.png";

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Logo Column */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="w-20 h-20 bg-white rounded-full flex justify-center items-center mb-4">
            <Image src={Logo} alt="Logo" className="object-contain" />
          </div>
          <p className="text-center lg:text-left">
            &copy; {new Date().getFullYear()} Guessra. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">A propos</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:underline">
                A propos de nous
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="hover:underline">
                Comment ça marche
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/contact" className="hover:underline">
                Contactez-nous
              </Link>
            </li>
            <li>
              <Link href="/claims" className="hover:underline">
                Suivi de votre réclamation
              </Link>
            </li>
            <li>
              <Link href="/help-center" className="hover:underline">
                Centre d&apos;aide
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Informations légales</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/legal-notice" className="hover:underline">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:underline">
                Conditions d&apos;utilisation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <div className="space-y-4 mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Ecrivez votre adresse email"
              className="w-full mt-2 border-b-2 border-primary focus:outline-none text-gray-600"
            />
          </div>
          <button
              className="bg-primary text-white px-6 py-2 rounded-lg w-full hover:opacity-80"
              type="button"
            >
              S&apos;inscrire
            </button>
        <div className="flex justify-center lg:justify-start items-center mt-4 space-x-4">
            <h1 className="font-bold text-nowrap text-center text-large font-roboto">Suivez Nous</h1>
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
