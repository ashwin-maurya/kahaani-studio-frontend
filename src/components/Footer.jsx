import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="mt-5 border-t-[1px] bg-white invert">
        <div className=" w-full px-20  py-10 max-lg:px-5 max-lg:py-2">
          <div className="mb-10 flex max-lg:flex-col">
            <div className="flex w-[60%] gap-20 max-lg:my-5 max-lg:mb-10 max-lg:w-full">
              <ul className="font-medium capitalize text-gray-800">
                <h4 className="mb-4 font-sans">Popular destinations</h4>
                <li className="mb-4 list-none font-sans text-black">
                  <Link to="/" className="text-black hover:underline">
                    Ladakh
                  </Link>
                </li>
                <li className="mb-4 list-none font-sans text-black">
                  <Link to="/" className="text-black hover:underline">
                    Tokyo
                  </Link>
                </li>
                <li className="list-none font-sans text-black ">
                  <Link to="/" className="text-black hover:underline">
                    Iceland
                  </Link>
                </li>
              </ul>
              <ul className="font-medium capitalize text-gray-800">
                <h4 className="mb-4 font-sans">More Blogs</h4>
                <li className="mb-4 list-none font-sans text-black">
                  <Link to="/" className="text-black hover:underline">
                    Road trips to plan
                  </Link>
                </li>
                <li className="mb-4 list-none font-sans text-black">
                  <Link to="/" className="text-black hover:underline">
                    My Travel Camera Gear
                  </Link>
                </li>
                <li className="list-none font-sans text-black ">
                  <Link to="/" className="text-black hover:underline">
                    Affordable Travel Insurance
                  </Link>
                </li>
              </ul>
            </div>

            <div className="grid w-[40%] grid-cols-2 gap-8 font-montserrat max-lg:w-full sm:grid-cols-3  sm:gap-6 2xl:text-lg">
              <ul className="font-medium capitalize text-gray-600">
                <li className="mb-4 list-none font-sans text-black">
                  <Link to="/" className="text-black hover:underline">
                    Blogs
                  </Link>
                </li>
                <li className="mb-4 list-none font-sans text-black">
                  <Link to="/" className="text-black hover:underline">
                    hotels
                  </Link>
                </li>
                <li className="list-none font-sans text-black ">
                  <Link to="/" className="text-black hover:underline">
                    cinema
                  </Link>
                </li>
              </ul>
              <ul className="font-medium  text-gray-600">
                <li className="mb-4 list-none font-sans text-black">
                  <Link to="/" className="text-black hover:underline ">
                    Books
                  </Link>
                </li>
                <li className="mb-4 list-none font-sans text-black">
                  <Link to="/" className="text-black hover:underline">
                    Mythology
                  </Link>
                </li>
                <li className="list-none font-sans text-black ">
                  <Link to="/" className="text-black hover:underline">
                    lifestyle
                  </Link>
                </li>
              </ul>

              <ul className="font-medium  text-gray-600">
                <li className="mb-4 list-none font-sans text-black">
                  <Link to="/" className="text-black hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="list-none font-sans text-black ">
                  <Link to="/" className="text-black hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4 border-gray-200 " />
          <div className="flex items-center justify-between">
            <span className="font-montserrat text-sm text-gray-900 sm:text-center  2xl:text-xl">
              <Link
                to="/"
                className="mr-1 font-Authorfont text-base text-black hover:underline 2xl:text-2xl"
              >
                Kahaani Studio
              </Link>
              © 2024{" "}
            </span>
            <div className="flex space-x-5 text-xl sm:mt-0 sm:justify-center 2xl:text-2xl"></div>
          </div>
        </div>
      </footer>
    </>
  );
}
