import React from "react";
import bg from "../assets/bg.jpg";
import arrows from "../assets/arrows.png";
function Hero() {
  return (
    <div className="w-screen mx-auto text-white">
      <img className="h-[100vh] w-full object-cover" src={bg} alt="" />
      <div className="absolute left-0 right-0 top-[20%] text-center px-[50px]">
        <h1 className="py-6 text-4xl font-base md:text-5xl">Design your day</h1>
        <p className="text-[19px] font-extralight">
          Edo Agenda is your personal workspace that helps you organize your
          <br /> day and free your creative side.
        </p>
      </div>

      <div className="absolute text-center left-0 right-0 bottom-[3%] cursor-pointer">
        <p className="text-[11px] tracking-wide pb-7">
          Scroll down or use arrow keys
        </p>
        <a href="#mock">
          <img
            className="mx-auto opacity-50 h-7 animate-bounce "
            src={arrows}
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Hero;
