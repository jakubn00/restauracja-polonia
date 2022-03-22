import styled from "styled-components";
import backgroundImage from "../../../../images/our-offer-banner.png";
import {
  DARK_BACKGROUND_COLOR,
  LIGHT_BACKROUND_COLOR,
  POLONIA_YELLOW_COLOR,
} from "../../../../utils/colors";
import { BODY, FUTURA_H2 } from "../../../../utils/fontSizes";

export const OurOfferSectionContainer = styled.div`
  width: 100%;
  min-height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundImage});
  margin-top: 150px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SectionTitleYellowBox = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${POLONIA_YELLOW_COLOR};
  text-align: center;
`;

export const OurOfferHeader = styled.h2`
  font-size: ${FUTURA_H2};
  font-weight: 600;
  color: ${DARK_BACKGROUND_COLOR};
  padding: 0 20px;
  line-height: 80px;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  flex-wrap: wrap;
  margin-top: 25px;
`;

export const CardImage = styled.img`
  width: 56%;
`;

export const CardTitle = styled.h2`
  font-size: ${FUTURA_H2};
  font-weight: 600;
  color: ${LIGHT_BACKROUND_COLOR};
`;

export const CardDescription = styled.p`
  font-family: "Lato", sans-serif;
  font-size: ${BODY};
  font-weight: 200;
  color: ${LIGHT_BACKROUND_COLOR};
  white-space: pre-wrap;
`;

export const CardTextWrapper = styled.div`
  margin-top: -30px;
`;

export const GoToMenuButtonWrapper = styled.div`
  margin-top: 100px;
`;
