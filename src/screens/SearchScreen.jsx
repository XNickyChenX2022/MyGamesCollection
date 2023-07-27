import React, { useEffect, useState } from "react";
import {
  useSearchGamesMutation,
  useGetAllGamesQuery,
} from "../slices/Games/gamesApiSlice";
import { toast } from "react-toastify";
import { FaSearch } from "react-icons/fa";
import Loading from "../components/Loading";
import SearchCards from "../components/cards/SearchCards";
import GamesContainer from "../components/GamesContainer";
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
      <GamesContainer>
        <form className="flex justify-center mb-5" onSubmit={handleSubmit}>
          <div className="flex bg-white rounded justify-center align-middle w-[240px]">
            <input
              className="outline-none bg-transparent pl-1 w-[212px] md:w-[400px]"
              value={searchField}
              spellCheck="false"
              onChange={(e) => setSearchField(e.target.value)}
            />
            <div className="flex-1 items-center pl-1" onClick={handleSubmit}>
              <FaSearch className="w-6 h-6 py-1 cursor-pointer" type="submit" />
            </div>
          </div>
        </form>
        {searchLoading && <Loading />}
        <div className="flex flex-wrap w-[240px] sm:w-[480px] md:w-[720px] lg:w-[960px] xl:w-[1200px]">
          {searchData &&
            searchData.map((game) => (
              <SearchCards
                key={game._id}
                _id={game._id}
                cover={game.cover.image_id}
                name={game.name}
                added={checkAdded(game._id)}
              />
            ))}
        </div>
      </GamesContainer>
    </>
  );
};
export default SearchScreen;
