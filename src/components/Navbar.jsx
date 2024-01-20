import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "./constants";
import SideNav from "./SideNav";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const location = useLocation();
  const [showNav, setNav] = useState(false);
  const [currentLoc, setcurrentLoc] = useState("");
  const [showoption, setshowoption] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setNav(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 300) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNav]);

  const NavStatus = () => {
    setNav((prevNav) => !prevNav);
  };

  return (
    <>
      {showNav && <SideNav NavStatus={NavStatus}></SideNav>}
      <section
        id="navbar"
        className={`fixed w-full border-white top-0 select-none transition-all ease-in-out duration-700 z-[100] ${
          isScrolled &&
          (location.pathname === "/" || location.pathname === "/home")
            ? "mix-blend-difference"
            : "bg-stone-50"
        }`}
      >
        <nav
          className={`text-white flex flex-row justify-end px-10 max-md:px-0 top-0 max-md:flex-row max-md:justify-between  items-center w-full py-5 max-md:py-2`}
        >
          <Link
            to="/"
            className="text-white max-md:ml-5 cursor-pointer mix-blend-difference text-2xl  font-Authorfont"
          >
            Kahaani Studio
          </Link>
          <div className="flex absolute items-center w-[100%] justify-center max-sm:mt-0 2xl:mb-2 mix-blend-difference text-[#ffffff]">
            <ul className="flex-1 flex w-full justify-center items-center gap-8 max-md:hidden">
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
          <div className="hidden max-md:block outline-none" onClick={NavStatus}>
            <div className="relative group outline-none hover:bg-transparent">
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200 text-2xl  mix-blend-difference ">
                <FaBars />
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
