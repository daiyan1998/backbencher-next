"use client";
import figma from "@/assets/icons/skill/figma.png";
import flutter from "@/assets/icons/skill/flutter.svg";
import css3 from "@/assets/icons/skill/css3.png";
import html5 from "@/assets/icons/skill/html5.png";
import js from "@/assets/icons/skill/js.png";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import Image from "next/image";

const BottomBanner = ({ content }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div className="flex justify-center bg-primary text-white rounded-3xl relative my-[120px]">
      <div className="flex flex-col items-center md:py-16 p-10">
        <h1 className="pb-3 md:text-5xl text-3xl text-center font-bold">
          {content?.title}
        </h1>
        <div className="text-center w-3/4 mx-auto pb-8">
          <p className="  font-medium">
            {content?.subPara} {content?.subPara2} {content?.subPara3}
          </p>
        </div>

        <button
          onClick={handleOpen}
          className="px-9 py-4 border rounded-full bg-white text-black font-semibold text-xl"
        >
          Schedule a Consultation
        </button>
        <Dialog
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
          className="bg-gradient-to-r from-purple-100 to-yellow-50"
        >
          <DialogHeader>We are Happy to Hear You</DialogHeader>
          <DialogBody className="flex justify-center items-center">
            <form
              action="https://getform.io/f/99f98217-5577-4d61-92bb-fe62f5f7e80a"
              method="POST"
              className="w-full max-w-lg"
            >
              <div className="flex flex-wrap -mx-3 ">
                <div className="w-full md:w-1/2 px-3  md:mb-0">
                  <label className="block uppercase tracking-wide text-purple-700 text-xs font-bold mb-2">
                    Name
                  </label>
                  <input
                    className="appearance-none  block w-full text-gray-900 border
                     border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                    name="name"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-purple-700 text-xs font-bold mb-2">
                    E-mail address
                  </label>
                  <input
                    className="appearance-none  block w-full text-gray-900 border
                     border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-last-name"
                    type="email"
                    placeholder="info@gmail.com"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 md:w-1/2">
                  <label className="block uppercase tracking-wide text-purple-700 text-xs font-bold mb-2">
                    Phone
                  </label>
                  <input
                    className="appearance-none  block w-full text-gray-900 border
                     border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-password"
                    type="text"
                    placeholder="(+1) 123 456 7890"
                    name="phone"
                    required
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label className="block uppercase tracking-wide text-purple-700 text-xs font-bold mb-2">
                    Date
                  </label>
                  <input
                    className="appearance-none  block w-full text-gray-900 border
                     border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-password"
                    type="date"
                    placeholder="Time"
                    name="subject"
                    required
                  />
                </div>
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-purple-700 text-xs font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    className="appearance-none block w-full text-gray-700 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    rows={5}
                    id="grid-password"
                    type="text"
                    placeholder="Type your messages here..."
                    name="message"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="btn-primary">
                  Send
                </button>
              </div>
            </form>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
      {/* bg icons */}
      <div>
        <Image
          className="absolute top-14 right-24"
          src={html5}
          alt="html5 icon"
        />
        <Image className="absolute bottom-12 right-40" src={js} alt="js icon" />
        <Image
          className="absolute top-7 left-48"
          src={figma}
          alt="figma icon"
        />
        <Image
          className="absolute top-24 left-5"
          src={flutter}
          alt="flutter icon"
        />
        <Image
          className="absolute bottom-12 left-44"
          src={css3}
          alt="css3 icon"
        />
      </div>
    </div>
  );
};

export default BottomBanner;
