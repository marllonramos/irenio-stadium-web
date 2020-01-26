import React from "react";

import "./index.css";

const IconImg = ({ url }) => {
  if(url){
    return (
      <div className="div-icon-img">
        <img
          className="img-icon-img"
          src={url}
          alt="foto"
        />
      </div>
    );
  }else{
    return(
      <div className="div-icon-img">
        <i className="fas fa-user-circle fa-4x"></i>
      </div>
    );
  }
};

export default IconImg;
