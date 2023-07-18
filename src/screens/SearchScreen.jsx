import React, { useState } from "react";
import { useSearchGamesMutation } from "../slices/Search/SearchApiSlice";
import { toast } from "react-toastify";
import { FaSearch } from "react-icons/fa";
import { Spinner } from "@material-tailwind/react";
import SearchCards from "../components/Cards/SearchCards";
const SearchScreen = () => {
  const [searchField, setSearchField] = useState("");
  const [previousSearch, setPreviousSearch] = useState("");
  const [searchGames, { data, isLoading }] = useSearchGamesMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (previousSearch === searchField || searchField === null) {
      return;
    }
    try {
      await searchGames({ search: searchField }).unwrap();
      setPreviousSearch(searchField);
      setSearchField("");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  {
    data && console.log(data[0]);
  }
  return (
    <>
      <div className="w-11/12 sm:w-11/12 py-6 px-10 my-auto mx-auto flex flex-col mt-20">
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <div className="flex bg-white rounded justify-center align-middle">
            <input
              className="outline-none bg-transparent"
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
            />
            <FaSearch className="" type="submit" />
          </div>
        </form>
        {isLoading && <Spinner className="h-48 w-48 text-white" />}
        {data &&
          data.map((card) => (
            <SearchCards
              key={card.id}
              cover={card.cover.image_id}
              name={card.name}
            />
          ))}
      </div>
    </>
  );
};
export default SearchScreen;
