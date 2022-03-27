import React from "react";
import { MapCanvas, MapFrame, MapOuter } from "./MobileContactPageElements";

const GoogleMapBoxContactMobile = () => {
  return (
    <MapOuter>
      <MapCanvas>
        <MapFrame
          src="https://maps.google.com/maps?q=Restauracja%20Polonia,%20Rzesz%C3%B3w&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder={0}
          scrolling="no"
        />
      </MapCanvas>
    </MapOuter>
  );
};

export default GoogleMapBoxContactMobile;
