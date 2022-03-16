import React from "react";
import MediumButton from "../../../shared/Buttons/MediumButton";
import { YellowBox } from "../HomeDesktopPageElements";
import eventsPicture from "../../../../images/about-us-picture.jpg";
import {
  EventsCaption,
  EventsHeader,
  EventsHeaderWrapper,
  EventsPicture,
  EventsSectionContainer,
} from "./EventsSectionElements";
import { useNavigate } from "react-router-dom";

const EventsSection = () => {
  const history = useNavigate();
  const routeToContact = () => {
    history("/kontakt");
  };
  return (
    <EventsSectionContainer>
      <EventsHeaderWrapper>
        <EventsHeader>
          <YellowBox />
          Imprezy okolicznościowe
        </EventsHeader>
        <EventsCaption>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio in aut
          porro quae, repellat, ea neque nobis similique ad dicta amet minima
          aliquid hic officia eveniet tenetur rerum velit mollitia.
        </EventsCaption>
        <MediumButton
          title="Kontakt"
          customWidth={230}
          marginTop={30}
          onClick={routeToContact}
        />
      </EventsHeaderWrapper>
      <EventsPicture src={eventsPicture} />
    </EventsSectionContainer>
  );
};

export default EventsSection;
