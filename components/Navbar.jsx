"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-white">
      <div className="flex justify-between items-center mx-auto py-3 pl-[10vw] lg:pl-0">
        {/* Logo */}
        <div className="xl:pl-5 w-[200px] h-[100px] sm:w-[250px] sm:h-[120px] lg:w-[300px] lg:h-[150px] flex justify-center items-center">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/renjilogo.png" // Ensure the image is in the `public` folder
              alt="logo"
              width={500}
              height={500}
              className="object-contain"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden pl-[12vw] md:pl-[35vw]">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col justify-center items-end">
          {/* Navigation Links */}
          <div className={`lg:flex gap-16 text-lg font-bold mr-28 hidden`}>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/package" className="hover:text-gray-300">
              Package
            </Link>
            <Link href="/service" className="hover:text-gray-300">
              Service
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>
          {/* Horizontal Rule */}
          <div className={`w-[80vw] hidden lg:block`}>
            <hr className="bg-white h-[2px] mt-2" />
          </div>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {menuOpen && (
        <div className="flex flex-col text-center gap-4 py-3 lg:hidden">
          <Link
            href="/"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <hr className="w-[20vw] mx-auto" />
          <Link
            href="/package"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Package
          </Link>
          <hr className="w-[25vw] mx-auto" />
          <Link
            href="/service"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Service
          </Link>
          <hr className="w-[30vw] mx-auto" />
          <Link
            href="/about"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <hr className="w-[30vw] mx-auto" />
          <Link
            href="/contact"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <hr className="w-[35vw] mx-auto" />
        </div>
      )}
    </nav>
  );
}
