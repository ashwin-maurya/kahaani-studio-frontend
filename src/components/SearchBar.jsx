import React, { useState } from "react";

export default function SearchBar() {
  const [expanded, setExpanded] = useState(false);

  const handleSearchIconClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div
        className={`${
          expanded ? "w-full" : "w-12"
        } relative flex h-12 items-center overflow-hidden rounded-md  bg-gray-100 shadow-sm transition-all duration-300 ease-in-out focus-within:shadow-md`}
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
        />
      </div>
    </>
  );
}
