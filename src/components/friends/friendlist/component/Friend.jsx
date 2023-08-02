import React from "react";
import { IoLogoGameControllerB } from "react-icons/io";
import FriendItem from "../../components/FriendItem";
import { Link } from "react-router-dom";

const Friend = ({ username }) => {
  return (
    <FriendItem username={username}>
      <div className="flex justify-center items-center">
        <Link to={`${username}`}>
          <IoLogoGameControllerB className="cursor-pointer w-8 h-8 p-1 hover:text-gray-400" />
        </Link>
      </div>
    </FriendItem>
  );
};

export default Friend;
