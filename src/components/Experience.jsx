import React from "react";
import android from "../assets/get-android.png";
import iphone from "../assets/get-iphone.png";
import web from "../assets/get-web-app.png";
import logo from "../assets/logo_only_image.png";

function Experience() {
  return (
    <div className="w-screen h-screen mx-auto max-w-[1640px] text-center px-9">
      <div className="md:w-[650px] mx-auto">
        <h1 className="text-3xl py-9">Seamless experience</h1>
        <p className="py-2 text-lg font-extralight">
          Everything you create on Edo Agenda on your laptop is immediately
          saved in cloud and accessible from your mobile devices and vice-versa.
        </p>
        <p className="py-2 text-lg font-extralight">
          Everything you sketch, write or create on “Edo Agenda Paper” is
          quickly sent to the Edo Agenda app with a simple snap.
        </p>

        <div className="justify-center gap-3 py-3 md:flex">
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
            <img
              className="md:w-[190px] w-[190px] mx-auto"
              src={iphone}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="pt-[80px]">
        <img className="mx-auto h-[40px] object-cover " src={logo} alt="" />
      </div>

      <div className="flex justify-center md:gap-7 gap-5 pt-[130px] text-[#7E95F7] text-sm">
        <a href="https://www.facebook.com/myedo.io">Facebook</a>
        <a href="https://www.instagram.com/edo.io/">Instagram</a>
        <a href="mailto:team@edo.io?Subject=Request%20for%20Information">
          Contact Us
        </a>
        <a href="https://app.edo.io/privacy">Privacy</a>
      </div>

      <div className="text-xs pt-[150px] pb-12">
        <p>© 2017 edo.io srl</p>
      </div>
    </div>
  );
}

export default Experience;
