import Image from "next/image";
import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center pt-10 px-10 lg:pr-28  ">
      {/* Left Section: Image and Verse */}
      <div className="text-white flex flex-col items-center justify-center lg:w-1/2">
        <Image
          src="/ren.png"
          width={500}
          height={500}
          alt="ren"
          className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-[350px] object-cover rounded-lg hover:scale-110 transition-all duration-300 ease-in-out"
          loading="lazy"
        />
        <Link
          href="https://biblehub.com/2_corinthians/12-9.htm"
          target="_blank"
          className="cursor-pointer hover:text-[#c79448] transition-all duration-300 ease-in-out"
        >
          <p className="font-podkova text-lg mt-4 text-center md:text-lg ">
            2 CORINTHIANS 12:9
          </p>
        </Link>
      </div>

      {/* Right Section: Content */}
      <div className="lg:w-[60%] text-center lg:text-left pt-10 lg:pt-24">
        <h3 className="text-white text-2xl md:text-3xl lg:text-[32px] font-amita">
          Renjamo Kikon
        </h3>
        <h1 className="text-white text-3xl md:text-5xl lg:text-[61px] font-allan mt-4 leading-snug">
          “Capturing Moments into Timeless Art”
        </h1>

        {/* Three Info Boxes */}
        <div className="text-white flex flex-col md:flex-row gap-4 md:gap-7 justify-center items-center mt-10 mb-10">
          <div className="border-2 border-white hover:border-[#855309] transition-all duration-300 ease-in-out py-4 px-6 md:px-4 rounded-2xl flex items-center justify-center">
            <p className="text-center font-podkova text-[16px] md:text-[20px] cursor-pointer">
              3+ years experience
            </p>
          </div>
          <div className="border-2 border-white hover:border-[#855309] transition-all duration-300 ease-in-out py-4 px-6 md:px-9 rounded-2xl flex items-center justify-center">
            <p className="text-center font-podkova text-[16px] md:text-[20px] cursor-pointer">
              Photography/ Videography
            </p>
          </div>
          <div className="border-2 border-white hover:border-[#855309] transition-all duration-300 ease-in-out  py-4 px-6 md:px-9 rounded-2xl flex items-center justify-center">
            <p className="text-center font-podkova text-[16px] md:text-[20px] cursor-pointer">
              50+ projects
            </p>
          </div>
        </div>

        {/* About Me Button */}
        <div className="flex justify-center lg:justify-center items-center space-x-4 pt-4">
          <p className="text-2xl text-white hidden md:block">-&gt;</p>
          <div className="w-32 rounded-xl flex items-center justify-center bg-[#CB4316] hover:bg-[#cb4316d3] transition-all duration-300 ease-in-out text-white py-2 md:py-3">
            <Link href="/about" className="cursor-pointer">
              <p className="text-center font-podkova text-base md:text-lg">
                About Me
              </p>
            </Link>
          </div>
          <p className="text-2xl text-white hidden md:block">&lt;-</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
