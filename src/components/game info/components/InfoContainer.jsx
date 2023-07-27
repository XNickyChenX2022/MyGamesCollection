import React from "react";

const InfoContainer = ({ children, last }) => {
  return (
    <p
      className={`text-white border-t-2 border-white py-2 ${
        last ? "border-b-2" : ""
      }`}
    >
      {children}
    </p>
  );
};

export default InfoContainer;
