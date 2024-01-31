import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "@/style/global.css";
import { pageTransition } from "@/animation";
import ReactWhatsapp from "react-whatsapp";
const ContactUsPage = () => {
  return (
    <div className="main-div">
      <div className="part1">
        <h1 className="title-style-primary text-center">Contact Us</h1>
        <p className="text-style-secondary text-center my-10 px-16">
          Ready to take the next step? Whether it&apos;s web development,
          digital marketing, or design services, we&apos;re here to bring your
          ideas to life. Fill out the form below, and one of our experts will
          get back to you shortly.
        </p>
      </div>
      <div className="part2 ">
        <h1 className="text-4xl font-semibold my-10">Have Any Questions?</h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
          <div className="basis-1/2 bg-slate-50 p-14 rounded-xl shadow-lg">
            <form
              action="https://getform.io/f/99f98217-5577-4d61-92bb-fe62f5f7e80a"
              method="POST"
              className="w-full max-w-lg"
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Name
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                    name="name"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    E-mail address
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-last-name"
                    type="email"
                    placeholder="info@gmail.com"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 md:w-1/2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Phone
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-password"
                    type="text"
                    placeholder="(+1) 123 456 7890"
                    name="phone"
                    required
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Subject
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-password"
                    type="text"
                    placeholder="Inquiry"
                    name="subject"
                    required
                  />
                </div>
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    rows={5}
                    id="grid-password"
                    type="text"
                    placeholder="Type your messages here..."
                    name="message"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary">
                Contact Us
              </button>
            </form>
          </div>
          <div className="text-2xl basis-2/3 bg-slate-50 p-14 rounded-xl shadow-lg">
            <p className="title-style-primary  border-b-2 pb-2">Get in touch</p>

            <div className="flex flex-col gap-5 mt-8">
              <div className="flex items-center gap-4">
                <span>
                  <FaMapMarkerAlt className="text-skin-tertiary text-4xl" />
                </span>
                <span>Dhanmondi 9/A, Dhaka 1205</span>
              </div>
              <div className="flex items-center gap-4 conncet-anim">
                <span>
                  <TiMessages className="text-skin-tertiary text-4xl" />
                </span>
                <a href="mailto:backbenchersithouse@gmail.com">
                  {" "}
                  <span className="lg:text-2xl text-[15px] lg:font-normal font-bold">
                    backbenchersithouse@gmail.com
                  </span>
                </a>
              </div>
              <div className="flex items-center gap-4 mb-5 conncet-anim ">
                <span>
                  <IoLogoWhatsapp className="text-green-500 text-4xl" />
                </span>

                <ReactWhatsapp
                  className="cursor-pointer "
                  number="+8801986298579 "
                  message="Hello from BBIT Website!!!"
                  target="_blank"
                >
                  +8801986298579
                </ReactWhatsapp>
              </div>
            </div>

            <div className="grid grid-cols-1 items-center gap-4 mb-5">
              <span className="text-2xl font-semibold border-b-2 pb-2">
                Follow us
              </span>

              <span className="flex gap-10 items-center">
                <span className="social-icon-anim">
                  <a
                    href="https://www.facebook.com/profile.php?id=61554983307796"
                    target="_blank"
                  >
                    {" "}
                    <FaFacebook className="text-blue-500 text-4xl" />
                  </a>
                </span>
                <span className="social-icon-anim">
                  <a
                    href="https://www.instagram.com/backbenchersit2024"
                    target="_blank"
                  >
                    {" "}
                    <FaInstagram className="text-rose-500 text-4xl" />
                  </a>
                </span>
                <span className="social-icon-anim">
                  {" "}
                  <a
                    href="https://www.linkedin.com/company/99178797"
                    target="_blank"
                  >
                    {" "}
                    <FaLinkedin className="text-blue-700 text-4xl" />{" "}
                  </a>{" "}
                </span>
                <span className="social-icon-anim">
                  {" "}
                  <a href="https://twitter.com/ItBackbenchers" target="_blank">
                    {" "}
                    <FaXTwitter className=" text-4xl" />
                  </a>{" "}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="part3 my-10 ">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.036955462592!2d90.3655622313479!3d23.747049949820973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1703525894238!5m2!1sen!2sbd"
            style={{ border: "" }}
            className="rounded-lg px-4 w-[100%] h-[300px] mapAnim "
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
