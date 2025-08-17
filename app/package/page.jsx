"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Package = () => {
  useEffect(() => {
    // Disable right-click
    const handleRightClick = (e) => {
      e.preventDefault();
    };

    // Attach event listener
    window.addEventListener("contextmenu", handleRightClick);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);
  return (
    <div>
      <Navbar />
      {/* pricing starts here  */}
      <div className="flex  flex-col justify-center items-center mb-40">
        <div className="text-center mb-10">
          <h1 className="font-amita text-3xl md:text-5xl font-bold text-center mt-20 text-white underline tracking-widest">
            PRICING
          </h1>
        </div>
        <div className="flex gap-14">
          <div className="absolute top-[175vh] left-[-30vw] w-full h-full hidden lg:block">
            <div className="flex justify-center items-center opacity-70 rotate-[-90deg] ">
              <hr className="bg-white h-1 w-1/2" />
              <h1 className="font-amita text-5xl md:text-7xl font-bold text-center  text-white underline tracking-widest">
                PACKAGES
              </h1>
              <hr className="bg-white h-1 w-1/2" />
            </div>
          </div>
          {/* images starts */}
          <div className="flex mx-auto items-center">
            <div className="flex flex-col justify-center items-center gap-10 md:gap-16">
              <div>
                <Image
                  src="/price2.jpeg"
                  width={500}
                  height={500}
                  alt="price2"
                  className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-full "
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  src="/price1.jpeg"
                  width={500}
                  height={500}
                  alt="price1"
                  className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-full "
                  loading="lazy"
                />
              </div>
            </div>
            {/* images ends */}
          </div>
        </div>
        {/* book now  */}
        <div className="mt-20">
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
        </div>
      </div>{" "}
      <hr className="bg-white w-[100%]" />
      {/* pricing ends here */}
      <Footer />
    </div>
  );
};

export default Package;
