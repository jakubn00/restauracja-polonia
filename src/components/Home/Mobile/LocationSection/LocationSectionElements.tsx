import styled from "styled-components";
import { DARK_BACKGROUND_COLOR } from "../../../../utils/colors";
import { BODY, FUTURA_H2 } from "../../../../utils/fontSizes";

export const LocationSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15vh;
`;

export const LocationSectionHeader = styled.h2`
  font-size: ${FUTURA_H2};
  font-weight: 600;
  color: ${DARK_BACKGROUND_COLOR};
  padding: 0 20px;
`;

export const LocationCaption = styled.p`
  font-family: "Lato", sans-serif;
  font-size: ${BODY};
  font-weight: 200;
  padding: 0 20px;
  margin-top: 10px;
  color: ${DARK_BACKGROUND_COLOR};
  white-space: pre-wrap;
`;

export const MapOuter = styled.div`
  position: relative;
  text-align: right;
  height: 320px;
  width: 100%;
  margin-top: 25px;
  -webkit-box-shadow: 0px 10px 24px 0px rgba(66, 68, 90, 0.8);
  -moz-box-shadow: 0px 10px 24px 0px rgba(66, 68, 90, 0.8);
  box-shadow: 0px 10px 10px 0px rgba(15, 15, 15, 0.3);
`;

export const MapCanvas = styled.div`
  overflow: hidden;
  background: none !important;
  height: 320px;
  width: 100%;
`;

export const MapFrame = styled.iframe`
  overflow: hidden;
  background: none !important;
  height: 320px;
  width: 100%;
`;
