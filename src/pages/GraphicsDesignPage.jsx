import BottomBanner from "@/components/shared/BottomBanner";
import CardInfoTitle from "@/components/shared/CardInfoTitle";
import ContactUs from "@/components/shared/ContactUs";
import DynamicBanner from "@/components/shared/DynamicBanner/DynamicBanner";
import ServiceDetailsBanner from "@/components/shared/ServiceDetailsBanner/ServiceDetailsBanner";
import {
  digitalBanner,
  graphicsContent,
  graphicsHeadingContent,
  graphicsNeedsContent,
} from "@/constants/constants";

const GraphicsDesign = () => {
  return (
    <div>
      <DynamicBanner content={graphicsHeadingContent} />
      <CardInfoTitle content={graphicsContent} />
      <ServiceDetailsBanner content={graphicsNeedsContent} />
      <BottomBanner content={digitalBanner} />
      <ContactUs></ContactUs>
    </div>
  );
};

export default GraphicsDesign;
