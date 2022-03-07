import styled from "styled-components";
import { DARK_BACKGROUND_COLOR } from "../../../../utils/colors";
import { BODY, FUTURA_H2 } from "../../../../utils/fontSizes";

export const EventsSectionContainer = styled.div`
  width: 100%;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EventsPicture = styled.img`
  width: 520px;
  border-radius: 8%;
  -webkit-box-shadow: 0px 10px 24px 0px rgba(66, 68, 90, 0.8);
  -moz-box-shadow: 0px 10px 24px 0px rgba(66, 68, 90, 0.8);
  box-shadow: 0px 10px 10px 0px rgba(15, 15, 15, 0.3);
`;

export const EventsHeaderWrapper = styled.div`
  align-self: flex-start;
  color: ${DARK_BACKGROUND_COLOR};
  width: 30%;
  margin-right: 2%;
`;

export const EventsHeader = styled.h2`
  font-size: ${FUTURA_H2};
  font-weight: 600;
`;

export const EventsCaption = styled.p`
  font-family: "Lato", sans-serif;
  font-size: ${BODY};
  font-weight: 200;
  margin-top: 12px;
`;
