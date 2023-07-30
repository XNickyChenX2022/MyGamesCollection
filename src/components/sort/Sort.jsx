import React, { useState, useEffect } from "react";

const Sort = ({ gameReviews, gamesList, setGamesList }) => {
  const [sort, setSort] = useState(false);
  useEffect(() => {
    if (sort === false) {
      setGamesList(gameReviews);
    } else {
      const sortedList = [...gamesList].sort(function (a, b) {
        return (
          (parseFloat(a.rating) === null) - (parseFloat(b.rating) === null) ||
          -(parseFloat(a.rating) > parseFloat(b.rating)) ||
          +(parseFloat(a.rating) < parseFloat(b.rating))
        );
      });
      setGamesList(sortedList);
    }
  }, [sort]);

  const toggleSort = (e) => {
    e.preventDefault();
    setSort(!sort);
  };
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
