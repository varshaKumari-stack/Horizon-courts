import React from "react";
import ball from "../assets/ball.avif";
import green from "../assets/green.avif";
const Services = () => {
  return (
    <div className="grid grid-cols-3 gap-5 px-16 py-12">
      <div>
        <h1 className="rounded-3xl border  border-[#767474c3] w-fit px-3 py-2 text-2xl font-[nav] font-md ">
          Services
        </h1>
        <p className="text-4xl font-[logo] py-6 font-md text-gray-600 mt-12 ">
          Explore are full range of coaching, training and tennis
          experiences.From first serve to match point-we have got the right
          program for you.
        </p>
        <h3 className="mt-24 text-3xl font-[text] text-blue-100 p-4 rounded-2xl font-semibold bg-[#333] w-fit hover:bg-[#000] hover:rounded">
          Explore More<i className="ri-arrow-right-up-long-fill"></i>
        </h3>
      </div>
      <div className="overflow-hidden relative">
        <img
          src={ball}
          className="w-full  h-full object-center object-cover rounded-3xl"
        />
        <h1 className="absolute top-7 left-2 px-5 py-2 text-2xl bg-[#cccccc41] font-[text] text-white rounded-4xl ">
          Training Programs
        </h1>
        <div className="absolute bottom-0 flex justify-between items-center text-white text-2xl  font-[text] w-full px-4 py-3">
          <p>
            Programs designed for <br /> all ages and abilities
          </p>
          <h1>
            {" "}
            <i className="ri-arrow-right-up-long-fill bg-gray-900 p-2 rounded-2xl"></i>
          </h1>
        </div>
      </div>
      <div className="  relative overflow-hidden rounded-3xl">
        <img src={green} className="w-full h-[70%] object-cover rounded-3xl" />
        <h1 className="absolute top-7 left-2 px-5 py-2 text-2xl bg-[#cccccc60] font-[text] text-white rounded-4xl ">
          Court Access
        </h1>
        <p className="absolute left-10 top-[53%] text-3xl text-white font-[text]">
          {" "}
          Hourly Court Rental{" "}
        </p>
        <p className="w-[70%] text-2xl px-2 py-3 text-[#333] font-md font-[logo]">
          Step into a space built for players-to grow, complete, and thrive
        </p>
        <h1 className="px-1 py-1 text-2xl mb-16 ">
          <i className="ri-arrow-left-long-line border-gray-400  border p-2 text-center rounded-3xl m-4"></i>
          <i className="ri-arrow-right-long-fill border-gray-400 p-2 border text-center rounded-3xl"></i>
        </h1>
      </div>
    </div>
  );
};

export default Services;
