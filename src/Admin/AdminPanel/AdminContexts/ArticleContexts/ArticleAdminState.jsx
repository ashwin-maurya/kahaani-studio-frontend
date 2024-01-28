// ArticleState.js

import React, { useReducer, useEffect, useContext } from "react";
import ArticleAdminContext from "./ArticleAdminContext";
import axios from "axios";

const articleReducer = (state, action) => {
  switch (action.type) {
    case "SET_ARTICLES":
      return {
        ...state,
        articles: action.payload,
      };
    case "SET_ARTICLES_WITH_CONTENT":
      return {
        ...state,
        articlesWithContent: action.payload,
      };
    // Handle other actions if needed
    default:
      return state;
  }
};

const ArticleAdminState = (props) => {
  const initialState = {
    articles: [], // Add this state to store fetched blogs
    articlesWithContent: [], // Add this state to store fetched blogs with content
  };

  const [state, dispatch] = useReducer(articleReducer, initialState);

  // Function to add a new blog
  const addArticle = async (articleData) => {
    const authtoken = localStorage.getItem("authtoken");
    if (!authtoken) {
      return;
    }
    try {
      const response = await axios.post(
        "https://kahaani-studio-backend.onrender.com/api/admin/article/add",
        articleData,
        {
          headers: {
            Authorization: `Bearer ${authtoken.replace(/"/g, "")}`,
          },
        },
      );
      console.log("Article added:", response.data);
      // You can dispatch an action if needed
    } catch (error) {
      console.error("Error adding Article:", error);
    }
  };

  // Function to fetch blogs
  const fetchArticle = async () => {
    try {
      const response = await axios.get(
        "https://kahaani-studio-backend.onrender.com/api/admin/article/getArticle",
      );
      console.log("Article fetched:", response.data);
      dispatch({ type: "SET_ARTICLES", payload: response.data });
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  // Function to fetch blogs with content
  const fetchArticlesWithContent = async (articleId) => {
    try {
      const response = await axios.get(
        `https://kahaani-studio-backend.onrender.com/api/client/article/getArticlesWithContent/${articleId}`,
      );
      dispatch({ type: "SET_ARTICLES_WITH_CONTENT", payload: response.data });
    } catch (error) {
      console.error("Error fetching articles with content:", error);
    }
  };

  return (
    <ArticleAdminContext.Provider
      value={{
        fetchArticle,
        addArticle,
        articles: state.articles,
        articlesWithContent: state.articlesWithContent,
      }}
    >
      {props.children}
    </ArticleAdminContext.Provider>
  );
};

export default ArticleAdminState;
