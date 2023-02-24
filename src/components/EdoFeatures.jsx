import React from "react";
import arrow from "../assets/logo_only_image.png";
import calendar from "../assets/calendar-icon.png";
import journal from "../assets/journal-icon.png";
import task from "../assets/task-icon.png";
import notes from "../assets/notes-icon.png";

function EdoFeatures() {
  return (
    <div className="w-screen mx-auto h-full pb-[90px] text-[#333333]">
      <div className="text-center">
        <img className="h-10 mx-auto" src={arrow} alt="" />
        <h1 className="py-8 text-[28px] tracking-wide font-light">
          Productivity, meet Creativity
        </h1>
      </div>

      <div className="grid text-center lg:grid-cols-2 md:px-[0px]">
        <div className="pt-[90px]">
          <img className="h-[80px] mx-auto" src={calendar} alt="" />
          <h1 className="pt-[50px] pb-5 text-[15px] font-semibold">
            THE BIG PICTURE OF YOUR ACTIVITIES
          </h1>
          <p className="font-normal">
            The Planner will help you to get an overview on how productive
            <br />
            you’ve been and what still needs to be done.
          </p>
        </div>

        <div className="pt-[90px]">
          <img className="h-[80px] mx-auto" src={journal} alt="" />
          <h1 className="pt-[50px] pb-5 text-[15px] font-semibold">
            EVERYTHING YOU NEED TO PLAN YOUR DAY
          </h1>
          <p className="font-normal">
            Start your day by writing the thoughts that inspire you, ideas you
            <br />
            want to remember, or simply a list of things to do.
          </p>
        </div>

        <div className="pt-[90px]">
          <img className="h-[80px] mx-auto" src={task} alt="" />
          <h1 className="pt-[50px] pb-5 text-[15px] font-semibold">
            YOUR REMINDERS AND TO-DO LISTS AT A GLANCE
          </h1>
          <p className="font-normal">
            Remember everything you have to do with reminders on your
            <br /> phone and see what still needs to be done at a glance with
            on-
            <br />
            the-go task lists.
          </p>
        </div>

        <div className="pt-[90px]">
          <img className="h-[80px] mx-auto" src={notes} alt="" />
          <h1 className="pt-[50px] pb-5 text-[15px] font-semibold">
            A CLEAN ORGANIZED PLACE TO WRITE YOUR THOUGHTS
          </h1>
          <p className="font-normal">
            Don’t forget one single detail for your meetings and <br />
            appointments. Add reminders for your meetings next week and <br />
            attach your relevant thoughts and docs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EdoFeatures;
