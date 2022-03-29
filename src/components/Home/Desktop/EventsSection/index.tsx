import React from "react";
import MediumButton from "../../../shared/Buttons/MediumButton";
import { YellowBox } from "../HomeDesktopPageElements";
import eventsPicture from "../../../../images/events-picture.jpg";
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
          Organizujemy również przeróżne imprezy. Robimy wszystko, aby każda
          uroczystość była zapamiętana przez wszystkich gości. Restauracja
          posiada odnowione i gustowne wnętrze. Połączenie takiego wystroju z
          pysznym jedzeniem sprawia, że każdy uczestnik będzie miło wspominał
          spędzony czas.
        </EventsCaption>
        <MediumButton
          title="Kontakt"
          customWidth={230}
          marginTop={30}
          onClick={routeToContact}
        />
      </EventsHeaderWrapper>
      <EventsPicture
        src={eventsPicture}
        loading="lazy"
        alt="Wystrój sali na komunię"
      />
    </EventsSectionContainer>
  );
};

export default EventsSection;
