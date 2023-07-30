import React, { useState } from "react";
import { useGetFriendRequestsQuery } from "../../../slices/friendsApiSlice";
import FriendRequest from "./component/FriendRequest";
import FriendsContainer from "../../friends/components/FriendsContainer";
import SpinnerFriendList from "../components/SpinnerFriendList";
import SearchList from "../components/SearchList";
const FriendList = () => {
  const { data: friendRequests, isLoading: loadingFriends } =
    useGetFriendRequestsQuery();
  const [searchField, setSearchField] = useState("");
  return (
    <>
      <FriendsContainer key="friendRequests" title="Friend Requests">
        <SearchList searchField={searchField} setSearchField={setSearchField} />
        <div className="scrollbar-small whitespace-break-spaces overflow-y-auto overflow-x-hidden break-words h-[278px]">
          {loadingFriends && <SpinnerFriendList />}

          <div className="overflow-y-auto overflow-x-hidden scrollbar-small">
            {friendRequests &&
              friendRequests
                .filter((friend) =>
                  friend?.sender?.username
                    ?.toLowerCase()
                    .startsWith(searchField)
                )
                .map((request) => (
                  <FriendRequest
                    key={request._id}
                    username={request.sender.username}
                  />
                ))}
          </div>
        </div>
      </FriendsContainer>
    </>
  );
};

export default FriendList;
