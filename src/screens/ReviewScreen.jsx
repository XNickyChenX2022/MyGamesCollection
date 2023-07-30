import React, { useState, useEffect } from "react";
import { useGetAllGamesQuery } from "../slices/gamesApiSlice";
import Loading from "../components/Loading";
import ScreenContainer from "../components/containers/ScreenContainer";
import { useParams } from "react-router-dom";
import Image from "../components/Image";
import GameInfo from "../components/gameinfo/GameInfo";
import Rating from "../components/gamereview/Rating";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Review from "../components/gamereview/Review";

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
      <ScreenContainer>
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
                <div className="p-1 text-center font-bold text-white text-xl flex justify-center items-center h-[64px]">
                  {gameReview.game.name}
                </div>
                <Image
                  image_id={gameReview.game.cover.image_id}
                  scaled={true}
                />
              </div>
              <div className="bg-gray-600 px-5 pt-2 pb-5 w-[280px] md:w-[400px]">
                <GameInfo gameInfo={gameReview.game} />
              </div>
              <div className="bg-gray-600 px-5 pt-2 pb-5 rounded-b lg:rounded-r lg:rounded-l-none  w-[280px] md:w-[400px]">
                <Rating gameReview={gameReview} />
                <Review gameReview={gameReview} />
              </div>
            </div>
          </>
        )}
      </ScreenContainer>
    </>
  );
};

export default ReviewScreen;
