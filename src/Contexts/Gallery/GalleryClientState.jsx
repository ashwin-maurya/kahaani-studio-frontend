// GalleryState.js

import React, { useReducer, useEffect } from "react";
import GalleryClientContext from "./GalleryClientContext";
import axios from "axios";

const galleryReducer = (state, action) => {
  switch (action.type) {
    case "SET_IMAGES":
      return {
        ...state,
        images: action.payload,
      };

    default:
      return state;
  }
};

const GalleryClientState = (props) => {
  const initialState = {
    images: [],
  };

  const [state, dispatch] = useReducer(galleryReducer, initialState);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/client/gallery/all",
      );
      dispatch({ type: "SET_IMAGES", payload: response.data });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <GalleryClientContext.Provider
      value={{
        images: state.images,
        fetchImages,
      }}
    >
      {props.children}
    </GalleryClientContext.Provider>
  );
};

export default GalleryClientState;
