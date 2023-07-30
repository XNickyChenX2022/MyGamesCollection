import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchList = ({ searchField, setSearchField }) => {
  return (
    <div className="w-[100%] bg-gray-700">
      <form className="flex justify-center pb-2">
        <div className="flex bg-white rounded justify-center align-middle">
          <input
            className="outline-none bg-transparent pl-1"
            value={searchField}
            spellCheck="false"
            onChange={(e) => setSearchField(e.target.value)}
          />
          <div className="flex-1 items-center pl-1">
            <FaSearch className="w-6 h-6 py-1" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchList;
