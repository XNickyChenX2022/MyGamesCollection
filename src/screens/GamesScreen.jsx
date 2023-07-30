import React, { useEffect, useState } from "react";
import { useGetAllGamesQuery } from "../slices/gamesApiSlice";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import GameCards from "../components/cards/GameCards";
import { useSelector } from "react-redux";
import ScreenContainer from "../components/containers/ScreenContainer";
import Search from "../components/search/Search";
import Sort from "../components/sort/Sort";
const GamesScreen = () => {
  const { data: gameReviews, isLoading: gamesLoading } = useGetAllGamesQuery();
  const [searchField, setSearchField] = useState("");
  const [gamesList, setGamesList] = useState([]);
  useEffect(() => {
    if (!gamesLoading && gameReviews) {
      setGamesList(gameReviews);
    }
  }, [gameReviews, gamesLoading]);
  return (
    <>
      <ScreenContainer>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Search searchField={searchField} setSearchField={setSearchField} />
          <Sort
            gameReviews={gameReviews}
            gamesList={gamesList}
            setGamesList={setGamesList}
          />
        </div>
        {gamesLoading && <Loading />}
        <div className="flex flex-wrap w-[244px] sm:w-[488px] md:w-[732px] lg:w-[976px] xl:w-[1220px]">
          {gamesList &&
            gamesList
              .filter((gameReview) =>
                gameReview?.game?.name
                  ?.toLowerCase()
                  .includes(searchField.toLowerCase())
              )
              .map((gameReviews) => (
                <GameCards
                  key={gameReviews._id}
                  _id={gameReviews._id}
                  rating={gameReviews.rating}
                  review={gameReviews.review}
                  gameInfo={gameReviews.game}
                />
              ))}
        </div>
      </ScreenContainer>
    </>
  );
};

export default GamesScreen;
