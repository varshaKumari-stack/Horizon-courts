import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between items-center  px-4 py-4">
      <div className="font-bold text-3xl  font-[logo] text-cyan-800">
        <h1>Horizon Courts</h1>
      </div>
      <div className="flex gap-14 text-2xl font-md font-[logo] items-center text-cyan-800  ">
        <a
          href="#"
          className="bg-[#bab2b2] py-2 px-2 rounded-2xl hover:text-black  hover:rounded-lg transition-all duration-300"
        >
          AboutUs
        </a>
        <a
          href="#"
          className="hover:bg-[#bab2b2] py-2 px-2 rounded-2xl transition-all duration-300 hover:text-black  hover:rounded-lg "
        >
          Services
        </a>
        <a
          href="#"
          className="hover:bg-[#bab2b2] py-2 px-2 rounded-2xl transition-all duration-300 hover:text-black  hover:rounded-lg "
        >
          Contacts
        </a>
        <a
          href="#"
          className="hover:bg-[#bab2b2] py-2 px-2 rounded-2xl transition-all duration-300 hover:text-black  hover:rounded-lg "
        >
          Events
        </a>
        <a
          href="#"
          className="hover:bg-[#bab2b2] py-2 px-2 rounded-2xl transition-all duration-300 hover:text-black  hover:rounded-lg "
        >
          Coaches
        </a>
      </div>
      <div className=" text-2xl font-medium bg-[#333] px-4 py-2  text-cyan-700 hover:text-white  rounded-3xl hover:bg-black cursor-pointer hover:rounded-lg">
        <h1 className="font-[logo] ">
          Book Call<i className="ri-arrow-right-up-line"></i>
        </h1>
      </div>
    </div>
  );
};

export default Nav;
