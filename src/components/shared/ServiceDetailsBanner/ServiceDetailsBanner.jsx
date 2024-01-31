import Image from "next/image";
import banner4 from "../../../assets/download (6) 4.png";

const ServiceDetailsBanner = ({ content }) => {
  return (
    <div className="mx-5">
      {content?.title}
      <div className="flex  gap-20 md:my-20 ">
        <div className="w-1/2 flex items-center hidden md:block justify-center">
          <Image className="w-1/2  h-1/2" src={banner4} alt="" />
        </div>

        <div className="w-full space-y-10">
          {content?.subTexts.map(({ icon, content, title }) => (
            <div key={title} className=" space-y-2">
              <div className="flex  gap-5 ">
                <Image className="w-6 h-6 mt-1" src={icon} alt="" />
                <h1 className="text-2xl font-semibold">{title}</h1>
              </div>
              <p className="text-lg font-normal text-[#5A5E63] ">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsBanner;
