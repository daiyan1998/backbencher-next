import figma from "../../../assets/icons/skill/figma.png";
import flutter from "../../../assets/icons/skill/flutter.svg";
import css3 from "../../../assets/icons/skill/css3.png";
import html5 from "../../../assets/icons/skill/html5.png";
import js from "../../../assets/icons/skill/js.png";
import Image from "next/image";

const Consultation = () => {
  return (
    <div className="flex justify-center bg-[#6BA8FB] text-white rounded-3xl relative my-[120px]">
      <div>
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
      <div className="flex flex-col items-center p-16">
        <h1 className="">Embrace the Future of Digital Success</h1>
        <p className="pb-8 w-[] text-center font-medium">
          Together, we&apos;ll craft a digital strategy that propels your
          business to new heights of growth and profitability.
        </p>
        <button className="px-9 py-4 border rounded-full bg-white text-black font-semibold text-xl">
          Schedule a Consultation
        </button>
      </div>
      <div>
        <Image
          className="absolute top-14 right-24"
          src={html5}
          alt="html5 icon"
        />
        <Image className="absolute bottom-12 right-40" src={js} alt="js icon" />
      </div>
    </div>
  );
};

export default Consultation;
