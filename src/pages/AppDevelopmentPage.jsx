import BottomBanner from "@/components/shared/BottomBanner";
import CardInfoTitle from "@/components/shared/CardInfoTitle";
import ContactUs from "@/components/shared/ContactUs";
import DynamicBanner from "@/components/shared/DynamicBanner/DynamicBanner";
import ServiceDetailsBanner from "@/components/shared/ServiceDetailsBanner/ServiceDetailsBanner";
import {
  appBanner,
  appContent,
  appHeadingContent,
  appNeedsContent,
} from "@/constants/constants";

const AppDevelopment = () => {
  return (
    <div>
      <DynamicBanner content={appHeadingContent} />
      <CardInfoTitle content={appContent} />
      <ServiceDetailsBanner content={appNeedsContent} />
      <BottomBanner content={appBanner} />
      <ContactUs></ContactUs>
    </div>
  );
};

export default AppDevelopment;
