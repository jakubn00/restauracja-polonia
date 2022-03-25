import React, { useEffect } from "react";
import MobileFooter from "../../shared/MobileFooter";
import MobileNavbar from "../../shared/NavBar/Mobile";
import MenuMobileItems from "./MenuMobileItems";
import { MenuMobilePageContainer } from "./MenuPageElements";

const MenuPageMobile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MenuMobilePageContainer>
      <MobileNavbar />
      <MenuMobileItems />
      <MobileFooter />
    </MenuMobilePageContainer>
  );
};

export default MenuPageMobile;
