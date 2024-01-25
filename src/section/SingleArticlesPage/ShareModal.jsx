import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaShare } from "react-icons/fa";

export default function ShareModal() {
  return (
    <>
      <div
        className={`fixed bottom-0 left-0 z-50 overflow-hidden  text-[1.7vw] text-gray-100 max-md:hidden`}
      >
        <div
          className={` flex cursor-pointer flex-col items-center justify-center bg-gray-800 p-1 shadow transition-all duration-500 ease-out`}
        >
          <div className="p-2  transition-all duration-200 ease-out hover:scale-105">
            <FaFacebookF />
          </div>
          <div className="p-2  transition-all duration-200 ease-out hover:scale-105">
            <FaInstagram />
          </div>
          <div className="p-2  transition-all duration-200 ease-out hover:scale-105">
            <FaTwitter />
          </div>
          <div className="p-2  transition-all duration-200 ease-out hover:scale-105">
            <FaShare />
          </div>
        </div>
      </div>
    </>
  );
}
