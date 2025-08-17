"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const packages = [
  {
    type: "wedding",
    title: "Basic Photography",
    price: "₹15,000",
    details:
      "One photographer. Full day coverage. Only softcopies on custom pendrive.",
    image: "/ren5.jpeg", // Image for Basic Photography package
  },
  {
    type: "wedding",
    title: "Standard Photography",
    price: "₹30,000",
    details:
      "Two photographers. Full day coverage. 200+ high resolution softcopies on pendrive. One custom design Wedding album (30pgs).",
    image: "/ren2.jpeg", // Image for Standard Photography package
  },
  {
    type: "wedding",
    title: "Premium Photography",
    price: "₹40,000",
    details:
      "Two photographers. Full day coverage. Two Premium photo frames (30x42cm & 42x60cm).",
    image: "/ren13.jpeg", // Image for Premium Photography package
  },
];

export default function WeddingPackage() {
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
    <>
      <Navbar />
      <div className="py-12 px-4 sm:px-6 lg:px-8 mt-20 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white mb-20">
            Wedding Photography Packages
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
              >
                <div className="relative">
                  {/* Image Section */}
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    layout="responsive"
                    width={600}
                    height={400}
                    className="object-cover rounded-t-lg"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    {pkg.title}
                  </h2>
                  <p className="text-xl font-bold text-gray-600 mb-4">
                    {pkg.price}
                  </p>
                  <ul className="text-gray-500 list-disc pl-6 mb-6 text-start">
                    {pkg.details.split(".").map((detail, i) => {
                      if (detail.trim()) {
                        return (
                          <li key={i} className="mb-2">
                            {detail.trim()}.
                          </li>
                        );
                      }
                      return null;
                    })}
                  </ul>
                  <Link
                    href="/book"
                    className="inline-block px-6 py-2 bg-[#CB4316] hover:bg-[#cb4316d3] text-white text-lg font-semibold rounded-lg  transition duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="w-full mx-auto bg-white mt-20" />
      <Footer />
    </>
  );
}
