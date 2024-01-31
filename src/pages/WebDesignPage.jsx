import BottomBanner from "@/components/shared/BottomBanner";
import CardInfoTitle from "@/components/shared/CardInfoTitle";
import ContactUs from "@/components/shared/ContactUs";
import DynamicBanner from "@/components/shared/DynamicBanner/DynamicBanner";
import ServiceDetailsBanner from "@/components/shared/ServiceDetailsBanner/ServiceDetailsBanner";
import {
  webDesignBanner,
  webDesignContent,
  webDesignHeadingContent,
  webDesignNeedsContent,
} from "@/constants/constants";

const WebDesignPage = () => {
  return (
    <div id="webDesign">
      <DynamicBanner content={webDesignHeadingContent} />
      <CardInfoTitle content={webDesignContent} />
      <ServiceDetailsBanner content={webDesignNeedsContent} />
      <BottomBanner content={webDesignBanner} />
      <ContactUs />
    </div>
  );
};

export default WebDesignPage;
