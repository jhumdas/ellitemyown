import React from "react";
import "./Hub.css";
import procHubDev from "../../Images/procHubDev.png";

function MasteringVideo() {
  return (
    <div>
      <div >
        <div className="mastFroFigDiv">
          <div className="mastLeftVidDiv">
            <p className="mastVidHead">Mastering Video Tool part - 4</p>
            <p className="fromCourPara">
              From Course - Video Editing Mastering bigginer to Advance
            </p>
          </div>
          <figure className="mastVidFig">
            <img src={procHubDev} alt="..." />
          </figure>
        </div>
        <p className="proEleHrsPara">11 hours ago</p>
      </div>
    </div>
  );
}

export default MasteringVideo;
