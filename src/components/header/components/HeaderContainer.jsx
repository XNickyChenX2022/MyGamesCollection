import React from "react";
import { Link } from "react-router-dom";

const HeaderContainer = ({ setProfile, children }) => {
  return (
    <div className="flex justify-around">
      <Link
        to="/"
        className="font-bold text-white"
        onClick={(e) => setProfile(false)}
      >
        Home
      </Link>
      {children}
    </div>
  );
};

export default HeaderContainer;
