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

const MobileDishCard: React.FC<IProps> = ({ title, description, picture }) => {
  const getFormattedDescription = () => {
    return description.replace(".", ". \n");
  };
  return (
    <CardContainer>
      <CardImage src={picture} alt={title} />
      <CardTextWrapper>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{getFormattedDescription()}</CardDescription>
      </CardTextWrapper>
    </CardContainer>
  );
};

export default MobileDishCard;
