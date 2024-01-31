import BottomBanner from "@/components/shared/BottomBanner";
import CardInfoTitle from "@/components/shared/CardInfoTitle";
import ContactUs from "@/components/shared/ContactUs";
import DynamicBanner from "@/components/shared/DynamicBanner/DynamicBanner";
import ServiceDetailsBanner from "@/components/shared/ServiceDetailsBanner/ServiceDetailsBanner";
import {
  webBanner,
  webContent,
  webDesignContent,
  webDesignNeedsContent,
  webHeadingContent,
  webNeedsContent,
} from "@/constants/constants";

const WebDevelopmentpage = () => {
  return (
    <div>
      <DynamicBanner content={webHeadingContent} />
      <CardInfoTitle content={webContent} />
      <ServiceDetailsBanner content={webNeedsContent} />
      <BottomBanner content={webBanner} />
      <ContactUs />
    </div>
  );
};

export default WebDevelopmentpage;
