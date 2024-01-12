import React, { useState } from "react";
import champion from "../../Images/champion.png";
// import rateSkill from "../../Images/rateSkill.png";
import rateSkill from "../../Images/Icons/PNG/Attach.png";
import writeTest from "../../Images/Icons/PNG/Testimonials.png";
import giveCoins from "../../Images/Icons/PNG/Points.png";
import { useAuthCtx } from "../../context/AuthCtx";
import ThoughtModal from "../../Component/Modal/ThoughtModal";
import profileImg from "../../Images/Icons/PNG/Profile (2).png";
import writePost from "../../Images/Icons/PNG/Post.png";

function RateSkills() {
  const { userData } = useAuthCtx();
  const [modalA, setModalA] = useState(false);
  const thoughtModOpen = () => {
    setModalA(true);
  };
  return (
    <>
      <div className="rateMySkillDiv" onClick={thoughtModOpen}>
        <div className="rateMyFigInpDiv">
          <figure className="rateMyFig">
            {userData?.image === "image" ? (
              <img src={profileImg} alt="..." />
            ) : (
              // <img src={userData?.image} alt="..." />
              <img src={userData?.image} alt="..." />
              // <img
              //   src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
              //   alt="..."
              // />
            )}
          </figure>
          <input
            type="text"
            placeholder="Testimonials and Contributions"
            className="rateMyInp"
          />
        </div>
        <div className="rateGiveWritePostDiv">
          <div style={{ cursor: "pointer" }} className="rateSkillDiv">
            <figure className="rateSkillFig">
              <img src={rateSkill} alt="..." />
            </figure>
            <span className="rateSkillText">Attach</span>
          </div>
          {/* <div className="rateSkillDiv">
            <figure className="giveCoinFig">
              <img src={giveCoins} alt="..." />
            </figure>
            <span className="giveCoinText">Give Coins</span>
          </div> */}
          <div className="rateSkillDiv">
            <figure className="writeTestFig">
              <img src={writeTest} alt="..." />
            </figure>
            <span className="writeTestText">Write Testimonials</span>
          </div>
          {/* <img src={writePost} alt="..." />
          <span className="wrGiRaBtn">Post</span> */}
          {/* <button className="wrGiRaBtn">Post</button> */}

          {/* <div className="rateSkillDiv">
            <figure className="giveCoinFig">
              <img src={writePost} alt="..." />
            </figure>
            <span className="giveCoinText">Post</span>
          </div> */}
        </div>
      </div>
      {modalA && (
        <ThoughtModal
          closemodal={setModalA}
          text={"Write Testimonials"}
          attach={"Attach"}
          // event={"Give Coins"}
          elite={"Write Testimonials"}
        />
      )}
    </>
  );
}

export default RateSkills;
