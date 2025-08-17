"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const Form = () => {
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
  const router = useRouter(); // Initialize useRouter
  const [formData, setFormData] = useState({
    name: "",
    package: "",
    date: "",
    time: "",
    phone: "",
    email: "",
    type: "",
    ampm: "AM", // Default AM for the time
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Structured message
    const message =
      `*Booking Details:*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Package:* ${formData.package}\n` +
      `*Date:* ${formData.date}\n` +
      `*Time:* ${formData.time} ${formData.ampm}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Type:* ${formData.type}\n`;

    // WhatsApp URL with structured message
    const whatsappURL = `https://wa.me/919077846119?text=${encodeURIComponent(
      message
    )}`;

    // Redirect to WhatsApp chat
    window.open(whatsappURL, "_blank");

    // Redirect to the /success page after form submission
    router.push("/success");

    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  // Package details object
  const packageDetails = {
    birthday: {
      price: "₹10,000",
      details:
        "Includes a Photographer. Full day coverage. Softcopies on custom pendrive.",
    },
    engagement: {
      price: "₹10,000",
      details:
        "Includes a Photographer. Full day coverage. Softcopies on custom pendrive.",
    },
    events: {
      price: "₹6,000",
      details:
        "Includes a Photographer. Full day coverage. Softcopies on custom pendrive.",
    },
    wedding_photography_basic: {
      price: "₹15,000",
      details:
        "One photographer. Full day coverage. Only softcopies on custom pendrive.",
    },
    wedding_photography_standard: {
      price: "₹30,000",
      details:
        "Two photographers. Full day coverage. 200+ high resolution softcopies on pendrive. One custom design Wedding album (30pgs).",
    },
    wedding_photography_premium: {
      price: "₹40,000",
      details:
        "Two photographers. Full day coverage. Two Premium photo frames (30x42cm & 42x60cm).",
    },
  };

  const selectedPackage = packageDetails[formData.package];

  return (
    <>
      <Navbar />

      <div className="flex gap-4 justify-center items-center mt-10 mb-6">
        <h1 className="text-white font-amita underline text-3xl md:text-4xl lg:text-5xl">
          BOOK YOUR SLOT
        </h1>
      </div>

      <div className="min-h-screen flex items-center justify-center mt-6 px-4 sm:px-8 md:px-16 lg:px-32">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bshadow-md rounded-lg p-8 space-y-6 border-2 border-[#7B2910] "
        >
          <h2 className="text-2xl font-bold text-center text-white mb-4">
            Book Now
          </h2>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-white font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Package */}
          <div>
            <label htmlFor="package" className="block text-white font-medium">
              Package
            </label>
            <select
              id="package"
              name="package"
              value={formData.package}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="" disabled>
                Select a package
              </option>
              <option value="birthday">Birthday - ₹10,000</option>
              <option value="engagement">Engagement - ₹10,000</option>
              <option value="events">Events - ₹6,000</option>
              <option value="wedding_photography_basic">
                Wedding Photography Basic - ₹15,000
              </option>
              <option value="wedding_photography_standard">
                Wedding Photography Standard - ₹30,000
              </option>
              <option value="wedding_photography_premium">
                Wedding Photography Premium - ₹40,000
              </option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-white font-medium">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Time */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="time" className="block text-white font-medium">
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                step="900" // 15-minute increments
              />
            </div>
            <div className="flex-1">
              <label htmlFor="ampm" className="block text-white font-medium">
                AM/PM
              </label>
              <select
                id="ampm"
                name="ampm"
                value={formData.ampm}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-white font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-white font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Type */}
          <div>
            <label htmlFor="type" className="block text-white font-medium">
              Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="photographer">Photographer</option>
              <option value="videographer">Videographer</option>
              <option value="both">Both</option>
            </select>
          </div>

          {/* Package Summary */}
          {formData.package && selectedPackage && (
            <div className="mt-6 p-6 border-2 border-[#7B2910] rounded-lg ">
              <h3 className="text-2xl font-bold text-white mb-4">
                Package Summary
              </h3>
              <p className="text-lg text-white">
                <strong className="font-semibold">Price:</strong>{" "}
                <span className="text-xl font-semibold">
                  {selectedPackage.price}
                </span>
              </p>
              <p className="mt-2 text-lg text-white">
                <strong className="font-semibold">
                  What`&apos;`s Included:
                </strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-white text-base font-normal">
                {selectedPackage.details.split(".").map(
                  (item, index) =>
                    item.trim() && (
                      <li key={index} className="mt-1">
                        {item.trim()}.
                      </li>
                    )
                )}
              </ul>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#CB4316] hover:bg-[#cb4316d3] text-white py-2 px-4 rounded-lg  focus:ring-2 focus:ring-blue-500 focus:outline-none mt-6"
          >
            Book Now
          </button>
        </form>
      </div>

      <hr className="bg-white h-[2px] mx-4 mt-20 md:mx-20" />
      <Footer />
    </>
  );
};

export default Form;
