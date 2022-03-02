import styled from "styled-components";

export const HomeDesktopPageContainer = styled.div`
  width: 100%;
  min-height: 2000px;
  background-color: #f0f0f0;
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
  font-size: 64px;
  color: white;
  z-index: 10;
`;

export const HeroCaption = styled.p`
  font-size: 20px;
  color: white;
  font-weight: 200;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
`;
