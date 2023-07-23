import React from "react";
import { useGetAllGamesQuery } from "../slices/Games/gamesApiSlice";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import GameCards from "../components/Cards/GameCards";
const GamesScreen = () => {
  const { data: gameRatings, isLoading: gamesLoading } = useGetAllGamesQuery();
  return (
    <>
      {gamesLoading && <Loading />}
      {gameRatings &&
        gameRatings.map((gameRating) => {
          <GameCards
            key={gameRating._id}
            rating={gameRating.rating}
            comment={gameRating.comment}
            gameInfo={gameRating.game}
          />;
        })}
    </>
  );
};

export default GamesScreen;
