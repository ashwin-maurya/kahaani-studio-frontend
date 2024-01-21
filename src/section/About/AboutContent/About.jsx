import React from "react";

export default function About() {
  return (
    <>
      <div className="flex w-full h-full max-md:flex-col justify-center items-center  flex-row-reverse  background">
        <div className="relative cursor-pointer rounded-md">
          <img
            loading="lazy"
            className="w-[500px] max-sm:w-[350px] h-[400px] m-2 shadow-md bg-cover bg-center bg-white"
            style={{
              backgroundImage: `url(https://content.presspage.com/uploads/2338/1920_selfie-auf-der-reise-copypeopleimages.com-adobestock-493554509.jpeg?10000)`,
            }}
          ></img>
        </div>
        <div className="max-w-[400px] max-md:max-w-full flex flex-col max-md:mt-10 w-full mr-28 max-md:mr-0 max-md:px-5">
          <h1 className="pb-5 max-sm:pb-2 font-semibold text-5xl relative font-Oswald capitalize">
            Shikha Gautam
          </h1>
          <p className="pb-5 text-lg font-CooperHevitt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            laborum suscipit doloremque, expedita voluptatum maiores corporis
            modi assumenda esse consectetur error nulla, vero alias. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Esse consectetur error
            nulla, vero alias.
          </p>
          <span className="font-Minerva cursor-pointer font-semibold text-base">
            #content curation #art direction #copywriting #web design
            #interaction design #webflow development
          </span>
        </div>
      </div>
    </>
  );
}
