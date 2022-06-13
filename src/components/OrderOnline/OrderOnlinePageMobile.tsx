import React, { useEffect } from "react";
import { MenuFrame } from "../Menu/Desktop/MenuPageElements";
import { MenuMobilePageContainer } from "../Menu/Mobile/MenuPageElements";
import MobileFooter from "../shared/MobileFooter";
import MobileNavbar from "../shared/NavBar/Mobile";

const OrderOnlinePageMobile = () => {
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
    <MenuMobilePageContainer>
      <MobileNavbar />
      <div id="restaumatic_menu_widget_wrapper">
        <MenuFrame
          src="https://restauracja-polonia.skubacz.pl/restauracje"
          width="100%"
          title="Menu"
        ></MenuFrame>
      </div>
      {/* <MenuMobileItems /> */}
      <MobileFooter />
    </MenuMobilePageContainer>
  );
};

export default OrderOnlinePageMobile;
