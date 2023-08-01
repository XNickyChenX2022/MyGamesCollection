import React, { useEffect, useState } from "react";
import {
  useSearchGamesMutation,
  useGetAllGamesQuery,
} from "../slices/gamesApiSlice";
import { toast } from "react-toastify";
import Loading from "../components/loading/Loading";
import SearchCards from "../components/cards/searchcards/SearchCards";
import ScreenContainer from "../components/containers/ScreenContainer";
import Search from "../components/search/Search";
import CardSectionContainer from "../components/containers/CardSectionContainer";
const SearchScreen = () => {
  const [searchField, setSearchField] = useState("");
  const [searchGames, { data: searchData, isLoading: searchLoading }] =
    useSearchGamesMutation();
  const { data: games } = useGetAllGamesQuery();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchField === "") {
      return;
    }
    try {
      await searchGames({ search: searchField }).unwrap();
      setSearchField("");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  useEffect(() => {
    if (searchData && searchData.length === 20) {
      toast.error(
        "Please refine your search. Queries are limited to 20 games per query"
      );
    }
  }, [searchData]);
  const checkAdded = (_id) => {
    if (!games || !_id) return false;
    for (let i = 0; i < games.length; i++) {
      if (_id === games[i].game._id) {
        return true;
      }
    }
    return false;
  };
  return (
    <>
      <ScreenContainer>
        <Search
          handleSubmit={handleSubmit}
          searchField={searchField}
          setSearchField={setSearchField}
        />
        {searchLoading && <Loading />}
        <CardSectionContainer>
          {searchData &&
            searchData.map((game) => (
              <SearchCards
                key={game._id}
                _id={game._id}
                cover={game.cover.image_id}
                name={game.name}
                added={checkAdded(game._id)}
                gameInfo={game}
              />
            ))}
        </CardSectionContainer>
      </ScreenContainer>
    </>
  );
};
export default SearchScreen;
