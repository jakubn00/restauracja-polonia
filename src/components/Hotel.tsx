import React, { useEffect } from "react";

const Hotel: React.FC = () => {
  useEffect(() => {
    window.location.replace("http://www.hotel-polonia.com/");
    //eslint-disable-next-line
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "20% auto 0% auto" }}>
      Przekierowuje na www.hotel-polonia.com
    </div>
  );
};

export default Hotel;
