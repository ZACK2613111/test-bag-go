"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext"; 
import translationsEnglish  from "../locales/en/translation.json";
import  translationsFrench  from "../locales/fr/translation.json";
import FlightIssueForm from "./FlightIssues";

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
    <header className="text-center my-8">
      <h1 className="text-2xl md:text-5xl font-bold">
        <br />
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
      <FlightIssueForm />
    </header>
  );
};

export default Reservation;
