import React from "react";
import Card from "./Card";

const CardList = ({ countries, onItemClick }) => {
  return (
    <div className="grid justify-items-center grid-flow-row gap-5 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-10">
      {countries.map((country, index) => (
        <div key={index}>
          <Card country={country} onItemClick={onItemClick} />
        </div>
      ))}
    </div>
  );
};

export default React.memo(CardList);
