import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../HeroSlider";

export default function HeroAbout() {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://images.pexels.com/photos/1367179/pexels-photo-1367179.jpeg?auto=compress&cs=tinysrgb&w=1000",
  );
  const [place, setPlace] = useState("Ladakh");

  const handleSliderClick = (imageUrl, place) => {
    setBackgroundImage(imageUrl);
    setPlace(place);
  };

  return (
    <>
      <div className="relative h-screen max-h-[800px] overflow-hidden bg-black text-white">
        <div
          className="h-full w-full place-items-center bg-cover bg-fixed bg-bottom bg-no-repeat opacity-100 transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
          }}
        >
          <div className="absolute z-10 flex h-full max-w-[12vw] flex-col items-center justify-center pr-10 pt-0 text-center max-md:hidden ">
            <div className="rotate-90">
              <div className="rotate-180 font-sans text-[8rem] font-bold opacity-60 max-xl:text-[7rem] max-lg:text-[5rem] 2xl:text-[10rem]">
                EXPLORE
              </div>
            </div>
          </div>

          <div className="flexror absolute bottom-0 right-0 flex items-center justify-center max-md:w-full max-md:flex-col-reverse ">
            <div className="mr-10  flex  w-full max-w-[400px] flex-col  mix-blend-difference max-md:mr-0 max-md:mt-10 max-md:max-w-full max-md:px-5  ">
              <h1 className="relative pb-5 font-Oswald text-5xl font-semibold capitalize antialiased max-md:text-3xl max-sm:pb-2">
                Shikha Gautam
              </h1>
              <p className="pb-5 font-CooperHevitt text-xl font-bold antialiased max-md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                laborum suscipit doloremque, expedita voluptatum maiores
                corporis modi assumenda esse consectetur error nulla, vero
                alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Esse consectetur error nulla, vero alias.
              </p>
            </div>
            <div className="relative cursor-pointer rounded-md">
              <img
                loading="lazy"
                className="m-2 h-[300px] w-[400px] bg-cover bg-center max-sm:w-[350px]"
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
