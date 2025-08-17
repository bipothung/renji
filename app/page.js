"use client";
import { useEffect } from "react";
import Footer from "@/components/footer";
import Main from "@/components/main";
import Navbar from "@/components/Navbar";
import Past from "@/components/past";
import Ready from "@/components/ready";
// import Testemonies from "@/components/testemonies";

const Home = () => {
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
      <Main />
      <Past />
      {/* <Testemonies />  */}
      <Ready />
      <Footer />
    </div>
  );
};

export default Home;
