"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext"; 
import translationsEnglish from "../locales/en/translation.json";
import translationsFrench from "../locales/fr/translation.json";
import Image from "next/image";
import FilleImage from "../../public/images/Fille.png";

const About: React.FC = () => {
  const { language } = useLanguage(); 
  const [translations, setTranslations] = useState(translationsEnglish);

  useEffect(() => {
    setTranslations(language === "fr" ? translationsFrench : translationsEnglish);
  }, [language]);

  return (
    <section className="py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-6">

        <div className="relative flex justify-end items-center w-full lg:w-[50%] h-[500px] bg-primary rounded-r-[10rem] lg:rounded-r-[12rem] p-6">
          <div className="absolute top-[-5rem] right-[-0.5rem] z-20">
            <Image
              src={FilleImage}
              alt="Fille holding a passport"
              width={850}
              height={680}
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-[50%] px-6 lg:px-8 font-roboto">
          <h2 className="text-xl lg:text-2xl font-bold text-secondary">{translations.aboutTitle}</h2>
          <h1 className="text-3xl lg:text-4xl font-extrabold mt-4 text-primary">{translations.ourSolution}</h1>
          <p className="mt-4 text-sm lg:text-base leading-relaxed text-gray-700">{translations.aboutText}</p>

          <div className="mt-8 lg:mt-10 grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="shadow-xl rounded-3xl flex flex-col items-center space-y-2 border p-4 bg-white">
              <h1 className="text-2xl lg:text-3xl font-bold text-primary">200 +</h1>
              <p className="text-sm lg:text-lg text-center font-semibold text-gray-600">
                {translations.foundBags}
              </p>
            </div>

            <div className="shadow-xl rounded-3xl flex flex-col items-center space-y-2 border p-4 bg-white">
              <h1 className="text-2xl lg:text-3xl font-bold text-primary">29 K</h1>
              <p className="text-sm lg:text-lg text-center font-semibold text-gray-600">
                {translations.satisfiedClients}
              </p>
            </div>

            <div className="shadow-xl rounded-3xl flex flex-col items-center space-y-2 border p-4 bg-white">
              <h1 className="text-2xl lg:text-3xl font-bold text-primary">450</h1>
              <p className="text-sm lg:text-lg text-center font-semibold text-gray-600">
                {translations.takenFlights}
              </p>
            </div>

            <div className="shadow-xl rounded-3xl flex flex-col items-center space-y-2 border p-4 bg-white">
              <h1 className="text-2xl lg:text-3xl font-bold text-primary">24/7</h1>
              <p className="text-sm lg:text-lg text-center font-semibold text-gray-600">
                {translations.availableAssistance}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
