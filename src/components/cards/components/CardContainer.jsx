import React from "react";

const CardContainer = ({ name, children }) => {
  return (
    <div className="text-white bg-[#121212] w-[244px] flex flex-col border-[3px] border-[#121212] outline-none rounded">
      <div className="text-center h-[48px] overflow-hidden rounded-t-md bg-gray-600">
        {name}
      </div>
      {children}
    </div>
  );
};

export default CardContainer;
