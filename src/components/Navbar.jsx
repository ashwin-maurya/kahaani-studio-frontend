import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "./constants";
import SideNav from "./SideNav";
import { FaBars, FaTimes } from "react-icons/fa";
import SearchBar from "./Search/SearchBar";
const Navbar = () => {
  const location = useLocation();
  const [showNav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const navbarRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");

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
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const navbarHeight = navbarRef.current.clientHeight;
    if (scrollDirection === "up") {
      navbarRef.current.style.top = "0";
    } else {
      navbarRef.current.style.top = `-${navbarHeight + 1}px`;
    }
  }, [scrollDirection]);

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
        ref={navbarRef}
        className={`${location.pathname.includes("/admin") ? "hidden" : ""} fixed top-0 z-[100] w-full select-none border-white transition-all duration-300  ease-in-out ${
          isScrolled &&
          (location.pathname === "/" || location.pathname === "/home")
            ? "mix-blen-difference"
            : "bg-stone-50/75 backdrop-blur-md"
        }`}
      >
        <nav
          className={`top-0 flex w-full flex-row items-center justify-between px-6 py-3 max-md:flex-row max-md:justify-between max-md:px-4 max-md:py-2`}
        >
          <div className="w-60 max-sm:w-auto">
            <SearchBar scrollDirection={scrollDirection} />
          </div>

          <div className=" mx-auto flex w-auto items-center justify-center  max-sm:mt-0 2xl:mb-2">
            <span className="flex w-auto flex-1 items-center justify-center gap-2 max-md:hidden">
              {navLinks.map((item) => (
                <span
                  key={item.label}
                  className={`relative cursor-pointer list-none font-CooperHevitt text-xl font-normal  `}
                >
                  <Link
                    to={item.href}
                    className={` rounded-sm px-5 text-black transition-all duration-150 ease-in-out ${
                      (location.pathname === "/" && item.href === "/home") ||
                      location.pathname.includes(item.href)
                        ? "bg-gray-600 text-white "
                        : "hover:bg-[#e1e1e1a5]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
            </span>
          </div>
          <Link
            to="/"
            className="cursor-pointer font-Authorfont text-3xl text-white mix-blend-difference max-md:ml-5  max-md:pr-7"
          >
            <span className="max-md:hidden">Kahaani Studio</span>
            <span className=" hidden max-md:block max-md:text-4xl">KS</span>
          </Link>
          <div className="hidden outline-none max-md:block" onClick={NavStatus}>
            <div className="group relative outline-none hover:bg-transparent">
              <div className="relative flex transform items-center justify-center overflow-hidden text-4xl font-thin text-white  mix-blend-difference transition-all duration-200">
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
