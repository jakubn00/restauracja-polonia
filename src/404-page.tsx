import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const history = useNavigate();
  const backToMainSite = () => {
    history("/");
  };

  return (
    <div className="page-not-found-container">
      <h1>404 | Strony nie znaleziono.</h1>
      <h2 onClick={backToMainSite}>Powróć na stronę główną.</h2>
    </div>
  );
};

export default PageNotFound;
