import BottomBanner from "@/components/shared/BottomBanner";
import CardInfoTitle from "@/components/shared/CardInfoTitle";
import ContactUs from "@/components/shared/ContactUs";
import DynamicBanner from "@/components/shared/DynamicBanner/DynamicBanner";
import ServiceDetailsBanner from "@/components/shared/ServiceDetailsBanner/ServiceDetailsBanner";
import {
  uiDesignBanner,
  uiDesignContent,
  uiDesignHeadingContent,
  uiDesignNeedsContent,
} from "@/constants/constants";
import React from "react";
const UiuxDesignPage = () => {
  return (
    <>
      <DynamicBanner content={uiDesignHeadingContent} />
      <CardInfoTitle content={uiDesignContent} />
      <ServiceDetailsBanner content={uiDesignNeedsContent} />
      <BottomBanner content={uiDesignBanner} />
      <ContactUs />
    </>
  );
};

export default UiuxDesignPage;
