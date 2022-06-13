import React, { useEffect } from "react";
import {
  MenuDesktopPageContainer,
  MenuFrame,
} from "../Menu/Desktop/MenuPageElements";
import Footer from "../shared/Footer";
import Navbar from "../shared/NavBar";

const OrderOnlinePageDesktop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://restauracja-polonia.skubacz.pl/menu_widget.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <React.Fragment>
      <MenuDesktopPageContainer>
        <Navbar />
        <div id="restaumatic_menu_widget_wrapper">
          <MenuFrame
            src="https://restauracja-polonia.skubacz.pl/restauracje"
            width="100%"
            title="Menu"
          ></MenuFrame>
        </div>
        <Footer />
      </MenuDesktopPageContainer>
    </React.Fragment>
  );
};

export default OrderOnlinePageDesktop;
