import htmlLogo from "../../../assets/bannerIcons/html5.png";
import jsLogo from "../../../assets/bannerIcons/js.png";
import figma from "../../../assets/bannerIcons/figma.png";
import fluter from "../../../assets/bannerIcons/flutter.png";
import addSense from "../../../assets/bannerIcons/addSense.png";
import java from "../../../assets/bannerIcons/java.png";
import purpleLine3 from "../../../assets/bannerIcons/purpleLine3.png";
import smallPinkLine from "../../../assets/bannerIcons/smallPinkLine.png";
import purpleLine1 from "../../../assets/bannerIcons/purpleLine1.png";
import pinkLine1 from "../../../assets/bannerIcons/pinkLine1.png";
import smallPurpleLine from "../../../assets/bannerIcons/smallPurpleLine.png";
import btnArrow from "../../../assets/bannerIcons/btnArrow.png";
import Link from "next/link";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="md:mt-32 mt-10 p-2">
      {/* -----main div starts here-----  */}
      <div className="mx-auto text-center relative">
        <Image
          className="banner-icon top-14 md:top-20 left-10 md:left-20"
          src={jsLogo}
          alt="js icon"
        />
        <Image
          className="banner-icon top-40 md:top-64 left-12 md:left-56"
          src={figma}
          alt="figma icon"
        />
        <Image
          className="banner-icon -top-8 md:-top-12 right-2 md:right-16"
          src={htmlLogo}
          alt="html icon"
        />
        <Image
          className="banner-icon top-16 md:top-52 right-10 md:right-36"
          src={fluter}
          alt="fluter icon"
        />
        <Image
          className="banner-icon md:right-1/3 right-1/4 md:bottom-10 bottom-10 opacity-65"
          src={addSense}
          alt="addSense icon"
        />
        <Image
          className="banner-icon left-1/3 md:left-[40%] md:-top-20 -top-10"
          src={java}
          alt="java icon"
        />
        <div className="relative lg:w-[907px] md:w-[512px] w-80 mx-auto">
          <Image
            className="absolute -left-3 -top-8 -z-10 h-10 md:h-auto animate-pulse"
            src={purpleLine3}
            alt="3 purple line icon"
          />
          <Image
            className="absolute left-1/2 md:-top-16 -top-8 -z-10 animate-pulse"
            src={smallPinkLine}
            alt="small pink line icon"
          />
          <Image
            className="absolute right-16 -top-12 -z-10 h-10 md:h-auto animate-pulse"
            src={purpleLine1}
            alt="purple line icon"
          />
          <h1 className="banner-h1">
            Elevate Your <span className="text-primary">Digital Presence</span>{" "}
            with Our Expertise For Enduring Success
          </h1>
        </div>
        <p className="banner-para">
          We transform businesses into digital powerhouses through cutting-edge
          web
        </p>
        <Link
          className="relative"
          href="https://wa.me/+8801986298579"
          target="_blank"
        >
          <button className="bg-primary text-white text-xs md:text-xl py-4 px-9 rounded-full font-semibold shadow-lg shadow-primary/70 cursor-pointer transition-transform duration-700 ease transform hover:translate-x-1 hover:shadow-xl">
            Schedule A Call
          </button>
          <Image
            className="absolute animate-arrow-anim -z-10 h-10 md:h-auto -right-32 md:-right-32 top-1"
            src={btnArrow}
            alt="Schedule A Call button"
          />
          <Image
            className="absolute -z-10 h-10 md:h-auto bottom-16 animate-pulse"
            src={pinkLine1}
            alt="pink line icon"
          />
          <Image
            className="absolute -z-10 right-1/2 md:-right-64 -top-8 md:top-1 animate-pulse"
            src={smallPurpleLine}
            alt="small purple line icon"
          />
        </Link>
      </div>
      {/* -----main div ends here-----  */}
    </div>
  );
};

export default Banner;
