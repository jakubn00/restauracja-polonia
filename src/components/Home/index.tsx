import React from "react";
import HomeDesktopPage from "./Desktop";
import HomeMobilePage from "./Mobile";

interface IProps {
  isMobile: boolean;
}

const Home: React.FC<IProps> = ({ isMobile }) => {
  return (
    <React.Fragment>
      {isMobile ? <HomeMobilePage /> : <HomeDesktopPage />}
    </React.Fragment>
  );
};

export default Home;
