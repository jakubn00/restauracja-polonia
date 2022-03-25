import React from "react";
import {
  EventsCaption,
  EventsHeader,
  EventsMediumButtonWrapper,
  EventsPicture,
  EventsSectionContainer,
} from "./EventsSectionElements";
import eventsPicture from "../../../../images/events-picture.jpg";
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
        Organizujemy również przeróżne imprezy. Robimy wszystko, aby każda
        uroczystość była zapamiętana przez wszystkich gości. Restauracja posiada
        odnowione i gustowne wnętrze. Połączenie takiego wystroju z pysznym
        jedzeniem sprawia, że każdy uczestnik będzie miło wspominał spędzony
        czas.
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
