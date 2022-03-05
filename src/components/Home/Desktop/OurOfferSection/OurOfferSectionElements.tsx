import styled from "styled-components";
import { BODY, FUTURA_H2 } from "../../../../utils/fontSizes";
import backgroundImage from "../../../../images/our-offer-banner.png";
import {
  DARK_BACKGROUND_COLOR,
  LIGHT_BACKROUND_COLOR,
  POLONIA_YELLOW_COLOR,
} from "../../../../utils/colors";

export const OurOfferSectionContainer = styled.div`
  width: 100%;
  height: 700px;
  position: absolute;
  top: 170vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  flex-direction: column;
`;

export const SectionTitleYellowBox = styled.div`
  width: 400px;
  height: 80px;
  background-color: ${POLONIA_YELLOW_COLOR};
  text-align: center;
`;

export const OurOfferSectionTitle = styled.h2`
  font-size: ${FUTURA_H2};
  line-height: 80px;
  font-weight: 700;
  color: ${DARK_BACKGROUND_COLOR};
`;

export const OurOfferDishesContainer = styled.div`
  width: 75%;
  height: 85%;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 30px;
`;

export const CardContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  flex-wrap: wrap;
`;

export const CardImage = styled.img`
  width: 100%;
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
