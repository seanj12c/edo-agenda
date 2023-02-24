import React from "react";
import android from "../assets/get-android.png";
import iphone from "../assets/get-iphone.png";
import web from "../assets/get-web-app.png";
import mockup from "../assets/mac-with-app.png";

function Mockup() {
  return (
    <div id="mock" className="w-screen mx-auto py-[130px] px-6">
      <div className="justify-center gap-3 md:flex">
        <div>
          <img className="md:w-[190px] w-[190px] mx-auto" src={web} alt="" />
        </div>
        <div>
          <img
            className="md:w-[190px] w-[190px] mx-auto"
            src={android}
            alt=""
          />
        </div>
        <div>
          <img className="md:w-[190px] w-[190px] mx-auto" src={iphone} alt="" />
        </div>
      </div>

      <div className="py-[90px]">
        <p className="md:text-[28px] text-center text-[19px] tracking-wide px-2">
          The smart agenda for freelancers, creatives and people who do great
          work.
          <br /> Organize your day and free your creative side.
        </p>
      </div>
      <div className="">
        <img
          className="max-w-[920px] w-full mx-auto object-contain"
          src={mockup}
          alt=""
        />
      </div>
    </div>
  );
}

export default Mockup;
