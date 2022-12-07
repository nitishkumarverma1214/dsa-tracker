import React from "react";
import UseMediaQuery from "../hooks/useMediaQuery";
import menu from "../assets/menu-icon.svg";

import { useEffect } from "react";
import Sidenav from "./Sidenav";
import { useReducer } from "react";
import navReducer from "../reducers/navReducer";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../App";

function Navbar() {
  const loginContext = useContext(LoginContext);
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
        <Link to="/">
          <div className="brand-logo font-extrabold p-8 text-3xl cursor-pointer">
            DSA <span className="text-blue">Tracker</span>
          </div>
        </Link>
        {isMediumScreen ? (
          // Navbar for Medium Screen
          <ul className="flex items-center gap-10 px-4 mx-4 font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "text-golden-yellow" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isActive ? "text-golden-yellow" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isActive ? "text-golden-yellow" : ""
                }
              >
                Contact
              </NavLink>
            </li>
            {loginContext.isLoggedIn && (
              <li>
                <NavLink to="/" onClick={loginContext.logout}>
                  Logout
                </NavLink>
              </li>
            )}
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
