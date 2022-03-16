import React from "react";
import ContactDesktopPage from "./ContactDesktopPage";

interface IProps {
  isMobile: boolean;
}

const Contact: React.FC<IProps> = ({ isMobile }) => {
  return (
    <React.Fragment>
      {isMobile ? <div>Contact Mobile</div> : <ContactDesktopPage />}
    </React.Fragment>
  );
};

export default Contact;
