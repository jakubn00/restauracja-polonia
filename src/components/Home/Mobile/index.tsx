import React, { useEffect, useState } from "react";
import Navbar from "../../shared/NavBar";
import MobileHeroSection from "./HeroSection";
import { HomeMobilePageContainer } from "./HomeMobilePageElements";

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
    </HomeMobilePageContainer>
  );
};

export default HomeMobilePage;
