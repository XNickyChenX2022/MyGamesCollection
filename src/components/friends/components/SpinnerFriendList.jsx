import React from "react";
import { Spinner } from "@material-tailwind/react";
const SpinnerFriendList = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <Spinner className="w-20 h-20" />
    </div>
  );
};

export default SpinnerFriendList;
