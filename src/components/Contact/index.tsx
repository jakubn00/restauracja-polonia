import React from "react";
import ContactDesktopPage from "./Desktop/ContactDesktopPage";
import ContactMobilePage from "./Mobile";

interface IProps {
  isMobile: boolean;
}

const Contact: React.FC<IProps> = ({ isMobile }) => {
  return (
    <React.Fragment>
      {isMobile ? <ContactMobilePage /> : <ContactDesktopPage />}
    </React.Fragment>
  );
};

export default Contact;
