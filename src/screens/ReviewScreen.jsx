import React, { useState, useEffect } from "react";
import { useGetAllGamesQuery } from "../slices/Games/gamesApiSlice";
import Loading from "../components/Loading";
import GamesContainer from "../components/GamesContainer";
import { useParams } from "react-router-dom";
import Image from "../components/Image";
import GameInfo from "../components/game info/GameInfo";
import Rating from "../components/game review/Rating";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEdit, FaSave } from "react-icons/fa";
import Review from "../components/game review/Review";

const ReviewScreen = () => {
  let { _id } = useParams();
  const navigate = useNavigate();
  const { data: gameReviews, isLoading: gameReviewsLoading } =
    useGetAllGamesQuery();

  const [gameReview, setGameReview] = useState(null);
  useEffect(() => {
    if (!gameReviewsLoading && gameReviews) {
      setGameReview(gameReviews.find((gameReview) => gameReview._id === _id));
    }
  }, [gameReviews, gameReviewsLoading]);
  return (
    <>
      <GamesContainer>
        {gameReviewsLoading && <Loading />}
        {gameReview && (
          <>
            <FaArrowLeft
              className="hover:bg-gray-500 cursor-pointer text-white w-10 h-10 rounded-full mb-3"
              onClick={() => navigate(-1)}
            />
            <div
              className="flex flex-col xl:flex-row justify-center"
              key={gameReview._id}
            >
              <div className="bg-gray-600 px-5 pt-2 pb-5 rounded-t lg:rounded-l lg:rounded-r-none w-[280px] md:w-[400px]">
                <div className="text-center font-bold text-white text-xl overflow">
                  {gameReview.game.name}
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    image_id={gameReview.game.cover.image_id}
                    scaled={true}
                  />
                </div>
              </div>
              <div className="bg-gray-600 px-5 pt-2 pb-5 w-[280px] md:w-[400px]">
                <div className="text-center font-bold text-white text-xl">
                  Game Info
                </div>
                <GameInfo gameInfo={gameReview.game} />
              </div>
              <div className="bg-gray-600 px-5 pt-2 pb-5 rounded-b lg:rounded-r lg:rounded-l-none  w-[280px] md:w-[400px]">
                <div>
                  <div className="flex">
                    <Rating gameReview={gameReview} />
                  </div>
                  <Review gameReview={gameReview} />
                </div>
              </div>
            </div>
          </>
        )}
      </GamesContainer>
    </>
  );
};

export default ReviewScreen;
