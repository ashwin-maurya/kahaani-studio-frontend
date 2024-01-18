import React from "react";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <>
      <div className="relative h-screen max-h-[800px]  text-white overflow-hidden bg-black">
        <div
          className="bg-bottom bg-cover bg-no-repeat place-items-center h-full w-full opacity-90 absolute top-0 left-0"
          style={{
            backgroundImage: `url("https://c1.wallpaperflare.com/preview/913/472/869/valley-person-standing-edge.jpg")`,
          }}
        >
          <div className="relative max-w-[12vw] h-full z-10 pr-10 pt-0 flex flex-col justify-center items-center text-center ">
            <div className="rotate-90">
              <div className="text-[8rem] font-bold opacity-60 rotate-180">
                EXPLORE
              </div>
            </div>
          </div>
          {/* <div className="absolute max-w-[40vw] right-0 bottom-0 z-10 pr-10 pb-5 flex flex-col justify-center items-right pt-20 text-right ">
            <h1 className="text-5xl 2xl:text-3xl mt-5 2xl:mt-10 max-sm:text-3xl font-bold leading-tight mb-2 font-VulturaRegular max-sm:mt-16 ">
              Shikha Gautam
            </h1>
            <p className="text-xl 2xl:text-3xl font-extralight max-sm:text-lg text-gray-100 mb-4 font-CooperHevitt  tracking-wider ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
              velit laborum. Nobis quod, fuga quae harum, non recusandae
              voluptates animi aliquam eveniet, dignissimos molestiae cum
              fugiat! voluptates atque consequuntur eligendi dolor consequatur
              debitis qui ut, architecto quibusdam ad non.
            </p>
          </div> */}
        </div>
      </div>
      <div></div>
    </>
  );
}
