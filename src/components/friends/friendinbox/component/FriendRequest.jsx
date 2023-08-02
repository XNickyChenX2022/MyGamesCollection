import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { FaRegCheckCircle } from "react-icons/fa";
import { useRespondFriendRequestMutation } from "../../../../slices/friendsApiSlice";
import { toast } from "react-toastify";
import { Spinner } from "@material-tailwind/react";
import FriendItem from "../../components/FriendItem";

const FriendRequest = ({ username }) => {
  const [respondFriendRequest, { isLoading: loadingResponse }] =
    useRespondFriendRequestMutation();
  const handleSubmit = async (e, type) => {
    e.preventDefault();
    try {
      await respondFriendRequest({
        response: type,
        senderUsername: username,
      }).unwrap();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <>
      <FriendItem username={username}>
        {loadingResponse ? (
          <Spinner />
        ) : (
          <form className="flex justify-center items-center">
            <FaRegCheckCircle
              className="w-8 h-8 p-1 cursor-pointer hover:text-gray-400"
              onClick={(e) => handleSubmit(e, true)}
            />
            <ImCancelCircle
              className="w-8 h-8 p-1 cursor-pointer hover:text-gray-400"
              onClick={(e) => handleSubmit(e, false)}
            />
          </form>
        )}
      </FriendItem>
    </>
  );
};

export default FriendRequest;
