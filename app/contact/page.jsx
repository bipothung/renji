"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";

const Contact = () => {
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
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the formatted message for WhatsApp
    const formattedMessage = `
  *INQUIRY Message*
  *Name*: ${name}
  *Message*: ${message}
      `;

    const phoneNumber = "+919077846119";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-center items-center mt-20">
          <h1 className="text-white font-amita underline text-3xl md:text-5xl">
            CONTACT
          </h1>
        </div>

        {/* Forms Section */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mt-20">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 max-w-md">
            <form
              onSubmit={handleSubmit}
              className="border-2 border-white flex flex-col justify-center p-6 rounded-lg "
            >
              <label htmlFor="name" className="text-white font-podkova">
                NAME
              </label>
              <input
                type="text"
                id="name"
                className="rounded-sm bg-gray-200 w-full p-2 mt-1 focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <br />

              <label htmlFor="message" className="text-white font-podkova">
                MESSAGE
              </label>
              <textarea
                id="message"
                className="rounded-sm bg-gray-200 w-full p-2 mt-1 h-40 focus:outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <br />

              <button className="text-white w-full bg-[#CB4316] rounded-full py-2 hover:bg-[#b53912] transition-all">
                Submit
              </button>

              <p className="text-white mt-6 text-center font-podkova">
                PH-NO: +919077846119
              </p>
            </form>
          </div>

          {/* Address Section */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="border-2 border-white flex flex-col justify-center p-6 rounded-lg ">
              <p className="text-white font-podkova">ADDRESS</p>
              <div className="w-full h-64 mt-2 rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3138.27546506917!2d94.10701478889439!3d25.684182646379334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1734424444186!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-white mt-6 text-center font-podkova">
                KOHIMA NAGALAND <br /> 797115 | INDIA
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="bg-white mt-20 md:mt-40  " />
      <Footer />
    </div>
  );
};

export default Contact;
