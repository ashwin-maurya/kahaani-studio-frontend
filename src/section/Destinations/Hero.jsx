import React from "react";

export default function Hero() {
  return (
    <>
      <div className="mx-auto w-full space-y-4 px-40 py-20 text-center">
        <p className="tracki font-CooperHevitt text-lg font-semibold uppercase">
          #TailwindCSS
        </p>
        <h1 className="font-Gamiliademo text-4xl font-bold md:text-5xl">
          Interdum et malesuada fames ac ante ipsum primis in faucibus?
        </h1>
        <p className="text-base text-black">
          by
          <a
            rel="noopener noreferrer"
            href="#"
            target="_blank"
            className="text-black underline"
          >
            <span itemprop="name"> Shikha Gautam</span>
          </a>
        </p>
      </div>
    </>
  );
}
