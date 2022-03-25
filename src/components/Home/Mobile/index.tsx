import React, { useEffect, useState } from "react";
import Navbar from "../../shared/NavBar";
import MobileAboutUsSection from "./AboutUs";
import MobileEventsSection from "./EventsSection";
import MobileHeroSection from "./HeroSection";
import { HomeMobilePageContainer } from "./HomeMobilePageElements";
import MobileLocationSection from "./LocationSection";
import MobileOurOfferSection from "./OurOffer";

const HomeMobilePage = () => {
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
    <HomeMobilePageContainer>
      <Navbar isMobile isDarker={handleGetNavbarTheme()} />
      <MobileHeroSection />
      <MobileAboutUsSection />
      <MobileOurOfferSection />
      <MobileEventsSection />
      <MobileLocationSection />
    </HomeMobilePageContainer>
  );
};

export default HomeMobilePage;
