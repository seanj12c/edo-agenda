import React from "react";
import logo from "../assets/logo.png";
import logoblack from "../assets/logo_black.png";
import { useState } from "react";

const Navbar = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 600) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  return (
    <div className="mx-auto">
      <nav
        className={`${
          fix ? "bg-gray-50 opacity-95" : ""
        } fixed z-50 flex md:justify-between justify-center w-full mx-auto p-7 transition-colors duration-150`}
      >
        <img className="w-[100px]" src={!fix ? logo : logoblack} alt="" />
        <button className="hidden md:block text-white border-2 border-[#bc5149] py-2 px-7 bg-[#dc665d] text-[9px] tracking-widest">
          LOGIN
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
