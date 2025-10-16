import React from "react";
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
const Futter = () => {
  return (
    <>
      <div className="p-5 bg-gray-700 ">
        <div className="w-full text-center">
          <FooterDivider />
          <FooterCopyright className="text-white" by="Flowbite™" year={2022} />
        </div>
      </div>
    </>
  );
};

export default Futter;
