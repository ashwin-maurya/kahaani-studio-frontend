import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeLayout from "./Layout/HomeLayout";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import TravelLayout from "./Layout/TravelLayout";
import PhotographyLayout from "./Layout/PhotographyLayout";
import SingleBlogPageLayout from "./Layout/SingleBlogPageLayout";
import AboutLayout from "./Layout/AboutLayout";
import GalleryState from "./Admin/AdminPanel/AdminContexts/GalleryContexts/GalleryState";
import AdminNavigation from "./Admin/AdminPanel/Layouts/AdminNavigation";
import AuthState from "./Admin/Authentication/AuthContexts/AuthState";
import MainEditorContainer from "./Admin/AdminPanel/Blogs/BlogEditor/MainEditorContainer";
import LoginPage from "./Admin/Authentication/AuthPage/LoginPage";
import BlogState from "./Admin/AdminPanel/AdminContexts/BlogContexts/BlogState";
import SingleArticlesPage from "./Layout/SingleArticlesPage";
import DestinationLayout from "./Layout/DestinationLayout";
const App = () => {
  return (
    <Router>
      <BlogState>
        <AuthState>
          <GalleryState>
            <ScrollProgress />
            <ScrollToTop />
            <div className=" container">
              <Navbar></Navbar>
              <Routes>
                <Route path="/" element={<HomeLayout />} />
                <Route path="/home" element={<HomeLayout />} />
                <Route path="/travel" element={<TravelLayout />} />
                <Route path="/photography" element={<PhotographyLayout />} />
                <Route path="/lifestyle" element={<AboutLayout />} />
                <Route path="/about" element={<AboutLayout />} />
                <Route
                  path="/destination/:location"
                  element={<DestinationLayout />}
                />
                <Route
                  path="/blog/:blogID"
                  element={<SingleBlogPageLayout />}
                />
                <Route
                  path="/articles/:articleID"
                  element={<SingleArticlesPage />}
                />
                <Route path="/admin/*" element={<AdminNavigation />} />
                <Route
                  path="/authenticate/admin/login"
                  element={<LoginPage />}
                />
                <Route path="/editor" element={<MainEditorContainer />} />
              </Routes>
              <Footer></Footer>
            </div>
          </GalleryState>
        </AuthState>
      </BlogState>
    </Router>
  );
};

export default App;
