import React from "react";

export default function SearchDropDown({ searchResult }) {
  return (
    <>
      <div
        id="dropdownAvatarName"
        className="dark:bg-darkBgPrimary absolute left-6 top-16 z-50 block w-[200%] max-w-[500px] divide-y divide-gray-100 rounded-lg border bg-white shadow-sm "
      >
        <h1 className="text-primaryMain m-2 mx-4 font-CooperHevitt text-sm">
          Search Results...
        </h1>
        <ul
          className="py-2 text-sm text-gray-700 "
          aria-labelledby="dropdownAvatarNameButton"
        >
          <li className="flex justify-between  px-4 py-1 hover:bg-gray-100 ">
            <div className="flex flex-col">
              <span className="">Some BLog </span>
              <span className="my-1 text-xs text-gray-400">Shikha</span>
            </div>
            <img src="" alt="" className="h-8  object-cover" />
          </li>
        </ul>
      </div>
    </>
  );
}
