import React from "react";
import HeaderLink from "../HeaderComponents/HeaderLinks";
const HeaderLoginComponent = ({ handleClick }) => {
  return (
    <>
      <HeaderLink route="/login" title="Login" handleClick={handleClick} />
      <HeaderLink
        route="/register"
        title="Register"
        handleClick={handleClick}
      />
    </>
  );
};

export default HeaderLoginComponent;
