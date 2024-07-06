import React from 'react';
import HeadingSection from './HeadingSection';
import icon1 from '../assets/community1.png';
import icon2 from '../assets/community2.png';
import icon3 from '../assets/community3.png';

const Community = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="w-1110 mx-auto flex flex-col items-center justify-center space-y-4 bg-white shadow-md rounded-md p-6 gap-2">
        <div className="font-inter font-semibold text-3xl text-center text-black h-12">
          Manage your entire community <br/> in a single system
        </div>

        <div className="font-inter text-base font-normal leading-6 text-center h-6 text-[#717171]">
          Who is Nextcent suitable for?
        </div>
      </div>

      <div className="flex justify-between gap-8 mx-auto max-w-7xl px-4">
      <HeadingSection
          title={`Membership\nOrganisations`}
          description={`Our membership management\nsoftware providesfull automation of\nmembership renewalsand payments`}
          iconSrc={icon1}
        />

       
        <HeadingSection
          title={`National\nAssociations`}
          description={`Our membership management\nsoftware providesfull automation of\nmembership renewalsand payments`}
          iconSrc={icon2}
        />

        <HeadingSection
          title={`Clubs And\nGroups`}
          description={`Our membership management\nsoftware providesfull automation of\nmembership renewalsand payments`}
          iconSrc={icon3}
        />
      </div>
    </div>
  );
};

export default Community;
