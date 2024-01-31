import React from "react";

export default function HomeAbout() {
  return (
    <>
      <div className="background flex h-full w-full flex-row-reverse items-center  justify-center  max-md:flex-col">
        <div className="relative cursor-pointer rounded-md">
          <img
            loading="lazy"
            className="m-2 h-[400px] w-[500px] bg-white bg-cover bg-center shadow-md max-sm:w-[350px]"
            style={{
              backgroundImage: `url(https://content.presspage.com/uploads/2338/1920_selfie-auf-der-reise-copypeopleimages.com-adobestock-493554509.jpeg?10000)`,
            }}
          ></img>
        </div>
        <div className="mr-28 flex w-full max-w-[500px] flex-col max-md:mr-0 max-md:mt-10 max-md:max-w-full max-md:px-5">
          <h1 className="relative pb-5 font-Oswald text-5xl font-semibold capitalize max-sm:pb-2">
            Shikha Gautam
          </h1>
          <p className="pb-5 font-HankenGrotesk text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            laborum suscipit doloremque, expedita voluptatum maiores corporis
            modi assumenda esse consectetur error nulla.
          </p>
          <p className="pb-5 font-HankenGrotesk text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            laborum suscipit doloremque, expedita voluptatum maiores corporis
            modi assumenda esse consectetur error nulla, vero alias. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Esse consectetur error
            nulla, vero alias.
          </p>
          <span className="font-Minerva cursor-pointer text-lg font-semibold">
            #content curation #art direction #copywriting #web design
            #interaction design #webflow development
          </span>
        </div>
      </div>
    </>
  );
}
