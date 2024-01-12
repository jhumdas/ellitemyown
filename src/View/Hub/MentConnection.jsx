import React from "react";
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

function MentConnection() {
  return (
    <div className="mentConnecDiv">
      <div className="myMentBtnDiv">
        <p className="myMentPara">Connections</p>
        <button className="mentAddBtn">See All</button>
      </div>
      <div className="mentConnecFigsDiv">
        <div className="mentConnecFigInnerDiv">
          <figure className="mentConnecFig">
            <img src={myMentPic1} alt="..." />
          </figure>
          <p className="mentConnText">Lorem, ipsum</p>
        </div>
        <div className="mentConnecFigInnerDiv">
          <figure className="mentConnecFig">
            <img src={myMentPic2} alt="..." />
          </figure>
          <p className="mentConnText">Lorem, ipsum</p>
        </div>
        <div className="mentConnecFigInnerDiv">
          <figure className="mentConnecFig">
            <img src={myMentPic3} alt="..." />
          </figure>
          <p className="mentConnText">Lorem, ipsum</p>
        </div>
        <div className="mentConnecFigInnerDiv">
          <figure className="mentConnecFig">
            <img src={connection1} alt="..." />
          </figure>
          <p className="mentConnText">Lorem, ipsum</p>
        </div>
        <div className="mentConnecFigInnerDiv">
          <figure className="mentConnecFig">
            <img src={connection2} alt="..." />
          </figure>
          <p className="mentConnText">Lorem, ipsum</p>
        </div>
        <div className="mentConnecFigInnerDiv">
          <figure className="mentConnecFig">
            <img src={connection3} alt="..." />
          </figure>
          <p className="mentConnText">Lorem, ipsum</p>
        </div>
        <div className="mentConnecFigInnerDiv">
          <figure className="mentConnecFig">
            <img src={connection4} alt="..." />
          </figure>
          <p className="mentConnText">Lorem, ipsum</p>
        </div>
        <div className="mentConnecFigInnerDiv">
          <figure className="mentConnecFig">
            <img src={connection5} alt="..." />
          </figure>
          <p className="mentConnText">Lorem, ipsum</p>
        </div>
        <div className="mentConnecFigInnerDiv">
          <figure className="mentConnecFig">
            <img src={connection6} alt="..." />
          </figure>
          <p className="mentConnText">Lorem, ipsum</p>
        </div>
        <div className="mentConnecFigInnerDiv">
          <figure className="mentConnecFig">
            <img src={connection7} alt="..." />
          </figure>
          <p className="mentConnText">Lorem, ipsum</p>
        </div>
        <div className="mentConnecFigInnerDiv">
          <figure className="mentConnecFig">
            <img src={connection8} alt="..." />
          </figure>
          <p className="mentConnText">Lorem, ipsum</p>
        </div>
        <div className="mentConnecFigInnerDiv">
          <figure className="mentConnecFig">
            <img src={connection9} alt="..." />
          </figure>
          <p className="mentConnText">Lorem, ipsum</p>
        </div>
      </div>
    </div>
  );
}

export default MentConnection;
