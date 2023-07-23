import React, { useEffect, useState } from "react";
import {
  useSearchGamesMutation,
  useGetAllGamesQuery,
} from "../slices/Games/gamesApiSlice";
import { toast } from "react-toastify";
import { FaSearch } from "react-icons/fa";
import Loading from "../components/Loading";
import SearchCards from "../components/Cards/SearchCards";
const SearchScreen = () => {
  const [searchField, setSearchField] = useState("");
  const [searchGames, { data, isLoading }] = useSearchGamesMutation();
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
    if (data && data.length === 24) {
      toast.error(
        "Please refine your search. Queries are limited to 24 games per query"
      );
    }
  }, [data]);
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
      <div className="py-6 px-10 lg:px-8 xl:px-10 flex flex-col flex-1 mt-5">
        <form className="flex justify-center mb-5" onSubmit={handleSubmit}>
          <div className="flex bg-white rounded justify-center align-middle">
            <input
              className="outline-none bg-transparent pl-1 md:w-[400px]"
              value={searchField}
              spellCheck="false"
              onChange={(e) => setSearchField(e.target.value)}
            />
            <div className="flex-1 items-center pl-1" onClick={handleSubmit}>
              <FaSearch className="w-6 h-6 py-1 cursor-pointer" type="submit" />
            </div>
          </div>
        </form>
        {isLoading && <Loading />}
        <div className="flex flex-wrap justify-center lg:justify-normal">
          {data &&
            data.map((card) => (
              <SearchCards
                key={card._id}
                _id={card._id}
                cover={card.cover.image_id}
                name={card.name}
                added={checkAdded(card._id)}
              />
            ))}
        </div>
      </div>
    </>
  );
};
export default SearchScreen;
