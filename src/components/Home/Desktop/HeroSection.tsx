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

const HeroSection = () => {
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
            <LargeButton title={"Sprawdź gdzie jesteśmy"} />
            <LargeButton primary title={"Zobacz menu"} />
          </ButtonGroup>
        </HeroHeader>
      </Header>
    </HeroSectionContainer>
  );
};

export default HeroSection;
