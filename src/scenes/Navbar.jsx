import React from "react";
import UseMediaQuery from "../hooks/useMediaQuery";
import menu from "../assets/menu-icon.svg";

import { useEffect } from "react";
import Sidenav from "./Sidenav";
import { useReducer } from "react";
import navReducer from "../reducers/navReducer";

function Navbar() {
  const isMediumScreen = UseMediaQuery("(min-width:768px)");

  const initialNavState = {
    isMenuToggle: false,
    isScreenTop: true,
  };

  const [navState, dispatch] = useReducer(navReducer, initialNavState);

  const listenScroll = () => {
    dispatch({
      type: "scroll",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);

    return () => window.removeEventListener("scroll", listenScroll);
  }, [navState.isScreenTop]);

  const handleMenu = () => {
    dispatch({
      type: "toggle",
    });
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
          // Navbar for small screen --- hamberger button
          <div className="h-[40px] w-[40px] my-auto mx-4  p-2">
            <button onClick={handleMenu}>
              <img src={menu} alt="menu-icon" className="h-full w-full" />
            </button>
          </div>
        )}
      </div>
      {/* Sidenav for small screen */}
      <Sidenav isMenuToggle={navState.isMenuToggle} handleMenu={handleMenu} />
    </>
  );
}

export default Navbar;
