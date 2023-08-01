import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useGetFriendsQuery } from "../../slices/friendsApiSlice";
import Loading from "../loading/Loading";
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
  return loadingFriends ? (
    <Loading />
  ) : friendList && checkFriend(friendList, username) ? (
    <Outlet />
  ) : (
    <Navigate to="-1" replace />
  );
};

export default PrivateFriendRoutes;
