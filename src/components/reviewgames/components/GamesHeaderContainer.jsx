import React from "react";

const GamesHeaderContainer = ({ title }) => {
  return (
    <div className="p-1 text-center font-bold text-white text-l flex justify-center items-center h-[64px]">
      {title}
    </div>
  );
};

export default GamesHeaderContainer;
