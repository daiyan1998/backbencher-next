"use client";
import logo from "@/assets/demo/logo.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle mobile menu toggle
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };
  return (
    <footer className="pb-[120px] relative">
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between  text-[#5A5E63] items-center">
        <div className="text-3xl  font-semibold text-skin-tertiary">
          <Link href={"/"} onClick={scrollToTop}>
            <Image className="md:h-10" src={logo} alt="BB IT House Logo" />
          </Link>
        </div>

        <ul className="flex md:flex-row flex-col justify-between md:gap-12 gap-5">
          <li>
            <Link href="/" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li className="relative">
            <span
              className="cursor-pointer flex justify-center items-center gap-2"
              onClick={handleMenuToggle}
            >
              Services {!isMenuOpen ? <FaAngleDown /> : <FaAngleUp />}
            </span>

            {/*  service links */}
            <ul
              className={`list-none absolute bg-to ${
                isMenuOpen
                  ? "grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-x-10 md:gap-x-8 gap-2 "
                  : "hidden"
              } top-full  -left-14   bg-gradient-to-r from-red-50 to-blue-50 lg:w-[700px] md:w-[370px] w-[240px] z-10 p-2 border border-gray-200 rounded-md`}
            >
              <li className="my-1 lg:mx-5 mx-2 text-base">
                <Link
                  href={"/webDesign"}
                  className="hover:text-purple-600"
                  onClick={scrollToTop}
                >
                  Web Design
                </Link>
              </li>
              <li className="my-1 lg:mx-5 mx-2 text-base">
                <Link
                  href={"/webDevelopment"}
                  className="hover:text-purple-600"
                  onClick={scrollToTop}
                >
                  Web Development
                </Link>
              </li>
              <li className="my-0.5 lg:mx-5 mx-2 text-base">
                <Link
                  href={"/digitalMarketing"}
                  className="hover:text-purple-600"
                  onClick={scrollToTop}
                >
                  Digital Marketing
                </Link>
              </li>
              <li className="my-1 lg:mx-5 mx-2 text-base">
                <Link
                  href={"/uiUxDesign"}
                  className="hover:text-purple-600"
                  onClick={scrollToTop}
                >
                  Ui/Ux Design
                </Link>
              </li>
              <li className="my-1 lg:mx-5 mx-2 text-base">
                <Link
                  href={"/graphicsDesign"}
                  className="hover:text-purple-600"
                  onClick={scrollToTop}
                >
                  Graphics Design
                </Link>
              </li>
              <li className="my-1 lg:mx-5 mx-2 text-base">
                <Link
                  href={"/appDevelopment"}
                  className="hover:text-purple-600"
                  onClick={scrollToTop}
                >
                  App Development
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/aboutUs" onClick={scrollToTop}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contactUs" onClick={scrollToTop}>
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex gap-5">
          <span className="social-icon-anim">
            <a
              href="https://www.facebook.com/profile.php?id=61554983307796"
              target="_blank"
            >
              {" "}
              <FaFacebook className="text-blue-500 text-2xl" />
            </a>
          </span>
          <span className="social-icon-anim">
            <a
              href="https://www.instagram.com/backbenchersit2024"
              target="_blank"
            >
              {" "}
              <FaInstagram className="text-rose-500 text-2xl" />
            </a>
          </span>
          <span className="social-icon-anim">
            {" "}
            <a href="https://www.linkedin.com/company/99178797" target="_blank">
              {" "}
              <FaLinkedin className="text-blue-700 text-2xl" />{" "}
            </a>{" "}
          </span>
          <span className="social-icon-anim">
            {" "}
            <a href="https://twitter.com/ItBackbenchers" target="_blank">
              {" "}
              <FaXTwitter className=" text-2xl" />
            </a>{" "}
          </span>
        </div>
      </div>

      <hr className="my-8" />

      <div className="flex flex-col text-center justify-between">
        <p>&copy; Copyright 2022, All Rights Reserved</p>
        <div className="grid grid-cols-1   md:block">
          <a href="">Privacy Policy </a>
          <a href="">Terms & Conditions</a>
        </div>
      </div>
      <div
        className="absolute right-2 text-5xl opacity-45 scrollAnim"
        onClick={scrollToTop}
      >
        <FaArrowAltCircleUp color="purple" className="" />
      </div>
    </footer>
  );
};

export default Footer;
