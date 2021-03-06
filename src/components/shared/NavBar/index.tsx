import React from "react";
import DesktopNavbar from "./Desktop";
import MobileNavbar from "./Mobile";

interface IProps {
  isMobile?: boolean;
  isDarker?: boolean;
}

const Navbar: React.FC<IProps> = ({ isMobile = false, isDarker = false }) => {
  const getComponent = (isMobile: boolean, isDarker: boolean) => {
    const expr =
      isMobile === true && isDarker === false
        ? "light-mobile"
        : isMobile === true && isDarker === true
        ? "dark-mobile"
        : isMobile === false && isDarker === true
        ? "dark-desktop"
        : "light-desktop";

    switch (expr) {
      case `light-mobile`:
        return <MobileNavbar />;
      case `dark-mobile`:
        return <MobileNavbar dark />;
      case `dark-desktop`:
        return <DesktopNavbar dark />;
      case `light-desktop`:
        return <DesktopNavbar />;
      default:
        console.log("Navbar error");
    }
  };
  return <React.Fragment>{getComponent(isMobile, isDarker)}</React.Fragment>;
};

export default Navbar;
