import React from "react";
import {
  AboutUsCaption,
  AboutUsHeader,
  AboutUsMediumButtonWrapper,
  AboutUsPicture,
  AboutUsWrapper,
} from "./AboutUsSectionElements";
import aboutUsPicture from "../../../../images/about-us-picture.jpg";
import { useNavigate } from "react-router-dom";
import MediumButton from "../../../shared/Buttons/MediumButton";

const MobileAboutUsSection = () => {
  const history = useNavigate();
  const routeToGallery = () => {
    history("/galeria");
  };
  return (
    <AboutUsWrapper>
      <AboutUsHeader>O nas</AboutUsHeader>
      <AboutUsCaption>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu est
        ante. Aenean efficitur tellus mi, at condimentum libero aliquet at.
        Vivamus tincidunt ut magna ut hendrerit. Pellentesque sit amet dignissim
        massa. In hac habitasse platea dictumst.
      </AboutUsCaption>
      <AboutUsPicture src={aboutUsPicture} />
      <AboutUsMediumButtonWrapper>
        <MediumButton
          title="Więcej zdjęć"
          customWidth={230}
          marginTop={30}
          onClick={routeToGallery}
        />
      </AboutUsMediumButtonWrapper>
    </AboutUsWrapper>
  );
};

export default MobileAboutUsSection;
