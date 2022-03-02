import React from "react";
import HomeDesktopPage from "./Desktop";

interface IProps {
  isMobile: boolean;
}

const Home: React.FC<IProps> = ({ isMobile }) => {
  return (
    <React.Fragment>
      {isMobile ? <div>Test Mobile</div> : <HomeDesktopPage />}
    </React.Fragment>
  );
};

export default Home;
