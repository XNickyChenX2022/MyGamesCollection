import React from "react";
import HeaderProfileComponent from "./HeaderProfileComponent";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import HeaderContainer from "../components/HeaderContainer";

const HeaderProfile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [OpenProfile, setOpenProfile] = useState(false);
  const toggleProfile = () => {
    setOpenProfile(!OpenProfile);
  };
  return (
    <HeaderContainer setProfile={setOpenProfile}>
      <div className="flex justify-end">
        <div className="flex cursor-pointer" onClick={toggleProfile}>
          <div className="text-white">{userInfo.username}</div>
          <FaAngleDown className="text-white self-center" />
        </div>
        {OpenProfile && <HeaderProfileComponent handleClick={toggleProfile} />}
      </div>
    </HeaderContainer>
  );
};

export default HeaderProfile;
