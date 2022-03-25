import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  DARK_BACKGROUND_COLOR,
  GRAY_COLOR,
  LIGHT_BACKROUND_COLOR,
} from "../../../utils/colors";
import { BODY, FUTURA_H3 } from "../../../utils/fontSizes";

export const MobileFooterSection = styled.footer`
  width: 100%;
  min-height: 840px;
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  background-color: ${DARK_BACKGROUND_COLOR};
  justify-content: flex-start;
  color: ${LIGHT_BACKROUND_COLOR};
`;

export const FooterLogoColumnContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 32px;
  flex-direction: column;
  align-items: center;
`;

export const FooterImage = styled.img`
  width: 50%;
`;

export const FooterIconsWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-top: 18px;
`;

export const FooterIconLink = styled.a`
  text-decoration: none;
  color: white;
  transition: color 0.2s;
  &:hover {
    color: ${GRAY_COLOR};
  }
`;

export const FooterElementHeader = styled.h2`
  font-size: ${FUTURA_H3};
  font-weight: 700;
  margin-bottom: 12px;
`;

export const FooterColumnContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-items: center;
  justify-content: center;
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
  margin: 4px auto;
  color: ${LIGHT_BACKROUND_COLOR};
  &:hover {
    color: ${GRAY_COLOR};
  }
`;
