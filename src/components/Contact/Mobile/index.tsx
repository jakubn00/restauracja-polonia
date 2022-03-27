import React, { useEffect } from "react";
import MobileFooter from "../../shared/MobileFooter";
import MobileNavbar from "../../shared/NavBar/Mobile";
import ContactInfoMobile from "./ContactInfoMobile";
import { ContactMobileContainer } from "./MobileContactPageElements";

const ContactMobilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ContactMobileContainer>
      <MobileNavbar />
      <ContactInfoMobile />
      <MobileFooter />
    </ContactMobileContainer>
  );
};

export default ContactMobilePage;
