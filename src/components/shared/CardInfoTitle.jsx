import { AiFillMediumCircle } from "react-icons/ai";
import { webDesignContent } from "@/constants/constants";
import Image from "next/image";

const CardInfoTitle = ({ content }) => {
  return (
    <div>
      {content?.title}
      <div className="flex flex-wrap justify-center gap-10 mb-[100px] mt-10">
        {content?.subTexts.map(({ title, icon, content }) => (
          <div
            key={title}
            className=" w-[315px] px-6 py-12 bg-white rounded-lg shadow-md lg:basis-1/4"
          >
            <Image src={icon} alt="" className="mb-10" />
            <p className="text-2xl font-semibold mb-3">{title}</p>
            <p className="text-style-secondary">{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardInfoTitle;
