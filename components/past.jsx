"use client";
import Image from "next/image";
import React, { useState } from "react";

const Past = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // List of images to render
  const images = [
    "/ren6.jpeg",
    "/ren2.jpeg",
    "/ren3.jpeg",
    "/ren8.jpeg",
    "/ren5.jpeg",
    "/ren1.jpeg",
    "/ren7.jpeg",
    "/ren4.jpeg",
    "/ren9.jpeg",
  ];

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="text-white mt-40 md:mt-80">
      {/* Header Section */}
      <div className="flex justify-center items-center gap-4">
        <Image
          src="/gallery.png"
          width={500}
          height={500}
          alt="past"
          className="h-14 w-14"
          loading="lazy"
        />
        <h1 className="text-3xl md:text-5xl font-podkova hover:text-[#cfcfcf] cursor-pointer transition-all duration-500">
          PAST WORKS
        </h1>
      </div>
      <hr className="w-[70%] mx-auto border-2 border-[#D9D9D9] mt-4" />

      {/* Gallery Section */}
      <div className="mt-40">
        <div className="flex justify-center items-center flex-wrap gap-4 mx-2 ">
          {images.map((src, index) => (
            <div
              key={index}
              className="cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <Image
                src={src}
                width={450}
                height={500}
                alt="past"
                className="object-cover"
                onClick={() => handleImageClick(src)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Section */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white p-4 rounded-md">
            <button
              className="absolute top-2 right-2 text-black text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              width={800}
              height={800}
              alt="Selected"
              className="object-contain max-h-[80vh] max-w-[90vw]"
              loading="lazy"
            />
            <div className="flex justify-center mt-4">
              <a
                href={selectedImage}
                download
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Past;
