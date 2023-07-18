import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/Users/usersApiSlice";
import { setCredentials } from "../slices/Users/authSlice";
const HomeScreen = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="flex rounded w-4/6 h-[40%] bg-gray-600 p-3 my-auto mx-auto flex-col justify-evenly">
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
