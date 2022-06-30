import React from "react";
import {
  FooterColumnContainer,
  FooterElementHeader,
  FooterParagraphLink,
} from "./MobileFooterElements";

const MobileFooterLinks = () => {
  return (
    <FooterColumnContainer>
      <FooterElementHeader>Mapa strony</FooterElementHeader>
      <FooterParagraphLink to="/">Strona główna</FooterParagraphLink>
      <FooterParagraphLink to="/menu">Menu</FooterParagraphLink>
      <FooterParagraphLink to="/galeria">Galeria</FooterParagraphLink>
      <FooterParagraphLink to="/hotel">Hotel</FooterParagraphLink>
      <FooterParagraphLink to="/kontakt">Kontakt</FooterParagraphLink>
      <FooterParagraphLink to="/zamow-online">Zamów online</FooterParagraphLink>
      <FooterParagraphLink to="/dania-dnia">
        Oferta tygodnia
      </FooterParagraphLink>
    </FooterColumnContainer>
  );
};

export default MobileFooterLinks;
