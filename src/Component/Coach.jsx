import React from "react";
import tennis from "../assets/tennis.jpg";
import coach from "../assets/man.jpg";
import circle from "../assets/circle.png";
const Coach = () => {
  return (
    <div className="grid grid-cols-3 gap-12 px-4 py-4   ">
      <div className="bg-[#0d1a2d] text-center text-white px-7 py-7 rounded-3xl  relative">
        <img src={tennis} className="w-12" />
        <p className="mt-4 text-4xl font-normal">
          Professional hard courts{" "}
          <span className="text-[#bcb7b7]">
            with tournament-grade lighting and climate control-play in
          </span>{" "}
          perfect conditions,in any season.
        </p>
        <div className="border-2   border-none rounded-4xl w-24 mt-4 px-4 py-6  bg-blue-400 relative">
          <div className="border-10 border-solid absolute p-2 bottom-2 right-2 rounded-3xl "></div>
        </div>
        <h2 className="absolute right-44 bottom-16 font-md text-2xl text-[#bcb7b7] font-[nav]">
          Game Mode
        </h2>
      </div>
      <div className="relative">
        <img src={coach} className="w-full h-full rounded-3xl" />
        <p className="absolute top-[40%] left-[10%] border-solid bg-[#7d787849] px-4 py-4 text-[1.7rem] text-white rounded-3xl font-[nav]">
          Private and Group Lessons
        </p>
      </div>
      <div className=" bg-[#7471710b]  text-black px-7 py-7 rounded-3xl">
        <h1 className="text-7xl font-lg font-[logo]">100+</h1>
        <h2 className="mt-1 text-4xl font-semibold font-[text]">Pro Coaches</h2>
        <p className="mt-1 text-xl font-md text-[grey] font-[text]">
          Certified professional ready to boost your
          <br /> game from first serve to tournament level.
        </p>
        <div className=" mt-6 flex justify-between items-center">
          <h1 className="text-xl font-bold font-[nav]">Beginner</h1>
          <p className="flex gap-1">
            <img src={circle} className="w-5 h-5" />
            <img src={circle} className="w-5 h-5" />
            <img src={circle} className=" w-5 h-5" />
            <img src={circle} className=" w-5 h-5" />
            <img src={circle} className=" w-5 h-5" />
            <img src={circle} className=" w-5 h-5" />
            <img src={circle} className="w-5 h-5" />
            <img src={circle} className="w-5 h-5" />
            <img src={circle} className="w-5 h-5" />
            <img src={circle} className="w-5 h-5" />
          </p>
          <h2 className=" text-2xl font-lg font-[logo] text-gray-500">55</h2>
        </div>
        <div className=" mt-6 flex justify-between items-center">
          <h1 className="text-[1.2rem] font-bold font-[nav]">Intermediate</h1>
          <p className="flex justify-center items-center gap-2">
            <img src={circle} className="w-5 h-5" />
            <img src={circle} className="w-5 h-5" />
            <img src={circle} className=" w-5 h-5" />
            <img src={circle} className=" w-5 h-5" />
            <img src={circle} className=" w-5 h-5" />
            <img src={circle} className=" w-5 h-5" />
            <img src={circle} className="w-5 h-5" />
            <img src={circle} className="w-5 h-5" />
          </p>
          <h2 className=" text-2xl font-lg font-[logo] text-gray-500">40</h2>
        </div>
        <div className=" mt-6 flex justify-between items-center">
          <h1 className="text-[1.2rem] font-bold font-[nav]">Advanced</h1>
          <p className="flex justify-center items-center gap-2">
            <img src={circle} className="w-5 h-5" />
            <img src={circle} className="w-5 h-5" />
            <img src={circle} className=" w-5 h-5" />
            <img src={circle} className=" w-5 h-5" />
            <img src={circle} className=" w-5 h-5" />
            <img src={circle} className=" w-5 h-5" />
            <img src={circle} className="w-5 h-5" />
          </p>
          <h2 className=" text-2xl font-lg font-[logo] text-gray-500">35</h2>
        </div>
      </div>
      
    </div>
  );
};

export default Coach;
