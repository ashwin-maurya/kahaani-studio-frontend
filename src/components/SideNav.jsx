import React, { useRef, useState } from "react";
import { navLinks } from "./constants";
import { Link, useNavigate } from "react-router-dom";

export default function SideNav(props) {
  const { NavStatus } = props;
  const [showoption, setshowoption] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        id="mySidenav"
        className="backdrop-blur-sm fixed select-none w-screen sidenav bg-Opacitywhite h-[100vh] overflow-hidden  z-[99] transition-all ease-in-out delay-75 duration-200 bg-[#ffffff7e]"
      >
        <div className="w-full flex justify-start  items-center select-none h-full shadow-lg overflow-hidden dark:bg-darkBgMain flex-col">
          <div className="flex w-auto mt-24">
            <ul className="flex-1 flex flex-col items-center gap-8">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className={`relative px-2 font-CooperHevitt uppercase font-normal text-lg cursor-pointer`}
                >
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
