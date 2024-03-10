import BottomBanner from "@/components/shared/BottomBanner";
import CardInfoTitle from "@/components/shared/CardInfoTitle";
import ContactUs from "@/components/shared/ContactUs";
import DynamicBanner from "@/components/shared/DynamicBanner/DynamicBanner";
import ServiceDetailsBanner from "@/components/shared/ServiceDetailsBanner/ServiceDetailsBanner";
import {
  digitalBanner,
  digitalContent,
  digitalHeadingContent,
  digitalNeedsContent,
} from "@/constants/constants";

const DigitalMerketing = () => {
  return (
    <div>
      <DynamicBanner content={digitalHeadingContent} />
      <CardInfoTitle content={digitalContent} />
      <ServiceDetailsBanner content={digitalNeedsContent} />
      <BottomBanner content={digitalBanner} />
      <ContactUs></ContactUs>
    </div>
  );
};

export default DigitalMerketing;
