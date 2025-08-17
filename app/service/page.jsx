"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import Link from "next/link"; // Import Link from Next.js
import {
  FiCamera,
  FiHeart,
  FiGift,
  FiUsers,
  FiCalendar,
  FiImage,
} from "react-icons/fi";
import Image from "next/image";

export default function Services() {
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

  const services = [
    {
      id: 1,
      name: "Wedding Photography",
      description: "Capturing your special day with elegance and style.",
      icon: <FiHeart className="text-pink-500 text-4xl" />,
      type: "wedding",
      url: "/ren12.jpeg",
      route: "/service/wedding", // Route for Wedding Photography
    },
    {
      id: 2,
      name: "Engagement Photography",
      description: "Celebrate your love story with memorable shots.",
      icon: <FiGift className="text-yellow-500 text-4xl" />,
      type: "engagement",
      url: "/ren2.jpeg",
      route: "/service/engagement", // Route for Engagement Photography
    },
    {
      id: 3,
      name: "Birthday Photography",
      description: "Making your birthdays unforgettable through our lenses.",
      icon: <FiCalendar className="text-blue-500 text-4xl" />,
      type: "birthday",
      url: "/ren4.jpeg",
      route: "/service/birthday", // Route for Birthday Photography
    },
    {
      id: 4,
      name: "Event Photography",
      description: "Professional coverage for all your important events.",
      icon: <FiCamera className="text-green-500 text-4xl" />,
      url: "/ren13.jpeg",
      type: "event",
      route: "/service/event", // Route for Event Photography
    },
    {
      id: 5,
      name: "Family Portraits",
      description: "Cherish your family moments with timeless portraits.",
      icon: <FiUsers className="text-purple-500 text-4xl" />,
      type: "family",
      url: "/ren5.jpeg",
      route: "/service/family", // Route for Family Portraits
    },
    {
      id: 6,
      name: "Anniversary Photography",
      description: "Commemorate your milestones with stunning visuals.",
      icon: <FiImage className="text-red-500 text-4xl" />,
      type: "anniversary",
      url: "/ren2.jpeg",
      route: "/service/anniversary", // Route for Anniversary Photography
    },
  ];

  return (
    <>
      <Navbar />

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-4xl font-bold text-white mb-4">
              Our Photography Services
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              Explore a variety of high-quality photography services designed to
              preserve your precious moments.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={`/service/${service.type}`}>
                <div className="flex flex-col justify-center items-center group  rounded-md shadow-lg py-6 hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 hover:cursor-pointer">
                  <div className="mb-4">
                    <Image
                      src={service.url}
                      alt={service.name}
                      width={500}
                      height={500}
                      className="w-[100%] h-48 object-cover rounded-sm group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mb-4 h-8 w-8 mt-1">{service.icon}</div>
                  <h3
                    className={`text-xl font-bold text-white mb-2 transition-colors text-center 
    ${
      service.type === "wedding"
        ? "hover:text-pink-500"
        : service.type === "engagement"
        ? "hover:text-yellow-500"
        : service.type === "birthday"
        ? "hover:text-blue-500"
        : service.type === "event"
        ? "hover:text-green-500"
        : service.type === "family"
        ? "hover:text-purple-500"
        : service.type === "anniversary"
        ? "hover:text-red-500"
        : ""
    }`}
                  >
                    {service.name}
                  </h3>

                  <p className="text-white text-sm  text-center">
                    {service.description}
                  </p>
                  <hr className="w-[40%] bg-white mt-4 mb-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr className="w-[20vw] mx-auto bg-white mt-20" />

      {/* Hero Section */}
      <div className="text-white py-20 text-center">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 animate-fadeIn">
          Capture Every Moment
        </h1>
        <p className="text-sm md:text-lg opacity-80 max-w-xl mx-auto">
          Discover stunning photography services that make your memories last a
          lifetime.
        </p>
      </div>
      <hr className="w-full mx-auto bg-white mt-20" />

      <Footer />
    </>
  );
}
