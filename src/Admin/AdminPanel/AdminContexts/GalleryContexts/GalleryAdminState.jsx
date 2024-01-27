// GalleryState.js

import React, { useReducer, useEffect } from "react";
import GalleryContext from "./GalleryAdminContext";
import axios from "axios";

const galleryReducer = (state, action) => {
  switch (action.type) {
    case "SET_IMAGES":
      return {
        ...state,
        images: action.payload,
      };
    case "ADD_IMAGE":
      return {
        ...state,
        images: [...state.images, action.payload],
      };
    // Add more cases as needed

    default:
      return state;
  }
};

const GalleryState = (props) => {
  const initialState = {
    images: [],
  };

  const [state, dispatch] = useReducer(galleryReducer, initialState);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://kahaani-studio-backend.onrender.com/api/admin/gallery/all",
      );
      dispatch({ type: "SET_IMAGES", payload: response.data });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const addImage = async (imageData) => {
    try {
      const response = await axios.post(
        "https://kahaani-studio-backend.onrender.com/api/admin/gallery/add",
        imageData,
      );

      dispatch({ type: "ADD_IMAGE", payload: response.data });
    } catch (error) {
      console.error("Error adding image:", error);
    }
  };

  return (
    <GalleryContext.Provider
      value={{
        images: state.images,
        addImage,
        fetchImages,
      }}
    >
      {props.children}
    </GalleryContext.Provider>
  );
};

export default GalleryState;
