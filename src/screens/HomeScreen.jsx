import React from "react";
import { Link } from "react-router-dom";
const HomeScreen = () => {
  return (
    <div className="flex flex-grow flex-1 justify-center items-center">
      <div className="flex rounded w-4/6 bg-gray-600 p-5 my-auto mx-auto flex-col justify-evenly h-[300px] md:w-[500px]">
        <p className="text-white whitespace normal text-center text-ellipsis">
          Please login or register for a new account before using our service
        </p>
        <div className="flex justify-evenly">
          <Link
            to="/login"
            className="rounded bg-blue-600 text-white text-center p-5 align-center w-4/6 sm:w-2/6 cursor-pointer"
          >
            Login
          </Link>
          <Link
            to="/Register"
            className="rounded bg-red-600 text-white text-center p-5 w-4/6 sm:w-2/6 align-center 
            cursor-pointer"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
