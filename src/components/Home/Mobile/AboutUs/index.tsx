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
        Przygotowujemy posiłki zawsze ze świeżych i jakościowych składników.
        Nasi kucharze dbają o smak i wygląd każdej potrawy. Mamy wieloletnie
        doświadczenie, które wykorzystujemy aby zaspokoić Państwa podniebienia.
        Łączymy atmosferę gustownej i nowoczesnej restauracji z tradycyjnym
        smakiem "jak u mamy". Zapraszamy na wspólną podróż kulinarną do naszej
        restauracji.
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
