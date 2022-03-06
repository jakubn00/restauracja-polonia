import React, { useEffect, useState } from "react";
import Navbar from "../../shared/NavBar";
import AboutUsSection from "./AboutUsSection";
import EventsSection from "./EventsSection";
import HeroSection from "./HeroSection";
import { HomeDesktopPageContainer } from "./HomeDesktopPageElements";
import LocationSection from "./LocationSection";
import OurOfferSection from "./OurOfferSection";

const HomeDesktopPage: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState({
    scrollX: 0,
    scrollY: 0,
  });
  useEffect(() => {
    function updatePosition() {
      setScrollPosition({ scrollX: window.scrollX, scrollY: window.scrollY });
    }

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const handleGetNavbarTheme = () => {
    if (scrollPosition.scrollY >= 300) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <React.Fragment>
      <HomeDesktopPageContainer>
        <Navbar isDarker={handleGetNavbarTheme()} />
        <HeroSection />
        <AboutUsSection />
        <OurOfferSection />
        <EventsSection />
        <LocationSection />
      </HomeDesktopPageContainer>
    </React.Fragment>
  );
};

export default HomeDesktopPage;
