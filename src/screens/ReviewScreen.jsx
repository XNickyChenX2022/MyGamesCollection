import React, { useState, useEffect } from "react";
import { useGetAllGamesQuery } from "../slices/gamesApiSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/loading/Loading";
import ScreenContainer from "../components/containers/ScreenContainer";
import GameReview from "../components/reviewgames/gamereview/GameReview";
import GameInfo from "../components/reviewgames/gameinfo/GameInfo";
import GameImage from "../components/reviewgames/gameImage/GameImage";
import BackArrow from "../components/backarrow/BackArrow";

const ReviewScreen = () => {
  let { _id } = useParams();
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
            <BackArrow size="w-10 h-10" />
            <div className="flex flex-col xl:flex-row justify-center">
              <GameImage
                gameName={gameReview.game.name}
                image_id={gameReview.game.cover.image_id}
              />
              <GameInfo gameInfo={gameReview.game} />
              <GameReview gameReview={gameReview} />
            </div>
          </>
        )}
      </ScreenContainer>
    </>
  );
};

export default ReviewScreen;
