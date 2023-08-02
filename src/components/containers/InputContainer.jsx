import React from "react";

const InputContainer = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="pb-2">{label}</label>
      <input
        autoComplete="do-not-autofill"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded bg-gray-600 border-2 border-black outline-0 text-white px-1"
      />
    </div>
  );
};

export default InputContainer;
