// BlogState.js

import React, { useReducer, useEffect, useContext } from "react";
import BlogClientContext from "./BlogClientContext";
import axios from "axios";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "SET_BLOGS":
      return {
        ...state,
        blogs: action.payload,
      };
    case "SET_BLOGS_WITH_CONTENT":
      return {
        ...state,
        blogsWithContent: action.payload,
      };
    default:
      return state;
  }
};

const BlogClientState = (props) => {
  const initialState = {
    blogs: [], // Add this state to store fetched blogs
    blogsWithContent: [], // Add this state to store fetched blogs with content
  };

  const [state, dispatch] = useReducer(blogReducer, initialState);

  // Function to fetch blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://kahaani-studio-backend.onrender.com/api/client/blogs/getBlogs",
      );
      dispatch({ type: "SET_BLOGS", payload: response.data });
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Function to fetch blog with content for the requested Blog ID
  const fetchBlogsWithContent = async (blogId) => {
    try {
      const response = await axios.get(
        `https://kahaani-studio-backend.onrender.com/api/client/blogs/getBlogsWithContent/${blogId}`,
      );
      dispatch({ type: "SET_BLOGS_WITH_CONTENT", payload: response.data });
      console.log("Blog with content fetched:", response.data);
    } catch (error) {
      console.error("Error fetching blog with content:", error);
    }
  };

  return (
    <BlogClientContext.Provider
      value={{
        fetchBlogs,
        fetchBlogsWithContent,
        blogs: state.blogs,
        blogsWithContent: state.blogsWithContent,
      }}
    >
      {props.children}
    </BlogClientContext.Provider>
  );
};

export default BlogClientState;
