import React from "react";
import { YellowBox } from "../HomeDesktopPageElements";
import GoogleMapBox from "./GoogleMapBox";
import {
  LocationCaption,
  LocationHeader,
  LocationHeaderWrapper,
  LocationSectionContainer,
} from "./LocationSectionElements";
import openHours from "../../../../data/openHours.json";

const locationCaptionText =
  "Restauracja Polonia \n ul. Artura Grottgera 16 \n 35-005 Rzeszów \n tel. 515 270 090";

const locationCaptionAdditionalText = `Godziny otwarcia: \n poniedziałek-piątek: ${openHours.mondayToFriday} \n sobota: ${openHours.saturday} \n niedziela: ${openHours.sunday}`;

const LocationSection = () => {
  return (
    <LocationSectionContainer>
      <GoogleMapBox />
      <LocationHeaderWrapper>
        <LocationHeader>
          {" "}
          <YellowBox />
          Serdecznie zapraszamy
        </LocationHeader>
        <LocationCaption>{locationCaptionText}</LocationCaption>
        <LocationCaption>{locationCaptionAdditionalText}</LocationCaption>
      </LocationHeaderWrapper>
    </LocationSectionContainer>
  );
};

export default LocationSection;
