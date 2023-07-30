import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useGetFriendsQuery } from "../../slices/friendsApiSlice";
import Loading from "../Loading";
const PrivateFriendRoutes = () => {
  const { username } = useParams();
  const { data: friendList, isLoading: loadingFriends } = useGetFriendsQuery();
  const checkFriend = (friendList, username) => {
    const check = friendList?.find((friend) => friend.username === username);
    if (check) {
      return true;
    } else {
      return false;
    }
  };
  console.log(checkFriend(friendList, username));
  console.log(friendList, username);
  return loadingFriends ? (
    <Loading />
  ) : friendList && checkFriend(friendList, username) ? (
    <Outlet />
  ) : (
    <Navigate to="-1" replace />
  );
};

export default PrivateFriendRoutes;
