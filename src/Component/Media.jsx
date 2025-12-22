import React from "react";

const Media = () => {
  return (
    <div className="grid grid-cols-4 px-4 py-8 mt-2 gap-3 text-center items-center">
      <div className=" ">
        <h1 className="text-5xl font-[text] p-2">12000+</h1>
        <p className="text-2xl text-gray-600 font-[nav] font-semibold">Hours of play Annualy</p>
      </div>
      <div>
        <h1 className="text-5xl font-[text] p-2">89%</h1>
        <p className="text-2xl text-gray-600 font-[nav] font-semibold">Player retention rate</p>
      </div>
      <div>
        <h1 className="text-5xl font-[text] p-2">1200+</h1>
        <p className="text-2xl text-gray-600 font-[nav] font-semibold">Active Members</p>
      </div>
      <div>
        <h1 className="text-5xl font-[text] p-2">125+</h1>
        <p className="text-2xl text-gray-600 font-[nav] font-semibold">Annual tournament</p>
      </div>
    </div>
  );
};

export default Media;
