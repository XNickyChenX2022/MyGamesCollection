import React from "react";

const FormContainer = ({ children }) => {
  return (
    <div className="flex flex-1 flex-grow justify-center items-center">
      <div className="xl:w-[1000px] lg:w-[800px] md:w-[600px] w-screen h-[600px] bg-gray-600 py-3 px-10 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
