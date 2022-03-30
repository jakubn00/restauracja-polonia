import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { GalleryPicturesContainer, PictureItem } from "./GalleryPageElements";
import picture1 from "../../../images/gallery/picture1.jpg";
import picture2 from "../../../images/gallery/picture2.jpg";
import picture3 from "../../../images/gallery/picture3.jpg";
import picture4 from "../../../images/gallery/picture4.jpg";
import picture5 from "../../../images/gallery/picture5.jpg";
import picture6 from "../../../images/gallery/picture6.jpg";
import picture7 from "../../../images/gallery/picture7.jpg";
import picture8 from "../../../images/gallery/picture8.jpg";
import picture9 from "../../../images/gallery/picture9.jpg";
import picture10 from "../../../images/gallery/picture10.jpg";
import picture11 from "../../../images/gallery/picture11.jpg";
import picture12 from "../../../images/gallery/picture12.jpg";
import picture13 from "../../../images/gallery/picture13.jpg";
import picture14 from "../../../images/gallery/picture14.jpg";
import picture15 from "../../../images/gallery/picture15.jpg";

const pictures = [
  { original: picture1, alt: "Pyszne placki po węgiersku" },
  { original: picture2, alt: "Smaczne desery" },
  { original: picture3, alt: "Pyszny obiad" },
  { original: picture4, alt: "Pyszny rosół" },
  { original: picture5, alt: "Pyszny obiad" },
  { original: picture6, alt: "Pyszny obiad" },
  { original: picture7, alt: "Restauracja Polonia- zdjęcie z zewnątrz" },
  { original: picture8, alt: "Restauracja Polonia- zdjęcie z zewnątrz" },
  { original: picture9, alt: "Restauracja Polonia- zdjecie sali" },
  { original: picture10, alt: "Restauracja Polonia- zdjecie sali" },
  { original: picture11, alt: "Restauracja Polonia- zdjecie sali" },
  { original: picture12, alt: "Restauracja Polonia- zdjecie sali" },
  { original: picture13, alt: "Wystrój sali na imprezę" },
  { original: picture14, alt: "Wystrój sali na imprezę" },
  { original: picture15, alt: "Wystrój sali na imprezę" },
];

const GalleryPictures = () => {
  return (
    <React.Fragment>
      <GalleryPicturesContainer>
        {pictures.map((itemUrl, index) => (
          <Zoom key={index}>
            <PictureItem src={itemUrl.original} alt={itemUrl.alt} />
          </Zoom>
        ))}
      </GalleryPicturesContainer>
    </React.Fragment>
  );
};

export default GalleryPictures;
