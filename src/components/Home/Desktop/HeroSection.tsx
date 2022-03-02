import React from "react";
import LargeButton from "../../shared/Buttons/LargeButton";
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
      <BackgroundVideo
        src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"
        loop
        autoPlay
        muted
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
