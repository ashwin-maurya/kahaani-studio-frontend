import React from "react";

export default function Hero() {
  return (
    <>
      <div class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-96">
        <div
          class="absolute left-0 bottom-0 w-full h-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
          }}
        ></div>
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          class="absolute left-0 top-0 w-full h-full z-0 object-cover"
        />
        <div class="p-4 absolute bottom-0 left-0 z-20">
          <a
            href="#"
            class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
          >
            Nutrition
          </a>
          <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
            Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales,
            massa et auctor.
          </h2>
        </div>
      </div>
    </>
  );
}
