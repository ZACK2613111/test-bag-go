import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Translations {
  [key: string]: string;
}
export const useTranslation = () => {
  const { locale } = useRouter();
  const [translations, setTranslations] = useState<Translations | null>(null);

  useEffect(() => {
    const loadTranslations = async () => {
      const data = await import(`../locales/${locale}/translation.json`);
      setTranslations(data);
    };

    loadTranslations();
  }, [locale]);

  const t = (key: string) => translations?.[key] || key;

  return { t };
};
