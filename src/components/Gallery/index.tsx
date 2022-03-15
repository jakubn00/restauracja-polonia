import React from "react";
import GalleryPageDesktop from "./Desktop/GalleryPageDesktop";

interface IProps {
  isMobile: boolean;
}

const Gallery: React.FC<IProps> = ({ isMobile }) => {
  return (
    <React.Fragment>
      {isMobile ? <div>Gallery Mobile</div> : <GalleryPageDesktop />}
    </React.Fragment>
  );
};

export default Gallery;
