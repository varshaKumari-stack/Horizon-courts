import React from "react";
import header from "../assets/header.avif";
import fir from "../assets/fir.jpg";
import sec from "../assets/sec.jpg";
import thi from "../assets/thi.jpg";
const Header = () => {
  return (
    <div className="relative  overflow-hidden px-3 py-3">
      <img
        src={header}
        className="  w-full h-150 object-center object-cover rounded-lg "
      />
      <h1 className="  absolute top-[10%] left-[20%] text-5xl text-blue-100 font-[nav]">
        Unleash Your Inner Champion Today.{" "}
      </h1>
      <h2 className="absolute top-[19%] left-[36%] text-5xl text-blue-100 font-[nav]">
        All In One Place.
      </h2>
      <p className="absolute top-[26%] left-[20%] text-2xl text-blue-100 font-[nav] text-center">
        Join the ultimate tennis experience-where passion meets performance,
        <br />
        and every swing brings your closer to victory.
      </p>
      <h3 className="absolute top-[37%] left-[35%] text-2xl text-white bg-[#222] px-8 py-4 rounded-4xl font-[btn] text-centerffont-[btn] hover:bg-black hover:rounded-2xl hover:text-white tracking-[0.2rem]">
        Start your own journey
      </h3>
      <div className="flex justify-between gap-2 absolute bottom-[4%] left-[2%] text-[#ddd] text-xl font-md rounded-3xl">
        <div>
          <p>Train with real professionals.</p>
          <p>Get the real results.</p>
        </div>
        <div className="flex items-center rounded-3xl py-2 px-2 bg-[#f6efef48] overflow-hidden">
          <img
            src={fir}
            className="rounded-full w-10 h-10 bg-white py-1.5 px-1.5 object-cover object-center"
          />
          <img
            src={sec}
            className="rounded-full w-10 h-10  bg-white py-1.5 px-1.5 object-cover object-center"
          />
          <img
            src={thi}
            className="rounded-full w-10 h-10  bg-white py-1.5 px-1.5 object-cover object-center"
          />
        </div>
      </div>
      <div className="flex absolute right-14 bottom-6 gap-3 text-white text-lg ">
        <p className="border-b-2 border-solid text-blue-100 ">
          Instagram<i class="ri-arrow-right-up-line "></i>
        </p>
        <p className="border-b-2 border-solid text-blue-100">
          Facebook<i class="ri-arrow-right-up-line"></i>
        </p>
        <p className="border-b-2 border-solid text-blue-100">
          TikTok<i class="ri-arrow-right-up-line"></i>
        </p>
      </div>
    </div>
  );
};

export default Header;
