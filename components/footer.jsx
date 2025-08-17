import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing React Icons

const Footer = () => {
  return (
    <div>
      <footer>
        {/* second footer starts */}
        <div className="flex flex-col md:flex-row justify-between items-center px-20">
          <div className="flex md:flex-row flex-col text-white gap-10 pt-16 md:pt-0">
            <div className="flex flex-col gap-10 justify-center items-start">
              <div className="flex justify-center items-center gap-2">
                {" "}
                <Image
                  src="/ins.png"
                  width={500}
                  height={500}
                  alt="logo"
                  className="object-cover h-7 w-7"
                  loading="lazy"
                />
                <Link
                  href="https://www.instagram.com/renji_kikon_photography?igsh=bGhjc2ZwY3hpbDZh"
                  className="cursor-pointer"
                  target="_blank"
                >
                  INSTAGRAM
                </Link>
              </div>
              <div className="flex justify-center items-center gap-2">
                {" "}
                <Image
                  src="/fb.png"
                  width={500}
                  height={500}
                  alt="logo"
                  className="object-cover h-7 w-7"
                  loading="lazy"
                />
                <Link
                  href="https://www.facebook.com/share/15ermUevsg/?mibextid=qi2Omg"
                  className="cursor-pointer"
                  target="_blank"
                >
                  FACEBOOK
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-10 justify-center items-start">
              <div className="flex justify-center items-center gap-2">
                {" "}
                <Image
                  src="/abou.png"
                  width={500}
                  height={500}
                  alt="logo"
                  className="object-cover h-7 w-7"
                  loading="lazy"
                />{" "}
                <Link href="/about" className="cursor-pointer">
                  ABOUT{" "}
                </Link>
              </div>
              <div className="flex justify-center items-center gap-2">
                {" "}
                <Image
                  src="/cont.png"
                  width={500}
                  height={500}
                  alt="logo"
                  className="object-cover h-7 w-7"
                  loading="lazy"
                />{" "}
                <Link href="/contact" className="cursor-pointer">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>

          <div className="h-[300px] w-[300px]">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/renlogo2.png"
                width={500}
                height={500}
                alt="logo"
                className="object-cover "
                loading="lazy"
              />
            </Link>
          </div>
        </div>

        {/* second footer ends */}
        <hr className="bg-white w-[100%]" />
        {/* New footer section with icons and text */}
        <div className="flex flex-col items-center text-white py-5">
          <div className="flex gap-5 mb-4">
            <Link
              href="https://www.instagram.com/renji_kikon_photography?igsh=bGhjc2ZwY3hpbDZh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white hover:text-gray-400 transition duration-300 h-7 w-7" />
            </Link>
            <Link
              href="https://www.facebook.com/share/15ermUevsg/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-white hover:text-gray-400 transition duration-300 h-7 w-7" />
            </Link>
          </div>
          <p className="text-center text-sm font-podkova">
            © Renji_kikon_Photography | ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
