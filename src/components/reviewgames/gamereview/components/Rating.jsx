import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRateGameMutation } from "../../../../slices/gamesApiSlice";
import { Spinner } from "@material-tailwind/react";

const Rating = ({ gameReview }) => {
  const [rating, setRating] = useState("");
  const [rateGame, { isLoading: isLoading }] = useRateGameMutation();
  const handleInputChange = (e) => {
    const { value } = e.target;
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
    ) {
      e.preventDefault();
    }
  };
  return (
    <>
      <div className="flex justify-between">
        <div className="text-white flex justify-center items-center">
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
            {isLoading ? (
              <div className="flex flex-1 justify-center">
                <Spinner />
              </div>
            ) : (
              "Update"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default Rating;
