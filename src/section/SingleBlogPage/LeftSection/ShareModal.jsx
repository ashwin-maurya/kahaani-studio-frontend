import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaShare,
} from "react-icons/fa";
import ShareWeb from "./ShareWeb";
export default function ShareModal() {
  return (
    <>
      <div
        className={`maxmd:hidden fixed bottom-0 left-0 z-50  overflow-hidden text-[1.7vw] text-gray-100`}
      >
        <div
          className={` flex cursor-pointer flex-col items-center justify-center bg-gray-800 p-1 shadow transition-all duration-500 ease-out`}
        >
          <ShareWeb />
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
