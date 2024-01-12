import React from "react";
import "./Hub.css";
import ProDesignCard from "./ProDesignCard";
import MasteringVideo from "./MasteringVideo";
import GetFifLoyalty from "./GetFifLoyalty";
import MentConnection from "./MentConnection";
import MyMentor from "./MyMentor";
import mrkInPic3 from "../../Images/mrkInPic3.png";

function HubDevelopment() {
  const loop = [1, 2, 3, 4];
  return (
    <div className="hubDevelopmentPart">
      <div className="custContain">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="proDeWrapDivsParent">
              <div className="proDeWrapDiv">
                <ProDesignCard />
              </div>
              <div className="proDeWrapDiv">
                <ProDesignCard />
              </div>
              <div className="proDeWrapDiv">
                <ProDesignCard />
              </div>
            </div>
            <div className="madoSkillMainDiv">
              <div className="mandoHubDiv">
                {/* <p className="mandoHead">Mandatory Course</p> */}
                <p className="mandoHead">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magnam velit ad sapiente. Sequi asperiores a doloremque
                  praesentium est! Dicta, unde.
                </p>
                <div>
                  {loop?.map((item, index) => {
                    return (
                      <div
                        className="mastFroFiggrdr"
                        style={
                          index === loop?.length - 1 ? { border: "none" } : {}
                        }
                      >
                        <div className="masteRingVidParDiv">
                          <MasteringVideo />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="skillRecoDiv">
                <div className="skillMandoDivs">
                  <p className="mandoHead">Skill Development Course</p>
                  <div>
                    <MasteringVideo />
                  </div>
                </div>
                <div className="recoCourseManDiv">
                  <p className="mandoHead">Recommending Course</p>
                  <div>
                    {loop.map((item, index) => {
                      return (
                        <div
                          className="mastFroFiggrdr"
                          style={
                            index === loop?.length - 1 ? { border: "none" } : {}
                          }
                        >
                          <div className="masteRingVidParDiv">
                            <MasteringVideo />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div
              className="mrkMiddleInnerDivs"
              style={{ backgroundColor: "#8640A7" }}
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
            <div>
              <GetFifLoyalty />
            </div>
            <div>
              <MentConnection />
            </div>
            <div className="myHubDevMentorDiv">
              <MyMentor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HubDevelopment;
