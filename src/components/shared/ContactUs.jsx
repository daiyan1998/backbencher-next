"use client";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import "@/style/global.css";
import ReactWhatsapp from "react-whatsapp";

const ContactUs = () => {
  return (
    <div className="sm:flex  md:mt-40 mt-10 text-center md:text-left gap-10 mb-[120px]">
      <div className="md:text-2xl basis-1/2">
        <p className="title-style-primary md:mb-4">Get in touch</p>
        <p className="md:text-style-primary mb-[60px] md:w-4/5">
          Ready to take the next step? Whether it&apos; s web development,
          digital marketing, or design services, we&apos;re here to bring your
          ideas to life. Fill out the form below, and one of our experts will
          get back to you shortly.
        </p>
        <div className="flex items-center gap-4 mb-5 conncet-anim1 ">
          <span>
            <IoLogoWhatsapp className=" text-green-500 text-4xl" />
          </span>

          <ReactWhatsapp
            className="cursor-pointer"
            number="+8801986298579 "
            message="Hello from BBIT Website!!!"
            target="_blank"
          >
            +8801986298579
          </ReactWhatsapp>
        </div>
        <div className="flex items-center gap-4 conncet-anim1 ">
          <span>
            <TiMessages className="text-skin-tertiary text-4xl " />
          </span>
          <a href="mailto:backbenchersithouse@gmail.com">
            <span>backbenchersithouse@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="basis-1/2">
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
    </div>
  );
};

export default ContactUs;
