"use client";
import UiUx from "../../../assets/icons/service/ui-ux-design.svg";
import graphic from "../../../assets/icons/service/graphic.svg";
import Web from "../../../assets/icons/service/web-design.svg";
import development from "../../../assets/icons/service/web-development.svg";
import app from "../../../assets/icons/service/app-dev.svg";
import digital from "../../../assets/icons/service//digital-marketing.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";

const servicesContent = [
  {
    title: "Web Design",
    content:
      "We employ cutting-edge digital marketing strategies to amplify your online presence, attract qualified leads, and drive targeted traffic to your website.",
    icon: Web,
    to: "webDesign",
    color: "#58BD7D",
  },
  {
    title: "Web Development",
    content:
      "We craft high-performance, scalable websites that seamlessly integrate your brand identity, enhance user experience, and drive conversions.",
    icon: development,
    to: "webDevelopment",
    color: "#3b5af4",
  },
  {
    title: "App Development",
    content:
      "At Backbenchers IT House, we're not just app developers; we're digital blacksmiths crafting powerful mobile experiences that dominate the competition and elevate your brand to market royalty. We don't build apps; we build empires.",
    icon: app,
    to: "appDevelopment",
    color: "#f5ae2b",
  },
  {
    title: "Ghrapic Design",
    content:
      "At Backbenchers IT House, we go beyond graphic design. We're digital samurai, seamlessly blending precision, storytelling, and artistry. Our creations aren't just logos; they're visual identities that roar like battle cries, conquering market share in the noisy digital arena.",
    icon: graphic,
    to: "graphicDesign",
    color: "#f00086",
  },
  {
    title: "Digital Marketing",
    content:
      "We employ cutting-edge digital marketing strategies to amplify your online presence, attract qualified leads, and drive targeted traffic to your website.",
    icon: digital,
    to: "digitalMarketing",
    color: "#e85e0e",
  },
  {
    title: "UI/UX Design",
    content:
      "We prioritize user experience, ensuring every interaction with your brand is intuitive, engaging, and memorable, fostering long-lasting customer relationships.",
    icon: UiUx,
    to: "uiUxDesign",
    color: "#AF60ED",
  },
];

const Services = () => {
  return (
    <div className="my-30">
      <h1 className="service-h1">
        Our <span className="text-primary">Comprehensive</span> Digital
        Solutions
      </h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={200}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1170: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <div className="">
          {servicesContent.map(({ title, icon, to, content, color }) => (
            <SwiperSlide key={title}>
              <Link href={to}>
                <div
                  className={`relative md:h-[450px] h-[350px] border-t-2 border-l-2 border-r-2  border- md:p-[68px] p-10 rounded-3xl`}
                  style={{ borderColor: color }}
                >
                  <Image className="pb-6" src={icon} alt="UI/UX Design icon" />
                  <div>
                    <h2 className="service-card-h2">{title}</h2>
                    <p className="service-card-p">{content}</p>
                    <span
                      className={`text-primary font-semibold text-xl underline`}
                    >
                      Learn More
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Services;
