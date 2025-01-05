"use client";

import testimonials from "@/data/testimonials";
import React, { useState, useRef } from "react";
import TestimonialItem from "./TestimonialComponent";
import { motion } from "framer-motion";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseScroll = (event: React.WheelEvent) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollLeft = container.scrollLeft;
      const deltaX = event.deltaY;

      // Smooth horizontal scroll
      container.scrollTo({
        left: scrollLeft + deltaX,
        behavior: "smooth",
      });

      // Update the current index
      const newIndex = Math.round(
        (scrollLeft + deltaX) / (container.offsetWidth * 0.6)
      );
      setCurrentIndex(Math.min(Math.max(0, newIndex), testimonials.length - 1));
    }
  };

  return (
    <section className="bg-[#FCF6E4] py-12">
      <div className="text-center mb-6">
        <p className="text-xl font-roboto font-bold text-secondary my-2">
          Témoignages
        </p>
        <h2 className="text-2xl lg:text-4xl font-roboto font-bold">
          Ce qu’ils disent sur nous
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
