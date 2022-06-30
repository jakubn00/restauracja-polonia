import React from "react";
import WeekOfferPageDesktop from "./WeekOfferPageDesktop";
import WeekOfferPageMobile from "./WeekOfferPageMobile";

interface IProps {
  isMobile: boolean;
}

const WeekOffer: React.FC<IProps> = ({ isMobile }) => {
  return (
    <React.Fragment>
      {isMobile ? <WeekOfferPageMobile /> : <WeekOfferPageDesktop />}
    </React.Fragment>
  );
};

export default WeekOffer;
