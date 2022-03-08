import React from "react";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import {
  FooterIconsWrapper,
  FooterImage,
  FooterLogoColumnContainer,
} from "./FooterElements";
import footerLogo from "../../../images/logo-white.svg";

const FooterLogo = () => {
  return (
    <FooterLogoColumnContainer>
      <FooterImage src={footerLogo} />
      <FooterIconsWrapper>
        <AiOutlineFacebook size={42} />
        <AiOutlineInstagram size={42} />
      </FooterIconsWrapper>
    </FooterLogoColumnContainer>
  );
};

export default FooterLogo;
