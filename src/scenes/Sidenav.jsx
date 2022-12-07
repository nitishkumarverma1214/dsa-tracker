import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import closeMenu from "../assets/close-icon.svg";
import { LoginContext } from "../App";
function Sidenav({ isMenuToggle, handleMenu }) {
  const loginContext = useContext(LoginContext);
  return (
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
          <img src={closeMenu} alt="close-icon" className="h-[40px] w-[40px]" />
        </div>
        <ul
          className="flex flex-col items-center gap-5 px-4 mx-4 font-semibold"
          onClick={handleMenu}
        >
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
      </div>
    </div>
  );
}

export default Sidenav;
