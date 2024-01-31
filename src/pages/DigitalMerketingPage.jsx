import BottomBanner from "@/Components/Shared/BottomBanner";
import CardInfoTitle from "@/Components/Shared/CardInfoTitle";
import ContactUs from "@/Components/Shared/ContactUs";
import DynamicBanner from "@/Components/Shared/DynamicBanner/DynamicBanner";
import ServiceDetailsBanner from "@/Components/Shared/ServiceDetailsBanner/ServiceDetailsBanner";
import {
  digitalBanner,
  digitalContent,
  digitalHeadingContent,
  digitalNeedsContent,
} from "@/constants/constants";

const DigitalMerketing = () => {
  return (
    <div>
      {" "}
      <DynamicBanner content={digitalHeadingContent} />
      <CardInfoTitle content={digitalContent} />
      <ServiceDetailsBanner content={digitalNeedsContent} />
      <BottomBanner content={digitalBanner} />
      <ContactUs></ContactUs>
    </div>
  );
};

export default DigitalMerketing;
