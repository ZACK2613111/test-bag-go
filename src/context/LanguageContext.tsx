"use client"
import { createContext, useState, useContext, ReactNode } from "react";
import { StaticImageData } from "next/image";
import franceFlag from "../../public/images/flags/france.png";
import EnglandFlag from "../../public/images/flags/united-kingdom.png";

interface LanguageContextType {
  language: string;
  selectedFlag: StaticImageData;
  changeLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const storedLanguage = typeof window !== "undefined" ? localStorage.getItem("language") : "fr";
  
  const [language, setLanguage] = useState(storedLanguage || "fr");
  const [selectedFlag, setSelectedFlag] = useState<StaticImageData>(
    language === "en" ? EnglandFlag : franceFlag
  );

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setSelectedFlag(lang === "en" ? EnglandFlag : franceFlag);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, selectedFlag, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
