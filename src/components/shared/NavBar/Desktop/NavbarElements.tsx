import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  dark: number;
}

export const NavbarContainer = styled.nav<Props>`
  position: fixed;
  height: 80px;
  width: 100%;
  background: ${(props) => (props.dark === 1 ? "" : "#f0f0f0")};
  display: flex;
  justify-content: space-between;
  z-index: 10;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  justify-content: flex-start;
  transition: 0.5s;
`;

export const NavbarLink = styled(Link)<Props>`
  color: ${(props) => (props.dark === 1 ? "#f0f0f0" : "#111111")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.9rem;
  height: 100%;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  &:active {
    color: #15cdfc;
  }
  &:hover {
    color: ${(props) => (props.dark === 1 ? "#d5d5d5" : "#c5c5c5")};
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
