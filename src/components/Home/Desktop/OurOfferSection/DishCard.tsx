import React from "react";
import {
  CardContainer,
  CardDescription,
  CardImage,
  CardTextWrapper,
  CardTitle,
} from "./OurOfferSectionElements";

interface IProps {
  title: string;
  description: string;
  picture: string;
}

const DishCard: React.FC<IProps> = ({ title, description, picture }) => {
  const getFormattedDescription = () => {
    return description.replace(".", ". \n");
  };
  return (
    <CardContainer>
      <CardImage src={picture} loading="lazy" />
      <CardTextWrapper>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{getFormattedDescription()}</CardDescription>
      </CardTextWrapper>
    </CardContainer>
  );
};

export default DishCard;
