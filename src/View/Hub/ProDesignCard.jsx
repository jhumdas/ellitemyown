import React from "react";
import "./Hub.css";
import procHubDev from "../../Images/procHubDev.png";

function ProDesignCard() {
  return (
    <div className="proDesignCard">
      <div className="proDesFigHeDiv">
        <figure className="proDesiFig">
          <img src={procHubDev} alt="..." />
        </figure>
        <div>
          {/* <p className="proDeHead">Product Design in Blender</p> */}
          <p className="proDeHead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut soluta quaerat voluptatem voluptatum earum voluptates deleniti? Tempore, perspiciatis suscipit.</p>
          <div className="proNewRedDiv">
            <div className="proRedDiv"></div>
            {/* <span className="proNewNotiSpan">3 new notifications</span> */}
            <span className="proNewNotiSpan">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt blanditiis, provident cum aperiam deleniti commodi nemo corporis similique sed alias.</span>
          </div>
        </div>
      </div>
      <p className="proSevFiPer">75% Done</p>
      <div class="progress proHubProgress">
        <div
          class="progress-bar"
          role="progressbar"
          style={{ width: "75%" }}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

export default ProDesignCard;
