import React from "react";

const FriendItem = ({ username, children }) => {
  return (
    <div className=" h-10 text-white bg-gray-800 flex p-2 justify-between border-b-2 border-gray-900">
      <div className="flex justify-center items-center">{username}</div>
      {children}
    </div>
  );
};

export default FriendItem;
