"use client";

import testimonials from "@/data/testimonials";
import React, { useState, useRef } from "react";
import TestimonialItem from "./TestimonialComponent";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext"; // Import the useLanguage hook
import translationsEnglish from "../../locales/en/translation.json";
import translationsFrench from "../../locales/fr/translation.json";

const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseScroll = (event: React.WheelEvent) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollLeft = container.scrollLeft;
      const deltaX = event.deltaY;

      container.scrollTo({
        left: scrollLeft + deltaX,
        behavior: "smooth",
      });

      const newIndex = Math.round(
        (scrollLeft + deltaX) / (container.offsetWidth * 0.6)
      );
      setCurrentIndex(Math.min(Math.max(0, newIndex), testimonials.length - 1));
    }
  };

  // Set the appropriate translation file based on the current language
  const translations = language === "fr" ? translationsFrench : translationsEnglish;

  return (
    <section className="bg-[#FCF6E4] py-12">
      <div className="text-center mb-6">
        <p className="text-xl font-roboto font-bold text-secondary my-2">
          {translations.testimonials.subtitle}
        </p>
        <h2 className="text-5xl lg:text-4xl font-roboto font-bold">
          {translations.testimonials.title}
        </h2>
      </div>

      <div
        ref={containerRef}
        className="relative w-full max-w-6xl mx-auto overflow-hidden"
        onWheel={handleMouseScroll}
      >
        <motion.div
          className="flex"
          animate={{ x: -currentIndex * 60 + "%" }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[60%] px-4"
              style={{ scrollSnapAlign: "center" }}
            >
              <TestimonialItem {...testimonial} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            animate={{ scale: currentIndex === index ? 1.2 : 1 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
