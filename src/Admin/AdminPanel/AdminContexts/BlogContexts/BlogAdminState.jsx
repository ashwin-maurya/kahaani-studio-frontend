// BlogState.js

import React, { useReducer, useEffect, useContext } from "react";
import BlogContext from "./BlogAdminContext";
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
    const authtoken = localStorage.getItem("authtoken");
    if (!authtoken) {
      return;
    }
    try {
      const response = await axios.post(
        "https://kahaani-studio-backend.onrender.com/api/admin/blogs/add",
        blogData,
        {
          headers: {
            Authorization: `Bearer ${authtoken.replace(/"/g, "")}`,
          },
        },
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
        "https://kahaani-studio-backend.onrender.com/api/admin/blogs/getBlogs",
      );
      console.log("Blogs fetched:", response.data);
      dispatch({ type: "SET_BLOGS", payload: response.data });
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Function to fetch blogs with content
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
