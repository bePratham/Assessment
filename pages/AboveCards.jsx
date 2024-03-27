import React, { useState } from 'react';
import data from '../playersData.json';
import A_cards from './A_card';

const AboveCards = ({currentTheme}) => {
  const products = data;
  const [startIndex, setStartIndex] = useState(0);

  const handleClickSeeMore = () => {
    setStartIndex(startIndex + 4);
  };

  return (
    <>
    <div className='mb-15 grid grid-cols-4 '>
      {products.slice(0, startIndex + 4).map((product, index) => (
        <A_cards key={index} product={product} index={index} currentTheme={currentTheme} />
        ))}
    </div>
      {startIndex < products.length && (
        <div className="flex justify-center m-8"> {/* Centering container */}
       <button onClick={handleClickSeeMore} className='bg-blue-500 p-2 px-4 rounded text-white'>
         See More
       </button>
     </div>
      )}
    </>
  );
};

export default AboveCards;
