import React from "react";
import FooterContact from "./FooterContact";
import { FooterSection } from "./FooterElements";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";
import FooterOpenHours from "./FooterOpenHours";

const Footer = () => {
  return (
    <FooterSection>
      <FooterOpenHours />
      <FooterContact />
      <FooterLinks />
      <FooterLogo />
    </FooterSection>
  );
};

export default Footer;
