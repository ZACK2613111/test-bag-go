"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext"; 
import translationsEnglish  from "../locales/en/translation.json";
import translationsFrench  from "../locales/fr/translation.json";
import FlightIssueForm from "./FlightIssues";
import Image from "next/image";
import cursor from "../../public/images/Cursor.png";

const Reservation: React.FC = () => {
  const { language } = useLanguage(); 
  const [translations, setTranslations] = useState(translationsEnglish);

  useEffect(() => {
    if (language === "fr") {
      setTranslations(translationsFrench);
    } else {
      setTranslations(translationsEnglish);
    }
  }, [language]);

  const title = translations.title.split("\n");
  console.log(title);

  return (
    <header className="text-center my-8 relative w-full h-auto">
      <div className="relative flex justify-center items-center w-full px-16 mt-20">        
        <div className="flex justify-center items-center w-3/5">
          <h1 className="text-2xl md:text-5xl font-bold">
            <span>
              {language === "fr" ? (
                <>
                  Voyagez en <span className="text-primary">Toute Sérénité</span>
                </>
              ) : (
                <>
                  Travel in <span className="text-primary">Complete Serenity</span>
                </>
              )}
            </span>
            <br />
            <span>
              {language === "fr" ? (
                <>
                  Nous Gérons <span className="text-primary">les Imprévus</span> !
                </>
              ) : (
                <>
                  We Handle <span className="text-primary">the Unexpected</span>!
                </>
              )}
            </span>
          </h1>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="bg-primary p-4 rounded-full animate-spin w-12 h-12 flex justify-center items-center">
            <Image src={cursor} alt="cursor" className="w-6 h-6" />
          </div>
        </div>
      </div>

      <FlightIssueForm />
    </header>
  );
};

export default Reservation;
