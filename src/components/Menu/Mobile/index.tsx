import saveAs from "file-saver";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MediumButton from "../../shared/Buttons/MediumButton";
import MobileFooter from "../../shared/MobileFooter";
import MobileNavbar from "../../shared/NavBar/Mobile";
import MenuMobileItems from "./MenuMobileItems";
import { ButtonGroupMobile, MenuMobilePageContainer } from "./MenuPageElements";

const MenuPageMobile = () => {
  const history = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const routeToWeekOffer = () => {
    history("/dania-dnia");
  };

  const downloadMenuAsPdf = () => {
    saveAs(
      `${process.env.PUBLIC_URL}/files/menu.pdf`,
      "restauracja-polonia-menu.pdf"
    );
  };
  return (
    <MenuMobilePageContainer>
      <MobileNavbar />
      <ButtonGroupMobile>
        <MediumButton
          primary
          title={"Zobacz ofertę tygodnia"}
          onClick={routeToWeekOffer}
        />
        <MediumButton
          title={"Pobierz menu w PDF"}
          onClick={downloadMenuAsPdf}
        />
      </ButtonGroupMobile>
      <MenuMobileItems />
      <MobileFooter />
    </MenuMobilePageContainer>
  );
};

export default MenuPageMobile;
