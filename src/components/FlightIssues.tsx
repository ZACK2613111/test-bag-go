"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CalendarIcon from "../../public/images/calendar.png";
import PlaneDepartureIcon from "../../public/images/plane-departure.png";
import PlaneArrivalIcon from "../../public/images/plane-arrival.png";
import { useLanguage } from "../context/LanguageContext"; 
import translationsEnglish  from "../locales/en/translation.json";
import  translationsFrench  from "../locales/fr/translation.json";

type FormData = {
  issueType: string;
  departure: string;
  arrival: string;
  date: string;
  airline: string;
  flightType: string;
};

const FlightIssueForm: React.FC = () => {
  const { language } = useLanguage(); 
  const [translations, setTranslations] = useState(translationsEnglish);
  const [formData, setFormData] = useState<FormData>({
    issueType: "",
    departure: "",
    arrival: "",
    date: "",
    airline: "",
    flightType: "",
  });

  useEffect(() => {
    if (language === "fr") {
      setTranslations(translationsFrench);
    } else {
      setTranslations(translationsEnglish);
    }
  }, [language]);

  const issues = {
    bagages: translations.issues.bagages,
    volRetarde: translations.issues.volRetarde,
    correspondance: translations.issues.correspondance,
    surbooking: translations.issues.surbooking,
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = () => {
    console.log("Form data:", formData);
  };

  return (
    <>
      <div className="p-8 rounded-lg shadow-xl space-y-6 m-12">
        <div className="flex justify-evenly gap-2">
          {Object.entries(issues).map(([id, label]) => (
            <label key={id} className="flex items-center gap-2 group">
              <input
                type="radio"
                name="issueType"
                value={id}
                checked={formData.issueType === id}
                onChange={handleInputChange}
                className="h-6 w-6 border-2 border-gray-600 rounded-full bg-white group-checked:bg-black focus:outline-none"
              />
              <span className="text-gray-800">{label}</span>
            </label>
          ))}
        </div>

        <h3 className="text-lg font-bold">{translations.flightInfo}</h3>
        <div className="flex flex-wrap gap-6">
          <div className="flex-1">
            <div className="flex items-center">
              <Image src={PlaneDepartureIcon} alt="Départ" width={24} height={24} priority />
              <span className="ml-2">{translations.departure}</span>
            </div>
            <input
              type="text"
              name="departure"
              value={formData.departure}
              onChange={handleInputChange}
              placeholder={translations.departurePlaceholder}
              className="w-full mt-2 border-b-2 border-primary focus:outline-none text-gray-600"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center">
              <Image src={PlaneArrivalIcon} alt="Arrivée" width={24} height={24} priority />
              <span className="ml-2">{translations.arrival}</span>
            </div>
            <input
              type="text"
              name="arrival"
              value={formData.arrival}
              onChange={handleInputChange}
              placeholder={translations.arrivalPlaceholder}
              className="w-full mt-2 border-b-2 border-primary focus:outline-none text-gray-600"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center">
              <Image src={CalendarIcon} alt="Date de départ" width={24} height={24} priority />
              <span className="ml-2">{translations.date}</span>
            </div>
            <input
              title={translations.date}
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full mt-2 border-b-2 border-primary focus:outline-none text-gray-600"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-6 justify-between">
          <div className="flex-1 min-w-[250px]">
            <label className="text-gray-700 w-full">{translations.airline}</label>
            <input
              type="text"
              name="airline"
              value={formData.airline}
              onChange={handleInputChange}
              placeholder={translations.airlinePlaceholder}
              className="w-full mt-2 border-b-2 border-primary focus:outline-none text-gray-600 py-2"
            />
          </div>

          <div className="flex-1 min-w-[250px]">
            <label className="text-gray-700 w-full">{translations.flightType}</label>
            <select
              aria-label="label for the select"
              name="flightType"
              value={formData.flightType}
              onChange={handleInputChange}
              className="w-full mt-2 border-b-2 border-primary focus:outline-none text-gray-600 py-2"
            >
              <option value="direct">{translations.directFlight}</option>
              <option value="escales">{translations.withStops}</option>
            </select>
          </div>
        </div>

        <div className="text-center mt-4">
        </div>
      </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-16 py-3 text-white rounded-lg bg-primary text-base"
          >
            {translations.reportIssue}
          </button>
    </>
  );
};

export default FlightIssueForm;
