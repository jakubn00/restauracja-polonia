import React from "react";
import MenuPageDesktop from "./Desktop/MenuPageDesktop";
import MenuPageMobile from "./Mobile";

interface IProps {
  isMobile: boolean;
}

const Menu: React.FC<IProps> = ({ isMobile }) => {
  return (
    <React.Fragment>
      {isMobile ? <MenuPageMobile /> : <MenuPageDesktop />}
    </React.Fragment>
  );
};

export default Menu;
