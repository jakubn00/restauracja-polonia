import styled from "styled-components";
import { LIGHT_BACKROUND_COLOR } from "../../../utils/colors";
import { FUTURA_H3 } from "../../../utils/fontSizes";

export const GalleryMobilePageContainer = styled.div`
  min-height: 100vh;
  background-color: ${LIGHT_BACKROUND_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const GalleryPicturesContainer = styled.div`
  min-height: 90vh;
  width: 92%;
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
`;

export const GalleryTitle = styled.h3`
  width: 100%;
  font-size: ${FUTURA_H3};
  font-weight: 600;
`;

export const PictureItem = styled.img`
  width: 40vw;
  border-radius: 8px;
  transition: transform 0.2s;
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
  &:hover {
    transform: scale(1.03);
  }
`;
