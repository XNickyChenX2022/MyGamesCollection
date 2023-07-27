import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRateGameMutation } from "../../slices/Games/gamesApiSlice";

const Rating = ({ gameReview }) => {
  const [rating, setRating] = useState("");
  const [rateGame] = useRateGameMutation();
  const handleInputChange = (e) => {
    if (e.target.value.length === 0 && e.key === ".") {
      e.preventDefault();
    }
    const { value } = e.target;
    if (value === null || value === "") {
      setRating("");
      return;
    }
    const regex = /^(?!\.)(?:10(?:\.0)?|\d(?:\.\d)?)$/;
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
    if (
      ["e", "E", "+", "-"].includes(e.key) ||
      (e.target.value.length === 0 && e.key === ".")
    ) {
      e.preventDefault();
    }
  };
  return (
    <>
      <div className="text-white">Rating: {gameReview.rating}</div>
      <form onSubmit={handleRating}>
        <input
          className="outline-none"
          maxLength="3"
          onKeyDown={handleKeyDown}
          step={0.1}
          type="number"
          value={rating}
          onChange={handleInputChange}
          min={0}
          max={10}
        />
        <button type="submit" className="bg-white">
          Update Rating
        </button>
      </form>
    </>
  );
};

export default Rating;
