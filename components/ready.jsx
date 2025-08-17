import Link from "next/link";
import React from "react";

const Ready = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-white font-podkova text-xl md:text-4xl  text-center pt-8 md:pt-16 lg:pt-24 xl:pt-32 mb-10 mx-auto">
        ARE YOU READY TO WORK TOGETHER ?
      </h2>
      <div className="flex justify-center lg:justify-center items-center space-x-4 pt-4">
        <p className="text-2xl text-white hidden md:block">-&gt;</p>
        <Link
          href="/book"
          className="cursor-pointer hover:scale-x-110 transition-all duration-300 ease-in-out"
        >
          <div className="w-40 rounded-xl flex items-center justify-center bg-[#CB4316] text-white py-2 md:py-3 ">
            <p className="text-center font-podkova text-base md:text-2xl">
              Book Now!
            </p>
          </div>
        </Link>
      </div>
      <hr className="bg-white w-[100%] mt-40" />
    </div>
  );
};

export default Ready;
