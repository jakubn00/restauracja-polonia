import styled from "styled-components";
import {
  DARK_BACKGROUND_COLOR,
  LIGHT_BACKROUND_COLOR,
  POLONIA_DARKER_YELLOW_COLOR,
} from "../../../utils/colors";
import { FUTURA_H2, BODY } from "../../../utils/fontSizes";

export const ContactMobileContainer = styled.div`
  min-height: 100vh;
  background-color: ${LIGHT_BACKROUND_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const ContactSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const ContactHeaderWrapper = styled.div`
  align-self: center;
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

export const MapOuter = styled.div`
  position: relative;
  text-align: right;
  height: 420px;
  width: 100%;
  margin-top: 60px;
  -webkit-box-shadow: 0px 10px 24px 0px rgba(66, 68, 90, 0.8);
  -moz-box-shadow: 0px 10px 24px 0px rgba(66, 68, 90, 0.8);
  box-shadow: 0px 10px 10px 0px rgba(15, 15, 15, 0.3);
`;

export const MapCanvas = styled.div`
  overflow: hidden;
  background: none !important;
  height: 420px;
  width: 100%;
`;

export const MapFrame = styled.iframe`
  overflow: hidden;
  background: none !important;
  height: 420px;
  width: 100%;
`;
