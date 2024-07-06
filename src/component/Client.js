import React from 'react';
import { clientLogos } from '../data/clientLogos';

const Client = () => {
  return (
    <div className='max-w-7xl mx-auto px-4'>
      <div className="w-1110 mx-auto flex flex-col items-center justify-center space-y-4 bg-white-100 rounded-md p-6">
        <div className="font-inter font-semibold text-3xl text-center text-black h-12">
          Our Clients
        </div>

        <div className="font-inter text-base font-normal leading-6 text-center h-6">
          We have been working with some Fortune 500+ clients
        </div>
       
      </div>
      <div className="flex justify-around flex-wrap">
          {clientLogos.map((client) => (
            <img
              key={client.id}
              src={client.image}
              alt={client.altText}
              className="h-24 w-auto mb-4"
            />
          ))}
        </div>
    </div>
  );
};

export default Client;
