// DestinationClientState.js

import React, { useReducer, useEffect } from "react";
import DestinationAdminContext from "./DestinationAdminContext";
import axios from "axios";

const destinationReducer = (state, action) => {
  switch (action.type) {
    case "SET_DESTINATIONS":
      return {
        ...state,
        destinations: action.payload,
      };

    default:
      return state;
  }
};

const DestinationAdminState = (props) => {
  const initialState = {
    destinations: [],
  };

  const [state, dispatch] = useReducer(destinationReducer, initialState);

  const fetchDestinations = async () => {
    try {
      const response = await axios.get(
        "https://kahaani-studio-backend.onrender.com/api/admin/destination/getDestinations",
      );
      dispatch({ type: "SET_DESTINATIONS", payload: response.data });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching destinations:", error);
    }
  };

  const updateImageURL = async (destinationId, imageURL) => {
    const authtoken = localStorage.getItem("authtoken");
    if (!authtoken) {
      return;
    }
    try {
      const response = await axios.post(
        `https://kahaani-studio-backend.onrender.com/api/admin/destination/updateImageURL/${destinationId}`,
        { imageURL },
        {
          headers: {
            Authorization: `Bearer ${authtoken.replace(/"/g, "")}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error("Error updating image URL:", error);
      throw error;
    }
  };

  return (
    <DestinationAdminContext.Provider
      value={{
        destinations: state.destinations,
        fetchDestinations,
        updateImageURL,
      }}
    >
      {props.children}
    </DestinationAdminContext.Provider>
  );
};

export default DestinationAdminState;
