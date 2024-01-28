import React from "react";
import { FaDotCircle } from "react-icons/fa";
import { FormatDate } from "../../../Contexts/Date/FormatDate";
export default function Hero({ date, title, category, imageURL }) {
  return (
    <>
      <div className="relative mx-auto mb-4   w-full  md:mb-0">
        <div className="absolute bottom-0 left-0 h-full w-full"></div>
        <div className="bottom-0  left-0 py-4">
          <a
            href="#"
            className="mb-2 inline-flex items-center justify-center bg-black px-4 py-1 font-HankenGrotesk text-gray-200"
          >
            {category}
          </a>
          <h2 className="text-center font-Gamiliademo text-4xl font-semibold leading-tight text-gray-800 max-md:mx-2 max-md:text-2xl">
            {title}
          </h2>
          <h1 className="my-5 flex justify-center text-center font-CooperHevitt text-base font-normal">
            <span>by Shikha Gautam</span>
            <span className="mx-2 opacity-50">•</span>
            <span>{FormatDate(date)}</span>
          </h1>
        </div>
        <img
          loading="lazy"
          src={imageURL}
          className="h-full max-h-[500px] w-full object-cover"
        />
      </div>
    </>
  );
}
