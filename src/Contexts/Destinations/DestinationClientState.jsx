// DestinationClientState.js

import React, { useReducer, useEffect } from "react";
import DestinationClientContext from "./DestinationClientContext";
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

const DestinationClientState = (props) => {
  const initialState = {
    destinations: [],
  };

  const [state, dispatch] = useReducer(destinationReducer, initialState);

  const fetchDestinations = async () => {
    try {
      const response = await axios.get(
        "https://kahaani-studio-backend.onrender.com/api/client/destination/getDestinations",
      );
      dispatch({ type: "SET_DESTINATIONS", payload: response.data });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching destinations:", error);
    }
  };

  return (
    <DestinationClientContext.Provider
      value={{
        destinations: state.destinations,
        fetchDestinations,
      }}
    >
      {props.children}
    </DestinationClientContext.Provider>
  );
};

export default DestinationClientState;
