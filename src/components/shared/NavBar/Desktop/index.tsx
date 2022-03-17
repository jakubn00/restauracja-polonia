import React from "react";
import {
  NavbarContainer,
  NavbarImage,
  NavbarLink,
  NavMenu,
} from "./NavbarElements";
import logoWhite from "../../../../images/logo-white.svg";
import logo from "../../../../images/logo.svg";
import { useLocation } from "react-router-dom";

interface IProps {
  dark?: boolean;
}

const DesktopNavbar: React.FC<IProps> = ({ dark = false }) => {
  const location = useLocation();
  const isLinkActive = (url: string) => {
    if (location.pathname === url) {
      return 1;
    } else {
      return 0;
    }
  };
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
          <NavbarLink
            dark={dark ? 1 : 0}
            isActive={isLinkActive("/menu")}
            to="/menu"
          >
            MENU
          </NavbarLink>
          <NavbarLink
            dark={dark ? 1 : 0}
            isActive={isLinkActive("/galeria")}
            to="/galeria"
          >
            GALERIA
          </NavbarLink>
          <NavbarLink dark={dark ? 1 : 0} to="/hotel" target={"_blank"}>
            HOTEL
          </NavbarLink>
          <NavbarLink
            dark={dark ? 1 : 0}
            isActive={isLinkActive("/kontakt")}
            to="/kontakt"
          >
            KONTAKT
          </NavbarLink>
        </NavMenu>
      </NavbarContainer>
    </React.Fragment>
  );
};

export default DesktopNavbar;
