import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import TravelLayout from "../Layouts/TravelLayout";
import PhotographyLayout from "../Layouts/PhotographyLayout";
import AboutLayout from "../Layouts/AboutLayout";
import DestinationLayout from "../Layouts/DestinationLayout";
import SingleBlogPageLayout from "../Layouts/SingleBlogPageLayout";
import SingleArticlesPage from "../Layouts/SingleArticlesPage";
import StoryModal from "../section/Story/StoryModal";
export default function ClientRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/home" element={<HomeLayout />} />
        <Route path="/travel" element={<TravelLayout />} />
        <Route path="/photography" element={<PhotographyLayout />} />
        <Route path="/lifestyle" element={<AboutLayout />} />
        <Route path="/about" element={<AboutLayout />} />
        <Route path="/destination/:location" element={<DestinationLayout />} />
        <Route path="/story/:storyId" element={<StoryModal />} />
        <Route
          path="/blog/:blogTitle/:blogId"
          element={<SingleBlogPageLayout />}
        />
        <Route
          path="/articles/:articleTitle/:articleId"
          element={<SingleArticlesPage />}
        />
      </Routes>
    </>
  );
}
