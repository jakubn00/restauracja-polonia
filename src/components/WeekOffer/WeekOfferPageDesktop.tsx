import React, { useEffect } from "react";
import { MenuDesktopPageContainer } from "../Menu/Desktop/MenuPageElements";
import Footer from "../shared/Footer";
import Navbar from "../shared/NavBar";
import { WeeklyOfferImage } from "./WeekOfferElements";
import { saveAs } from "file-saver";
import MediumButton from "../shared/Buttons/MediumButton";

const WeekOfferPageDesktop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadImage = () => {
    saveAs(`${process.env.PUBLIC_URL}/images/dania-dnia.png`, "dania-dnia.jpg");
  };

  return (
    <React.Fragment>
      <MenuDesktopPageContainer>
        <Navbar />
        <WeeklyOfferImage
          src={process.env.PUBLIC_URL + `/images/dania-dnia.png?${Date.now()}`}
        />
        <MediumButton
          title={"Pobierz obraz"}
          marginTop={25}
          onClick={handleDownloadImage}
        />
        <Footer />
      </MenuDesktopPageContainer>
    </React.Fragment>
  );
};

export default WeekOfferPageDesktop;
