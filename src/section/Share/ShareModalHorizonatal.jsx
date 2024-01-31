import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import ShareWeb from "./ShareWeb";

export default function ShareModalHorizonatal({ title }) {
  const currentUrl = window.location.href;
  const isLargeScreen = window.innerWidth > 500;
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      <div className="my-5 flex w-full cursor-pointer flex-row items-center justify-start transition-all duration-500 ease-out max-md:flex-col">
        <h1 className="mx-10 font-Oswald text-3xl font-extrabold max-md:text-lg">
          Share the Article :{" "}
        </h1>
        <div className="flex flex-wrap gap-3 font-CooperHevitt text-white max-sm:gap-0">
          {isLargeScreen ? (
            <>
              <a
                className="ease mb-1 mr-1 inline-flex items-center rounded-full border-2 border-stone-600 bg-stone-600 px-5 py-3 text-white transition duration-200 hover:border-stone-700 hover:bg-stone-700"
                target="_blank"
                rel="noopener"
                onClick={copyToClipboard}
                aria-label="Copy URL to Clipboard"
              >
                <FaLink />
                <span className="ml-2">
                  {isCopied ? "Copied!" : "Copy URL"}
                </span>
              </a>
            </>
          ) : (
            <a
              className="ease mb-1 mr-1 inline-flex items-center rounded-full border-2 border-stone-600 bg-stone-600 px-5 py-3 text-white transition duration-200 hover:border-stone-700 hover:bg-stone-700"
              target="_blank"
              rel="noopener"
              aria-label="Share on Twitter"
            >
              <ShareWeb title={title} />
              <span className="ml-2">Share</span>
            </a>
          )}

          <FacebookShareButton url={currentUrl}>
            <a
              class="ease mb-1 mr-1 inline-flex items-center rounded-full border-2 border-[#316FF6] bg-[#316FF6] px-5 py-3 text-white transition duration-200 hover:border-[#316FF6] hover:bg-[#316ff6cc]"
              target="_blank"
              rel="noopener"
              aria-label="Share on Facebook"
            >
              <svg
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="h-6 w-6"
              >
                <title>Facebook</title>
                <path d="M379 22v75h-44c-36 0-42 17-42 41v54h84l-12 85h-72v217h-88V277h-72v-85h72v-62c0-72 45-112 109-112 31 0 58 3 65 4z"></path>
              </svg>
              <span class="ml-2">Facebook</span>
            </a>
          </FacebookShareButton>
          <TwitterShareButton url={currentUrl}>
            <a
              class="ease mb-1 mr-1 inline-flex items-center rounded-full border-2 border-blue-600 bg-[#1da1f2] px-5 py-3 text-white transition duration-200 hover:border-blue-500 hover:bg-blue-400"
              target="_blank"
              rel="noopener"
              aria-label="Share on Twitter"
            >
              <svg
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="h-6 w-6"
              >
                <title>Twitter</title>
                <path d="m459 152 1 13c0 139-106 299-299 299-59 0-115-17-161-47a217 217 0 0 0 156-44c-47-1-85-31-98-72l19 1c10 0 19-1 28-3-48-10-84-52-84-103v-2c14 8 30 13 47 14A105 105 0 0 1 36 67c51 64 129 106 216 110-2-8-2-16-2-24a105 105 0 0 1 181-72c24-4 47-13 67-25-8 24-25 45-46 58 21-3 41-8 60-17-14 21-32 40-53 55z"></path>
              </svg>
              <span class="ml-2">Twitter</span>
            </a>
          </TwitterShareButton>

          <WhatsappShareButton url={currentUrl}>
            <a
              class="ease mb-1 mr-1 inline-flex items-center rounded-full border-2 border-green-600 bg-green-500 px-5 py-3 text-white transition duration-200 hover:border-green-700 hover:bg-green-400"
              target="_blank"
              rel="noopener"
              aria-label="Share on Whatsapp"
              draggable="false"
            >
              <svg
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="h-6 w-6"
              >
                <title>Whatsapp</title>
                <path d="M413 97A222 222 0 0 0 64 365L31 480l118-31a224 224 0 0 0 330-195c0-59-25-115-67-157zM256 439c-33 0-66-9-94-26l-7-4-70 18 19-68-4-7a185 185 0 0 1 287-229c34 36 56 82 55 131 1 102-84 185-186 185zm101-138c-5-3-33-17-38-18-5-2-9-3-12 2l-18 22c-3 4-6 4-12 2-32-17-54-30-75-66-6-10 5-10 16-31 2-4 1-7-1-10l-17-41c-4-10-9-9-12-9h-11c-4 0-9 1-15 7-5 5-19 19-19 46s20 54 23 57c2 4 39 60 94 84 36 15 49 17 67 14 11-2 33-14 37-27s5-24 4-26c-2-2-5-4-11-6z"></path>
              </svg>
              <span class="ml-2">Whatsapp</span>
            </a>
          </WhatsappShareButton>
        </div>
      </div>
    </>
  );
}
