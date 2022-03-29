import React from "react";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import {
  FooterIconLink,
  FooterIconsWrapper,
  FooterImage,
  FooterLogoColumnContainer,
} from "./FooterElements";
import footerLogo from "../../../images/logo-white.svg";

const FooterLogo = () => {
  return (
    <FooterLogoColumnContainer>
      <FooterImage src={footerLogo} alt="logo restauracji Polonia" />
      <FooterIconsWrapper>
        <FooterIconLink
          href="https://www.facebook.com/Restauracja-Polonia-101206695074132/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineFacebook size={42} />
        </FooterIconLink>

        <FooterIconLink
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram size={42} />
        </FooterIconLink>
      </FooterIconsWrapper>
    </FooterLogoColumnContainer>
  );
};

export default FooterLogo;
