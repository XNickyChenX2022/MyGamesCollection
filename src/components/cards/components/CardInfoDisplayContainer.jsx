import React from "react";

const CardInfoDisplayContainer = ({ children }) => {
  return (
    <div className="w-[100%] h-[320px] mx-auto bg-gray-700 px-1 overflow-y-auto overflow-x-hidden scrollbar-small">
      {children}
    </div>
  );
};

export default CardInfoDisplayContainer;
