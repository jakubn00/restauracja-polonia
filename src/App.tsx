import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useMediaQuery } from "react-responsive";
import Hotel from "./components/Hotel";
import CookieConsent from "react-cookie-consent";
import PageNotFound from "./404-page";

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home isMobile={isTabletOrMobile} />} />
        <Route path="/hotel" element={<Hotel />} />
      </Routes>
      <CookieConsent
        buttonText="Rozumiem"
        style={{
          width: "40vw",
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
