import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  InstapaperShareButton,
} from "react-share";
import ShareWeb from "./ShareWeb";
export default function ShareModal() {
  const currentUrl = window.location.href;

  return (
    <>
      <div
        className={`maxmd:hidden fixed bottom-0 left-0 z-50  overflow-hidden text-[1.7vw] text-gray-100`}
      >
        <div
          className={` flex cursor-pointer flex-col items-center justify-center bg-gray-800 p-1 shadow transition-all duration-500 ease-out`}
        >
          <div className="flex flex-col justify-around">
            <FacebookShareButton url={currentUrl}>
              <div className="p-2  transition-all duration-200 ease-out hover:scale-105">
                <FaFacebookF />
              </div>
            </FacebookShareButton>

            <InstapaperShareButton url={currentUrl}>
              <div className="p-2  transition-all duration-200 ease-out hover:scale-105">
                <FaInstagram />
              </div>
            </InstapaperShareButton>

            <TwitterShareButton url={currentUrl}>
              <div className="p-2  transition-all duration-200 ease-out hover:scale-105">
                <FaTwitter />
              </div>
            </TwitterShareButton>

            <TelegramShareButton url={currentUrl}>
              <div className="p-2  transition-all duration-200 ease-out hover:scale-105">
                <FaTelegram />
              </div>
            </TelegramShareButton>
          </div>
          <div className="p-2  transition-all duration-200 ease-out hover:scale-105">
            <ShareWeb />
          </div>
        </div>
      </div>
    </>
  );
}
