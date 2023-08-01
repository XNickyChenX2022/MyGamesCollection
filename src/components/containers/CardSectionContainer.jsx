import React from "react";

const CardSectionContainer = ({ children }) => {
  return (
    <div className="flex flex-wrap w-[244px] sm:w-[488px] md:w-[732px] lg:w-[976px] xl:w-[1220px]">
      {children}
    </div>
  );
};

export default CardSectionContainer;
