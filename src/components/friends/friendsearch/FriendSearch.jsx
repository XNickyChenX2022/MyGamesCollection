import React, { useState, useEffect } from "react";
import { useSendFriendRequestMutation } from "../../../slices/friendsApiSlice";
import { toast } from "react-toastify";
import { Spinner } from "@material-tailwind/react";
const FriendSearch = () => {
  const [
    sendFriendRequest,
    { isLoading: requestLoading, data: friendRequestResponse },
  ] = useSendFriendRequestMutation();
  const [receiverName, setReceiverName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (receiverName.length < 6 || receiverName.length > 18) {
      toast.error("The user you're sending to does not exists");
      return;
    }
    try {
      console.log({ receiverName: receiverName });
      await sendFriendRequest({ receiverName: receiverName }).unwrap();
      setReceiverName("");
      toast.success(friendRequestResponse);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  useEffect(() => {
    if (friendRequestResponse) {
      toast.success(friendRequestResponse);
    }
  }, [friendRequestResponse, useSendFriendRequestMutation]);
  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center mb-5">
        <input
          autoComplete="false"
          type="text"
          className="outline-none bg-transparent pl-1 w-[180px] rounded-l bg-white"
          value={receiverName}
          onChange={(e) => setReceiverName(e.target.value)}
          placeholder="Send friend request"
        />
        {requestLoading ? (
          <Spinner />
        ) : (
          <button
            className="text-white bg-blue-600 p-1 rounded-r"
            onClick={handleSubmit}
          >
            Send
          </button>
        )}
      </form>
    </>
  );
};

export default FriendSearch;
