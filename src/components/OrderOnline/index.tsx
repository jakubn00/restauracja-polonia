import React from "react";
import OrderOnlinePageDesktop from "./OrderOnlinePageDesktop";
import OrderOnlinePageMobile from "./OrderOnlinePageMobile";

interface IProps {
  isMobile: boolean;
}

const OrderOnline: React.FC<IProps> = ({ isMobile }) => {
  return (
    <React.Fragment>
      {isMobile ? <OrderOnlinePageMobile /> : <OrderOnlinePageDesktop />}
    </React.Fragment>
  );
};

export default OrderOnline;
