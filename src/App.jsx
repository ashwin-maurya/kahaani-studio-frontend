import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import GalleryAdminState from "./Admin/AdminPanel/AdminContexts/GalleryContexts/GalleryAdminState";
import AuthState from "./Admin/Authentication/AuthContexts/AuthState";
import BlogAdminState from "./Admin/AdminPanel/AdminContexts/BlogContexts/BlogAdminState";
import ClientRoutes from "./Routes/ClientRoutes";
import BlogClientState from "./Contexts/Blogs/BlogClientState";
import LoginPage from "./Admin/Authentication/AuthPage/LoginPage";
import AdminNavigation from "./Admin/AdminPanel/Layouts/AdminNavigation";

const App = () => {
  return (
    <Router>
      {/* Admin Contexts */}
      <AuthState>
        <BlogAdminState>
          <GalleryAdminState>
            {/* Client Contexts */}
            <BlogClientState>
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
            </BlogClientState>
          </GalleryAdminState>
        </BlogAdminState>
      </AuthState>
    </Router>
  );
};

export default App;
