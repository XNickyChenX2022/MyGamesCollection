import React from "react";
import HeaderLogin from "./HeaderLogin/HeaderLogin";
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Header() {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      <div
        className={`
    flex bg-gray-600 border-none m w-full items-center justify-between py-6 mx-auto z-20
    ${userInfo ? "" : "absolute top-0 md:static"}
    `}
      >
        <div className="flex-1">
          {userInfo ? <HeaderProfile /> : <HeaderLogin />}
        </div>
      </div>
    </>
  );
}

export default Header;
