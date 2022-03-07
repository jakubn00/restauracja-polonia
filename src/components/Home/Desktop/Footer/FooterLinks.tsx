import React from "react";
import {
  FooterColumnContainer,
  FooterElementHeader,
  FooterParagraphLink,
} from "./FooterElements";

const FooterLinks = () => {
  return (
    <FooterColumnContainer>
      <FooterElementHeader>Mapa strony</FooterElementHeader>
      <FooterParagraphLink to="/">Strona główna</FooterParagraphLink>
      <FooterParagraphLink to="/menu">Menu</FooterParagraphLink>
      <FooterParagraphLink to="/galeria">Galeria</FooterParagraphLink>
      <FooterParagraphLink to="/hotel">Hotel</FooterParagraphLink>
      <FooterParagraphLink to="/kontakt">Kontakt</FooterParagraphLink>
    </FooterColumnContainer>
  );
};

export default FooterLinks;
