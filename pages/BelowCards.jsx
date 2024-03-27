import React, { useState } from "react";
import TicketCard from "./BelowCard";
import data from "../data.json";
import Image from "next/image";
import next from "./img/next.png";
import prev from "./img/prev.png";
const BelowCards = ({currentTheme}) => {
  const products = data.products;
  const [startIndex, setStartIndex] = useState(0);
  

  const nextSlide = () => {
    if (startIndex + 3 < products.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
  };

  // Function to handle moving the carousel backward
  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(products.length - 3);
    }
  };

  return (
    <div className={`flex flex-col justify-center items-center p-9 px-11 ${currentTheme === 'dark'?'bg-gradient-to-b from-green-900 to-indigo-900 h-full':'bg-white'}`}>
      <div className="px-10 text-center">
        <h1 className="text-4xl mb-4">Collections Spotlight</h1>
        <p className="text-center">
          Discover extraordinary moments with our Spotlight
          metatickets-exclusive access to premium events for an unforgettable
          experience. Grab yours today
        </p>
      </div>
      <div className="flex justify-between">
        <button onClick={prevSlide}>
          {" "}
          <Image src={prev} />{" "}
        </button>
        <div className="flex gap-6 mx-8">
          {products.slice(startIndex, startIndex + 3).map((product, index) => (
            <TicketCard key={index} product={product} index={index} currentTheme={currentTheme} />
          ))}
        </div>
        <button className="next" onClick={nextSlide}>
          {" "}
          <Image src={next} />
        </button>
      </div>
    </div>
  );
};

export default BelowCards;
