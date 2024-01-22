import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "./constants";
import SideNav from "./SideNav";
import { FaBars, FaTimes } from "react-icons/fa";
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
        className={`fixed top-0 z-[100] w-full select-none  border-white ${
          isScrolled &&
          (location.pathname === "/" || location.pathname === "/home")
            ? "mix-blend-difference"
            : "bg-stone-50"
        }`}
      >
        <nav
          className={`top-0 flex w-full flex-row items-center justify-end px-10 py-5 text-white  max-md:flex-row max-md:justify-between max-md:px-0 max-md:py-2`}
        >
          <Link
            to="/"
            className="cursor-pointer font-Authorfont text-2xl text-white mix-blend-difference  max-md:ml-5"
          >
            Kahaani Studio
          </Link>
          <div className="absolute flex w-[100%] items-center justify-center text-[#ffffff] mix-blend-difference max-sm:mt-0 2xl:mb-2">
            <ul className="flex w-full flex-1 items-center justify-center gap-8 max-md:hidden">
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
          <div className="hidden outline-none max-md:block" onClick={NavStatus}>
            <div className="group relative outline-none hover:bg-transparent">
              <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full text-3xl mix-blend-difference transition-all  duration-200 ">
                {showNav ? <FaTimes /> : <FaBars />}
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
