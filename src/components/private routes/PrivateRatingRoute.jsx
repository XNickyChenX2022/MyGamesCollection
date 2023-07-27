import { Navigate, Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const PrivateRatingRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  let { username } = useParams();
  return userInfo.username === username ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRatingRoute;
