import React, { useState, useContext } from "react";
import AuthContext from "../Context/AuthContext";

const AuthForm = () => {
  const authContext = useContext(AuthContext);

  const [signupData, setSignupData] = useState({
    phoneNumber: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    phoneNumber: "",
    password: "",
  });

  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(signupData);
      await authContext.adminSignup(signupData);
      // Redirect or perform any action after successful signup
    } catch (error) {
      // Handle signup error
      console.error("Signup error:", error.message);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await authContext.adminLogin(loginData);
      // Redirect or perform any action after successful login
    } catch (error) {
      // Handle login error
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="m-40">
      <h1 className="text-4xl text-red-800">
        {authContext.initialStateChecked
          ? "Admin Logged in "
          : "Admin Not logged in"}
      </h1>
      <h2>Signup</h2>
      <form onSubmit={handleSignupSubmit}>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={signupData.phoneNumber}
            onChange={handleSignupChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={signupData.password}
            onChange={handleSignupChange}
          />
        </label>
        <button type="submit">Signup</button>
      </form>

      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={loginData.phoneNumber}
            onChange={handleLoginChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AuthForm;
