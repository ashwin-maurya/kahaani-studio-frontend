import React from "react";

export default function GalleryHero() {
  return (
    <>
      <div
        className="relative min-h-72 bg-gray-800 bg-cover bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1533850595620-7b1711221751?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D")',
        }}
      >
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="-mb-1 w-full text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="mx-auto px-4 py-16 mix-blend-difference sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl sm:text-center md:max-w-2xl">
            <p className="mb-6 font-Gamiliademo text-3xl text-indigo-100 ">
              “When people look at my pictures I want them to feel the way they
              do when they want to read a line of a poem twice.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
