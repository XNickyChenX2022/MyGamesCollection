import React from "react";

const ToggleButton = ({ onClick, state, text, className }) => {
  return (
    <button
      className={`flex-grow text-blue-800 h-[48px] flex items-center justify-center font-semibold ${className}`}
      onClick={(e) => onClick(e, state)}
    >
      {text}
    </button>
  );
};

export default ToggleButton;
