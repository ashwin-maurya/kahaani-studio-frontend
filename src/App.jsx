import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ClientRoutes from "./Routes/ClientRoutes";
import AdminNavigation from "./Admin/AdminPanel/Layouts/AdminNavigation";

import LoginPage from "./Admin/Authentication/AuthPage/LoginPage";

//Admin States
import AuthState from "./Admin/Authentication/AuthContexts/AuthState";
import GalleryAdminState from "./Admin/AdminPanel/AdminContexts/GalleryContexts/GalleryAdminState";
import BlogAdminState from "./Admin/AdminPanel/AdminContexts/BlogContexts/BlogAdminState";

//Client States
import BlogClientState from "./Contexts/Blogs/BlogClientState";
import GalleryClientState from "./Contexts/Gallery/GalleryClientState";
const App = () => {
  return (
    <Router>
      {/* Admin Contexts */}
      <AuthState>
        <BlogAdminState>
          <GalleryAdminState>
            {/* Client Contexts */}
            <BlogClientState>
              <GalleryClientState>
                <ScrollProgress />
                <ScrollToTop />
                <div className=" container">
                  <Navbar></Navbar>
                  <Routes>
                    <Route path="/admin/*" element={<AdminNavigation />} />
                    <Route path="/*" element={<ClientRoutes />} />
                    <Route
                      path="/authenticate/admin/login"
                      element={<LoginPage />}
                    />
                  </Routes>
                  <Footer></Footer>
                </div>
              </GalleryClientState>
            </BlogClientState>
          </GalleryAdminState>
        </BlogAdminState>
      </AuthState>
    </Router>
  );
};

export default App;
