import React from "react";
import GalleryPageDesktop from "./Desktop/GalleryPageDesktop";
import GalleryMobilePage from "./Mobile";

interface IProps {
  isMobile: boolean;
}

const Gallery: React.FC<IProps> = ({ isMobile }) => {
  return (
    <React.Fragment>
      {isMobile ? <GalleryMobilePage /> : <GalleryPageDesktop />}
    </React.Fragment>
  );
};

export default Gallery;
