import React, { useEffect, useState } from "react";
import "./Hub.css";
import { useAuthCtx } from "../../context/AuthCtx";
import markImg from "../../Images/markImg.png";
import camera from "../../Images/camera.png";
import empMnthPic from "../../Images/empMnthPic.png";
import user_image_2 from "../../Images/user_image_2.png";
import chmpMsgPic from "../../Images/chmpMsgPic.png";
import ShareThoughts from "../../Component/ShareThoughts";
import handOpenPic from "../../Images/handOpenPic.png";
import notoCoinPic from "../../Images/notoCoinPic.png";
import eliteCard from "../../Images/eliteCard.png";
import goldCoinPic from "../../Images/goldCoinPic.png";
import visitStrIcon from "../../Images/visitStrIcon.png";
import afiPic1 from "../../Images/afiPic1.png";
import afiPic2 from "../../Images/afiPic2.png";
import afiPic3 from "../../Images/afiPic3.png";
import afiPic4 from "../../Images/afiPic4.png";
import chatPic from "../../Images/chatPic.png";
import mrkInPic1 from "../../Images/mrkInPic1.png";
import mrkInPic2 from "../../Images/mrkInPic2.png";
import mrkInPic3 from "../../Images/mrkInPic3.png";
import mrkInPic4 from "../../Images/mrkInPic4.png";
import mrkInPic6 from "../../Images/mrkInPic6.png";
import mrkInPic7 from "../../Images/mrkInPic7.png";
import mrkInPic8 from "../../Images/mrkInPic8.png";
import { Link } from "react-router-dom";
import HallofFame from "../../Component/HallofFame";
import HubAffinityGrp from "./HubAffinityGrp";
import HubAdvocy from "./HubAdvocy";
import engageMent from "../../Images/Icons/PNG/Engagement.png";
import onboardIcon from "../../Images/Icons/PNG/Onboarding.png";
import surveyIcon from "../../Images/Icons/PNG/Survey.png";
import goldIcon from "../../Images/Icons/PNG/Reward - Gold.png";
import eliteExp from "../../Images/Icons/PNG/Elite employee experience logo.png";
import { ApiHelperFunction } from "../../services/api/apiHelpers";

function HubSecond() {
  const { userData, setLoading } = useAuthCtx();
  const [goldCard, setGoldCard] = useState([]);
  console.log("UserData", userData);

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

  useEffect(() => {
    getGoldCard();
  }, []);
  return (
    <div className="hubSecPrat">
      <div className="custContain">
        <div className="row">
          <div className="col-xl-3 mb-4 mb-xl-0">
            <div className="leftMrkDiv">
              <div className="mrkHubFigDiv">
                <figure className="mrkHubFig">
                  <img src={userData?.image} alt="..." />
                </figure>
                <div className="mrkInpFigDiv">
                  <figure className="mrkCamFig">
                    <img src={camera} alt="..." />
                  </figure>
                  <input type="file" className="mrkInpFigFile" />
                </div>
              </div>
              <div className="empDegId">
                <p className="mrkHbHead">{`${userData?.firstName} ${userData.lastName}`}</p>
                <p className="proAdvoDesig">{userData?.designation}</p>
                {/* <p className="mrkHubEmpText">
                  Employee id: <span>1234</span>
                </p> */}
              </div>
            </div>
            <div className="leftHubHallDiv">
              <HallofFame />
            </div>
            <div className="champMainDivParent">
              <div
                className="champMainDiv"
                style={{ backgroundColor: "#EDF0FF" }}
              >
                <div className="champFigTextDiv">
                  <figure className="champFig">
                    <img src={user_image_2} alt="..." />
                  </figure>
                  <div>
                    <span className="champHead">Champion Learner Badge</span>
                    <span className="champDate">17 Jan</span>
                  </div>
                </div>
                <div className="champFigTextDiv">
                  <figure className="champFig2">
                    <img src={empMnthPic} alt="..." />
                  </figure>
                  <p className="chmpThisText">
                    This is to certify that Mark Anderson has achieved Champion
                    Learner Badge for SAP HANA Certification by Fractalz
                    Learning Centre dated 17 Jan 2023
                  </p>
                </div>
                <div className="svCosMainDiv">
                  <div className="svCoShBtnDiv">
                    <figure className="svMsgFig">
                      <img src={chmpMsgPic} alt="..." />
                    </figure>
                    <span className="chmpMsgSpan">Save</span>
                  </div>
                  <div className="svCoShBtnDiv">
                    <figure className="svMsgFig">
                      <img src={chmpMsgPic} alt="..." />
                    </figure>
                    <span className="chmpMsgSpan">Copy</span>
                  </div>
                  <div className="svCoShBtnDiv">
                    <figure className="svMsgFig">
                      <img src={chmpMsgPic} alt="..." />
                    </figure>
                    <span className="chmpMsgSpan">Share</span>
                  </div>
                </div>
              </div>
              <div
                className="champMainDiv"
                style={{ backgroundColor: "#EEEAE1" }}
              >
                <div className="champFigTextDiv">
                  <figure className="champFig">
                    <img src={user_image_2} alt="..." />
                  </figure>
                  <div>
                    <span className="champHead">Champion Learner Badge</span>
                    <span className="champDate">17 Jan</span>
                  </div>
                </div>
                <div className="champFigTextDiv">
                  <figure className="champFig2">
                    <img src={empMnthPic} alt="..." />
                  </figure>
                  <p className="chmpThisText">
                    This is to certify that Mark Anderson has achieved Champion
                    Learner Badge for SAP HANA Certification by Fractalz
                    Learning Centre dated 17 Jan 2023
                  </p>
                </div>
                <div className="svCosMainDiv">
                  <div className="svCoShBtnDiv">
                    <figure className="svMsgFig">
                      <img src={chmpMsgPic} alt="..." />
                    </figure>
                    <span className="chmpMsgSpan">Save</span>
                  </div>
                  <div className="svCoShBtnDiv">
                    <figure className="svMsgFig">
                      <img src={chmpMsgPic} alt="..." />
                    </figure>
                    <span className="chmpMsgSpan">Copy</span>
                  </div>
                  <div className="svCoShBtnDiv">
                    <figure className="svMsgFig">
                      <img src={chmpMsgPic} alt="..." />
                    </figure>
                    <span className="chmpMsgSpan">Share</span>
                  </div>
                </div>
              </div>
              <div
                className="champMainDiv"
                style={{ backgroundColor: "#DCDAD5" }}
              >
                <div className="champFigTextDiv">
                  <figure className="champFig">
                    <img src={user_image_2} alt="..." />
                  </figure>
                  <div>
                    <span className="champHead">Champion Learner Badge</span>
                    <span className="champDate">17 Jan</span>
                  </div>
                </div>
                <div className="champFigTextDiv">
                  <figure className="champFig2">
                    <img src={empMnthPic} alt="..." />
                  </figure>
                  <p className="chmpThisText">
                    This is to certify that Mark Anderson has achieved Champion
                    Learner Badge for SAP HANA Certification by Fractalz
                    Learning Centre dated 17 Jan 2023
                  </p>
                </div>
                <div className="svCosMainDiv">
                  <div className="svCoShBtnDiv">
                    <figure className="svMsgFig">
                      <img src={chmpMsgPic} alt="..." />
                    </figure>
                    <span className="chmpMsgSpan">Save</span>
                  </div>
                  <div className="svCoShBtnDiv">
                    <figure className="svMsgFig">
                      <img src={chmpMsgPic} alt="..." />
                    </figure>
                    <span className="chmpMsgSpan">Copy</span>
                  </div>
                  <div className="svCoShBtnDiv">
                    <figure className="svMsgFig">
                      <img src={chmpMsgPic} alt="..." />
                    </figure>
                    <span className="chmpMsgSpan">Share</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <ShareThoughts />
            <div className="mrkMiddleMainDiv">
              <Link to="/engagementcalender" className="mrkMiddleInnerDivsAn">
                <div
                  className="mrkMiddleInnerDivs"
                  // style={{ backgroundColor: "#02975A" }}
                  style={{
                    background:
                      "linear-gradient(18deg,#3b92f2,#69acf3 0,#dbdddf 56%,#8e8e90 100%,#e0e0e7 0,#b6b8bb 0,#a1a5aa 0,hsla(216,7%,86%,.704) 0,#b2b2b4 0)",
                  }}
                >
                  <div className="midMrkMainInDiv">
                    <div className="midMrhHeadDiv">
                      <p className="middleMrkHeads">Engagement and Events</p>
                      <div className="midleLogoHeadDiv">
                        <figure className="engageMeLogoFig">
                          <img src={engageMent} alt="..." />
                        </figure>
                      </div>
                    </div>
                    <div className="mrkMidMainRoundDiv">
                      <div className="mrkMidRoundDivs"></div>
                      <div className="mrkMidRoundDivs"></div>
                      <div className="mrkMidRoundDivs"></div>
                      <div className="mrkMidRoundDivs"></div>
                    </div>
                  </div>
                  <figure className="mrkMidInnBackFig">
                    <img src={mrkInPic1} alt="..." />
                  </figure>
                </div>
              </Link>
              <Link to="/netWorking" className="mrkMiddleInnerDivsAn">
                <div
                  className="mrkMiddleInnerDivs"
                  // style={{ backgroundColor: "#0085FF" }}
                  style={{
                    background:
                      "linear-gradient(18deg,#3b92f2,#69acf3 0,#dbdddf 56%,#8e8e90 100%,#e0e0e7 0,#b6b8bb 0,#a1a5aa 0,hsla(216,7%,86%,.704) 0,#b2b2b4 0)",
                  }}
                >
                  <div className="midMrkMainInDiv">
                    <div className="midMrhHeadDiv">
                      <p className="middleMrkHeads">
                        Networking and Onboarding
                      </p>
                      <div className="midleLogoHeadDiv">
                        <figure className="engageMeLogoFig">
                          <img src={onboardIcon} alt="..." />
                        </figure>
                      </div>
                    </div>
                    <div className="mrkMidMainRoundDiv">
                      <div className="mrkMidRoundDivs"></div>
                      <div className="mrkMidRoundDivs"></div>
                      <div className="mrkMidRoundDivs"></div>
                      <div className="mrkMidRoundDivs"></div>
                    </div>
                    {/* <div class="progress myMrkProgress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mrkMidProText">Progress</p>
                    <div className="penFlagTextDiv">
                      <i class="fa-solid fa-flag"></i>
                      <span>Pending Action</span>
                    </div> */}
                  </div>
                  <figure className="mrkMidInnBackFig">
                    <img src={mrkInPic2} alt="..." />
                  </figure>
                </div>
              </Link>
              {/* <Link to="/hubDevelopment" className="mrkMiddleInnerDivsAn">
                <div
                  className="mrkMiddleInnerDivs"
                  // style={{ backgroundColor: "#8640A7" }}
                  style={{
                    background:
                      "linear-gradient(18deg,#3b92f2,#69acf3 0,#dbdddf 56%,#8e8e90 100%,#e0e0e7 0,#b6b8bb 0,#a1a5aa 0,hsla(216,7%,86%,.704) 0,#b2b2b4 0)",
                  }}
                >
                  <div className="midMrkMainInDiv">
                    <div className="midMrhHeadDiv">
                      <p className="middleMrkHeads">Development and Learning</p>
                      <div className="midleLogoHeadDiv">
                        <span className="midleLogoHead">D</span>
                      </div>
                    </div>
                    <div class="progress myMrkProgress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mrkMidProText">Progress</p>
                    <div className="penFlagTextDiv">
                      <i class="fa-solid fa-flag"></i>
                      <span>Pending Action</span>
                    </div>
                  </div>
                  <figure className="mrkMidInnBackFig">
                    <img src={mrkInPic3} alt="..." />
                  </figure>
                </div>
              </Link> */}
              {/* <Link to="/" className="mrkMiddleInnerDivsAn">
                <div
                  className="mrkMiddleInnerDivs"
                  // style={{ backgroundColor: "#FC7E3F" }}
                  style={{
                    background:
                      "linear-gradient(18deg,#3b92f2,#69acf3 0,#dbdddf 56%,#8e8e90 100%,#e0e0e7 0,#b6b8bb 0,#a1a5aa 0,hsla(216,7%,86%,.704) 0,#b2b2b4 0)",
                  }}
                >
                  <div className="midMrkMainInDiv">
                    <div className="midMrhHeadDiv">
                      <p className="middleMrkHeads">
                        Execution and Performance
                      </p>
                      <div className="midleLogoHeadDiv">
                        <span className="midleLogoHead">E</span>
                      </div>
                    </div>
                    <div class="progress myMrkProgress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mrkMidProText">Progress</p>
                    <div className="penFlagTextDiv">
                      <i class="fa-solid fa-flag"></i>
                      <span>Pending Action</span>
                    </div>
                  </div>
                  <figure className="mrkMidInnBackFig">
                    <img src={mrkInPic4} alt="..." />
                  </figure>
                </div>
              </Link> */}
              <Link to="/advocacy" className="mrkMiddleInnerDivsAn">
                <HubAdvocy />
              </Link>
              <Link to="/surveys" className="mrkMiddleInnerDivsAn">
                <div
                  className="mrkMiddleInnerDivs"
                  // style={{ backgroundColor: "#B7B7B7" }}
                  style={{
                    background:
                      "linear-gradient(18deg,#3b92f2,#69acf3 0,#dbdddf 56%,#8e8e90 100%,#e0e0e7 0,#b6b8bb 0,#a1a5aa 0,hsla(216,7%,86%,.704) 0,#b2b2b4 0)",
                  }}
                >
                  <div className="midMrkMainInDiv">
                    <div className="midMrhHeadDiv">
                      <p className="middleMrkHeads">Voice and Surveys</p>
                      <div className="midleLogoHeadDiv">
                        <figure className="engageMeLogoFig">
                          <img src={surveyIcon} alt="..." />
                        </figure>
                      </div>
                    </div>
                    <div className="mrkMidMainRoundDiv">
                      <div className="mrkMidRoundDivs"></div>
                      <div className="mrkMidRoundDivs"></div>
                      <div className="mrkMidRoundDivs"></div>
                      <div className="mrkMidRoundDivs"></div>
                    </div>
                    {/* <div class="progress myMrkProgress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mrkMidProText">Progress</p>
                    <div className="penFlagTextDiv">
                      <i class="fa-solid fa-flag"></i>
                      <span>Pending Action</span>
                    </div> */}
                  </div>
                  <figure className="mrkMidInnBackFig">
                    <img src={mrkInPic6} alt="..." />
                  </figure>
                </div>
              </Link>
              {/* <Link to="/" className="mrkMiddleInnerDivsAn">
                <div
                  className="mrkMiddleInnerDivs"
                  // style={{ backgroundColor: "#61C034" }}
                  style={{
                    background:
                      "linear-gradient(18deg,#3b92f2,#69acf3 0,#dbdddf 56%,#8e8e90 100%,#e0e0e7 0,#b6b8bb 0,#a1a5aa 0,hsla(216,7%,86%,.704) 0,#b2b2b4 0)",
                  }}
                >
                  <div className="midMrkMainInDiv">
                    <div className="midMrhHeadDiv">
                      <p className="middleMrkHeads">Opportunity and Openings</p>
                      <div className="midleLogoHeadDiv">
                        <span className="midleLogoHead">O</span>
                      </div>
                    </div>
                    <div class="progress myMrkProgress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mrkMidProText">Progress</p>
                    <div className="penFlagTextDiv">
                      <i class="fa-solid fa-flag"></i>
                      <span>Pending Action</span>
                    </div>
                  </div>
                  <figure className="mrkMidInnBackFig">
                    <img src={mrkInPic7} alt="..." />
                  </figure>
                </div>
              </Link> */}
              {/* <Link to="/" className="mrkMiddleInnerDivsAn">
                <div
                  className="mrkMiddleInnerDivs"
                  style={{ backgroundColor: "#E8AB10" }}
                >
                  <div className="midMrkMainInDiv">
                    <div className="midMrhHeadDiv">
                      <p className="middleMrkHeads">Rewards and Recognitions</p>
                      <div className="midleLogoHeadDiv">
                        <span className="midleLogoHead">R</span>
                      </div>
                    </div>
                    <div className="notoMainDiv">
                      <div className="notoInnerDiv">
                        <figure className="notoFig">
                          <img src={notoCoinPic} alt="..." />
                        </figure>
                        <span className="notoSpan">3000</span>
                      </div>
                      <div className="notoInnerDiv">
                        <figure className="notoFig2">
                          <img src={handOpenPic} alt="..." />
                        </figure>
                        <span className="notoSpan">500,00</span>
                      </div>
                    </div>
                  </div>
                  <figure className="mrkMidInnBackFig">
                    <img src={mrkInPic8} alt="..." />
                  </figure>
                </div>
              </Link> */}
            </div>
          </div>
          <div className="col-xl-3">
            {/* <div className="eliiteAllMainDiv">
             
              <div className="coinExpDiv">
                <div className="coinFigInnerDiv">
                  <span className="coinBalHead">Coin Balance</span>
                  <figure className="goldCoinFig">
                    <img src={goldCoinPic} alt="..." />
                  </figure>
                </div>
                <p className="coinBalAmnt">500,000</p>
                <div className="expiOnTextDiv">
                  <span className="expiOnText">Expiring on 31 March</span>
                  <span className="expiOnText">10,000</span>
                </div>
                <div className="reedmDiv">
                  <button className="redmText">Redeem</button>
                </div>
                <div className="vstDntDiv">
                  <div className="vsiStrDiv">
                    <span className="vstText">Visit Store</span>
                    <figure className="vstIconFig">
                      <img src={visitStrIcon} alt="..." />
                    </figure>
                  </div>
                  <button className="vstDnteBtn">Donate</button>
                </div>
              </div>
            </div> */}

            <div className="eliteFigDiv" style={{ marginBottom: "1rem" }}>
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
            <div className="myAffitiDiv">
              <HubAffinityGrp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HubSecond;
