import React from "react";
import FlightIssueForm from "./FlightIssues";

const Reservation: React.FC = () => {
  return (
    <header className="text-center my-8">
      <h1 className="text-2xl md:text-5xl font-bold">
        Voyagez en <span className="text-primary ">Toute Sérénité</span>
      </h1>
      <h1 className="text-xl md:text-5xl font-bold mt-4">
        Nous Gérons <span className="text-primary">les Imprévus</span> !
      </h1>
      <FlightIssueForm />
    </header>
  );
};

export default Reservation;
