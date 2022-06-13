import React from "react";
import LargeButton from "../../shared/Buttons/LargeButton";
import video from "../../../videos/hero-video.mp4";
import {
  BackgroundVideo,
  ButtonGroup,
  Header,
  HeroCaption,
  HeroHeader,
  HeroSectionContainer,
} from "./HomeDesktopPageElements";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const history = useNavigate();
  const routeToContact = () => {
    history("/kontakt");
  };
  const routeToOrderOnline = () => {
    history("/zamow-online");
  };
  return (
    <HeroSectionContainer>
      <BackgroundVideo src={video} loop autoPlay muted></BackgroundVideo>
      <Header>
        <HeroHeader>
          Restauracja Polonia{" "}
          <HeroCaption>
            Tradycyjne potrawy kuchni polskiej w Rzeszowie.
          </HeroCaption>
          <HeroCaption>
            Odwiedź nas i odkryj niepowtarzalny smak naszych dań.
          </HeroCaption>
          <ButtonGroup>
            <LargeButton
              title={"Sprawdź gdzie jesteśmy"}
              onClick={routeToContact}
            />
            <LargeButton
              primary
              title={"Zamów online"}
              onClick={routeToOrderOnline}
            />
          </ButtonGroup>
        </HeroHeader>
      </Header>
    </HeroSectionContainer>
  );
};

export default HeroSection;
