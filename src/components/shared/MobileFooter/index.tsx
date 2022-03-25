import React from "react";
import MobileFooterContact from "./MobileFooterContact";
import { MobileFooterSection } from "./MobileFooterElements";
import MobileFooterLinks from "./MobileFooterLinks";
import MobileFooterLogo from "./MobileFooterLogo";
import MobileFooterOpenHours from "./MobileFooterOpenHours";

const MobileFooter = () => {
  return (
    <MobileFooterSection>
      <MobileFooterLogo />
      <MobileFooterOpenHours />
      <MobileFooterContact />
      <MobileFooterLinks />
    </MobileFooterSection>
  );
};

export default MobileFooter;
