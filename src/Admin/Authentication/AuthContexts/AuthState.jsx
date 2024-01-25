import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";

const AuthState = (props) => {
  const navigate = useNavigate();
  const [initialStateChecked, setInitialStateChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const storedAuthData = JSON.parse(localStorage.getItem("authtoken"));
    if (location.pathname.startsWith("/admin")) {
      if (storedAuthData) {
        validateAuthToken();
      } else {
        handleLogout(); // Handle invalid token
        setLoading(false);
      }
    }
  }, []);
  useEffect(() => {
    // Add request interceptor
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        const authtoken = localStorage.getItem("authtoken");
        if (authtoken) {
          config.headers["Authorization"] =
            `Bearer ${authtoken.replace(/"/g, "")}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    // Add response interceptor
    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response && error.response.status === 401) {
          // Unauthorized, handle it or redirect to login
          handleLogout();
        }
        return Promise.reject(error);
      },
    );

    // Cleanup interceptors on component unmount
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  const adminSignup = async (formData) => {
    try {
      const res = await axios.post(
        "http://localhost:5001/api/admin/admin/signup",
        formData,
      );

      if (res.status === 200) {
        localStorage.setItem("authtoken", JSON.stringify(res.data.authtoken));
        setInitialStateChecked(true);
        navigate("/admin");
      }
    } catch (error) {
      // Display alert for specific error scenarios
      if (error.response && error.response.status === 400) {
        window.alert("Invalid credentials. Please check your credentials");
      } else if (error.response && error.response.status === 401) {
        window.alert("Unauthorized. Please login again");
      } else {
        window.alert("Login error: Internal server error");
      }
    }
  };

  const adminLogin = async (formData) => {
    try {
      const res = await axios.post(
        "http://localhost:5001/api/admin/admin/login",
        formData,
      );

      if (res.status === 200) {
        localStorage.setItem("authtoken", JSON.stringify(res.data.authtoken));
        setInitialStateChecked(true);
        navigate("/admin");
      }
    } catch (error) {
      // Display alert for specific error scenarios
      if (error.response && error.response.status === 400) {
        window.alert("Invalid credentials. Please check your credentials");
      } else if (error.response && error.response.status === 401) {
        window.alert("Unauthorized. Please login again");
      } else {
        window.alert("Login error: Internal server error");
      }
    }
  };

  const validateAuthToken = async () => {
    try {
      const authtoken = localStorage.getItem("authtoken");
      if (!authtoken) {
        setLoading(false);
        return;
      }

      const decodedToken = jwtDecode(authtoken);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        handleLogout(); // Token expired, logout
        return;
      }

      const response = await axios.get(
        "http://localhost:5001/api/admin/admin/validate",
        {
          headers: {
            Authorization: `Bearer ${authtoken.replace(/"/g, "")}`,
          },
        },
      );

      if (response.status === 200) {
        setInitialStateChecked(response.data.admin.isAdmin);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        window.alert("Error validating authtoken");
      }
      handleLogout(); // Handle invalid token
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authtoken");
    setInitialStateChecked(false);
    navigate("/authenticate/admin/login"); // Redirect to login page or any desired route
  };

  return (
    <AuthContext.Provider
      value={{
        validateAuthToken,
        initialStateChecked,
        adminSignup,
        adminLogin,
        handleLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
