import React from 'react';
import data from '../data.json'
const TicketCard = ({index,product,currentTheme}) => {
     return (
    <div className={`flex flex-col w-80  p-4 mt-7  ${currentTheme.currentTheme === 'dark'? 'bg-slate-500 ':'custom-shadow '}`}>
            <img src={product.thumbnail} alt="" style={{ height: '450px' }} />
            <div className='text-center m-3'>
                <p >- - - - - - - - - - - - - - - - - - - - -    
                </p>
            </div>
        <div className='text-center'>
            <p className='text-lg'>{product.title}</p>
            <p  className='text-sm m-1 text-normal'>OCT | SUN | 4:30 PM</p>
            <p  className='text-sm text-slate-500'>{product.brand}</p>
            <button className='bg-black text-white mt-3 w-full p-2 '>
                Take Flight Collections
            </button>
        </div>
    </div>
  );
};

export default TicketCard;
