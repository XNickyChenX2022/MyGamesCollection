import React from "react";
import { Spinner } from "@material-tailwind/react";

const Loading = () => {
  return (
    <>
      <Spinner className="animate-spin h-1/2 w-1/2 text-white fixed top-[30%] bottom-1/4 right-1/4 left-1/4" />
    </>
  );
};

export default Loading;
