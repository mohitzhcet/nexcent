import React from 'react';

const Frame1 = () => {
  return (
    <div className="flex flex-col items-start gap-32 w-657 h-276">
      <div className="flex flex-col items-start gap-16 w-657 h-192">
        <h1 className="font-inter font-semibold text-4xl leading-19 text-neutral-gray">
          Lessons and insights <br/> <span className="text-green-500">from 8 years</span>
        </h1>
        <p className="font-inter font-normal text-base leading-6 text-neutral-gray bg-neutral-gray p-4 rounded-lg">
          Where to grow your business as a photographer: site or social media?
        </p>
        <div className="flex justify-center items-center p-4 w-128 h-12 bg-green-500 rounded-lg">
          <span className="font-inter font-medium text-base text-neutral-white">Register</span>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
