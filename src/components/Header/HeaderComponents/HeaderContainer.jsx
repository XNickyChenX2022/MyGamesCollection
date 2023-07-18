import React from "react";

const HeaderContainer = ({ children }) => {
  return (
    <div className="flex justify-around">
      <button className="font-bold text-white">Home</button>
      {children}
    </div>
  );
};

export default HeaderContainer;
