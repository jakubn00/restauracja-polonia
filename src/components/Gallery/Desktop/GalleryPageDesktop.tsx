import React, { useEffect } from "react";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/NavBar";
import { GalleryDesktopPageContainer } from "./GalleryPageElements";
import GalleryPictures from "./GalleryPictures";

const GalleryPageDesktop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <GalleryDesktopPageContainer>
        <Navbar />
        <GalleryPictures />
        <Footer />
      </GalleryDesktopPageContainer>
    </React.Fragment>
  );
};

export default GalleryPageDesktop;
