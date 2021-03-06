import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useMediaQuery } from "react-responsive";
import Hotel from "./components/Hotel";
import CookieConsent from "react-cookie-consent";
import PageNotFound from "./404-page";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import OrderOnline from "./components/OrderOnline";
import WeekOffer from "./components/WeekOffer";

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1023 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home isMobile={isTabletOrMobile} />} />
        <Route path="/menu" element={<Menu isMobile={isTabletOrMobile} />} />
        <Route
          path="/galeria"
          element={<Gallery isMobile={isTabletOrMobile} />}
        />
        <Route path="/hotel" element={<Hotel />} />
        <Route
          path="/kontakt"
          element={<Contact isMobile={isTabletOrMobile} />}
        />
        <Route
          path="/zamow-online"
          element={<OrderOnline isMobile={isTabletOrMobile} />}
        />
        <Route
          path="/dania-dnia"
          element={<WeekOffer isMobile={isTabletOrMobile} />}
        />
      </Routes>
      <CookieConsent
        buttonText="Rozumiem"
        style={{
          width: "100vw",
          backgroundColor: "#e3e3e3",
          color: "#020202",
        }}
      >
        Ta strona używa plików cookie's. Możesz zablokować je w ustawieniach
        przeglądarki.
      </CookieConsent>
    </BrowserRouter>
  );
}

export default App;
