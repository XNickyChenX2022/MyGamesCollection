import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const PrivateUserRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateUserRoute;
