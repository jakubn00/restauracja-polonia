import styled from "styled-components";
import {
  DARKER_GRAY_COLOR,
  DARK_BACKGROUND_COLOR,
  GRAY_COLOR,
  LIGHT_BACKROUND_COLOR,
  POLONIA_DARKER_YELLOW_COLOR,
  POLONIA_YELLOW_COLOR,
} from "../../utils/colors";
import { BODY, FUTURA_H2 } from "../../utils/fontSizes";

export const ContactDesktopPageContainer = styled.div`
  min-height: 100vh;
  background-color: ${LIGHT_BACKROUND_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContactSectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

export const ContactHeaderWrapper = styled.div`
  align-self: flex-start;
  color: ${DARK_BACKGROUND_COLOR};
  margin-left: 2%;
`;

export const ContactHeader = styled.h2`
  font-size: ${FUTURA_H2};
  font-weight: 600;
`;

export const ContactCaption = styled.p`
  font-family: "Lato", sans-serif;
  font-size: ${BODY};
  font-weight: 600;
  margin-top: 24px;
  line-height: 26px;
  white-space: pre-wrap;
`;

export const ContactLinkWrapper = styled.div`
  margin-top: 24px;
`;

export const ContactLink = styled.a`
  text-decoration: underline;
  color: ${DARK_BACKGROUND_COLOR};
  font-family: "Lato", sans-serif;
  font-size: ${BODY};
  font-weight: 400;
  line-height: 26px;
  margin-top: 4px;
  display: block;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: ${POLONIA_DARKER_YELLOW_COLOR};
  }
`;

export const LinkBolderText = styled.span`
  font-family: "Lato", sans-serif;
  font-size: ${BODY};
  font-weight: 600;
`;
