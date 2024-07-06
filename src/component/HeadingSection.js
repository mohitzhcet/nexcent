import React from 'react';

const HeadingSection = ({ title, description, iconSrc }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {/* Icon (assuming it's an image) */}
      <img src={iconSrc} alt="Icon" className="w-12 h-12" />

      {/* Heading */}
      <div className="font-inter font-semibold text-lg text-center text-black leading-tight">
        {/* Ensure multiline title */}
        {title.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>

      {/* Description */}
      <div className="font-inter text-sm text-center text-gray-700">
        {/* Ensure multiline description */}
        {description.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HeadingSection;
