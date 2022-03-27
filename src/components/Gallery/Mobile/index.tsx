import React, { useEffect } from "react";
import MobileFooter from "../../shared/MobileFooter";
import MobileNavbar from "../../shared/NavBar/Mobile";
import { GalleryMobilePageContainer } from "./GalleryMobilePageElements";
import MobileGalleryPictures from "./MobileGalleryPictures";

const GalleryMobilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <GalleryMobilePageContainer>
      <MobileNavbar />
      <MobileGalleryPictures />
      <MobileFooter />
    </GalleryMobilePageContainer>
  );
};

export default GalleryMobilePage;
