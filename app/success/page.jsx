"use client";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

const Success = () => {
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
  const router = useRouter(); // useRouter for navigation

  // Function to navigate back to the homepage
  const goToHome = () => {
    router.push("/"); // Redirects to the homepage
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#A7C7E7] via-[#F3A6B0] to-[#F7C6A5] px-6 sm:px-12 md:px-24">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#2C3E50] mb-6">
            Your Booking was Successful!
          </h1>

          <p className="text-lg text-[#2C3E50] mb-4">
            Thank you for choosing us to capture your special moments. We have
            received your booking details and will be in touch shortly to
            confirm everything.
          </p>

          <p className="text-md text-[#7F8C8D] mb-6">
            We look forward to working with you!
          </p>

          <button
            onClick={goToHome}
            className="mt-6 bg-[#F39C12] text-white text-lg px-6 py-3 rounded-lg hover:bg-[#E67E22] focus:outline-none"
          >
            Go to Home
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Success;
