import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useMediaQuery } from "react-responsive";
import Hotel from "./components/Hotel";

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isMobile={isTabletOrMobile} />} />
        <Route path="/hotel" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
