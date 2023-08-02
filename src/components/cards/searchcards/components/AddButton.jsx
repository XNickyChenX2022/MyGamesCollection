import React, { useState } from "react";
import {
  useAddGameMutation,
  useRemoveGameMutation,
} from "../../../../slices/gamesApiSlice";
import { toast } from "react-toastify";
const AddButton = ({ added, _id }) => {
  const addToCollection = async (e, _id) => {
    e.preventDefault();
    try {
      await addGame({ _id: _id }).unwrap();
      setAdd(!add);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  const removeFromCollection = async (e, _id) => {
    e.preventDefault();
    try {
      await removeGame({ _id: _id }).unwrap();
      setAdd(!add);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  const [add, setAdd] = useState(added);
  const [addGame, { isLoading: Adding }] = useAddGameMutation();
  const [removeGame, { isLoading: Removing }] = useRemoveGameMutation();
  return (
    <>
      {" "}
      {Adding ? (
        <button className="text-white h-[48px] flex-grow rounded-b-md bg-gray-600">
          Currently Adding
        </button>
      ) : Removing ? (
        <button className="text-white h-[48px] flex-grow rounded-b-md bg-gray-600">
          Currently Removing
        </button>
      ) : (
        <button
          type="button"
          className={`flex-grow text-white h-[48px] rounded-b-md ${
            add ? "bg-red-500" : "bg-green-500"
          }`}
          onClick={
            add
              ? (e) => removeFromCollection(e, _id)
              : (e) => addToCollection(e, _id)
          }
        >
          {add ? "added" : "add"}
        </button>
      )}
    </>
  );
};

export default AddButton;
