import React from "react";
import { NavLink } from "react-router-dom";
import { useLogoutMutation } from "../../../slices/usersApiSlice";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../slices/authSlice";
import { useDispatch } from "react-redux";
import HeaderLink from "../components/HeaderLinks";

const HeaderProfileComponent = ({ handleClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="rounded absolute z-30 mt-6 w-[92px] shadow-sm bg-gray-700">
        <div className="flex flex-col">
          <HeaderLink
            title="Search"
            route="/search"
            handleClick={handleClick}
          />
          <HeaderLink
            title="My Games"
            route="/games"
            handleClick={handleClick}
          />
          <HeaderLink
            title="Friends"
            route="/friends"
            handleClick={handleClick}
          />
          <HeaderLink
            title="My Profile"
            route="/profile"
            handleClick={handleClick}
          />
          <NavLink
            onClick={logoutHandler}
            className="px-2 text-white hover:text-gray-400"
          >
            logout
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default HeaderProfileComponent;
