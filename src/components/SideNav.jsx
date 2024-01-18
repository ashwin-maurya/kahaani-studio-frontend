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
        className="backdrop-blur-sm fixed select-none w-screen sidenav bg-Opacitywhite h-[100vh] overflow-hidden  z-[99] transition-all ease-in-out delay-75 duration-200"
      >
        <div className="w-full flex justify-start  items-center select-none h-full bg-white shadow-lg overflow-hidden dark:bg-darkBgMain flex-col">
          <div className="flex w-auto mt-24">
            <ul className="flex-1 flex flex-col items-center gap-8">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className={`relative px-2 ${
                    (location.pathname === "/" && item.href === "/home") ||
                    location.pathname === item.href
                      ? "border-b-[1px] border-b-gray-600 "
                      : ""
                  }           
                             
                          ${showoption && item.label == "Work" && "ml-[84px]"}
                          `}
                  onClick={() => {
                    if (item.label === "Work") {
                      setshowoption(true);
                    }
                    if (item.label !== "Work") {
                      // setshowoption(true);
                      navigate(item.href);
                      setshowoption(false);
                    }
                  }}
                >
                  {/* <Link
                    to={item.href}
                   
                  > */}
                  <div className="font-CooperHevitt  text-lg max-sm:text-xl text-slate-gray ">
                    {item.label}
                    {showoption && item.label === "Work" && (
                      <div
                        className={` mt-4  text-[21px] space-y-3 py-0 flex top-[0px] w-32   flex-col   `}
                      >
                        <div
                          onClick={() => {
                            navigate("/Work/Non-Fiction");
                            setshowoption(false);
                          }}
                        >
                          Non-Fiction
                        </div>
                        <div
                          onClick={() => {
                            navigate("/Work/Fiction");
                            setshowoption(false);
                          }}
                        >
                          {" "}
                          Fiction
                        </div>
                      </div>
                    )}
                    {/* </Link> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
