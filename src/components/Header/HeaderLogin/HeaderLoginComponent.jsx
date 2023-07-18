import React from "react";
import HeaderLink from "../HeaderComponents/HeaderLinks";
const HeaderLoginComponent = () => {
  return (
    <>
      <HeaderLink route="/login" title="Login" />
      <HeaderLink route="/register" title="Register" />
    </>
  );
};

export default HeaderLoginComponent;
