import React, { useState } from "react";
import {
  useAddGameMutation,
  useRemoveGameMutation,
} from "../../slices/Games/gamesApiSlice";
import { toast } from "react-toastify";
const image_url = (cover) => {
  return `https://images.igdb.com/igdb/image/upload/t_1080p_2x/${cover}.jpg`;
};

const SearchCards = ({ _id, cover, name, added }) => {
  const [add, setAdd] = useState(added);
  const [addGame, { isLoading: Adding }] = useAddGameMutation();
  const [removeGame, { isLoading: Removing }] = useRemoveGameMutation();
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
  return (
    <div className="text-white bg-gray-600 w-[240px] flex flex-col">
      <div className="text-center h-[48px]">{name}</div>
      <img className="w-[240px] h-[320px] mx-auto" src={image_url(cover)} />
      {Adding ? (
        <button className="text-white h-[48px] flex-grow">
          Currently Adding
        </button>
      ) : Removing ? (
        <button className="text-white h-[48px] flex-grow">
          {" "}
          Currently Removing
        </button>
      ) : (
        <button
          type="button"
          className={`flex-grow text-white h-[48px] ${
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
    </div>
  );
};
export default SearchCards;
