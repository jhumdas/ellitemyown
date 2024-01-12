import React from "react";
import "./Profile.css"
import myMentPic1 from "../../Images/myMentPic1.png";
import myMentPic2 from "../../Images/myMentPic2.png";
import myMentPic3 from "../../Images/myMentPic3.png";
import connection1 from "../../Images/connection1.png";
import connection2 from "../../Images/connection2.png";
import connection3 from "../../Images/connection3.png";
import connection4 from "../../Images/connection4.png";
import connection5 from "../../Images/connection5.png";
import connection6 from "../../Images/connection6.png";
import connection7 from "../../Images/connection7.png";
import connection8 from "../../Images/connection8.png";
import connection9 from "../../Images/connection9.png";

function ProMentConnetion() {
  return (
    <div className="proMentConnecDiv">
      <div className="myProMentBtnDiv">
        <p className="myProMentPara">Connections</p>
        <button className="mentProAddBtn">See All</button>
      </div>
      <div className="mentProConnecFigsDiv">
        <div className="mentProConnecFigInnerDiv">
          <figure className="mentProConnecFig">
            <img src={myMentPic1} alt="..." />
          </figure>
          <p className="mentProConnText">Lorem, ipsum</p>
        </div>
        <div className="mentProConnecFigInnerDiv">
          <figure className="mentProConnecFig">
            <img src={myMentPic2} alt="..." />
          </figure>
          <p className="mentProConnText">Lorem, ipsum</p>
        </div>
        <div className="mentProConnecFigInnerDiv">
          <figure className="mentProConnecFig">
            <img src={myMentPic3} alt="..." />
          </figure>
          <p className="mentProConnText">Lorem, ipsum</p>
        </div>
        <div className="mentProConnecFigInnerDiv">
          <figure className="mentProConnecFig">
            <img src={connection1} alt="..." />
          </figure>
          <p className="mentProConnText">Lorem, ipsum</p>
        </div>
        <div className="mentProConnecFigInnerDiv">
          <figure className="mentProConnecFig">
            <img src={connection2} alt="..." />
          </figure>
          <p className="mentProConnText">Lorem, ipsum</p>
        </div>
        <div className="mentProConnecFigInnerDiv">
          <figure className="mentProConnecFig">
            <img src={connection3} alt="..." />
          </figure>
          <p className="mentProConnText">Lorem, ipsum</p>
        </div>
        <div className="mentProConnecFigInnerDiv">
          <figure className="mentProConnecFig">
            <img src={connection4} alt="..." />
          </figure>
          <p className="mentProConnText">Lorem, ipsum</p>
        </div>
        <div className="mentProConnecFigInnerDiv">
          <figure className="mentProConnecFig">
            <img src={connection5} alt="..." />
          </figure>
          <p className="mentProConnText">Lorem, ipsum</p>
        </div>
        <div className="mentProConnecFigInnerDiv">
          <figure className="mentProConnecFig">
            <img src={connection6} alt="..." />
          </figure>
          <p className="mentProConnText">Lorem, ipsum</p>
        </div>
        <div className="mentProConnecFigInnerDiv">
          <figure className="mentProConnecFig">
            <img src={connection7} alt="..." />
          </figure>
          <p className="mentProConnText">Lorem, ipsum</p>
        </div>
        <div className="mentProConnecFigInnerDiv">
          <figure className="mentProConnecFig">
            <img src={connection8} alt="..." />
          </figure>
          <p className="mentProConnText">Lorem, ipsum</p>
        </div>
        <div className="mentProConnecFigInnerDiv">
          <figure className="mentProConnecFig">
            <img src={connection9} alt="..." />
          </figure>
          <p className="mentProConnText">Lorem, ipsum</p>
        </div>
      </div>
    </div>
  );
}

export default ProMentConnetion;
