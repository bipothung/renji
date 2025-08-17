"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // For arrows

const testimonials = [
  {
    logo: "/ren.png",
    name: "John Doe",
    stars: 5,
    review:
      "This service was fantastic! I loved everything about it and will definitely be back for more!",
  },
  {
    logo: "/ren.png",
    name: "Jane Smith",
    stars: 4,
    review:
      "Great experience! The product was exactly as described and arrived on time. Highly recommend!",
  },
  {
    logo: "/ren.png",
    name: "Michael Johnson",
    stars: 5,
    review:
      "Exceptional service! I couldn’t be happier with my purchase. Will definitely return for more. truely amazing",
  },
  {
    logo: "/ren.png",
    name: "Emily Davis",
    stars: 4,
    review:
      "I am very satisfied with my order. The customer service was top-notch, and the quality was excellent!",
  },
  {
    logo: "/ren.png",
    name: "Sarah Lee",
    stars: 5,
    review:
      "Amazing! Everything was perfect from start to finish. Highly recommend to anyone looking for quality.",
  },
];

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (testimonial) => {
    setModalContent(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="py-20 bg-transparent text-white mt-40 md:mt-64">
      <div className="flex justify-center items-center mb-20">
        <hr className="bg-white w-1/2 text-center" />
        <h2 className="text-2xl md:text-4xl text-center font-semibold tracking-wider font-podkova px-3">
          TESTIMONIES
        </h2>
        <hr className="bg-white w-1/2 " />
      </div>

      {/* Testimonial Container */}
      <div className="relative flex justify-center items-center mt-40">
        {/* Testimonial Cards Container with animation */}
        <div className="testimonial-container flex gap-3 overflow-hidden">
          {/* Testimonial Cards Loop */}
          <div className="testimonial-list flex gap-3">
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card flex-shrink-0 w-[280px] md:w-[300px] p-6 border rounded-lg transition-all duration-300 mx-4 cursor-pointer"
                onClick={() => openModal(testimonial)}
              >
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.logo}
                    alt={`${testimonial.name}'s logo`}
                    width={50}
                    height={50}
                    className="rounded-full shadow-lg"
                    loading="lazy"
                  />
                  <div className="ml-6">
                    <h3 className="font-semibold text-xl">
                      {testimonial.name}
                    </h3>
                    <div className="flex items-center mt-2">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-lg">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Full-Screen Review */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-gray-900 text-white p-8 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
            <button
              onClick={closeModal}
              className="text-white text-xl absolute top-4 right-4"
            >
              X
            </button>
            <div className="flex items-center mb-6">
              <Image
                src={modalContent.logo}
                alt={`${modalContent.name}'s logo`}
                width={50}
                height={50}
                className="rounded-full shadow-lg"
                loading="lazy"
              />
              <div className="ml-6">
                <h3 className="font-semibold text-2xl">{modalContent.name}</h3>
                <div className="flex items-center mt-2">
                  {[...Array(modalContent.stars)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-lg">{modalContent.review}</p>
          </div>
        </div>
      )}

      <hr className="bg-white text-center mt-48" />
    </div>
  );
};

export default Testimonials;
