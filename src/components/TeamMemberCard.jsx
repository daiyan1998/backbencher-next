import { FaLinkedinIn, FaPhoneVolume } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import formalPic from "@/assets/demo/formalPic.avif";
import Image from "next/image";

const TeamMemberCard = () => {
  return (
    <div className="p-4 h-[371px] w-[278px] bg-white shadow-md text-center flex flex-col justify-around rounded-md">
      <Image src={formalPic} alt="" className="rounded-md" />
      <div>
        <p className="text-2xl font-semibold">Md. Naimur</p>
        <p className="text-sm text-gray-500">Sr. Software Dev</p>
      </div>
      <div className="flex justify-center gap-3 text-2xl">
        <FaPhoneVolume className=" border text-[#0092cc] border-opacity-30 rounded-md border-gray-400 p-3 box-content" />
        <IoMdMail className=" border text-[#0092cc] border-opacity-30 rounded-md border-gray-400 p-3 box-content" />
        <FaLinkedinIn className=" border text-[#0092cc] border-opacity-30 rounded-md border-gray-400 p-3 box-content" />
      </div>
    </div>
  );
};

export default TeamMemberCard;
