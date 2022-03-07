import styled from "styled-components";
import { DARK_BACKGROUND_COLOR } from "../../../../utils/colors";
import { BODY, FUTURA_H2 } from "../../../../utils/fontSizes";

export const LocationSectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

export const LocationPicture = styled.img`
  width: 520px;
  border-radius: 8%;
  -webkit-box-shadow: 0px 10px 24px 0px rgba(66, 68, 90, 0.8);
  -moz-box-shadow: 0px 10px 24px 0px rgba(66, 68, 90, 0.8);
  box-shadow: 0px 10px 10px 0px rgba(15, 15, 15, 0.3);
`;

export const LocationHeaderWrapper = styled.div`
  align-self: flex-start;
  color: ${DARK_BACKGROUND_COLOR};
  width: 30%;
  margin-left: 2%;
`;

export const LocationHeader = styled.h2`
  font-size: ${FUTURA_H2};
  font-weight: 600;
`;

export const LocationCaption = styled.p`
  font-family: "Lato", sans-serif;
  font-size: ${BODY};
  font-weight: 600;
  margin-top: 24px;
  line-height: 26px;
  white-space: pre-wrap;
`;

export const MapOuter = styled.div`
  position: relative;
  text-align: right;
  height: 520px;
  width: 520px;
  -webkit-box-shadow: 0px 10px 24px 0px rgba(66, 68, 90, 0.8);
  -moz-box-shadow: 0px 10px 24px 0px rgba(66, 68, 90, 0.8);
  box-shadow: 0px 10px 10px 0px rgba(15, 15, 15, 0.3);
`;

export const MapCanvas = styled.div`
  overflow: hidden;
  background: none !important;
  height: 520px;
  width: 520px;
`;

export const MapFrame = styled.iframe`
  width: 520px;
  height: 520px;
  overflow: hidden;
  background: none !important;
  height: 520px;
  width: 520px;
`;
