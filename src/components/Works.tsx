"use client";
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext'; 
import translationsEnglish from '../locales/en/translation.json';
import translationsFrench from '../locales/fr/translation.json';

const WorksComponent: React.FC = () => {
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
    <div className="font-roboto py-16 bg-white max-w-5xl mx-auto relative">
      <h2 className="text-5xl font-bold text-center text-gray-800">{translations.howItWorks}</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
        {translations.reportIncidentText}
      </p>
      <div className="flex items-center justify-between mt-12 relative">
        <div className="text-center flex-1">
          <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mx-auto">
            1
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">{translations.reportIncident}</h3>
          <p className="mt-2 text-gray-600 text-sm max-w-[12rem] mx-auto">
            {translations.fillForm}
          </p>
        </div>
        <div className="absolute top-[20%] left-[16%] w-[33%] border-t-2 border-dashed border-primary transform translate-y-[-50%]"></div>
        <div className="text-center flex-1">
          <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mx-auto">
            2
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">{translations.receiveUpdates}</h3>
          <p className="mt-2 text-gray-600 text-sm max-w-[12rem] mx-auto">
            {translations.trackProgress}
          </p>
        </div>
        <div className="absolute top-[20%] left-[51%] w-[33%] border-t-2 border-dashed border-primary transform translate-y-[-50%]"></div>
        <div className="text-center flex-1">
          <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mx-auto">
            3
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">{translations.assistanceCompensation}</h3>
          <p className="mt-2 text-gray-600 text-sm max-w-[12rem] mx-auto">
            {translations.workWithCompanies}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorksComponent;
