import React from "react";
const FriendsContainers = ({ title, children }) => {
  return (
    <div className="bg-gray-600 w-[240px] h-[360px] rounded border-[#121212] border-x-2">
      <div className="h-[50px] text-white text-xl bg-gray-700 font-bold flex justify-center items-center rounded-t">
        {title}
      </div>
      {children}
    </div>
  );
};

export default FriendsContainers;
