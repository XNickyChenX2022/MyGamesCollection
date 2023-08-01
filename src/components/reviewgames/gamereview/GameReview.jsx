import React from "react";
import GamesBackgroundContainer from "../components/GamesBackgroundContainer";
import GamesHeaderContainer from "../components/GamesHeaderContainer";
import GamesContainer from "../components/GamesContainer";
import Rating from "./components/Rating";
import Review from "./components/Review";

const GameReview = ({ gameReview }) => {
  return (
    <>
      <div className="bg-gray-600 px-5 pt-2 pb-5 rounded-b lg:rounded-r lg:rounded-l-none  w-[280px] md:w-[400px]">
        <GamesHeaderContainer title="Rating & Review" />
        <div className="md:w-[360px] md:h-[480px] w-[240px] h-[320px] ">
          <Rating gameReview={gameReview} />
          <Review gameReview={gameReview} />
        </div>
      </div>
    </>
  );
};

export default GameReview;
