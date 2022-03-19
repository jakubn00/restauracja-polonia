import React, { useState } from "react";
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
import SideMenu from "./SideMenu";

interface IProps {
  dark?: boolean;
}

const MobileNavbar: React.FC<IProps> = ({ dark = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };
  return (
    <React.Fragment>
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
          <HamburgerMenuButton dark={dark ? 1 : 0} onClick={handleOpenMenu}>
            <HamburgerMenuIcon isDarker={!dark} />
          </HamburgerMenuButton>
        </HamburgerButtonContainer>
      </MobileNavbarContainer>
      <SideMenu isOpen={menuOpen} onClose={handleCloseMenu} />
    </React.Fragment>
  );
};

export default MobileNavbar;
