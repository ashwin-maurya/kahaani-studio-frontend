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
const App = () => {
  return (
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
          <Route path="/blog" element={<SingleBlogPageLayout />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
