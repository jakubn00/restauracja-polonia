import React from "react";
import { useLocation } from "react-router-dom";
import {
  HamburgerButtonContainer,
  HamburgerMenuButton,
  MobileNavbarContainer,
  MobileNavbarImage,
  MobileNavbarLink,
} from "./MobileNavbarElements";
import logoWhite from "../../../../images/logo-white.svg";
import logo from "../../../../images/logo.svg";
import HamburgerMenuIcon from "../../Buttons/HamburgerMenuIcon";

interface IProps {
  dark?: boolean;
}

const MobileNavbar: React.FC<IProps> = ({ dark = false }) => {
  const location = useLocation();
  const isLinkActive = (url: string) => {
    if (location.pathname === url) {
      return 1;
    } else {
      return 0;
    }
  };
  return (
    <MobileNavbarContainer dark={dark ? 1 : 0}>
      <MobileNavbarLink dark={dark ? 1 : 0} to="\">
        {" "}
        {dark ? (
          <MobileNavbarImage src={logoWhite} alt="logo" />
        ) : (
          <MobileNavbarImage src={logo} alt="logo" />
        )}
      </MobileNavbarLink>
      <HamburgerButtonContainer>
        <HamburgerMenuButton dark={dark ? 1 : 0}>
          <HamburgerMenuIcon isDarker={!dark} />
        </HamburgerMenuButton>
      </HamburgerButtonContainer>
    </MobileNavbarContainer>
  );
};

export default MobileNavbar;
