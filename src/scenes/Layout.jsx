import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="bg-black h-full grid-rows-[7rem_3fr_5rem] w-full grid text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
