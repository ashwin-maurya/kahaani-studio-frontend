import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "./HeroSlider";

export default function HeroAbout() {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://images.pexels.com/photos/1367179/pexels-photo-1367179.jpeg?auto=compress&cs=tinysrgb&w=1000"
  );
  const [place, setPlace] = useState("Ladakh");

  const handleSliderClick = (imageUrl, place) => {
    setBackgroundImage(imageUrl);
    setPlace(place);
  };

  return (
    <>
      <div className="relative h-screen max-h-[800px] text-white overflow-hidden bg-black">
        <div
          className="bg-bottom transition-all ease-in-out duration-500 bg-cover bg-no-repeat place-items-center h-full w-full opacity-100 bg-fixed"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
          }}
        >
          <div className="absolute max-w-[12vw] h-full z-10 pr-10 max-md:hidden pt-0 flex flex-col justify-center items-center text-center ">
            <div className="rotate-90">
              <div className="text-[8rem] 2xl:text-[10rem] max-xl:text-[7rem] max-lg:text-[5rem]  font-bold opacity-60 rotate-180">
                EXPLORE
              </div>
            </div>
          </div>

          <div className="absolute max-md:w-full flex flexror justify-center items-center right-0 bottom-0 ">
            <div className="max-w-[400px]  mix-blend-difference  max-md:max-w-full flex flex-col max-md:mt-10 w-full mr-10 max-md:mr-0 max-md:px-5  ">
              <h1 className="pb-5 max-sm:pb-2 antialiased font-semibold text-5xl relative font-Oswald capitalize">
                Shikha Gautam
              </h1>
              <p className="pb-5 text-xl font-CooperHevitt antialiased font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                laborum suscipit doloremque, expedita voluptatum maiores
                corporis modi assumenda esse consectetur error nulla, vero
                alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Esse consectetur error nulla, vero alias.
              </p>
            </div>
            <div className="relative cursor-pointer rounded-md">
              <img
                className="w-[400px] max-sm:w-[350px] h-[300px] m-2 bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://content.presspage.com/uploads/2338/1920_selfie-auf-der-reise-copypeopleimages.com-adobestock-493554509.jpeg?10000)`,
                }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
