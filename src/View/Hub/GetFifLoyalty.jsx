import React from "react";
import "./Hub.css";
import getFifLoyalPic from "../../Images/getFifLoyalPic.png";
import hannaPic from "../../Images/hannaPic.png";

function GetFifLoyalty() {
  return (
    <div className="getFifLoyalCard">
      <figure className="getFifLoyalFig">
        <img src={getFifLoyalPic} alt="..." />
        <div className="getFifFigText">
          <span>Get 50 Loyalty points</span>
        </div>
        <div className="getFifHeartDiv">
          <i class="fa-solid fa-heart"></i>
        </div>
      </figure>
      <div>
        <p className="proGetDeHead">Product Design in Blender : 3D modeling, rendering and sculpting</p>
        <div className="statWatchCustGetMainDiv">
          <div className="starGetRateDiv">
            <i class="fa-solid fa-star"></i>
            <span className="starWatchOnCustGetSpan">4.7</span>
          </div>
          <div className="watchGetRateDiv">
            <i class="fa-regular fa-clock"></i>
            <span className="starWatchOnCustGetSpan">5 hrs</span>
          </div>
          <div className="onCustGetRateDiv">
            <i class="fa-regular fa-user"></i>
            <span className="starWatchOnCustGetSpan">Online</span>
          </div>
        </div>
        <div className="hannaFigCardDiv">
          <div className="hannaFigTextDiv">
            <figure className="hannaGetFig">
              <img src={hannaPic} alt="..." />
            </figure>
            <span className="hannaSepText">Hanna Septimus</span>
          </div>
          <span className="hannaDollText">$45</span>
        </div>
      </div>
    </div>
  );
}

export default GetFifLoyalty;
