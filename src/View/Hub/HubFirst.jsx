import React from "react";
import "./Hub.css";
import GrowWel from "./GrowWel";
import WelcomeTo from "./WelcomeTo";

function HubFirst() {
  return (
    <div className="headFirstPart">
      <div className="custContain">
        <GrowWel />
        <WelcomeTo />
      </div>
    </div>
  );
}

export default HubFirst;
