import React from "react";
import {
  NavbarContainer,
  NavbarImage,
  NavbarLink,
  NavMenu,
} from "./NavbarElements";
import logoWhite from "../../../../images/logo-white.svg";
import logo from "../../../../images/logo.svg";

interface IProps {
  dark?: boolean;
}

const DesktopNavbar: React.FC<IProps> = ({ dark = false }) => {
  return (
    <React.Fragment>
      <NavbarContainer dark={dark ? 1 : 0}>
        <NavbarLink dark={dark ? 1 : 0} to="/">
          {dark ? (
            <NavbarImage src={logoWhite} alt="logo" />
          ) : (
            <NavbarImage src={logo} alt="logo" />
          )}
        </NavbarLink>
        <NavMenu>
          <NavbarLink dark={dark ? 1 : 0} to="/menu">
            MENU
          </NavbarLink>
          <NavbarLink dark={dark ? 1 : 0} to="/galeria">
            GALERIA
          </NavbarLink>
          <NavbarLink dark={dark ? 1 : 0} to="/hotel" target={"_blank"}>
            HOTEL
          </NavbarLink>
          <NavbarLink dark={dark ? 1 : 0} to="/kontakt">
            KONTAKT
          </NavbarLink>
        </NavMenu>
      </NavbarContainer>
    </React.Fragment>
  );
};

export default DesktopNavbar;
