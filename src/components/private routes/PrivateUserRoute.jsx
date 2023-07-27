import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

// requires users to be logged in to access
const PrivateUserRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateUserRoute;
