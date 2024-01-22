import React from "react";
import { FaDotCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <div class="relative mx-auto mb-4   w-full  md:mb-0">
        <div class="absolute bottom-0 left-0 h-full w-full"></div>
        <div class="bottom-0  left-0 py-4">
          <a
            href="#"
            class="font-HankenGrotesk mb-2 inline-flex items-center justify-center bg-black px-4 py-1 text-gray-200"
          >
            Nutrition
          </a>
          <h2 class="text-center font-Gamiliademo text-4xl font-semibold leading-tight text-gray-800 max-md:text-2xl">
            Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales,
            massa et auctor.
          </h2>
          <h1 className="my-5 flex justify-center text-center font-CooperHevitt text-base font-normal">
            <span>by Shikha Gautam</span>
            <span className="mx-2 opacity-50">•</span>
            <span>20th January, 2023</span>
          </h1>
        </div>
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          class="h-full max-h-[500px] w-full object-cover"
        />
      </div>
    </>
  );
}
