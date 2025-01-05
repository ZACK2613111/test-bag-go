import React from "react";
import Image from "next/image";
import FilleImage from "../../public/images/Fille.png";

const About: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-6 py-8">
      {/* Image Section */}
      <div className="relative flex justify-end items-center w-full lg:w-[50%] h-[500px] bg-primary rounded-r-[10rem] lg:rounded-r-[12rem] p-6">
        <div className="absolute top-[-5rem] right-[-0.5rem] z-20">
          <Image
            src={FilleImage}
            alt="Fille holding a passport"
            width={750}
            height={650}
            className="object-cover"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-[50%] bg-transparent px-6 lg:px-8 font-roboto">
        <h2 className="text-xl lg:text-2xl font-bold text-secondary">À Propos</h2>
        <h1 className="text-3xl lg:text-4xl font-extrabold mt-4">Notre Solution Bag&Go</h1>
        <p className="mt-4 text-sm lg:text-base leading-relaxed text-gray-700">
          Bag&Go est une solution dédiée à la gestion rapide et efficace des
          imprévus de voyage. Que vous soyez confronté à un bagage perdu, un vol
          retardé ou annulé, notre mission est de transformer votre expérience
          de voyage en réduisant au minimum les tracas.
        </p>

        {/* Stats Section */}
        <div className="mt-8 lg:mt-10 grid grid-cols-2 gap-4 lg:gap-6">
          <div className="shadow-xl rounded-3xl flex flex-col items-center space-y-2 border p-4">
            <h1 className="text-xl lg:text-2xl font-bold text-primary">200 +</h1>
            <p className="text-sm lg:text-lg text-center font-semibold">Bagages retrouvés</p>
          </div>
          <div className="shadow-xl rounded-3xl flex flex-col items-center space-y-2 border p-4">
            <h1 className="text-xl lg:text-2xl font-bold text-primary">29 K</h1>
            <p className="text-sm lg:text-lg text-center font-semibold">Clients satisfaits</p>
          </div>
          <div className="shadow-xl rounded-3xl flex flex-col items-center space-y-2 border p-4">
            <h1 className="text-xl lg:text-2xl font-bold text-primary">450</h1>
            <p className="text-sm lg:text-lg text-center font-semibold">Vols pris en charge</p>
          </div>
          <div className="shadow-xl rounded-3xl flex flex-col items-center space-y-2 border p-4">
            <h1 className="text-xl lg:text-2xl font-bold text-primary">24/7</h1>
            <p className="text-sm lg:text-lg text-center font-semibold">Assistance disponible</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
