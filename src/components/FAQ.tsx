"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import translationsEnglish from "../locales/en/translation.json";
import translationsFrench from "../locales/fr/translation.json";

interface FAQItem {
  question: string;
  answer: string;
}

const faqsFr: FAQItem[] = [
  {
    question: "Comment signaler un vol retardé ou annulé ?",
    answer:
      "Pour signaler un vol retardé ou annulé, connectez-vous à votre compte sur notre plateforme et accédez à la section 'Signaler un Incident'. Remplissez le formulaire en renseignant les détails de votre vol, tels que le numéro de vol, la date et la compagnie aérienne, ainsi que la nature de l'incident. Une fois la demande soumise, vous recevrez des mises à jour régulières sur son traitement.",
  },
  {
    question: "Ce service est-il disponible pour tous les vols internationaux ?",
    answer:
      "Oui, ce service est disponible pour tous les vols internationaux opérés par les compagnies partenaires. Vous pouvez signaler les incidents en suivant le même processus pour tous les vols internationaux.",
  },
  {
    question: "Puis-je suivre l'évolution de ma demande ?",
    answer:
      "Oui, vous pouvez suivre l'évolution de votre demande directement dans votre espace client. Des notifications vous seront envoyées pour vous informer de l'état de traitement de votre demande.",
  },
  {
    question: "Comment obtenir une compensation pour un incident de voyage ?",
    answer:
      "Pour obtenir une compensation, veuillez soumettre une réclamation via notre plateforme. Notre équipe analysera les informations fournies et prendra une décision en fonction des politiques en vigueur.",
  },
];

const faqsEn: FAQItem[] = [
  {
    question: "How to report a delayed or canceled flight?",
    answer:
      "To report a delayed or canceled flight, log in to your account on our platform and go to the 'Report an Issue' section. Fill out the form with the details of your flight, such as flight number, date, and airline, as well as the nature of the issue. Once the request is submitted, you will receive regular updates on its progress.",
  },
  {
    question: "Is this service available for all international flights?",
    answer:
      "Yes, this service is available for all international flights operated by partner airlines. You can report incidents by following the same process for all international flights.",
  },
  {
    question: "Can I track the status of my request?",
    answer:
      "Yes, you can track the status of your request directly in your customer portal. Notifications will be sent to inform you about the status of your request.",
  },
  {
    question: "How can I get compensation for a travel incident?",
    answer:
      "To get compensation, please submit a claim via our platform. Our team will review the provided information and make a decision based on the applicable policies.",
  },
];

const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState(translationsEnglish);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (language === "fr") {
      setTranslations(translationsFrench);
    } else {
      setTranslations(translationsEnglish);
    }
  }, [language]);

  const faqs = language === "fr" ? faqsFr : faqsEn;
  const title = language === "fr" ? translations.faqTitle : translations.faqTitle;

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FCF6E4] py-12 font-roboto">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">{title}</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-6 mb-6 cursor-pointer transition-all duration-300 transform ${
                openIndex === index ? "scale-105" : ""
              }`}
            >
              <div
                className="flex justify-between items-center mb-4"
                onClick={() => handleToggle(index)}
              >
                <p className="font-light text-left text-lg">{faq.question}</p>
                <span
                  className={`w-8 h-8 flex justify-center items-center text-primary rounded-full transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FF881B"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
              {openIndex === index && (
                <p className="text-sm font-light text-left text-gray-700">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
