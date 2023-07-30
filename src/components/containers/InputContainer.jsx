import React from "react";

// const InputContainer = ({ children }) => {
//   return <div className="flex flex-col">{children}</div>;
// };

// export default InputContainer;

const InputContainer = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="pb-2">{label}</label>
      <input
        autocomplete="off"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded bg-gray-600 border-2 border-black outline-0 text-white"
      />
    </div>
  );
};

export default InputContainer;
