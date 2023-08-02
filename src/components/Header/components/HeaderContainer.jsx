import React from "react";
import { Link } from "react-router-dom";

const HeaderContainer = ({ children }) => {
  return (
    <div className="flex justify-around">
      <Link to="home" className="font-bold text-white">
        Home
      </Link>
      {children}
    </div>
  );
};

export default HeaderContainer;
