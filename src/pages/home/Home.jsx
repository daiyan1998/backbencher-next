import ContactUs from "@/components/shared/ContactUs";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import DigitalImageGallery from "./DigitalImageGallery";
import Services from "./Services/Services";
import WhyUs from "./WhyUs/WhyUs";
import BottomBanner from "@/components/shared/BottomBanner";
import { homeBanner } from "@/constants/constants";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs />
      <WhyUs />
      <Services />
      <DigitalImageGallery />
      <ContactUs />
      <BottomBanner content={homeBanner}></BottomBanner>
    </div>
  );
};

export default Home;
