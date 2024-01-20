import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogsicles = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor",
    cover: "https://source.unsplash.com/random/240x320",
    date: "2024-01-18", // Replace with the actual date
  },
  {
    id: 2,
    title: "Amet Consectetur",
    cover: "https://source.unsplash.com/random/240x320",
    date: "2024-01-19", // Replace with the actual date
  },
  {
    id: 3,
    title: "Adipiscing Elit",
    cover: "https://source.unsplash.com/random/240x320",
    date: "2024-01-20", // Replace with the actual date
  },
];

export default function BlogCards() {
  return (
    <>
      <div className="mt-40 px-12 max-md:px-0 max-sm:mt-20">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="max-sm:tracking-[6px] max-sm:text-[20px] tracking-[6px] font-semibold text-[40px] text-gray-900 font-Oswald textce uppercase">
            New blogs
          </h2>
        </div>
        <div className="flex justify-center items-center 2xl:gap-10 max-md:gap-0   flex-wrap max-md:flex-col w-full">
          <div className="flex justify-center flex-row 2xl:gap-10 max-md:gap-0 w-full  flex-wrap max-md:flex-col ">
            {blogsicles.map((blogs) => (
              <div
                key={blogs.id}
                className="flex flex-col m-0 max-sm:justify-center max-sm:items-center max-md:flex-row max-sm:pb-5 max-md:px-2 w-full"
              >
                <img
                  alt="blogs"
                  src={blogs?.cover}
                  className="h-64 w-64 max-md:w-50 max-md:h-50 max-sm:w-50 max-sm:h-32 object-cover"
                />
                <div className="w-full max-md:ml-4">
                  <h3 className="mt-4 max-md:mt-0 text-lg 2xl:text-2xl max-md:text-base max-sm:text-lg text-black font-TimesNewRoman tracking-wider cursor-pointer hover:underline underline-offset-4 ">
                    {blogs?.title}
                  </h3>
                  <div className="flex gap-2 items-center mt-2 max-md:flex-col max-md:items-start">
                    <h3 className=" text-sm text-gray-800 2xl:text-lg max-sm:text-[12px] font-CooperHevitt tracking-wider">
                      {blogs.date}
                    </h3>
                  </div>
                  <div className="max-md:hidden max-sm:p-1 my-4 max-md:mt-4 max-md:m-2 max-md:max-w-[150px]  w-auto max-w-[200px] flex justify-center items-center flex-row text-black  text-sm 2xl:text-lg  border-[1px] p-2   max-sm:text-[14px]   border-black">
                    READ NOW
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/Work/Non-Fiction"
            className="h-full flex font-extralight justify-center items-center px-4 py-1 rounded-full border-2 border-black max-sm:mt-5"
          >
            <span className="text-xl max-sm:text-base mr-2">More</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
}
