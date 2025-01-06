import React from 'react';

const WorksComponent = () => {
  return (
    <div className="font-roboto py-16 bg-white max-w-5xl mx-auto relative">
      <h2 className="text-5xl font-bold text-center text-gray-800">Comment Ça Marche</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
        Signalez votre incident de voyage en quelques clics, suivez l&apos;évolution de votre demande en temps réel, et bénéficiez de notre assistance pour trouver des solutions ou obtenir des compensations. Simplifiez la gestion de vos imprévus et voyagez l&apos;esprit léger !
      </p>
      <div className="flex items-center justify-between mt-12 relative">
        <div className="text-center flex-1">
          <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mx-auto">
            1
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">Signalez Votre Incident</h3>
          <p className="mt-2 text-gray-600 text-sm max-w-[12rem] mx-auto">
            Remplissez rapidement notre formulaire pour bagages perdus, vols retardés ou annulés.
          </p>
        </div>
        <div className="absolute top-[20%] left-[16%] w-[33%] border-t-2 border-dashed border-primary transform translate-y-[-50%]"></div>
        <div className="text-center flex-1">
          <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mx-auto">
            2
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">Recevez des Mises à Jour</h3>
          <p className="mt-2 text-gray-600 text-sm max-w-[12rem] mx-auto">
            Suivez l&apos;avancement de votre réclamation ou demande en temps réel.
          </p>
        </div>
        <div className="absolute top-[20%] left-[51%] w-[33%] border-t-2 border-dashed border-primary transform translate-y-[-50%]"></div>
        <div className="text-center flex-1">
          <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mx-auto">
            3
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">Assistance & Compensation</h3>
          <p className="mt-2 text-gray-600 text-sm max-w-[12rem] mx-auto">
            Nous travaillons avec les compagnies pour obtenir des compensations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorksComponent;
