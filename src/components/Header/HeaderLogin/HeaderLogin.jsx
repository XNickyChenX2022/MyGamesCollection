import React, { useState } from "react";
import HeaderLoginComponent from "./HeaderLoginComponent";
import { FaBars } from "react-icons/fa";
import HeaderContainer from "../components/HeaderContainer";

const HeaderLogin = () => {
  const [OpenLogin, setOpenLogin] = useState(false);
  const toggleLogin = () => {
    setOpenLogin(!OpenLogin);
  };
  return (
    <>
      <HeaderContainer>
        <div className="hidden md:flex justify-between">
          <HeaderLoginComponent />
        </div>
        <div className="md:hidden justify-end">
          <button onClick={toggleLogin}>
            <FaBars className="text-white" />
          </button>
        </div>
      </HeaderContainer>
      {OpenLogin && (
        <div className="flex basis-full flex-col items-center px-2 md:hidden z-40">
          <HeaderLoginComponent handleClick={toggleLogin} />
        </div>
      )}
    </>
  );
};

export default HeaderLogin;
