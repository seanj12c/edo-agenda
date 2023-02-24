import React from "react";
import bg from "../assets/bg.jpg";
import arrows from "../assets/arrows.png";
function Hero() {
  return (
    <div className="w-screen mx-auto text-white">
      <img className="h-[100vh] w-full object-cover" src={bg} alt="" />
      <div className="absolute left-0 right-0 top-[20%] text-center px-[50px]">
        <h1 className="py-6 text-2xl sm:text-4xl font-base md:text-5xl">
          Design your day
        </h1>
        <p className="sm:text-[19px] text-[12px] font-extralight">
          Edo Agenda is your personal workspace that helps you organize your
          <br /> day and free your creative side.
        </p>
      </div>

      <div className="absolute text-center left-0 right-0 bottom-[3%] cursor-pointer">
        <p className="sm:text-[11px] text-[7px] tracking-wide sm:pb-7 pb-2">
          Scroll down or use arrow keys
        </p>
        <a href="#mock">
          <img
            className="h-4 mx-auto opacity-50 sm:h-7 animate-bounce "
            src={arrows}
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Hero;
