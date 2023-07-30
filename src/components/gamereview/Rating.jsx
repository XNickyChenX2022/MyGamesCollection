import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRateGameMutation } from "../../slices/gamesApiSlice";

const Rating = ({ gameReview }) => {
  const [rating, setRating] = useState("");
  const [rateGame] = useRateGameMutation();
  const handleInputChange = (e) => {
    const { value } = e.target;
    // (e.target.value.length === 0 && e.key === ".") ||
    console.log(value, isNaN(value));
    if (isNaN(value)) {
      return;
    }

    if (value === null || value === "") {
      setRating("");
      return;
    }
    const regex = /^(?!\.)(?:10(?:\.0)?|\d(?:\.\d{1})?)$/;
    if (regex.test(parseFloat(value))) {
      setRating(value);
    }
  };
  const handleRating = async (e) => {
    e.preventDefault();
    if (rating === "") return;
    try {
      await rateGame({
        _id: gameReview._id,
        rating: rating,
      }).unwrap();
      setRating("");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  const handleKeyDown = (e) => {
    const { value } = e.target;
    if (value.indexOf(".") != -1 && e.key === "0") {
      if (value.length - value.indexOf(".") === 2) {
        e.preventDefault();
      }
    }
    if (
      ["e", "E", "+", "-"].includes(e.key) ||
      (e.target.value.length === 0 && e.key === ".")
      // (e.target.value.length > 2 && e.target.value != "10.")
    ) {
      console.log(e.target.value.length);
      e.preventDefault();
    }
  };
  return (
    <>
      <div className="text-center font-bold text-white text-xl bg-gray-600 py-2">
        {"Rating"}
      </div>
      <div className="flex justify-between">
        <div className="text-white">
          Rating: {gameReview.rating ? gameReview.rating : "None"}
        </div>
        <form onSubmit={handleRating} className="flex">
          <input
            className="outline-none bg-gray-400 border-none w-10 flex-grow p-1 rounded-l shadow"
            maxLength="4"
            onKeyDown={handleKeyDown}
            type="text"
            value={rating}
            onChange={handleInputChange}
            min={0}
            max={10}
          />
          <button
            type="submit"
            className="text-white bg-blue-500 rounded-r shadow-sm p-1"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Rating;
