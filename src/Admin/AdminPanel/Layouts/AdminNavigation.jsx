import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AuthenticatedAdminPage from "../AdminHome/AuthenticatedAdminPage";
import SideNav from "../Components/Common/SideNav";
import ImageForm from "../Gallery/ImageForm";
import MainEditorContainer from "../Blogs/BlogEditor/MainEditorContainer";
import UpdateImages from "../Gallery/UpdateImages";
import BlogPage from "../Blogs/BlogUpdate/BlogPage";
import ArticlePage from "../Articles/ArticleUpdate/ArticlePage";
import MainEditorContainerArticles from "../Articles/ArticleEditor/MainEditorContainerArticles";
import Destinations from "../Destination/Destinations";

export default function AdminLayout() {
  return (
    <div className="flex">
      <SideNav />
      <div className="mx-auto w-full max-w-screen-xl overflow-y-scroll scroll-smooth pt-5 max-md:pt-5">
        <Routes>
          <Route path="/" element={<AuthenticatedAdminPage />} />
          <Route path="/gallery/addimage" element={<ImageForm />} />
          <Route path="/gallery/updateimage" element={<UpdateImages />} />
          <Route path="/blogs/addblog" element={<MainEditorContainer />} />
          <Route path="/blogs/updateblog" element={<BlogPage />} />
          <Route
            path="/articles/addarticle"
            element={<MainEditorContainerArticles />}
          />
          <Route path="/articles/updatearticle" element={<ArticlePage />} />
          <Route path="/destination/viewupdate" element={<Destinations />} />
        </Routes>
      </div>
    </div>
  );
}
