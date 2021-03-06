import React from "react";
import {
  ContactCaption,
  ContactHeader,
  ContactHeaderWrapper,
  ContactLink,
  ContactLinkWrapper,
  ContactSectionContainer,
  FooterIconLink,
  FooterIconsWrapper,
  LinkBolderText,
} from "./MobileContactPageElements";
import openHours from "../../../data/openHours.json";
import {
  AiFillMail,
  AiFillPhone,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import GoogleMapBoxContactMobile from "./GoogleMapBoxContactMobile";

const captionText =
  "Restauracja Polonia \n ul. Artura Grottgera 16 \n 35-005 Rzeszów";

const captionAdditionalText = `Godziny otwarcia: \n poniedziałek-piątek: ${openHours.mondayToFriday} \n sobota: ${openHours.saturday} \n niedziela: ${openHours.sunday}`;

const ContactInfoMobile = () => {
  return (
    <ContactSectionContainer>
      <ContactHeaderWrapper>
        <ContactHeader>Jak się z nami skontaktować?</ContactHeader>
        <ContactCaption>{captionText}</ContactCaption>
        <ContactCaption>{captionAdditionalText}</ContactCaption>
        <ContactLinkWrapper>
          <ContactLink href="tel:+48515270090">
            <AiFillPhone style={{ marginRight: "6px" }} />
            Zadzwoń pod <LinkBolderText>515 270 090</LinkBolderText>
          </ContactLink>
          <ContactLink href="mailto:kontakt@restauracja-polonia.com">
            <AiFillMail style={{ marginRight: "6px" }} />
            Napisz do nas na
            <LinkBolderText> kontakt@restauracja-polonia.com</LinkBolderText>
          </ContactLink>
        </ContactLinkWrapper>
        <FooterIconsWrapper>
          <FooterIconLink
            href="https://www.facebook.com/Restauracja-Polonia-101206695074132/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineFacebook size={42} />
          </FooterIconLink>

          <FooterIconLink
            href="https://www.instagram.com/restauracja.polonia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram size={42} />
          </FooterIconLink>
        </FooterIconsWrapper>
      </ContactHeaderWrapper>
      <GoogleMapBoxContactMobile />
    </ContactSectionContainer>
  );
};

export default ContactInfoMobile;
