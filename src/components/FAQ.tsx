"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
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

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FCF6E4] py-12 font-roboto">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">Questions Fréquemment Posées (FAQs)</h2>
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
                <p className="text-sm font-light text-left text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
