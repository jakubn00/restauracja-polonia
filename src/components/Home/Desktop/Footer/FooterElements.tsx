import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  DARK_BACKGROUND_COLOR,
  GRAY_COLOR,
  LIGHT_BACKROUND_COLOR,
} from "../../../../utils/colors";
import { BODY, FUTURA_H3 } from "../../../../utils/fontSizes";

export const FooterSection = styled.footer`
  width: 100%;
  height: 280px;
  margin-top: 200px;
  display: flex;
  background-color: ${DARK_BACKGROUND_COLOR};
  justify-content: center;
  color: ${LIGHT_BACKROUND_COLOR};
`;

export const FooterElementHeader = styled.h2`
  font-size: ${FUTURA_H3};
  font-weight: 700;
  margin-bottom: 25px;
`;

export const FooterColumnContainer = styled.div`
  width: 20%;
  margin-top: 26px;
`;

export const FooterParagraph = styled.p`
  font-size: ${BODY};
  font-weight: 200;
  line-height: calc(${BODY} + 6px);
`;

export const FooterParagraphLink = styled(Link)`
  font-size: ${BODY};
  font-weight: 200;
  line-height: calc(${BODY} + 6px);
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${LIGHT_BACKROUND_COLOR};
  &:hover {
    color: ${GRAY_COLOR};
  }
`;
