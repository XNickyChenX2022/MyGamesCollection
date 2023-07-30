import React from "react";
import { FaSearch } from "react-icons/fa";
const Search = ({ handleSubmit, searchField, setSearchField }) => {
  return (
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
  );
};

export default Search;
