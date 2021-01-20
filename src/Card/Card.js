import { useState } from 'react';

const Card = ({
  signName, signDescription, signImage, children,
}) => {
  let minDes = '';
  const truncate = (str) => {
    if (str.length <= 150) {
      minDes = str;
    } else {
      const idx = (str.slice(150, str.length)).indexOf(' ');
      minDes = `${str.substring(0, 150 + idx)} ...`;
    }
    return minDes;
  };

  return (
    <div className="card mx-5 my-5 mx-1 p-4 w-2/3 md:w-1/3 lg:w-1/5 rounded-md border-4 border-yellow-800 border-solid" id={signName}>
      <h2 className="text-2xl uppercase text-yellow-700 font-extrabold">{signName}</h2>
      <img className="w-1/2 rounded-full mx-auto my-4" src={`img/${signImage}`} alt={`Signe du ${signName}`} />
      <div>
        {truncate(signDescription)}
        {children}
      </div>
    </div>
  );
};

export default Card;
