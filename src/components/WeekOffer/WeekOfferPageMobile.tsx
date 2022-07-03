import saveAs from "file-saver";
import React, { useEffect } from "react";
import { MenuMobilePageContainer } from "../Menu/Mobile/MenuPageElements";
import MediumButton from "../shared/Buttons/MediumButton";
import MobileFooter from "../shared/MobileFooter";
import MobileNavbar from "../shared/NavBar/Mobile";
import { WeeklyOfferImageMobile } from "./WeekOfferElements";

const WeekOfferPageMobile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadImage = () => {
    saveAs(`${process.env.PUBLIC_URL}/images/dania-dnia.png`, "dania-dnia.jpg");
  };

  return (
    <MenuMobilePageContainer>
      <MobileNavbar />
      <WeeklyOfferImageMobile
        src={process.env.PUBLIC_URL + `/images/dania-dnia.png?${Date.now()}`}
      />
      <MediumButton
        title={"Pobierz obraz"}
        marginTop={25}
        onClick={handleDownloadImage}
      />
      <MobileFooter />
    </MenuMobilePageContainer>
  );
};

export default WeekOfferPageMobile;
