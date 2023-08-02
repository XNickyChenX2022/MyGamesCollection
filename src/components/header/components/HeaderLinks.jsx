import { NavLink } from "react-router-dom";

const HeaderLink = ({ route, title, handleClick }) => {
  return (
    <NavLink
      to={route}
      end
      onClick={handleClick}
      className={({ isActive }) =>
        isActive ? "px-2 text-gray-400" : "px-2 text-white hover:text-gray-400"
      }
    >
      {title}
    </NavLink>
  );
};

export default HeaderLink;
