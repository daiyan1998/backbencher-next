import ContactUs from "@/components/shared/ContactUs";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import DigitalImageGallery from "./DigitalImageGallery";
import Services from "./Services/Services";
import WhyUs from "./WhyUs/WhyUs";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs />
      <WhyUs />
      <Services />
      <DigitalImageGallery />
      <ContactUs />
    </div>
  );
};

export default Home;
