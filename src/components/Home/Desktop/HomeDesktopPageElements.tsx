import styled from "styled-components";
import {
  DARK_BACKGROUND_COLOR,
  LIGHT_BACKROUND_COLOR,
  POLONIA_YELLOW_COLOR,
} from "../../../utils/colors";
import { BODY, FUTURA_H1, FUTURA_H2 } from "../../../utils/fontSizes";

export const HomeDesktopPageContainer = styled.div`
  width: 100%;
  min-height: 2000px;
  background-color: ${LIGHT_BACKROUND_COLOR};
`;

export const HeroSectionContainer = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  z-index: 1;
`;

export const YellowBox = styled.div`
  width: 15px;
  height: 38px;
  background-color: ${POLONIA_YELLOW_COLOR};
  display: inline-block;
  margin-right: 10px;
`;

export const AboutUsSectionContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  object-fit: cover;
  z-index: 1;
`;

export const Header = styled.header`
  position: absolute;
  top: 40%;
  width: 100%;
  padding: 40px calc((100vw - 1400px) / 2);
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeroHeader = styled.h1`
  position: relative;
  padding: 0 40px;
  font-size: ${FUTURA_H1};
  font-weight: 700;
  color: ${LIGHT_BACKROUND_COLOR};
  z-index: 10;
`;

export const HeroCaption = styled.p`
  font-family: "Lato", sans-serif;
  font-size: ${BODY};
  color: ${LIGHT_BACKROUND_COLOR};
  font-weight: 200;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
`;

export const AboutUsPicture = styled.img`
  width: 520px;
  border-radius: 8%;
`;

export const AboutUsHeaderWrapper = styled.div`
  align-self: flex-start;
  color: ${DARK_BACKGROUND_COLOR};
  width: 30%;
  margin-left: 2%;
`;

export const AboutUsHeader = styled.h2`
  font-size: ${FUTURA_H2};
  font-weight: 600;
`;

export const AboutUsCaption = styled.p`
  font-family: "Lato", sans-serif;
  font-size: ${BODY};
  font-weight: 200;
`;
