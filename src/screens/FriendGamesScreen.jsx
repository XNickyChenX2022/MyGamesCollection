import React, { useEffect, useState } from "react";
import { useGetFriendGamesQuery } from "../slices/friendsApiSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/loading/Loading";
import FriendCards from "../components/cards/friendcards/FriendCards";
import ScreenContainer from "../components/containers/ScreenContainer";
import Search from "../components/search/Search";
import Sort from "../components/sort/Sort";
import BackArrow from "../components/backarrow/BackArrow";
import CardSectionContainer from "../components/containers/CardSectionContainer";

const FriendGamesScreen = () => {
  const { username } = useParams();
  const { data: friendGames, isLoading: gamesLoading } =
    useGetFriendGamesQuery(username);
  const [searchField, setSearchField] = useState("");
  const [gamesList, setGamesList] = useState([]);
  useEffect(() => {
    if (!gamesLoading && friendGames?.gameReviews) {
      setGamesList(friendGames.gameReviews);
    }
  }, [friendGames, gamesLoading]);
  return (
    <>
      <ScreenContainer>
        <div className="flex text-center justify-center items-center w-[244px] sm:w-[488px] md:w-[732px] lg:w-[976px] xl:w-[1220px]">
          <BackArrow />
          <div className="text-bold text lg:text-3xl text-white pb-3">
            {username}'s Game Collection
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {gamesList && (
            <>
              <Search
                searchField={searchField}
                setSearchField={setSearchField}
              />
              <Sort
                gameReviews={friendGames?.gameReviews}
                gamesList={gamesList}
                setGamesList={setGamesList}
              />
            </>
          )}
        </div>
        {gamesLoading && <Loading />}
        <CardSectionContainer>
          {gamesList &&
            gamesList
              .filter((game) =>
                game?.game?.name
                  ?.toLowerCase()
                  .includes(searchField.toLowerCase())
              )
              .map((gameReviews) => (
                <FriendCards
                  key={gameReviews._id}
                  _id={gameReviews._id}
                  rating={gameReviews.rating}
                  review={gameReviews.review}
                  gameInfo={gameReviews.game}
                />
              ))}
        </CardSectionContainer>
      </ScreenContainer>
    </>
  );
};

export default FriendGamesScreen;
