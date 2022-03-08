import React from "react";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/NavBar";
import MenuItems from "./MenuItems";
import { MenuDesktopPageContainer } from "./MenuPageElements";

const MenuPageDesktop = () => {
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
