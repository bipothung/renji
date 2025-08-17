"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useEffect } from "react";

const About = () => {
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
      <div>
        <div className="flex gap-4 justify-center items-center mt-20">
          <h1 className="text-white font-amita underline text-3xl md:text-5xl">
            ABOUT
          </h1>
          <Image
            src="/photo.png"
            width={500}
            height={500}
            alt="photo"
            className="h-10 w-10"
            loading="lazy"
          />
        </div>

        {/* main start */}
        <div className="mt-20 flex justify-center items-center">
          <hr className="bg-white h-1 w-[800px] md:w-[500px] rotate-90" />

          <div className="flex justify-center items-center">
            <p className="text-white font-podkova text-center w-[60vw] ">
              Hi, I &apos;m Renjamo Kikon, a passionate and professional
              photographer and videographer with over three years of experience
              in capturing life &apos;s most cherished moments. With more than
              50 successful projects, I specialize in wedding, birthday, and
              event photography, bringing every frame to life with creativity
              and precision. <br />
              <br />
              Photography is more than just a profession for me—it &apos;s a way
              to tell stories, freeze emotions, and create timeless memories
              that you can hold close forever. Whether it &apos;s the joy of a
              wedding day, the laughter at a birthday celebration, or the
              vibrant energy of an event, I strive to capture the essence of
              every occasion in the most authentic and artistic way possible.{" "}
              <br />
              <br />
              My approach is simple yet profound: I blend technical expertise
              with a keen eye for detail, ensuring every shot speaks a thousand
              words. I believe in creating a comfortable and personalized
              experience for my clients, so you can focus on enjoying your
              special moments while I take care of preserving them beautifully.
              <br />
              <br /> Let &apos;s work together to make your memories
              unforgettable! If you &apos;re looking for someone who will bring
              passion, creativity, and professionalism to your photography or
              videography needs, I &apos;d be honored to be part of your
              journey.
            </p>
          </div>
          <hr className="bg-white h-1  w-[800px] md:w-[500px] rotate-90" />
        </div>

        {/* main end */}
      </div>

      <hr className="bg-white mt-20 md:mt-40  " />
      <Footer />
    </div>
  );
};

export default About;
