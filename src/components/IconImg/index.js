import React from "react";

import "./index.css";

const IconImg = ({ url }) => {
  return (
    <div className="div-icon-img">
      <img
        className="img-icon-img"
        src={url}
        alt="foto"
      />
    </div>
  );
};

export default IconImg;
