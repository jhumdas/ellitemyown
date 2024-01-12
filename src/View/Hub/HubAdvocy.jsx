import React, { useEffect, useState } from "react";
import mrkInPic5 from "../../Images/mrkInPic5.png";
import advocacyIcon from "../../Images/Icons/PNG/Advocacy 1.png";
import { useAuthCtx } from "../../context/AuthCtx";
import goldIcon from "../../Images/Icons/PNG/Reward - Gold.png";
import eliteExp from "../../Images/Icons/PNG/Elite employee experience logo.png";
import { ApiHelperFunction } from "../../services/api/apiHelpers";

function HubAdvocy() {
  const {setLoading}=useAuthCtx();
  const [goldCard, setGoldCard] = useState([]);

  const getGoldCard = async () => {
    setLoading(true);

    const response = await ApiHelperFunction({
      urlPath: "/get-profile",
      method: "GET",
    });

    console.log("responseeeee", response?.data);

    if (response.status === 200) {
      setGoldCard(response?.data?.data);
      // console.log("data get successfully");
    } else {
      // toast.error(response.message);
    }
    setLoading(false);
  };

  useEffect(()=>{
    getGoldCard();
  },[])
  return (
    // <div
    //   className="mrkMiddleInnerDivs"
     
    //   style={{
    //     background:
    //       "linear-gradient(18deg,#3b92f2,#69acf3 0,#dbdddf 56%,#8e8e90 100%,#e0e0e7 0,#b6b8bb 0,#a1a5aa 0,hsla(216,7%,86%,.704) 0,#b2b2b4 0)",
    //   }}
    // >
    //   <div className="midMrkMainInDiv">
    //     <div className="midMrhHeadDiv">
    //       <p className="middleMrkHeads">Advocacy and Testimonials</p>
    //       <div className="midleLogoHeadDiv">
    //         <figure className="engageMeLogoFig">
    //           <img src={advocacyIcon} alt="..." />
    //         </figure>
    //       </div>
    //     </div>
    //     <div className="mrkMidMainRoundDiv">
    //       <div className="mrkMidRoundDivs"></div>
    //       <div className="mrkMidRoundDivs"></div>
    //       <div className="mrkMidRoundDivs"></div>
    //       <div className="mrkMidRoundDivs"></div>
    //     </div>
       
    //   </div>
    //   <figure className="mrkMidInnBackFig">
    //     <img src={mrkInPic5} alt="..." />
    //   </figure>
    // </div>

<div className="eliteFigDiv" style={{ marginBottom: "25px",marginTop:"18px" }}>
{/* <figure className="eliteFig">
  <img src={eliteCard} alt="..." />
</figure>
<span className="goldCardText">GOLD CLUB</span> */}
<div className="goldClubDiv">
  <div className="goldInnerDiv">
    <div>
      {/* <p className="eliteSubHead">Status</p> */}
      <p className="goldClHead">Gold</p>
    </div>
    <figure className="goldIconFig">
      <img src={eliteExp} alt="..." />
    </figure>
  </div>
  <div className="cardNameDiv">
    <div>
      <p className="cardNumbText">{goldCard?.goldClubNo}</p>
      <p className="sanjNameText">
        {goldCard?.firstName} {goldCard?.lastName}
      </p>
    </div>
    {/* <p className="goldSmClub">Gold Club</p> */}
    <figure className="goldIcoFigDiv">
      <img src={goldIcon} alt="..." />
    </figure>
  </div>
</div>
</div>
  );
}

export default HubAdvocy;
