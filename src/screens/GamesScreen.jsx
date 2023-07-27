import React, { useEffect, useState } from "react";
import { useGetAllGamesQuery } from "../slices/Games/gamesApiSlice";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import GameCards from "../components/cards/GameCards";
import { useSelector } from "react-redux";
import GamesContainer from "../components/GamesContainer";
const GamesScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { data: gameReviews, isLoading: gamesLoading } = useGetAllGamesQuery();
  const [getSet, setGetSet] = useState(null);
  useEffect(() => {
    if (!gamesLoading && gameReviews) {
      setGetSet(gameReviews);
    }
  }, [gameReviews, gamesLoading]);
  return (
    <>
      <GamesContainer>
        {gamesLoading && <Loading />}
        <div className="flex flex-wrap w-[244px] sm:w-[488px] md:w-[732px] lg:w-[976px] xl:w-[1220px]">
          {gameReviews &&
            gameReviews.map((gameReviews) => (
              <GameCards
                key={gameReviews._id}
                _id={gameReviews._id}
                rating={gameReviews.rating}
                review={gameReviews.review}
                gameInfo={gameReviews.game}
              />
            ))}
        </div>
      </GamesContainer>
    </>
  );
};

export default GamesScreen;
