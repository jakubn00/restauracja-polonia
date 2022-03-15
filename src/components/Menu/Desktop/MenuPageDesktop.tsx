import React, { useEffect } from "react";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/NavBar";
import MenuItems from "./MenuItems";
import { MenuDesktopPageContainer } from "./MenuPageElements";

const MenuPageDesktop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <MenuDesktopPageContainer>
        <Navbar />
        <MenuItems />
        <Footer />
      </MenuDesktopPageContainer>
    </React.Fragment>
  );
};

export default MenuPageDesktop;
