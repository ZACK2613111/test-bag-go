import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

interface Translations {
  [key: string]: string;
}

export const useTranslation = () => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState<Translations | null>(null);

  useEffect(() => {
    const loadTranslations = async () => {
      const data = await import(`../locales/${language}/translation.json`);
      setTranslations(data);
    };

    loadTranslations();
  }, [language]);

  const t = (key: string) => translations?.[key] || key;

  return { t };
};
