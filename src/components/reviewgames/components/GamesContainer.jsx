import React from "react";

const GamesContainer = ({ children }) => {
  return (
    <div className="font-sans scrollbar-small md:w-[360px] md:h-[480px] w-[240px] h-[320px] mx-auto p-1 whitespace-break-spaces overflow-y-auto overflow-x-hidden break-words text-white justify-center">
      {children}
    </div>
  );
};

export default GamesContainer;
