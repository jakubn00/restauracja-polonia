import React from "react";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import GoogleMapBox from "../Home/Desktop/LocationSection/GoogleMapBox";
import openHours from "../../data/openHours.json";
import {
  ContactCaption,
  ContactHeader,
  ContactHeaderWrapper,
  ContactLink,
  ContactLinkWrapper,
  ContactSectionContainer,
  LinkBolderText,
} from "./ContactPageElements";

const captionText =
  "Restauracja Polonia \n ul. Artura Grottgera 16 \n 35-005 Rzeszów";

const captionAdditionalText = `Godziny otwarcia: \n poniedziałek-piątek: ${openHours.mondayToFriday} \n sobota: ${openHours.saturday} \n niedziela: ${openHours.sunday}`;

const ContactInfo = () => {
  return (
    <ContactSectionContainer>
      <GoogleMapBox />
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
      </ContactHeaderWrapper>
    </ContactSectionContainer>
  );
};

export default ContactInfo;
