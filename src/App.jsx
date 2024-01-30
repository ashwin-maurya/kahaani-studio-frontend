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
import ArticleAdminState from "./Admin/AdminPanel/AdminContexts/ArticleContexts/ArticleAdminState";
import DestinationAdminState from "./Admin/AdminPanel/AdminContexts/DestinationContexts/DestinationAdminState";

//Client States
import BlogClientState from "./Contexts/Blogs/BlogClientState";
import GalleryClientState from "./Contexts/Gallery/GalleryClientState";
import ArticleClientState from "./Contexts/Articles/ArticleClientState";
import DestinationClientState from "./Contexts/Destinations/DestinationClientState";
const App = () => {
  return (
    <Router>
      {/* Admin Contexts */}
      <AuthState>
        <BlogAdminState>
          <ArticleAdminState>
            <GalleryAdminState>
              <DestinationAdminState>
                {/* Client Contexts */}
                <BlogClientState>
                  <ArticleClientState>
                    <GalleryClientState>
                      <DestinationClientState>
                        <ScrollProgress />
                        <ScrollToTop />
                        <div className=" container">
                          <Navbar></Navbar>
                          <Routes>
                            <Route
                              path="/admin/*"
                              element={<AdminNavigation />}
                            />
                            <Route path="/*" element={<ClientRoutes />} />
                            <Route
                              path="/authenticate/admin/login"
                              element={<LoginPage />}
                            />
                          </Routes>
                          <Footer></Footer>
                        </div>
                      </DestinationClientState>
                    </GalleryClientState>
                  </ArticleClientState>
                </BlogClientState>
              </DestinationAdminState>
            </GalleryAdminState>
          </ArticleAdminState>
        </BlogAdminState>
      </AuthState>
    </Router>
  );
};

export default App;
