import React from "react";
import DishCard from "./DishCard";
import {
  OurOfferDishesContainer,
  OurOfferSectionContainer,
  OurOfferSectionTitle,
  SectionTitleYellowBox,
} from "./OurOfferSectionElements";
import saladPicture from "../../../../images/salad-picture.png";
import soupPicture from "../../../../images/soup-picture.png";
import dishPicture from "../../../../images/dish-picture.png";
import dessertPicture from "../../../../images/dessert-picture.png";
import LargeButton from "../../../shared/Buttons/LargeButton";

const saladsDesc = "Zdrowe i smaczne. Zawsze ze świeżych warzyw.";
const soupsDesc =
  "Pyszne i rozgrzewające. Przygotowane ze składników najwyższej jakości.";
const dishesDesc = "Pożywne i apetyczne. Jak prawdziwe domowe obiady.";
const dessertsDesc = "Słodkie i owocowe. Podane z kawą smakują najlepiej.";

const OurOfferSection = () => {
  return (
    <OurOfferSectionContainer>
      <SectionTitleYellowBox>
        <OurOfferSectionTitle>Nasza oferta</OurOfferSectionTitle>
      </SectionTitleYellowBox>
      <OurOfferDishesContainer>
        <DishCard
          title="Sałatki"
          description={saladsDesc}
          picture={saladPicture}
        />
        <DishCard title="Zupy" description={soupsDesc} picture={soupPicture} />
        <DishCard
          title="Drugie dania"
          description={dishesDesc}
          picture={dishPicture}
        />
        <DishCard
          title="Desery"
          description={dessertsDesc}
          picture={dessertPicture}
        />
      </OurOfferDishesContainer>
      <LargeButton title="Zobacz nasze menu" primary />
    </OurOfferSectionContainer>
  );
};

export default OurOfferSection;
