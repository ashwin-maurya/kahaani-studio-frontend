// // GalleryState.js
// import React, { useReducer } from "react";
// import GalleryContext from "./GalleryContext";
// import axios from "axios";

// // Your reducer function to handle state changes
// const galleryReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_IMAGE":
//       return {
//         ...state,
//         images: [...state.images, action.payload],
//       };
//     // Add more cases as needed

//     default:
//       return state;
//   }
// };

// const GalleryState = (props) => {
//   const initialState = {
//     images: [], // You can define other state variables as needed
//   };

//   const [state, dispatch] = useReducer(galleryReducer, initialState);

//   // Function to add an image
//   const addImage = async (imageData) => {
//     console.log(imageData);
//     try {
//       const response = await axios.post(
//         "http://localhost:5001/api/gallery/add",
//         imageData,
//       );

//       dispatch({ type: "ADD_IMAGE", payload: response.data });
//     } catch (error) {
//       console.error("Error adding image:", error);
//     }
//   };

//   return (
//     <GalleryContext.Provider
//       value={{
//         images: state.images,
//         addImage,
//         // Add other state variables and functions as needed
//       }}
//     >
//       {props.children}
//     </GalleryContext.Provider>
//   );
// };

// export default GalleryState;
