import React from "react";
import closeMenu from "../assets/close-icon.svg";
function Sidenav({ isMenuToggle, handleMenu }) {
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
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact"> Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidenav;
