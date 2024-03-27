import React from "react";
import data from "../data.json";
const A_cards = ({ index, product ,currentTheme }) => {
  return (
    <div className={`flex flex-col  w-72 p-4 ${currentTheme === 'dark'? 'bg-gray-700' : 'bg-white custom-shadow'}`}>
      <img
        src={product.image_link}
        alt=""
        style={{ height: "50vh" , marginBottom: "9px" }}
      />
      <p className="text-lg">{product.name}</p>
      <div className={` flex gap-7 rounded px-4 py-2 mt-3 ${currentTheme === 'dark'? 'bg-slate-800' : ' bg-slate-100'}`}>
        <div>
          <p className="text-gray-400">Total Events</p>
          <p>{product.total_events} Events</p>
        </div>
        <div>
          <p className="text-gray-400">Sport</p>
          <p>{product.sport}</p>
        </div>
      </div>
    </div>
  );
};

export default A_cards;
