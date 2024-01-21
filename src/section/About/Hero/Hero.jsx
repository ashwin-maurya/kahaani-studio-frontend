import React from "react";

export default function Hero() {
  return (
    <>
      <div
        className="relative bg-purple-400 min-h-72 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            'url("https://wallpaperaccess.com/full/4667183.jpg")',
        }}
      >
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mix-blend-difference">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <p className="mb-6 text-3xl text-indigo-100 font-Gamiliademo ">
              “About me there are no limitations.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
