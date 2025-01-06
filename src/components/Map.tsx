"use client";
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext'; 
import translationsEnglish from '../locales/en/translation.json';
import translationsFrench from '../locales/fr/translation.json';
import Image from "next/image";
import mapImage from "../../public/images/WorldMap.png";

const MapComponent: React.FC = () => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState(translationsEnglish);

  useEffect(() => {
    if (language === 'fr') {
      setTranslations(translationsFrench);
    } else {
      setTranslations(translationsEnglish);
    }
  }, [language]);

  return (
    <div className="relative w-full h-screen">
      <Image
        src={mapImage}
        alt="Map"
        layout="fill"
        objectFit="contain"
        className="z-0"
      />
      
      <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 bg-white bg-opacity-60 backdrop-blur-lg px-4">
        <h1 className="text-5xl font-bold text-center text-gray-800">
          {translations.mapComponentText}
        </h1>
      </div>
    </div>
  );
};

export default MapComponent;
