import React from "react";
import {
  FooterColumnContainer,
  FooterElementHeader,
  FooterParagraph,
} from "./FooterElements";

const FooterContact = () => {
  return (
    <FooterColumnContainer>
      <FooterElementHeader>Kontakt</FooterElementHeader>
      <FooterParagraph>kontakt@restauracja-polonia.com</FooterParagraph>
      <FooterParagraph>tel. 515 270 090</FooterParagraph>
      <FooterParagraph>ul. Artura Grottgera 16</FooterParagraph>
      <FooterParagraph>35-005 Rzeszów</FooterParagraph>
    </FooterColumnContainer>
  );
};

export default FooterContact;
