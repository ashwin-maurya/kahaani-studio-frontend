import React, { useState, useEffect, useContext } from "react";
import SearchDropDown from "./SearchDropDown";
import ClientSearchContext from "../../Contexts/Search/ClientSearchContext";

const SearchBar = ({ scrollDirection }) => {
  const [expanded, setExpanded] = useState(false);
  const [searchtext, setSearchtext] = useState("");
  const [searchResult, setSearchResult] = useState({});
  const [searchResultExist, setSearchResultExist] = useState(false);
  const { fetchResults, results } = useContext(ClientSearchContext);

  useEffect(() => {
    if (searchtext.trim().length > 3) {
      fetchResults(searchtext);
    } else {
      setSearchResult({});
      setSearchResultExist(false);
    }
  }, [searchtext]);

  useEffect(() => {
    if (results.length != 0) {
      setSearchResult(results);
      setSearchResultExist(true);
    }
  }, [results]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchtext(value);
    if (value.trim() === "") {
      setSearchResultExist(false);
    }
  };
  const handleSearchIconClick = () => {
    setExpanded(!expanded);
    setSearchResultExist(false);
  };
  const handleInputBlur = () => {
    const blurTimeout = setTimeout(() => {
      setSearchResultExist(false);
    }, 200);
  };
  const handleInputFocus = () => {
    if (searchtext.trim() != "") {
      setSearchResultExist(true);
    }
  };
  useEffect(() => {
    if (scrollDirection != "up") {
      setSearchResultExist(false);
    }
  }, [scrollDirection]);
  return (
    <>
      {searchResultExist && <SearchDropDown searchResult={searchResult} />}
      <div
        className={`${
          expanded ? "w-full" : "w-12"
        } relative flex h-12 items-center overflow-hidden rounded-md bg-gray-100 shadow transition-all duration-300 ease-in-out focus-within:shadow-md max-sm:bg-gray-200`}
      >
        <div
          className="grid h-full w-14 cursor-pointer place-items-center text-gray-600"
          onClick={handleSearchIconClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          className={`peer h-full ${
            expanded ? "w-full pl-1" : "w-0"
          } border-none bg-gray-100 text-sm text-black outline-none transition-all duration-300 ease-in-out`}
          type="text"
          id="search"
          name="search"
          placeholder="Search something.."
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
        />
      </div>
    </>
  );
};

export default SearchBar;
