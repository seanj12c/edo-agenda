import React from "react";
import android from "../assets/get-android.png";
import iphone from "../assets/get-iphone.png";
import web from "../assets/get-web-app.png";
import mockup from "../assets/mac-with-app.png";

function Mockup() {
  return (
    <div id="mock" className="max-w-[1640px] mx-auto py-[130px] px-6">
      <div className="flex justify-center gap-3">
        <img className="md:w-[190px] w-[140px]" src={web} alt="" />
        <img className="md:w-[190px] w-[140px]" src={android} alt="" />
        <img className="md:w-[190px] w-[140px]" src={iphone} alt="" />
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
