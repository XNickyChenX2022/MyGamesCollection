import React, { useState, useEffect } from "react";

const Sort = ({ gameReviews, gamesList, setGamesList }) => {
  const [sort, setSort] = useState(false);
  const toggleSort = (e) => {
    e.preventDefault();
    setSort(!sort);
  };
  useEffect(() => {
    if (sort === false) {
      setGamesList(gameReviews);
    } else {
      const sortedList = [...gamesList].sort(function (a, b) {
        const ratingA = parseFloat(a.rating);
        const ratingB = parseFloat(b.rating);
        if (isNaN(ratingA) && isNaN(ratingB)) {
          return 0;
        }
        if (isNaN(ratingA)) {
          return 1;
        }
        if (isNaN(ratingB)) {
          return -1;
        }
        return ratingB - ratingA;
      });

      setGamesList(sortedList);
    }
  }, [sort]);
  return (
    <button
      className="bg-white w-[120px] h-[24px] rounded mb-5 ml-3 px-1"
      onClick={toggleSort}
    >
      {sort ? "Sort by date" : "Sort by rating"}
    </button>
  );
};

export default Sort;
