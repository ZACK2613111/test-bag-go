"use client";
import React from "react";

interface TestimonialProps {
  name: string;
  job: string;
  stars: number;
  description: string;
}

const TestimonialItem: React.FC<TestimonialProps> = ({
  name,
  job,
  stars,
  description,
}) => {
  return (
    <div className="testimonial-item shadow-lg rounded-xl p-6 bg-white border flex flex-col items-center space-y-4 w-10/12">
      <h4 className="font-bold text-lg">{name}</h4>
      <p className="text-sm text-gray-600">{job}</p>

      <div className="flex space-x-1">
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${i < stars ? "text-primary" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.785 1.553 8.223L12 18.567l-7.489 4.747 1.553-8.223-6.064-5.785 8.332-1.151L12 .587z" />
          </svg>
        ))}
      </div>

      <p className="text-sm lg:text-base text-gray-700 leading-relaxed text-center">
        {description}
      </p>
    </div>
  );
};

export default TestimonialItem;
