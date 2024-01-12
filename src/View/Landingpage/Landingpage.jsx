import React from "react";
import "./Landingpage.css";
import { Link, NavLink, Navigate } from "react-router-dom";
import logo from "../../Images/Logo.png";
import landBanBack from "../../Images/landBanBack.png";
import landBanBack2 from "../../Images/landBanBack2.png";
import manageInPic from "../../Images/manageInPic.png";
import managePartBg from "../../Images/managePartBg.png";
import headLogo from "../../Images/employeeexperiencehub.png";
import landBanInImg from "../../Images/landBanInImg.png";
import employEngageBackImg from "../../Images/employEngageBackImg.png";
import compreTextImg from "../../Images/compreTextImg.png";
import compreDesktopImg from "../../Images/compreDesktopImg.png";
import landChartImg from "../../Images/landChartImg.png";
import advocacyInImg from "../../Images/advocacyInImg.png";
import networkInImg from "../../Images/networkInImg.png";
import networkBackImg from "../../Images/networkBackImg.png";
import onboardInImg from "../../Images/onboardInImg.png";
import affinityInImg from "../../Images/affinityInImg.png";
import landFootPic1 from "../../Images/landFootPic1.png";
import landFootPic2 from "../../Images/landFootPic2.png";
import starcmntpic from "../../Images/starcmntpic.png";
import ftLandLogo from "../../Images/ftLandLogo.png";

const Landingpage = () => {
  return (
    <>
      {/* <section className="landBannerSection">
        <figure className="landBanFig">
            <img src={landBanBack} alt="..." />
        </figure>
        <div className="banTextsDiv">
            <p className="aBettText">a better future needs employee experience</p>
            <p className="atThecenText">at the center of all decision making</p>
            <p className="weHelpText">we help organisations to design and deliver employee experience transformation through our product and consulting services.</p>
            <div className="getStartBtnDiv">
                <button className="getStartBtn"><span><i class="fa-solid fa-arrow-left-long"></i></span> get started</button>
            </div>
        </div>
      </section> */}
      {/* <section className="manageBySection">
        <figure className="manageFig">
            <img src={manageInPic} alt="..." />
        </figure>
        <div className="manageTextsDiv">
            <p className="manageByExpText">management by experience is the secret to high performance culture</p>
            <p className="empExpText">Employee experience encapsulates what people encounter and observe over the course of their tenure in the organization, it is the <span>Moments That Matter</span></p>
            <p className="hpyEmpText">happy employees are the biggest assets to the company, know what makes your employees happy through our 4D methodology</p>
        </div>
      </section> */}
      {/* <header className="blackLandHeadSection">
        <div className="containerPageLand">
          <div>
            <ul className="blackLandHeadUl">
              <li className="blackLandHeadLi">
                <Link to="/" className="blackLandHeadLiAn">
                  labs
                </Link>
              </li>
              <li className="blackLandHeadLi">
                <Link to="/" className="blackLandHeadLiAn">
                  singularity hub
                </Link>
              </li>
              <li className="blackLandHeadLi">
                <Link to="/" className="blackLandHeadLiAn">
                  abundance360
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header> */}
      <header className="landHeadSection">
        <div className="containerPageLand">
          <div className="navLandHeader">
            <Link to="/" className="landLogoDivAn">
              <div className="landLogoDiv">
                <figure className="landLogoFig">
                  <img src={headLogo} alt="..." />
                </figure>
                <p className="landLogoText">elite employee experience hub</p>
              </div>
            </Link>
            <ul className="landHeadUl">
              <li className="landHeadLi">
                <NavLink to="/" className="landHeadLiAn">
                  PLATFORM
                </NavLink>
              </li>
              <li className="landHeadLi">
                <NavLink to="/" className="landHeadLiAn">
                  CONSULTING
                </NavLink>
              </li>
              <li className="landHeadLi">
                <NavLink to="/" className="landHeadLiAn">
                  INSIGHTS
                </NavLink>
              </li>
            </ul>
            <div>
              <button className="landHeadBtns">log in</button>
              <button className="landHeadBtns">sign up</button>
              <button
                className="rescLandHeadBtn"
                onClick={() => {
                  document.querySelector(".sidebarSection").style.cssText +=
                    "transform: translate(0, 0);";
                }}
              >
                <i class="fa-solid fa-bars-staggered"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="sidebarSection">
        <div className="sideHeadDiv">
          <figure className="sideHeadLogo">
            <img src={headLogo} alt="..." />
          </figure>
          <button className="sideHeadCnclBtn" onClick={()=>{
            document.querySelector(".sidebarSection").style.cssText +=
            "transform: translate(-350px, 0);";
          }}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <ul className="sideBarUl">
          <li className="sideBarLi">
            <Link to="/" className="sideBarLiAn">
              PLATFORM
            </Link>
          </li>
          <li className="sideBarLi">
            <Link to="/" className="sideBarLiAn">
              CONSULTING
            </Link>
          </li>
          <li className="sideBarLi">
            <Link to="/" className="sideBarLiAn">
              INSIGHTS
            </Link>
          </li>
          <li className="sideBarLi">
            <Link to="/" className="sideBarLiAn">
              Log In
            </Link>
          </li>
          <li className="sideBarLi">
            <Link to="/" className="sideBarLiAn">
              Sign Up
            </Link>
          </li>
        </ul>
      </section>
      <section className="landBannerSection">
        <figure className="landBanFig">
          <img src={landBanBack2} alt="..." />
        </figure>
        <div className="landBannerTextBackDiv">
          <div className="containerPageLand">
            <div className="banLeftFigDiv">
              <figure className="landBanInFig">
                <img src={landBanInImg} alt="..." />
              </figure>
            </div>
            <div className="banTextsDiv">
              <p className="aBettText">
                a better future needs employee experience
              </p>
              <p className="atThecenText">
                at the center of all decision making
              </p>
              <p className="weHelpText">
                we help organisations to design and deliver employee experience
                transformation through our product and consulting services.
              </p>
              <div className="getStartBtnDiv">
                <button className="getStartBtn">
                  <span>
                    <i class="fa-solid fa-arrow-left-long"></i>
                  </span>{" "}
                  get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="manageBySection">
        <div className="containerPageLand">
          <div className="manageTextsDiv">
            <p className="manageByExpText">
              management by experience is the secret to high performance culture
            </p>
            <p className="empExpText">
              Employee experience encapsulates what people encounter and observe
              over the course of their tenure in the organization, it is the{" "}
              <span>Moments That Matter</span>
            </p>
            <p className="hpyEmpText">
              happy employees are the biggest assets to the company, know what
              makes your employees happy through our 4D methodology
            </p>
          </div>
          <div className="manageFigDiv">
            <figure className="manageFig">
              <img src={manageInPic} alt="..." />
            </figure>
          </div>
        </div>
      </section>
      <section className="employEngageSection">
        <div className="containerPageLand">
          <div className="employBgImgFigDiv">
            <figure className="employBgImgFig">
              <img src={employEngageBackImg} alt="..." />
            </figure>
          </div>
          <div className="employAllTextsDiv">
            <p className="employEngText">
              employee <br /> engagement
            </p>
            <p className="employHigherText">
              higher the employee engagement the better the <br /> performance
              and commitment to organisation’s <br /> success.
            </p>
            <p className="emploOurText">
              Our employee engagement view all calendar helps <br />{" "}
              organisations to plan for events and enables employees <br /> to
              participate in events as they like
            </p>
          </div>
        </div>
      </section>
      <section className="compreHenSection">
        <div className="containerPageLand">
          <div className="compreHenTextLeft">
            <p className="firstCompreText">
              <span className="firstCompFSpan">
                1<sup>st</sup>
              </span>
              <br /> <span className="firstCompSSpan">of its kind</span>
              <br /> comprehensive <br /> employee engagement <br /> platform
            </p>
            <figure className="compreTextFig">
              <img src={compreTextImg} alt="..." />
            </figure>
            <div className="compreAllNatioTextsDiv">
              <p className="compreNationText">National Award Winner</p>
              <p className="compreNatioSmallText">Assocham Work Vision 2022 </p>
              <p className="compreNatioSmallText">
                Annual HR Excellence Awards
              </p>
            </div>
          </div>
          <figure className="compreDeskFig">
            <img src={compreDesktopImg} alt="..." />
          </figure>
        </div>
      </section>
      <section className="labdChartImgSection">
        <figure className="landChartFig">
          <img src={landChartImg} alt="..." />
        </figure>
      </section>
      <section className="employAdvoSection">
        <div className="containerPageLand">
          <div className="advocacyTextsDiv">
            <p className="advoTextHead">
              employee <br /> advocacy
            </p>
            <p className="advoTextPara">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
            <p className="advoTextPara">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
              libero dignissim, mollis mi eget{" "}
            </p>
          </div>
          <figure className="advocacyInFig">
            <img src={advocacyInImg} alt="..." />
          </figure>
        </div>
      </section>
      <section className="networkLandSection">
        <figure className="netWrkBackFig">
          <img src={networkBackImg} alt="..." />
        </figure>
        <div className="netWorkBackTextsDiv">
          <div className="containerPageLand">
            <figure className="networkInFig">
              <img src={networkInImg} alt="..." />
            </figure>
            <div className="networkAllTextsDiv">
              <p className="netWrkTextHead">networking</p>
              <p className="netWrkSmallTexts">
                lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
              <p className="netWrkSmallTexts">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                at libero dignissim, mollis mi eget
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="onboardLandSection">
        <div className="containerPageLand">
          <div className="onboardTextsDiv">
            <p className="onbrdHireHead">
              hiring <br /> and onboarding
            </p>
            <p className="onbrdHireTexts">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="onbrdHireTexts">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
              libero dignissim, mollis mi eget
            </p>
          </div>
          <figure className="onboardFig">
            <img src={onboardInImg} alt="..." />
          </figure>
        </div>
      </section>
      <section className="employVoiceSection">
        <div className="containerPageLand">
          <figure className="networkInFig">
            <img src={networkInImg} alt="..." />
          </figure>
          <div className="networkAllTextsDiv">
            <p className="netWrkTextHead">
              employee <br /> voice
            </p>
            <p className="netWrkSmallTexts">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
            <p className="netWrkSmallTexts">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
              libero dignissim, mollis mi eget
            </p>
          </div>
        </div>
      </section>
      <section className="onboardLandSection">
        <div className="containerPageLand">
          <div className="onboardTextsDiv">
            <p className="onbrdHireHead">
              opportunities <br /> and initiatives
            </p>
            <p className="onbrdHireTexts">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="onbrdHireTexts">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
              libero dignissim, mollis mi eget
            </p>
          </div>
          <figure className="onboardFig">
            <img src={onboardInImg} alt="..." />
          </figure>
        </div>
      </section>
      <section className="employEngageSection">
        <div className="containerPageLand">
          <div className="employBgImgFigDiv">
            <figure className="employBgImgFig">
              <img src={affinityInImg} alt="..." />
            </figure>
          </div>
          <div className="employAllTextsDiv">
            <p className="employEngText">
              affinity <br /> group
            </p>
            <p className="employHigherText">
              lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            </p>
            <p className="emploOurText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Nullam at libero dignissim, mollis mi eget
            </p>
          </div>
        </div>
      </section>
      <section className="onboardLandSection">
        <div className="containerPageLand">
          <div className="onboardTextsDiv">
            <p className="onbrdHireHead">
              reward <br /> and recognition
            </p>
            <p className="onbrdHireTexts">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="onbrdHireTexts">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Nullam at libero dignissim, mollis mi eget
            </p>
          </div>
          <figure className="onboardFig">
            <img src={onboardInImg} alt="..." />
          </figure>
        </div>
      </section>
      <section className="employEngageSection">
        <div className="containerPageLand">
          <div className="employBgImgFigDiv">
            <figure className="employBgImgFig">
              <img src={affinityInImg} alt="..." />
            </figure>
          </div>
          <div className="employAllTextsDiv">
            <p className="employEngText">
              hall of <br /> fame
            </p>
            <p className="employHigherText">
              lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            </p>
            <p className="emploOurText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Nullam at libero dignissim, mollis mi eget
            </p>
          </div>
        </div>
      </section>
      <section className="onboardLandSection">
        <div className="containerPageLand">
          <div className="onboardTextsDiv">
            <p className="onbrdHireHead">
              company <br /> bulletin board
            </p>
            <p className="onbrdHireTexts">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="onbrdHireTexts">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Nullam at libero dignissim, mollis mi eget
            </p>
          </div>
          <figure className="onboardFig">
            <img src={onboardInImg} alt="..." />
          </figure>
        </div>
      </section>
      <section className="personTabSection">
        <div className="containerPageLand">
          <div className="row">
            <div className="col-md-3 align-self-end mb-2 mb-md-0">
              <figure className="landFtLeftFig">
                <img src={landFootPic2} alt="..." />
              </figure>
            </div>
            <div className="col-md-9">
              <div className="mainLandFtTextDiv">
                <div className="landRightFtTextDiv">
                  <figure className="landFtRightFig">
                    <img src={landFootPic1} alt="..." />
                  </figure>
                  <div>
                    <div className="strLandFigDiv">
                      <div>
                        <p className="landFtName">Samar Banerjee</p>
                        <p className="landFtPost">CHRO,</p>
                        <p className="landFtCmpny">STAR CEMENT</p>
                      </div>
                      <figure className="strcmntFig">
                        <img src={starcmntpic} alt="..." />
                      </figure>
                    </div>
                    <p className="landPrevFtText">
                      Fractals is one of those unique companies that stand-out
                      in the HR Consulting space who seamlessly blends
                      Technology and HR process to deliver 360-degree solutions
                      around Employee Experience. Their strong foundation of
                      Industry knowledge, approach of co-creating solutions, and
                      their analytics framework for data backed intervention
                      models is of very high quality. I wish them great success!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footerLanding">
        <div className="firstFooterPart">
          <div className="conctStrt">
            <p className="ftprtcCntcText">Contact Us</p>
            <p className="strtJrnyText">Start your journey to the future.</p>
            <div className="iagreePart">
              <input type="checkbox" />
              <label htmlFor="">
                I agree to fractals <Link to="/">terms of use</Link> and{" "}
                <Link to="/">privacy policy</Link>
              </label>
            </div>
            <div className="footLndBtnDiv">
              <input type="email" placeholder="Enter email here" />
              <button>
                <i class="fa-solid fa-arrow-up"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="secondFooterPart">
          <figure className="sndFtPrtFig">
            <img src={landBanBack2} alt="..." />
          </figure>
          <div className="secondInnerFtDiv">
            <div className="containerPageLand">
              <div className="footerLandInDiv">
                <div>
                  <figure className="ftLandFig">
                    <img src={ftLandLogo} alt="..." />
                  </figure>
                  <div>
                    <p className="allFootLandHead">Follow</p>
                    <ul className="footerLfticonUl">
                      <li className="footerLfticonLi">
                        <Link to="/" className="footLeftInIconsAn">
                          <i class="fa-brands fa-linkedin"></i>
                        </Link>
                      </li>
                      <li className="footerLfticonLi">
                        <Link to="/" className="footLeftInIconsAn">
                          <i class="fa-brands fa-youtube"></i>
                        </Link>
                      </li>
                      <li className="footerLfticonLi">
                        <Link to="/" className="footLeftInIconsAn">
                          <i class="fa-brands fa-facebook"></i>
                        </Link>
                      </li>
                      <li className="footerLfticonLi">
                        <Link to="/" className="footLeftInIconsAn">
                          <i class="fa-brands fa-square-twitter"></i>
                        </Link>
                      </li>
                      <li className="footerLfticonLi">
                        <Link to="/" className="footLeftInIconsAn">
                          <i class="fa-brands fa-square-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="allFootLandHead">resources</p>
                  <ul className="footLndOtherUl">
                    <li className="footLndOtherLi">
                      <Link to="/" className="footLndOtherLiAn">
                        Podcasts
                      </Link>
                    </li>
                    <li className="footLndOtherLi">
                      <Link to="/" className="footLndOtherLiAn">
                        Insights
                      </Link>
                    </li>
                    <li className="footLndOtherLi">
                      <Link to="/" className="footLndOtherLiAn">
                        Blog
                      </Link>
                    </li>
                    <li className="footLndOtherLi">
                      <Link to="/" className="footLndOtherLiAn">
                        News
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="allFootLandHead">about</p>
                  <ul className="footLndOtherUl">
                    <li className="footLndOtherLi">
                      <Link to="/" className="footLndOtherLiAn">
                        Our Mission
                      </Link>
                    </li>
                    <li className="footLndOtherLi">
                      <Link to="/" className="footLndOtherLiAn">
                        Impact
                      </Link>
                    </li>
                    <li className="footLndOtherLi">
                      <Link to="/" className="footLndOtherLiAn">
                        Team
                      </Link>
                    </li>
                    <li className="footLndOtherLi">
                      <Link to="/" className="footLndOtherLiAn">
                        Press Room
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="allFootLandHead">contact</p>
                  <ul className="footLndOtherUl">
                    <li className="footLndOtherLi">
                      <Link to="/" className="footLndOtherLiAn">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="containerPageLand">
                  <ul className="ftrUl">
                    <li className="ftrLi">
                      <Link to="/" className="ftrLiAn">
                        Help Desk
                      </Link>
                    </li>
                    <li className="ftrLi">
                      <Link to="/" className="ftrLiAn">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="ftrLi">
                      <Link to="/" className="ftrLiAn">
                        Terms of Use
                      </Link>
                    </li>
                    <li className="ftrLi">
                      <Link to="/" className="ftrLiAn">
                        Community Guidelines
                      </Link>
                    </li>
                    <li className="ftrLi">
                      <Link to="/" className="ftrLiAn">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landingpage;
