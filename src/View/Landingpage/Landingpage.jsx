import React, { useState, useEffect } from 'react';
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
  
  const [imageHeight, setImageHeight] = useState(700); // Set your initial image height here

  useEffect(() => {
    const handleScroll = () => {
      const newImageHeight = 700 - window.scrollY; // Adjust this calculation as needed

      // Ensure the image height does not go below a certain value (e.g., 50)
      setImageHeight(Math.max(newImageHeight, 100));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means the effect runs once after the initial render
  return (
    <>
  
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
              {/* <figure className="landBanInFig">
                <img src={landBanInImg} alt="..." style={{ height: `${imageHeight}px` }}/>
              </figure> */}
              <div className="divsticky-vh vbfix">
  <div
    data-is-ix2-target={1}
    className="lottie-animation-vh-scroll waveanimunique-billion-001"
    data-w-id="1de80802-7247-78fc-1553-15db946b65b8"
    data-animation-type="lottie"
    data-src="https://assets-global.website-files.com/60f7fb81f020d41a00e2fd84/60f7fb81f020d43184e2fdb2_wave-square-billion-r01c03b-4s.json"
    data-loop={0}
    data-direction={1}
    data-autoplay={0}
    data-renderer="svg"
    data-default-duration="4.004003840917587"
    data-duration="6.004003840917587"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1000 1000"
      width={1000}
      height={1000}
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "100%",
        height: "100%",
        transform: "translate3d(0px, 0px, 0px)",
        contentVisibility: "visible"
      }}
    >
      <defs>
        <clipPath id="__lottie_element_68">
          <rect width={1000} height={1000} x={0} y={0} />
        </clipPath>
      </defs>
      <g clipPath="url(#__lottie_element_68)">
        <g
          transform="matrix(1,0,0,1,0,0)"
          opacity={1}
          style={{ display: "block" }}
        >
          <g
            opacity={1}
            transform="matrix(1,0,0,1,597.2670288085938,479.8370056152344)"
          >
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity={0}
              strokeMiterlimit={10}
              stroke="rgb(32,29,30)"
              strokeOpacity={1}
              strokeWidth={1}
              d=" M-272.47900390625,-523.93798828125 C-232.42100524902344,-358.6579895019531 -106.0510025024414,-315.2040100097656 -65.20999908447266,-249.49000549316406 C33.959999084472656,-90.04100036621094 -95.84300231933594,-48.17599868774414 -130.01300048828125,80.9520034790039 C-136.35499572753906,104.92500305175781 -139.82000732421875,127.73300170898438 -140.7790069580078,149.4199981689453"
            />
          </g>
        </g>
        <g
          transform="matrix(1,0,0,1,0,0)"
          opacity={1}
          style={{ display: "block" }}
        >
          <g
            opacity={1}
            transform="matrix(1,0,0,1,588.4719848632812,491.9410095214844)"
          >
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity={0}
              strokeMiterlimit={10}
              stroke="rgb(32,29,30)"
              strokeOpacity={1}
              strokeWidth={1}
              d=" M-263.6820068359375,-533.5360107421875 C-226.08200073242188,-353.7040100097656 -97.25599670410156,-323.3190002441406 -53.80699920654297,-254.52099609375 C45.35100173950195,-97.12200164794922 -80.8239974975586,-55.926998138427734 -115.73200225830078,82.25199890136719 C-135.31700134277344,159.8509979248047 -125.7229995727539,225.60499572753906 -99.34500122070312,280.86700439453125"
            />
          </g>
        </g>
        <g
          transform="matrix(1,0,0,1,0,0)"
          opacity={1}
          style={{ display: "block" }}
        >
          <g
            opacity={1}
            transform="matrix(1,0,0,1,579.7650146484375,504.7669982910156)"
          >
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity={0}
              strokeMiterlimit={10}
              stroke="rgb(32,29,30)"
              strokeOpacity={1}
              strokeWidth={1}
              d=" M-254.94700622558594,-543.7459716796875 C-219.7030029296875,-349.3840026855469 -88.4219970703125,-332.0690002441406 -42.492000579833984,-260.27398681640625 C56.55099868774414,-104.9020004272461 -65.89099884033203,-64.4000015258789 -101.41100311279297,82.91600036621094 C-109.76100158691406,117.50599670410156 -112.51599884033203,149.82899475097656 -110.74700164794922,179.98899841308594"
            />
          </g>
        </g>
        <g
          transform="matrix(1,0,0,1,0,0)"
          opacity={1}
          style={{ display: "block" }}
        >
          <g
            opacity={1}
            transform="matrix(1,0,0,1,570.9190063476562,517.4520263671875)"
          >
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity={0}
              strokeMiterlimit={10}
              stroke="rgb(32,29,30)"
              strokeOpacity={1}
              strokeWidth={1}
              d=" M-246.20199584960938,-553.9010009765625 C-213.31399536132812,-345.0090026855469 -79.57499694824219,-340.7650146484375 -31.062000274658203,-265.9949951171875 C67.97000122070312,-112.6719970703125 -51.051998138427734,-72.7959976196289 -87.08000183105469,83.63400268554688 C-100.53600311279297,142.1060028076172 -98.66200256347656,194.38699340820312 -86.45800018310547,240.89700317382812"
            />
          </g>
        </g>
        <g
          transform="matrix(1,0,0,1,0,0)"
          opacity={1}
          style={{ display: "block" }}
        >
          <g
            opacity={1}
            transform="matrix(1,0,0,1,562.18798828125,530.1690063476562)"
          >
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity={0}
              strokeMiterlimit={10}
              stroke="rgb(32,29,30)"
              strokeOpacity={1}
              strokeWidth={1}
              d=" M-237.4669952392578,-564.1110229492188 C-206.93499755859375,-340.69000244140625 -70.81900024414062,-349.38299560546875 -19.722000122070312,-271.63800048828125 C79.19400024414062,-120.34200286865234 -36.32500076293945,-81.2249984741211 -72.75900268554688,84.2979965209961 C-77.72200012207031,106.8949966430664 -80.50599670410156,128.6179962158203 -81.38600158691406,149.48399353027344"
            />
          </g>
        </g>
        <g
          transform="matrix(1,0,0,1,0,0)"
          opacity={1}
          style={{ display: "block" }}
        >
          <g
            opacity={1}
            transform="matrix(1,0,0,1,553.4169921875,542.9520263671875)"
          >
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity={0}
              strokeMiterlimit={10}
              stroke="rgb(32,29,30)"
              strokeOpacity={1}
              strokeWidth={1}
              d=" M-228.66900634765625,-574.2780151367188 C-200.6199951171875,-336.41400146484375 -62.04899978637695,-358.1759948730469 -8.366999626159668,-277.4570007324219 C90.53700256347656,-128.2100067138672 -21.812999725341797,-89.89099884033203 -58.39899826049805,84.89700317382812 C-62.314998626708984,103.572998046875 -64.8270034790039,121.69100189208984 -66.08000183105469,139.25799560546875"
            />
          </g>
        </g>
        <g
          transform="matrix(1,0,0,1,0,0)"
          opacity={1}
          style={{ display: "block" }}
        >
          <g
            opacity={1}
            transform="matrix(1,0,0,1,544.6339721679688,555.6799926757812)"
          >
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity={0}
              strokeMiterlimit={10}
              stroke="rgb(32,29,30)"
              strokeOpacity={1}
              strokeWidth={1}
              d=" M-219.88400268554688,-584.4990234375 C-194.29299926757812,-332.0820007324219 -53.242000579833984,-366.8059997558594 3.0230000019073486,-283.11199951171875 C101.91600036621094,-135.91400146484375 -7.4720001220703125,-98.35099792480469 -44.10599899291992,85.68199920654297 C-60.95500183105469,170.31700134277344 -50.930999755859375,244.4600067138672 -26.555999755859375,308.1619873046875"
            />
          </g>
        </g>
      </g>
    </svg>
  </div>
  <div className="wavediv4lottieabsolute wavedivunique-billion-001" />
  <div className="container paddingbottom100 w-container">
    <div className="sectionpadding" />
  </div>
</div>

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
              <img src={manageInPic} alt="..." style={{ height: `${imageHeight}px` }}/>
            </figure>
          </div>
        </div>
      </section>
      <section className="employEngageSection">
        <div className="containerPageLand">
          <div className="employBgImgFigDiv">
            <figure className="employBgImgFig">
              <img src={employEngageBackImg} alt="..." style={{ height: `${imageHeight}px` }}/>
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
            <img src={advocacyInImg} alt="..." style={{ height: `${imageHeight}px` }}/>
          </figure>
        </div>
      </section>
      <section className="networkLandSection">
        <figure className="netWrkBackFig">
          <img src={networkBackImg} alt="..." style={{ height: `${imageHeight}px` }}/>
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
            <img src={onboardInImg} alt="..." style={{ height: `${imageHeight}px` }}/>
          </figure>
        </div>
      </section>
      <section className="employEngageSection">
        <div className="containerPageLand">
          <div className="employBgImgFigDiv">
            <figure className="employBgImgFig">
              <img src={affinityInImg} alt="..." style={{ height: `${imageHeight}px` }}/>
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
              <img src={affinityInImg} alt="..." style={{ height: `${imageHeight}px` }}/>
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
            <img src={onboardInImg} alt="..." style={{ height: `${imageHeight}px` }}/>
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
                        <img src={starcmntpic} alt="..." style={{ height: `${imageHeight}px` }}/>
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
