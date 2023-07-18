import React from "react";

const FormContainer = ({ children }) => {
  return (
    <div className="flex h-[90vh]">
      <div className="w-4/6 sm:w-3/6 h-[70%] bg-gray-600 py-3 px-10 my-auto mx-auto flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
