import React from "react";

const CardHeader = ({ name }) => {
  return (
    <div className="text-center h-[48px] rounded-t-md bg-gray-600">{name}</div>
  );
};

export default CardHeader;
