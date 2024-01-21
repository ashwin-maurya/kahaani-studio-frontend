import React from "react";
import Newsletter from "./Newsletter";
export default function NewsletterHero() {
  return (
    <>
      <div className="relative bg-purple-400 min-h-72 bg-cover bg-center bg-no-repeat bg-fixed">
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
        <div className="px-4 mx-auto md:max-w-full py-1 pt-12">
          <Newsletter />
        </div>
      </div>
    </>
  );
}
