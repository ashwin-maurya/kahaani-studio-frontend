// BlogState.js

import React, { useReducer, useEffect, useContext } from "react";
import BlogContext from "./BlogContext";
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
    // Handle other actions if needed
    default:
      return state;
  }
};

const BlogState = (props) => {
  const initialState = {
    blogs: [], // Add this state to store fetched blogs
    blogsWithContent: [], // Add this state to store fetched blogs with content
  };

  const [state, dispatch] = useReducer(blogReducer, initialState);

  // Function to add a new blog
  const addBlog = async (blogData) => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/blogs/add",
        blogData,
      );
      console.log("Blog added:", response.data);
      // You can dispatch an action if needed
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  // Function to fetch blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/blogs/getBlogs",
      );
      console.log("Blogs fetched:", response.data);
      dispatch({ type: "SET_BLOGS", payload: response.data });
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Function to fetch blogs with content
  const fetchBlogsWithContent = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/blogs/getBlogsWithContent",
      );
      dispatch({ type: "SET_BLOGS_WITH_CONTENT", payload: response.data });
    } catch (error) {
      console.error("Error fetching blogs with content:", error);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        fetchBlogs,
        addBlog,
        blogs: state.blogs,
        blogsWithContent: state.blogsWithContent,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
