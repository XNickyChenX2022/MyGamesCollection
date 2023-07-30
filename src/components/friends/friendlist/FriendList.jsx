import React, { useState } from "react";
import { useGetFriendsQuery } from "../../../slices/friendsApiSlice";
import Friend from "./component/Friend";
import SpinnerFriendList from "../components/SpinnerFriendList";
import FriendsContainer from "../../friends/components/FriendsContainer";
import SearchList from "../components/SearchList";
const FriendList = () => {
  const { data: friendList, isLoading: loadingFriends } = useGetFriendsQuery();
  const [searchField, setSearchField] = useState("");
  return (
    <>
      <FriendsContainer key="friendsList" title="Friends List">
        <SearchList searchField={searchField} setSearchField={setSearchField} />
        <div className="scrollbar-small whitespace-break-spaces overflow-y-auto overflow-x-hidden break-words h-[278px]">
          {loadingFriends && <SpinnerFriendList />}

          {friendList &&
            friendList
              .filter((friend) =>
                friend?.username?.toLowerCase().startsWith(searchField)
              )
              .map((request) => (
                <Friend key={request._id} username={request.username} />
              ))}
          {/* {friendList &&
          friendList.map((friend) => (
            <Friend key={friend._id} username={friend.username} />
          ))} */}
        </div>
      </FriendsContainer>
    </>
  );
};

export default FriendList;
