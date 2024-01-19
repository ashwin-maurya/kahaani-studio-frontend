import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  const handleSliderClick = (imageUrl) => {
    setBackgroundImage(imageUrl);
    // Do something with the selected image URL, such as changing the background
    console.log("Selected Image:", imageUrl);
  };

  return (
    <>
      <div className="relative h-screen max-h-[800px] text-white overflow-hidden bg-black">
        <div
          className="bg-top transition-all ease-in-out duration-500 bg-cover bg-no-repeat place-items-center h-full w-full opacity-90 absolute top-0 left-0 bg-fixed"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
          }}
        >
          <div className="relative max-w-[12vw] h-full z-10 pr-10 pt-0 flex flex-col justify-center items-center text-center ">
            <div className="rotate-90">
              <div className="text-[8rem] font-bold opacity-60 rotate-180">
                EXPLORE
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0">
            <HeroSlider onSliderClick={handleSliderClick} />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
