import React from "react";
import {
  BackgroundVideo,
  ButtonGroup,
  Header,
  HeroCaption,
  HeroHeader,
  HeroSectionContainer,
} from "./HeroSectionElements";
import video from "../../../../videos/hero-video.mp4";
import LargeButton from "../../../shared/Buttons/LargeButton";
import { useNavigate } from "react-router-dom";

const MobileHeroSection = () => {
  const history = useNavigate();
  const routeToContact = () => {
    history("/kontakt");
  };
  const routeToMenu = () => {
    history("/menu");
  };
  return (
    <HeroSectionContainer>
      <BackgroundVideo
        src={video}
        loop
        autoPlay
        muted
        playsInline
      ></BackgroundVideo>
      <Header>
        <HeroHeader>
          Restauracja Polonia{" "}
          <HeroCaption>
            Tradycyjne potrawy kuchni polskiej w Rzeszowie.
          </HeroCaption>
          <HeroCaption>
            Odwiedź nas i odkryj niepowtarzalny smak naszych dań.
          </HeroCaption>
        </HeroHeader>
      </Header>
      <ButtonGroup>
        <LargeButton
          title={"Sprawdź gdzie jesteśmy"}
          onClick={routeToContact}
        />
        <LargeButton primary title={"Zobacz menu"} onClick={routeToMenu} />
      </ButtonGroup>
    </HeroSectionContainer>
  );
};

export default MobileHeroSection;
