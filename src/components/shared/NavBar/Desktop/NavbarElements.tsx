import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import {
  DARK_BACKGROUND_COLOR,
  LIGHT_BACKROUND_COLOR,
  POLONIA_YELLOW_COLOR,
} from "../../../../utils/colors";
import { FUTURA_LINK } from "../../../../utils/fontSizes";

interface Props {
  dark: number;
  isActive?: number;
}

export const NavbarContainer = styled.nav<Props>`
  position: fixed;
  height: 80px;
  width: 100%;
  background: ${(props) => (props.dark === 1 ? "" : LIGHT_BACKROUND_COLOR)};
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  padding: 0.5rem calc((100vw - 1400px) / 2);
  justify-content: flex-start;
  transition: 0.5s;
`;

export const NavbarLink = styled(Link)<Props>`
  color: ${(props) =>
    props.dark === 1 ? LIGHT_BACKROUND_COLOR : DARK_BACKGROUND_COLOR};
  display: flex;
  align-items: center;
  text-decoration: ${(props) =>
    props.isActive === 1
      ? `underline ${POLONIA_YELLOW_COLOR} solid 4px`
      : "none"};
  padding: 0 1.9rem;
  height: 100%;
  cursor: pointer;
  font-size: ${FUTURA_LINK};
  font-weight: 700;
  letter-spacing: 1px;
  &:active {
    color: #15cdfc;
  }
  &:hover {
    color: ${(props) => (props.dark === 1 ? "#d5d5d5" : "#c5c5c5")};
  }
`;

export const OrderOnlineNavbarLink = styled(Link)<Props>`
  color: ${DARK_BACKGROUND_COLOR};
  display: flex;
  background-color: ${POLONIA_YELLOW_COLOR};
  align-items: center;
  text-decoration: none;
  padding: 0 1.9rem;
  height: 75%;
  cursor: pointer;
  font-size: ${FUTURA_LINK};
  font-weight: 700;
  letter-spacing: 1px;
  border: 1px solid ${POLONIA_YELLOW_COLOR};
  border-radius: 12px;
  &:active {
    color: #15cdfc;
  }
  &:hover {
    color: #c5c5c5;
    transition: 0.2s;
  }
`;

export const NavbarImage = styled.img`
  width: 6rem;
  height: 6rem;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  width: 100vw;
  justify-content: flex-end;
  white-space: nowrap;
`;
