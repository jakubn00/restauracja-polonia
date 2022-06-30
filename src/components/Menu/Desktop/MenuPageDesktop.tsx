import saveAs from "file-saver";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MediumButton from "../../shared/Buttons/MediumButton";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/NavBar";
import MenuItems from "./MenuItems";
import { ButtonGroup, MenuDesktopPageContainer } from "./MenuPageElements";

const MenuPageDesktop = () => {
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
    <React.Fragment>
      <MenuDesktopPageContainer>
        <Navbar />
        <ButtonGroup>
          <MediumButton
            primary
            title={"Zobacz ofertę tygodnia"}
            onClick={routeToWeekOffer}
          />
          <MediumButton
            title={"Pobierz menu w PDF"}
            onClick={downloadMenuAsPdf}
          />
        </ButtonGroup>
        <MenuItems />
        <Footer />
      </MenuDesktopPageContainer>
    </React.Fragment>
  );
};

export default MenuPageDesktop;
