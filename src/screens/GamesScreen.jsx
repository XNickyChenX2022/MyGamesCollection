import React, { useEffect, useState } from "react";
import { useGetAllGamesQuery } from "../slices/gamesApiSlice";
import Loading from "../components/loading/Loading";
import GameCards from "../components/cards/gamecards/GameCards";
import ScreenContainer from "../components/containers/ScreenContainer";
import Search from "../components/search/Search";
import Sort from "../components/sort/Sort";
import CardSectionContainer from "../components/containers/CardSectionContainer";

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
        <CardSectionContainer>
          {gamesList &&
            gamesList
              .filter((gameReview) =>
                gameReview?.game?.name
                  ?.toLowerCase()
                  .includes(searchField.toLowerCase())
              )
              .map((gameReviews) => (
                <>
                  <GameCards
                    key={gameReviews._id}
                    _id={gameReviews._id}
                    rating={gameReviews.rating}
                    review={gameReviews.review}
                    gameInfo={gameReviews.game}
                  />
                </>
              ))}
        </CardSectionContainer>
      </ScreenContainer>
    </>
  );
};

export default GamesScreen;
