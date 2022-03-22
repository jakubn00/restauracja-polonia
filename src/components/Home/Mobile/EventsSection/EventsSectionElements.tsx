import styled from "styled-components";
import { DARK_BACKGROUND_COLOR } from "../../../../utils/colors";
import { FUTURA_H2, BODY } from "../../../../utils/fontSizes";

export const EventsPicture = styled.img`
  width: 82vw;
  border-radius: 8%;
  margin-top: 16px;
  align-self: center;
  -webkit-box-shadow: 0px 10px 24px 0px rgba(66, 68, 90, 0.8);
  -moz-box-shadow: 0px 10px 24px 0px rgba(66, 68, 90, 0.8);
  box-shadow: 0px 10px 10px 0px rgba(15, 15, 15, 0.3);
`;

export const EventsSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
`;

export const EventsHeader = styled.h2`
  font-size: ${FUTURA_H2};
  font-weight: 600;
  color: ${DARK_BACKGROUND_COLOR};
  padding: 0 20px;
`;

export const EventsCaption = styled.p`
  font-family: "Lato", sans-serif;
  font-size: ${BODY};
  font-weight: 200;
  padding: 0 20px;
  margin-top: 10px;
  color: ${DARK_BACKGROUND_COLOR};
`;

export const EventsMediumButtonWrapper = styled.div`
  align-self: center;
`;
