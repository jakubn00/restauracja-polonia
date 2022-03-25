import React from "react";
import {
  LocationCaption,
  LocationSectionContainer,
  LocationSectionHeader,
} from "./LocationSectionElements";
import openHours from "../../../../data/openHours.json";
import GoogleMapBoxMobile from "./GoogleMapBoxMobile";

const locationCaptionText =
  "Restauracja Polonia \n ul. Artura Grottgera 16 \n 35-005 Rzeszów \n tel. 515 270 090";

const locationCaptionAdditionalText = `Godziny otwarcia: \n poniedziałek-piątek: ${openHours.mondayToFriday} \n sobota: ${openHours.saturday} \n niedziela: ${openHours.sunday}`;

const MobileLocationSection = () => {
  return (
    <LocationSectionContainer>
      <LocationSectionHeader>Serdecznie zapraszamy</LocationSectionHeader>
      <LocationCaption>{locationCaptionText}</LocationCaption>
      <LocationCaption>{locationCaptionAdditionalText}</LocationCaption>
      <GoogleMapBoxMobile />
    </LocationSectionContainer>
  );
};

export default MobileLocationSection;
