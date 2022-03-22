import React from "react";
import MobileDishCard from "./MobileDishCard";
import {
  GoToMenuButtonWrapper,
  OurOfferHeader,
  OurOfferSectionContainer,
  SectionTitleYellowBox,
} from "./OurOfferSectionElements";
import saladPicture from "../../../../images/salad-picture.png";
import soupPicture from "../../../../images/soup-picture.png";
import dishPicture from "../../../../images/dish-picture.png";
import dessertPicture from "../../../../images/dessert-picture.png";
import LargeButton from "../../../shared/Buttons/LargeButton";
import { useNavigate } from "react-router-dom";

const saladsDesc = "Zdrowe i smaczne. Zawsze ze świeżych warzyw.";
const soupsDesc =
  "Pyszne i rozgrzewające. Przygotowane ze składników najwyższej jakości.";
const dishesDesc = "Pożywne i apetyczne. Jak prawdziwe domowe obiady.";
const dessertsDesc = "Słodkie i owocowe. Podane z kawą smakują najlepiej.";

const MobileOurOfferSection = () => {
  const history = useNavigate();
  const routeToMenu = () => {
    history("/menu");
  };
  return (
    <OurOfferSectionContainer>
      <SectionTitleYellowBox>
        <OurOfferHeader>Nasza oferta</OurOfferHeader>
      </SectionTitleYellowBox>
      <MobileDishCard
        title="Sałatki"
        description={saladsDesc}
        picture={saladPicture}
      />
      <MobileDishCard
        title="Zupy"
        description={soupsDesc}
        picture={soupPicture}
      />
      <MobileDishCard
        title="Drugie dania"
        description={dishesDesc}
        picture={dishPicture}
      />
      <MobileDishCard
        title="Desery"
        description={dessertsDesc}
        picture={dessertPicture}
      />
      <GoToMenuButtonWrapper>
        <LargeButton title="Zobacz nasze menu" primary onClick={routeToMenu} />
      </GoToMenuButtonWrapper>
    </OurOfferSectionContainer>
  );
};

export default MobileOurOfferSection;
