import React from "react";
import {
  AboutUsCaption,
  AboutUsHeader,
  AboutUsHeaderWrapper,
  AboutUsPicture,
  AboutUsSectionContainer,
  YellowBox,
} from "./HomeDesktopPageElements";
import aboutUsPicture from "../../../images/about-us-picture.jpg";
import MediumButton from "../../shared/Buttons/MediumButton";
import { useNavigate } from "react-router-dom";

const AboutUsSection = () => {
  const history = useNavigate();
  const routeToGallery = () => {
    history("/galeria");
  };
  return (
    <AboutUsSectionContainer>
      <AboutUsPicture src={aboutUsPicture} />
      <AboutUsHeaderWrapper>
        <AboutUsHeader>
          <YellowBox />O nas{" "}
        </AboutUsHeader>
        <AboutUsCaption>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu est
          ante. Aenean efficitur tellus mi, at condimentum libero aliquet at.
          Vivamus tincidunt ut magna ut hendrerit. Pellentesque sit amet
          dignissim massa. In hac habitasse platea dictumst. Aliquam quis magna
          et eros laoreet luctus. In ac laoreet eros, vel viverra odio. Maecenas
          porta magna lacus, auctor tempor diam molestie ut. Praesent at tortor
          tristique, pharetra metus ut, egestas risus.
        </AboutUsCaption>
        <MediumButton
          title="Więcej zdjęć"
          customWidth={230}
          marginTop={30}
          onClick={routeToGallery}
        />
      </AboutUsHeaderWrapper>
    </AboutUsSectionContainer>
  );
};

export default AboutUsSection;
