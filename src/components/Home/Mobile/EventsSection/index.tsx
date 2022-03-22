import React from "react";
import {
  EventsCaption,
  EventsHeader,
  EventsMediumButtonWrapper,
  EventsPicture,
  EventsSectionContainer,
} from "./EventsSectionElements";
import eventsPicture from "../../../../images/about-us-picture.jpg";
import MediumButton from "../../../shared/Buttons/MediumButton";
import { useNavigate } from "react-router-dom";

const MobileEventsSection = () => {
  const history = useNavigate();
  const routeToContact = () => {
    history("/kontakt");
  };
  return (
    <EventsSectionContainer>
      <EventsHeader>Imprezy okolicznościowe</EventsHeader>
      <EventsCaption>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu est
        ante. Aenean efficitur tellus mi, at condimentum libero aliquet at.
        Vivamus tincidunt ut magna ut hendrerit. Pellentesque sit amet dignissim
        massa.
      </EventsCaption>
      <EventsPicture src={eventsPicture} alt="Impreza komunijna" />
      <EventsMediumButtonWrapper>
        <MediumButton
          title="Kontakt"
          customWidth={230}
          marginTop={30}
          onClick={routeToContact}
        />
      </EventsMediumButtonWrapper>
    </EventsSectionContainer>
  );
};

export default MobileEventsSection;
