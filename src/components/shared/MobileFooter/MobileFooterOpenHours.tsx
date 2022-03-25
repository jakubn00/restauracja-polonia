import React from "react";
import openHours from "../../../data/openHours.json";
import {
  FooterColumnContainer,
  FooterElementHeader,
  FooterParagraph,
} from "./MobileFooterElements";

const MobileFooterOpenHours = () => {
  return (
    <FooterColumnContainer>
      <FooterElementHeader>Godziny otwarcia</FooterElementHeader>
      <FooterParagraph>pon-pt: {openHours.mondayToFriday}</FooterParagraph>
      <FooterParagraph>sobota: {openHours.saturday}</FooterParagraph>
      <FooterParagraph>niedziela: {openHours.sunday}</FooterParagraph>
    </FooterColumnContainer>
  );
};

export default MobileFooterOpenHours;
