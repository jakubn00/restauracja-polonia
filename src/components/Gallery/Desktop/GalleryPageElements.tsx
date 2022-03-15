import styled from "styled-components";
import { LIGHT_BACKROUND_COLOR } from "../../../utils/colors";

export const GalleryDesktopPageContainer = styled.div`
  min-height: 100vh;
  background-color: ${LIGHT_BACKROUND_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const GalleryPicturesContainer = styled.div`
  min-height: 90vh;
  width: 70%;
  padding-top: 125px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
`;

export const PictureItem = styled.img`
  width: 16vw;
  border-radius: 8px;
  transition: transform 0.2s;
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
  &:hover {
    transform: scale(1.03);
  }
`;

