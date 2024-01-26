import React from "react";
import {
  FaTwitter,
  FaPinterest,
  FaFacebook,
  FaTelegramPlane,
} from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  PinterestShareButton,
  InstapaperShareButton,
} from "react-share";
import ShareWeb from "./ShareWeb";

export default function ShareModalHorizonatal() {
  const currentUrl = window.location.href;

  return (
    <>
      <div className="flex  w-full cursor-pointer flex-row items-center justify-evenly text-white transition-all duration-500 ease-out">
        <div className="item-center flex w-auto  justify-center overflow-hidden bg-black px-2 py-2 text-2xl text-gray-200 transition-all duration-200 ease-out hover:scale-105">
          <ShareWeb />
        </div>
        <FacebookShareButton url={currentUrl}>
          <div className="item-center flex  justify-center overflow-hidden bg-blue-500 px-2 py-2  text-2xl transition-all duration-200 ease-out hover:scale-105">
            <FaFacebook />
          </div>
        </FacebookShareButton>

        <PinterestShareButton url={currentUrl}>
          <div className="item-center flex  justify-center overflow-hidden bg-red-500 px-2 py-2  text-2xl transition-all duration-200 ease-out hover:scale-105">
            <FaPinterest />
          </div>
        </PinterestShareButton>

        <TwitterShareButton url={currentUrl}>
          <div className="item-center flex  justify-center overflow-hidden bg-blue-400 px-2 py-2  text-2xl transition-all duration-200 ease-out hover:scale-105">
            <FaTwitter />
          </div>
        </TwitterShareButton>

        <TelegramShareButton url={currentUrl}>
          <div className="item-center flex  justify-center overflow-hidden bg-blue-300 px-2 py-2  text-2xl transition-all duration-200 ease-out hover:scale-105">
            <FaTelegramPlane />
          </div>
        </TelegramShareButton>
      </div>
    </>
  );
}
