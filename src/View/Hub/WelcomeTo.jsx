import React from "react";
import camera from "../../Images/camera.png"
import "./Hub.css";

function WelcomeTo() {
  return (
    <div className="hubWelDiv">
      <p className="hubWelHead">WELCOME TO YOUR ENDEAVOR HUB</p>
      <div className="hubSubWelDiv">
        <figure className="hubWelFig">
          <img src={camera} alt="" />
        </figure>
        <p className="hubWelPara">Edit your cover picture</p>
      </div>
    </div>
  );
}

export default WelcomeTo;
