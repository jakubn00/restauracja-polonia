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
      <AboutUsPicture
        src={aboutUsPicture}
        loading="lazy"
        alt="Zdjęcie restauracji z zewnątrz"
      />
      <AboutUsHeaderWrapper>
        <AboutUsHeader>
          <YellowBox />O nas{" "}
        </AboutUsHeader>
        <AboutUsCaption>
          Przygotowujemy posiłki zawsze ze świeżych i jakościowych składników.
          Nasi kucharze dbają o smak i wygląd każdej potrawy. Mamy wieloletnie
          doświadczenie, które wykorzystujemy aby zaspokoić Państwa
          podniebienia. Łączymy atmosferę gustownej i nowoczesnej restauracji z
          tradycyjnym smakiem "jak u mamy". Zapraszamy na wspólną podróż
          kulinarną do naszej restauracji.
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
