import React, { useState, useEffect, useReducer } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";

const AuthState = (props) => {
  // Check local storage for initial state
  const storedAuthData = JSON.parse(localStorage.getItem("authtoken"));
  const [initialStateChecked, setInitialStateChecked] = useState(false);

  useEffect(() => {
    if (storedAuthData) {
      setInitialStateChecked(true);
    }
  }, []);

  const adminSignup = async (formData) => {
    try {
      const res = await axios.post(
        "http://localhost:5001/api/admin/signup",
        formData,
      );
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("authtoken", JSON.stringify(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const adminLogin = async (formData) => {
    try {
      const res = await axios.post(
        "http://localhost:5001/api/admin/login",
        formData,
      );
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("authtoken", JSON.stringify(res.data.authtoken));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        initialStateChecked,
        adminSignup,
        adminLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
