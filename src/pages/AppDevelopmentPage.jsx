import BottomBanner from "@/Components/Shared/BottomBanner";
import CardInfoTitle from "@/Components/Shared/CardInfoTitle";
import ContactUs from "@/Components/Shared/ContactUs";
import DynamicBanner from "@/Components/Shared/DynamicBanner/DynamicBanner";
import ServiceDetailsBanner from "@/Components/Shared/ServiceDetailsBanner/ServiceDetailsBanner";
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
