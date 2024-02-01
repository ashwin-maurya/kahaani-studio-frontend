// GalleryState.js

import React, { useReducer, useEffect } from "react";
import ClientSearchContext from "./ClientSearchContext";
import axios from "axios";

const searchReducer = (state, action) => {
  switch (action.type) {
    case "SET_RESULTS":
      return {
        ...state,
        results: action.payload,
      };

    default:
      return state;
  }
};

const ClientSearchState = (props) => {
  const initialState = {
    results: [],
  };

  const [state, dispatch] = useReducer(searchReducer, initialState);

  const fetchResults = async (searchText) => {
    try {
      const response = await axios.get(
        `https://kahaani-studio-backend.onrender.com/api/client/search/searchresults/${searchText}`,
      );
      dispatch({ type: "SET_RESULTS", payload: response.data });
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <ClientSearchContext.Provider
      value={{
        results: state.results,
        fetchResults,
      }}
    >
      {props.children}
    </ClientSearchContext.Provider>
  );
};

export default ClientSearchState;
