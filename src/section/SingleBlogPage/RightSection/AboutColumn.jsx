import React from "react";

export default function AboutColumn() {
  return (
    <>
      <div className="z-50 mt-5 flex h-full w-full  flex-col items-center justify-center">
        <h1 className="relative pb-5 text-left font-Oswald text-2xl font-semibold capitalize max-sm:pb-2">
          Shikha Gautam
        </h1>
        <div className="relative w-full cursor-pointer rounded-md">
          <img
            loading="lazy"
            className="w-full  max-w-[300px] bg-white bg-cover bg-center shadow-md"
            src="https://content.presspage.com/uploads/2338/1920_selfie-auf-der-reise-copypeopleimages.com-adobestock-493554509.jpeg?10000"
          ></img>
        </div>
        <div className="flex w-full max-w-[400px] flex-col max-md:mr-0 max-md:mt-10 max-md:max-w-full max-md:px-5">
          <p className="my-5 pb-5 font-CooperHevitt text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            laborum suscipit doloremque, expedita voluptatum maiores corporis
            modi assumenda esse consectetur error nulla, vero alias. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Esse consectetur error
            nulla, vero alias.
          </p>
        </div>
      </div>
    </>
  );
}
