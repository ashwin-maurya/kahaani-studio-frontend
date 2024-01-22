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
        className={`fixed bottom-0 left-0 z-50 mb-[1vh] overflow-hidden text-[1.7vw] text-gray-600`}
      >
        <div
          className={` flex cursor-pointer flex-col items-center justify-center rounded bg-gray-100 p-1 shadow transition-all duration-500`}
        >
          <div className="p-[.7vw] transition-all duration-100 hover:scale-105">
            <FaFacebookF />
          </div>
          <div className="p-[.7vw] transition-all duration-100 hover:scale-105">
            <FaInstagram />
          </div>
          <div className="p-[.7vw] transition-all duration-100 hover:scale-105">
            <FaTwitter />
          </div>
          <div className="p-[.7vw] transition-all duration-100 hover:scale-105">
            <FaShare />
          </div>
        </div>
      </div>
    </>
  );
}
