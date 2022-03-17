import styled, { keyframes } from "styled-components";
import { LIGHT_BACKROUND_COLOR } from "../../../../utils/colors";
import { BODY, FUTURA_H1 } from "../../../../utils/fontSizes";

const lineUpAnimation = keyframes` 
0% {
  opacity: 0;
  transform: translateY(80%);
}
20% {
  opacity: 0;
}
50% {
  opacity: 1;
  transform: translateY(0%);
}
100% {
  opacity: 1;
  transform: translateY(0%);
}
`;

export const HeroSectionContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  transition: 0.5s;
  z-index: 1;
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
  width: 100%;
  margin-bottom: 5vh;
  z-index: 10;
`;

export const HeroHeader = styled.h1`
  padding: 0 20px;
  font-size: clamp(16px, 16vmin, ${FUTURA_H1});
  font-weight: 700;
  line-height: 16vmin;
  color: ${LIGHT_BACKROUND_COLOR};
  z-index: 10;
  animation: ${lineUpAnimation} 2s ease-out;
`;

export const HeroCaption = styled.p`
  font-family: "Lato", sans-serif;
  font-size: clamp(16px, 4vmin, ${FUTURA_H1});
  color: ${LIGHT_BACKROUND_COLOR};
  line-height: calc(4vmin + 6px);
  font-weight: 200;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  margin-top: 16vh;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;
