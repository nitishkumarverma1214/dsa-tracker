import React from "react";
import { useState } from "react";
import UseMediaQuery from "../hooks/useMediaQuery";
import menu from "../assets/menu-icon.svg";
import closeMenu from "../assets/close-icon.svg";
import { useEffect } from "react";

function Navbar() {
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const isMediumScreen = UseMediaQuery("(min-width:768px)");
  const [isScreenTop, setIsScreenTop] = useState(true);

  const listenScroll = () => {
    if (window.scrollY !== 0) {
      setIsScreenTop(false);
    }
    if (window.scrollY === 0) {
      setIsScreenTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);

    return () => window.removeEventListener("scroll", listenScroll);
  }, [isScreenTop]);

  const handleMenu = () => {
    setIsMenuToggle(!isMenuToggle);
  };

  return (
    <>
      <div
        className={`border-b-white border-b-2 flex justify-between items-center sticky top-0 h-28 w-full z-10 font-heebo ${
          window.scrollY !== 0 ? "bg-dark-grey" : "bg-none"
        }`}
      >
        {/* Brand Logo  */}
        <div className="brand-logo font-extrabold p-8 text-3xl ">
          DSA <span className="text-blue">Tracker</span>
        </div>

        {isMediumScreen ? (
          // Navbar for Medium Screen
          <ul className="flex items-center gap-10 px-4 mx-4 font-semibold">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact"> Contact Us</a>
            </li>
          </ul>
        ) : (
          // Navbar for small screen
          <div className="h-[40px] w-[40px] my-auto mx-4  p-2">
            <button onClick={handleMenu}>
              <img src={menu} alt="menu-icon" className="h-full w-full" />
            </button>
          </div>
        )}
      </div>
      {/* Sidenav for small screen */}
      <div
        className={`fixed z-20 transition-transform ease-linear duration-1000 h-full w-full translate-x-full ${
          isMenuToggle ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div
          className="backdrop w-full h-full bg-light-gray fixed z-1"
          onClick={handleMenu}
        ></div>
        <div className="h-full w-2/3 fixed z-20 bg-blue right-0 flex flex-col">
          <div className="ml-auto p-4 mb-4" onClick={handleMenu}>
            <img
              src={closeMenu}
              alt="close-icon"
              className="h-[40px] w-[40px]"
            />
          </div>
          <ul
            className="flex flex-col items-center gap-5 px-4 mx-4 font-semibold"
            onClick={handleMenu}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact"> Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
