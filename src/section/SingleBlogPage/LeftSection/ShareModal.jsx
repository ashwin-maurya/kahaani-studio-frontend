import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaShare,
} from "react-icons/fa";

export default function ShareModal() {
  return (
    <>
      <div
        className={`fixed bottom-0 left-0 z-50  overflow-hidden text-[1.7vw] text-gray-100`}
      >
        <div
          className={` flex cursor-pointer flex-col items-center justify-center bg-gray-800 p-1 shadow transition-all duration-500 ease-out`}
        >
          <div className="p-[.7vw]  transition-all duration-200 ease-out hover:scale-105 hover:bg-gray-600">
            <FaFacebookF />
          </div>
          <div className="p-[.7vw]  transition-all duration-200 ease-out hover:scale-105 hover:bg-gray-600">
            <FaInstagram />
          </div>
          <div className="p-[.7vw]  transition-all duration-200 ease-out hover:scale-105 hover:bg-gray-600">
            <FaTwitter />
          </div>
          <div className="p-[.7vw]  transition-all duration-200 ease-out hover:scale-105 hover:bg-gray-600">
            <FaShare />
          </div>
        </div>
      </div>
    </>
  );
}
