import React from "react";
import webimage from "../assets/web-image.jpg";
import mobileimage from "../assets/mobile-image.jpg";
import paperimage from "../assets/paper-image.jpg";
import android from "../assets/get-android.png";
import iphone from "../assets/get-iphone.png";
import web from "../assets/get-web-app.png";
import paper from "../assets/get-paper.png";

function EdoImages() {
  return (
    <div className="w-screen mx-auto py-[60px]">
      <div className="w-[80%] mx-auto content-center text-center left-0 right-0">
        <h1 className="text-[30px] font-thin pb-2">
          Fill your days with inspiration
        </h1>
        <hr />
        <p className="text-[25px] pt-2">from any device</p>
      </div>

      <div className="pt-[120px] lg:text-left text-center lg:flex">
        <div className="lg:w-[50%]">
          <img className="object-cover w-full " src={webimage} alt="" />
        </div>
        <div className="py-[55px] lg:w-[50%] w-[80%] mx-auto lg:my-auto lg:px-[60px]">
          <h1 className="lg:text-[25px] text-[21px] pb-5">
            Edo Agenda<span className="text-[#dc665d]"> Web</span>
          </h1>
          <p className="lg:text-[16px] lg:tracking-wide text-[18px] pb-[40px]">
            In the office, at home or in a café bar, open Edo Agenda on your
            laptop and take your time to plan your day and free your creative
            soul.
          </p>
          <img
            className="lg:h-[70px] h-[50px] lg:mx-0 mx-auto"
            src={web}
            alt=""
          />
        </div>
      </div>

      <div className="text-center lg:text-left lg:flex lg:flex-row-reverse">
        <div className="lg:w-[50%]">
          <img
            className="h-[400px] w-full lg:h-[600px] lg:w-[759px] object-cover"
            src={mobileimage}
            alt=""
          />
        </div>
        <div className="py-[55px] lg:w-[50%] w-[80%] mx-auto lg:my-auto lg:px-[60px]">
          <h1 className="lg:text-[25px] text-[21px] pb-5 lg:text-right">
            Edo Agenda<span className="text-[#22AE43]"> Mobile</span>
          </h1>
          <p className="lg:text-[16px] lg:tracking-wide text-[18px] pb-[40px]">
            The best ideas often come on the go. If you're travelling for work
            or if you're just enjoying your long-awaited trip, use Edo Agenda to
            write a list of things to do or simply as a journal.
          </p>
          <div className="flex lg:justify-end justify-center lg:px-[10px] mx-auto gap-5">
            <div>
              <img
                className="lg:h-[70px] lg:mx-0 h-[50px] mx-auto"
                src={android}
                alt=""
              />
            </div>
            <div>
              <img
                className="lg:h-[70px] lg:mx-0 h-[50px] mx-auto"
                src={iphone}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center lg:text-left lg:flex">
        <div className="lg:w-[50%]">
          <img
            className="object-contain w-full h-full "
            src={paperimage}
            alt=""
          />
        </div>
        <div className="py-[55px] lg:w-[50%] w-[80%] mx-auto lg:my-auto lg:px-[60px] lg:py-0">
          <h1 className="lg:text-[25px] text-[21px] pb-5">
            Edo Agenda<span className="text-[#7E95F7]"> Paper</span>
          </h1>
          <p className="lg:text-[16px] lg:tracking-wide text-[18px] pb-[40px]">
            Where tradition meets technology. Your traditional everyday
            note-taking device has a very digital soul. Agenda Paper islg
            beautifully crafted notebook. By snapping pictures of pages, your
            ideas transfer to the web. Your tasks, as well as your sketches,
            designs and thoughts become immediately accessible on the app and
            safely stored in the cloud. All it takes is a snap.
          </p>
          <img
            className="lg:h-[70px] h-[50px] lg:mx-0 mx-auto"
            src={paper}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default EdoImages;
