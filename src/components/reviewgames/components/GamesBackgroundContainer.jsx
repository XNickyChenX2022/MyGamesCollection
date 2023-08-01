import React from "react";

const GamesBackgroundContainer = ({ children }) => {
  return (
    <div className="bg-gray-600 px-5 pt-2 pb-5 w-[280px] md:w-[400px]">
      {children}
    </div>
  );
};

export default GamesBackgroundContainer;
