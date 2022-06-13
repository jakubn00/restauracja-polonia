import React from "react";
import { useLocation } from "react-router-dom";
import CloseIcon from "../../Buttons/CloseIcon";
import {
  CloseButtonWrapper,
  MobileNavBarLink,
  MobileOrderOnlineNavbarLink,
  OutsideSpace,
  SideMenuContainer,
} from "./MobileNavbarElements";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<IProps> = ({ isOpen, onClose }) => {
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
      <OutsideSpace isOpen={isOpen ? 1 : 0} onClick={onClose} />
      <SideMenuContainer isOpen={isOpen ? 1 : 0}>
        <CloseButtonWrapper onClick={onClose}>
          <CloseIcon />
        </CloseButtonWrapper>
        <MobileNavBarLink isActive={isLinkActive("/")} to="/">
          STRONA GŁÓWNA
        </MobileNavBarLink>
        <MobileNavBarLink isActive={isLinkActive("/menu")} to="/menu">
          MENU
        </MobileNavBarLink>
        <MobileNavBarLink isActive={isLinkActive("/galeria")} to="/galeria">
          GALERIA
        </MobileNavBarLink>
        <MobileNavBarLink isActive={0} to="/hotel" target={"_blank"}>
          HOTEL
        </MobileNavBarLink>
        <MobileNavBarLink isActive={isLinkActive("/kontakt")} to="/kontakt">
          KONTAKT
        </MobileNavBarLink>
        <MobileOrderOnlineNavbarLink
          isActive={isLinkActive("/zamow-online")}
          to="/zamow-online"
        >
          ZAMÓW ONLINE
        </MobileOrderOnlineNavbarLink>
      </SideMenuContainer>
    </React.Fragment>
  );
};

export default SideMenu;
