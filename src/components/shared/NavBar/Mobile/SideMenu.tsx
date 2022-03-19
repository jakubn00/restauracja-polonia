import React from "react";
import { useLocation } from "react-router-dom";
import CloseIcon from "../../Buttons/CloseIcon";
import { CloseButtonWrapper, OutsideSpace, SideMenuContainer } from "./MobileNavbarElements";

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
      </SideMenuContainer>
    </React.Fragment>
  );
};

export default SideMenu;
