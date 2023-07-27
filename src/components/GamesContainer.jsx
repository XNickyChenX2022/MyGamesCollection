import React from "react";

const GamesContainer = ({ children }) => {
  return (
    <div className="py-6 mx-auto items-center flex flex-col mt-5">
      {children}
    </div>
  );
};

export default GamesContainer;
