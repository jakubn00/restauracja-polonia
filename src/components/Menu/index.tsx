import React from "react";
import MenuPageDesktop from "./Desktop/MenuPageDesktop";

interface IProps {
  isMobile: boolean;
}

const Menu: React.FC<IProps> = ({ isMobile }) => {
  return (
    <React.Fragment>
      {isMobile ? <div>Menu Mobile</div> : <MenuPageDesktop />}
    </React.Fragment>
  );
};

export default Menu;
