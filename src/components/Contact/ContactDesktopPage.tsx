import React, { useEffect } from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/NavBar";
import ContactInfo from "./ContactInfo";
import { ContactDesktopPageContainer } from "./ContactPageElements";

const ContactDesktopPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <ContactDesktopPageContainer>
        <Navbar />
        <ContactInfo />
        <Footer />
      </ContactDesktopPageContainer>
    </React.Fragment>
  );
};

export default ContactDesktopPage;
