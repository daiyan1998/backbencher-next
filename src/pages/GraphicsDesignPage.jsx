import BottomBanner from "@/Components/Shared/BottomBanner";
import CardInfoTitle from "@/Components/Shared/CardInfoTitle";
import ContactUs from "@/Components/Shared/ContactUs";
import DynamicBanner from "@/Components/Shared/DynamicBanner/DynamicBanner";
import ServiceDetailsBanner from "@/Components/Shared/ServiceDetailsBanner/ServiceDetailsBanner";
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
