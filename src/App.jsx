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
import GalleryState from "./context/Gallery/GalleryState";
import AdminLayout from "./Admin/Layouts/AdminLayout";
import AuthState from "./Admin/Authentication/Context/AuthState";
import TextEditor from "./Admin/BlogEditor/TextEditor";
const App = () => {
  return (
    <AuthState>
      <GalleryState>
        <Router>
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
              <Route path="/blog" element={<SingleBlogPageLayout />} />
              <Route path="/admin/*" element={<AdminLayout />} />
              <Route path="/editor" element={<TextEditor />} />
            </Routes>
            <Footer></Footer>
          </div>
        </Router>
      </GalleryState>
    </AuthState>
  );
};

export default App;
