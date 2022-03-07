import React from "react";
import {
  FooterElementHeader,
  FooterColumnContainer,
  FooterParagraph,
} from "./FooterElements";
import openHours from "../../../../data/openHours.json";

const FooterOpenHours = () => {
  return (
    <FooterColumnContainer>
      <FooterElementHeader>Godziny otwarcia</FooterElementHeader>
      <FooterParagraph>pon-pt: {openHours.mondayToFriday}</FooterParagraph>
      <FooterParagraph>sobota: {openHours.saturday}</FooterParagraph>
      <FooterParagraph>niedziela: {openHours.sunday}</FooterParagraph>
    </FooterColumnContainer>
  );
};

export default FooterOpenHours;
