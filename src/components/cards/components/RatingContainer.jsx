import React from "react";

const RatingContainer = ({ rating }) => {
  return (
    <div className="p-1 bg-gray-600">rating: {rating ? rating : "None"}</div>
  );
};

export default RatingContainer;
