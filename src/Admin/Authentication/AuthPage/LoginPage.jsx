import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../AuthContexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { adminSignup, adminLogin } = useContext(AuthContext);
  const navigate = useNavigate();

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
      await adminSignup(signupData);
      // Redirect or perform any action after successful signup
    } catch (error) {
      // Handle signup error
      console.error("Signup error:", error.message);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await adminLogin(loginData);
      // Redirect or perform any action after successful login
    } catch (error) {
      // Handle login error
      console.error("Login error:", error.message);
    }
  };

  return (
    <>
      <div className="pt-16">
        <div className="mb-20 flex">
          {/* <div className="w-full">
            <h2 className="my-5 text-center font-sans text-2xl">Signup</h2>
            <form
              onSubmit={handleSignupSubmit}
              className="mx-auto flex w-3/4 flex-col gap-3"
            >
              <label className="mb-3 font-CooperHevitt text-xl text-black">
                Phone Number:
                <input
                  className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
                  type="text"
                  name="phoneNumber"
                  value={signupData.phoneNumber}
                  onChange={handleSignupChange}
                />
              </label>
              <label className="mb-3 font-CooperHevitt text-xl text-black">
                Password:
                <input
                  className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
                  type="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                />
              </label>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-sm bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Signup
                </button>
              </div>
            </form>
          </div> */}
          <div className="w-full">
            <h2 className="my-5 text-center font-sans text-2xl">Admin Login</h2>
            <form
              onSubmit={handleLoginSubmit}
              className="mx-auto flex w-2/4 flex-col gap-3"
            >
              <label className="mb-3 font-CooperHevitt text-xl text-black">
                Phone Number:
                <input
                  className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
                  type="text"
                  name="phoneNumber"
                  value={loginData.phoneNumber}
                  onChange={handleLoginChange}
                />
              </label>
              <label className="mb-3 font-CooperHevitt text-xl text-black">
                Password:
                <input
                  className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                />
              </label>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-sm bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
