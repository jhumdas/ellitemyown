import React from "react";
import "./Profile.css";
import afiPic1 from "../../Images/afiPic1.png";
import afiPic2 from "../../Images/afiPic2.png";
import afiPic3 from "../../Images/afiPic3.png";
import afiPic4 from "../../Images/afiPic4.png";
import chatIcon from "../../Images/Icons/PNG/Comment.png"
import likeIcon from "../../Images/Icons/PNG/Reaction - Like.png"
import comntIcon from "../../Images/Icons/PNG/Comment.png"
import shreIcon from "../../Images/Icons/PNG/Share.png"

function ProSocialCommit() {
  return (
    <div className="proSocialDiv">
      <div className="mySocalProAllBtnDiv">
        <p className="mySocalCmtHead">My Social Commitment</p>
        <div className="mySocialAllBtnDiv">
          <button className="mySocialAllBtn">See all</button>
        </div>
      </div>
      <div className="evetCresParentDiv">
        <div className="evetCreMainDiv" style={{ backgroundColor: "#F1E5DD" }}>
          <div className="eveCreAfisDiv">
            <p className="hubEvCrePara">Red Cross Society</p>
            <div className="hubMyAfFigsDiv">
              <figure className="hubMyAfFig hubMyAfFig1">
                <img src={afiPic1} alt="..." />
              </figure>
              <figure className="hubMyAfFig hubMyAfFig2">
                <img src={afiPic2} alt="..." />
              </figure>
              <figure className="hubMyAfFig hubMyAfFig3">
                <img src={afiPic3} alt="..." />
              </figure>
              <figure className="hubMyAfFig hubMyAfFig4">
                <img src={afiPic4} alt="..." />
              </figure>
            </div>
          </div>
          <div className="proMemDateChtDiv">
            <div>
              <span className="proMemText">Member</span>
              <span className="proDateText">2010-2022</span>
            </div>
            {/* <button className="proMemDateChtBtn"><i class="fa-regular fa-comment-dots"></i></button> */}
            <figure className="chatIconFig">
              <img src={chatIcon} alt="..." />
            </figure>
          </div>
          <div className="proPartiTextDiv">
            <span className="proPartiText">Participated in Afghanistan War Rescue Mission</span>
          </div>
          <div className="proAllThreeBtnsDiv">
            {/* <button className="proRedLinkBtn"><i class="fa-regular fa-thumbs-up"></i></button>
            <button className="proRedChatBtn"><i class="fa-regular fa-comment-dots"></i></button>
            <button className="proRedShareBtn"><i class="fa-regular fa-share-from-square"></i></button> */}
            <figure className="lkShCmIconDiv">
              <img src={likeIcon} alt="..." />
            </figure>
            <figure className="lkShCmIconDiv">
              <img src={comntIcon} alt="..." />
            </figure>
            <figure className="lkShCmIconDiv">
              <img src={shreIcon} alt="..." />
            </figure>
          </div>
        </div>
        <div className="evetCreMainDiv" style={{ backgroundColor: "#F1F1D4" }}>
          <div className="eveCreAfisDiv">
            <p className="hubEvCrePara">Ramkrishna Mission</p>
            <div className="hubMyAfFigsDiv">
              <figure className="hubMyAfFig hubMyAfFig1">
                <img src={afiPic1} alt="..." />
              </figure>
              <figure className="hubMyAfFig hubMyAfFig2">
                <img src={afiPic2} alt="..." />
              </figure>
              <figure className="hubMyAfFig hubMyAfFig3">
                <img src={afiPic3} alt="..." />
              </figure>
              <figure className="hubMyAfFig hubMyAfFig4">
                <img src={afiPic4} alt="..." />
              </figure>
            </div>
          </div>
          <div className="myAffCreBtnsDiv">
            <p className="myAffCrePara">Volunteer</p>
            {/* <button className="myAffCreChatBtn">
              <i class="fa-regular fa-comment-dots"></i>
            </button> */}
            <figure className="chatIconFig">
              <img src={chatIcon} alt="..." />
            </figure>
          </div>
        </div>
        <div className="evetCreMainDiv" style={{ backgroundColor: "#E8E9FF" }}>
          <div className="eveCreAfisDiv">
            <p className="hubEvCrePara">Guitar Club Kolkata</p>
            <div className="hubMyAfFigsDiv">
              <figure className="hubMyAfFig hubMyAfFig1">
                <img src={afiPic1} alt="..." />
              </figure>
              <figure className="hubMyAfFig hubMyAfFig2">
                <img src={afiPic2} alt="..." />
              </figure>
              <figure className="hubMyAfFig hubMyAfFig3">
                <img src={afiPic3} alt="..." />
              </figure>
              <figure className="hubMyAfFig hubMyAfFig4">
                <img src={afiPic4} alt="..." />
              </figure>
            </div>
          </div>
          <div className="myAffCreBtnsDiv">
            <p className="myAffCrePara">Core Member</p>
            {/* <button className="myAffCreChatBtn">
              <i class="fa-regular fa-comment-dots"></i>
            </button> */}
            <figure className="chatIconFig">
              <img src={chatIcon} alt="..." />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProSocialCommit;
