import React from 'react';
import hero_char from '../assets/hero_char.png';

const Herobanner = () => {
  return (
    <div className="absolute w-128 h-256 top-119 left-252 opacity-0">
      <img src={hero_char} alt="Character" className="w-full h-full object-cover" />
    </div>
  );
};

export default Herobanner;
