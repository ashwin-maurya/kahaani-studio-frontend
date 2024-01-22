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
        className="sidenav bg-Opacitywhite fixed z-[99] h-[100vh] w-screen select-none overflow-hidden  bg-[#ffffff48] backdrop-blur-md transition-all delay-75 duration-200 ease-in-out"
      >
        <div className="dark:bg-darkBgMain flex h-full  w-full select-none flex-col items-center justify-start overflow-hidden shadow-lg">
          <div className="mt-24 flex w-auto">
            <ul className="flex flex-1 flex-col items-center gap-8">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className={`relative cursor-pointer px-2 font-CooperHevitt text-lg font-normal uppercase`}
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
