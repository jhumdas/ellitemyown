import React, { useState, useEffect } from "react";
import "./Landingpage.css";
import { Link, NavLink, Navigate } from "react-router-dom";
import logo from "../../Images/Logo.png";
import landBanBack from "../../Images/landBanBack.png";
import landBanBack2 from "../../Images/landBanBack2.png";
import manageInPic from "../../Images/manageInPic.png";
import managePartBg from "../../Images/managePartBg.png";
import headLogo from "../../Images/employeeexperiencehub.png";
// import landBanInImg from "../../Images/landBanInImg.png";
import landBanInImg from "../../Images/60f7fb81f020d40cbbe2fdae_singularity-wave-section-1200w-001-left-k.svg";
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
  const [dashOffset, setDashOffset] = useState(0);
  const [dashOffset1, setDashOffset1] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page the user is
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        800;

      // Adjust the animation speed by changing the multiplier
      const animationSpeed = 8;

      // Calculate the new dash offset value based on scroll percentage
      const newDashOffset = 800 - scrollPercentage * animationSpeed;

      // Ensure the dash offset doesn't go below 0 or above 100
      setDashOffset(Math.max(0, Math.min(800, newDashOffset)));
      
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // useEffect(() => {
  //   const handleScroll = () => {
  
  //     const scrollPercentage =
  //       (window.scrollY /
  //         (document.documentElement.scrollHeight - window.innerHeight)) *
  //       300;

 
  //     const animationSpeed = 8;

  
  //     const newDashOffset1 = 8230 - scrollPercentage * animationSpeed;

  
  //     setDashOffset1(Math.max(0, Math.min(823, newDashOffset1)));
      
  //   };


  //   window.addEventListener("scroll", handleScroll);

 
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
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
          <button
            className="sideHeadCnclBtn"
            onClick={() => {
              document.querySelector(".sidebarSection").style.cssText +=
                "transform: translate(-350px, 0);";
            }}
          >
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
                <img src={landBanInImg} alt="..." />
              </figure> */}
              {/* <div
                data-is-ix2-target={1}
                className="lottie-animation-vh-scroll waveanimunique-change-001"
                data-w-id="ab7559ce-f020-6948-0678-b4b66edaf667"
                data-animation-type="lottie"
                data-src="https://assets-global.website-files.com/60f7fb81f020d41a00e2fd84/60f7fb81f020d40ea2e2fdb4_wave-square-future-r01c01.json"
                data-loop={0}
                data-direction={1}
                data-autoplay={0}
                data-renderer="svg"
                data-default-duration="4.004003840917587"
                data-duration={0}
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
                    height: "auto",
                    transform: "translate3d(0px, 0px, 0px)",
                    contentVisibility: "visible",
                  }}
                >
                  <defs>
                    <clipPath id="__lottie_element_121">
                      <rect width={1000} height={1000} x={0} y={0} />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#__lottie_element_121)">
                    <g
                      transform="matrix(1,0,0,1,129.40798950195312,-21.37701416015625)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,313.82000732421875,639.39599609375)"
                      >
                        <path
                             className="animated-path"
                             style={{
                              strokeDasharray: 847,
  
                               strokeDashoffset: dashOffset1,
                             }}
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={1}
                          d=" M-165.35000610351562,-636.89599609375 C-194.48800659179688,-545.4439697265625 -100.56800079345703,-513.989013671875 -38.6150016784668,-476.7090148925781 C50.5,-423.0849914550781 29.645999908447266,-295.97198486328125 -67.16699981689453,-214.31500244140625 C-255.7830047607422,-55.224998474121094 72.90499877929688,239.60400390625 224.37399291992188,463.197998046875"
                        />
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,126.7760009765625,-21.57098388671875)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,294.76800537109375,636.9039916992188)"
                      >
                        <path
                             className="animated-path"
                             style={{
                              strokeDasharray: 847,
     
                               strokeDashoffset: dashOffset1,
                             }}
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={1}
                          d=" M-141.1199951171875,-634.4039916992188 C-173.3070068359375,-543.0170288085938 -69.53399658203125,-512.97998046875 -5.333000183105469,-473.11700439453125 C83.00900268554688,-418.2650146484375 61.12699890136719,-292.6570129394531 -45.42300033569336,-212.0469970703125 C-267.8290100097656,-36.59700012207031 168.13900756835938,305.1369934082031 271.5419921875,555.5170288085938"
                        />
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,124.14599609375,-21.7650146484375)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,284.2019958496094,634.4119873046875)"
                      >
                        <path

                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}     className="animated-path"
                        style={{
                          strokeDasharray: 847,

                          strokeDashoffset: dashOffset1,
                        }}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={1}
                          d=" M-125.37799835205078,-631.9119873046875 C-160.61399841308594,-540.5889892578125 -46.97100067138672,-512.0070190429688 19.461999893188477,-469.5249938964844 C107.06099700927734,-413.5069885253906 84.12100219726562,-289.3420104980469 -32.16600036621094,-209.7790069580078 C-236.93099975585938,-59.180999755859375 74.46299743652344,226.67100524902344 218.42799377441406,475.66900634765625"
                        />
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,121.5159912109375,-21.958984375)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,203.63900756835938,568.8809814453125)"
                      >
                        <path
                             className="animated-path"
                             style={{
                              strokeDasharray: 847,
     
                               strokeDashoffset: dashOffset1,
                             }}
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={1}
                          d=" M-39.638999938964844,-566.3809814453125 C-77.92400360107422,-475.12298583984375 45.608001708984375,-448.02899169921875 114.25299835205078,-402.89300537109375 C201.13900756835938,-345.7650146484375 177.11099243164062,-222.98699951171875 51.0880012512207,-144.4720001220703 C-150.73599243164062,-6.585999965667725 -81.98799896240234,333.70001220703125 -41.428001403808594,489.8580017089844"
                        />
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,118.885986328125,-22.15399169921875)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,210.41000366210938,566.3900146484375)"
                      >
                        <path
                             className="animated-path"
                             style={{
                              strokeDasharray: 847,
     
                               strokeDashoffset: dashOffset1,
                             }}
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={1}
                          d=" M-41.233001708984375,-563.8900146484375 C-82.56600189208984,-472.6969909667969 50.87300109863281,-447.1260070800781 121.71199798583984,-399.302001953125 C207.91099548339844,-341.1090087890625 182.7689971923828,-219.67300415039062 47.007999420166016,-142.20599365234375 C-145.58700561523438,-20.479999542236328 -107.2040023803711,284.0039978027344 -72.91100311279297,453.07598876953125"
                        />
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,116.2550048828125,-22.3480224609375)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,217.19400024414062,563.8980102539062)"
                      >
                        <path
                             className="animated-path"
                             style={{
                              strokeDasharray: 847,
     
                               strokeDashoffset: dashOffset1,
                             }}
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={1}
                          d=" M-42.84199905395508,-561.3980102539062 C-87.2239990234375,-470.2699890136719 56.14400100708008,-446.2539978027344 129.15499877929688,-395.7099914550781 C214.69400024414062,-336.4930114746094 188.41099548339844,-216.35800170898438 42.91400146484375,-139.93800354003906 C-180.85800170898438,-9.715999603271484 -112.83399963378906,365.1549987792969 -85.33499908447266,512.0390014648438"
                        />
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,113.625,-22.5419921875)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,223.99099731445312,561.406005859375)"
                      >
                        <path
                             className="animated-path"
                             style={{
                              strokeDasharray: 847,
     
                               strokeDashoffset: dashOffset1,
                             }}
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={1}
                          d=" M-44.46200180053711,-558.906005859375 C-91.89299774169922,-467.8420104980469 61.42599868774414,-445.4150085449219 136.58799743652344,-392.1180114746094 C221.49099731445312,-331.9129943847656 194.04299926757812,-213.04200744628906 38.808998107910156,-137.6699981689453 C-145.0279998779297,-39.707000732421875 -144.9239959716797,222.0019989013672 -126.0770034790039,399.3139953613281"
                        />
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,57.11199951171875,-22.735992431640625)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,257.739990234375,525.906005859375)"
                      >
                        <path
                             className="animated-path"
                             style={{
                              strokeDasharray: 847,
     
                               strokeDashoffset: dashOffset1,
                             }}
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={1}
                          d=" M-19.152000427246094,-523.406005859375 C-69.63200378417969,-432.4070129394531 93.66100311279297,-411.6000061035156 170.9499969482422,-355.5169982910156 C255.24000549316406,-294.3550109863281 226.60400390625,-176.718994140625 61.632999420166016,-102.39399719238281 C-135.95799255371094,-6.5970001220703125 -215.50999450683594,239.53799438476562 -239.55099487304688,400.3340148925781"
                        />
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,33.852996826171875,-22.92999267578125)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,274.9209899902344,523.4140014648438)"
                      >
                        <path
                             className="animated-path"
                             style={{
                              strokeDasharray: 847,
     
                               strokeDashoffset: dashOffset1,
                             }}
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={1}
                          d=" M-10.527000427246094,-520.9149780273438 C-64.05599975585938,-429.9809875488281 109.3239974975586,-410.9519958496094 188.6280059814453,-351.9259948730469 C272.4209899902344,-289.968994140625 242.4810028076172,-173.40499877929688 67.77300262451172,-100.12799835205078 C-148.4969940185547,-5.456999778747559 -238.09300231933594,268.3810119628906 -260.0050048828125,430.6400146484375"
                        />
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,10.59197998046875,-23.123992919921875)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,292.0169982910156,520.9219970703125)"
                      >
                        <path
                             className="animated-path"
                             style={{
                              strokeDasharray: 847,
     
                               strokeDashoffset: dashOffset1,
                             }}
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={1}
                          d=" M-1.8170000314712524,-518.4219970703125 C-58.39500045776367,-427.552001953125 124.91799926757812,-410.0769958496094 206.38999938964844,-348.3330078125 C289.51800537109375,-285.3340148925781 258.4419860839844,-170.08900451660156 73.99800109863281,-97.85900115966797 C-109.8270034790039,-25.871999740600586 -212.3769989013672,174.87600708007812 -256.56500244140625,336.52398681640625"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div> */}
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
            {/* <figure className="manageFig">
              <img
                src={manageInPic}
                alt="..."
                style={{ height: `${imageHeight}px` }}
              />
            </figure> */}
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
                  height: "auto",
                  transform: "translate3d(0px, 0px, 0px)",
                  contentVisibility: "visible",
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
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-272.47900390625,-523.93798828125 C-232.42100524902344,-358.6579895019531 -106.0510025024414,-315.2040100097656 -65.20999908447266,-249.49000549316406 C33.959999084472656,-90.04100036621094 -95.84300231933594,-48.17599868774414 -130.01300048828125,80.9520034790039 C-218.8699951171875,416.8240051269531 257.20098876953125,523.9390258789062 272.47900390625,522.7999877929688"
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
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-263.6820068359375,-533.5360107421875 C-226.08200073242188,-353.7040100097656 -97.25599670410156,-323.3190002441406 -53.80699920654297,-254.52099609375 C45.35100173950195,-97.12200164794922 -80.8239974975586,-55.926998138427734 -115.73200225830078,82.25199890136719 C-198.34800720214844,409.5929870605469 238.25999450683594,526.1539916992188 263.6820068359375,533.5360107421875"
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
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-254.94700622558594,-543.7459716796875 C-219.7030029296875,-349.3840026855469 -88.4219970703125,-332.0690002441406 -42.492000579833984,-260.27398681640625 C56.55099868774414,-104.9020004272461 -65.89099884033203,-64.4000015258789 -101.41100311279297,82.91600036621094 C-178.29200744628906,401.3800048828125 219.1280059814453,527.6699829101562 254.947998046875,543.7459716796875"
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
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-246.20199584960938,-553.9010009765625 C-213.31399536132812,-345.0090026855469 -79.57499694824219,-340.7650146484375 -31.062000274658203,-265.9949951171875 C67.97000122070312,-112.6719970703125 -51.051998138427734,-72.7959976196289 -87.08000183105469,83.63400268554688 C-158.32899475097656,393.2430114746094 200.23699951171875,529.3040161132812 246.2010040283203,553.9010009765625"
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
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-237.4669952392578,-564.1110229492188 C-206.93499755859375,-340.69000244140625 -70.81900024414062,-349.38299560546875 -19.722000122070312,-271.63800048828125 C79.19400024414062,-120.34200286865234 -36.32500076293945,-81.2249984741211 -72.75900268554688,84.2979965209961 C-138.81199645996094,385.0320129394531 181.1300048828125,530.9290161132812 237.4669952392578,564.1110229492188"
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
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-228.66900634765625,-574.2780151367188 C-200.6199951171875,-336.41400146484375 -62.04899978637695,-358.1759948730469 -8.366999626159668,-277.4570007324219 C90.53700256347656,-128.2100067138672 -21.812999725341797,-89.89099884033203 -58.39899826049805,84.89700317382812 C-119.58899688720703,376.7139892578125 162.14100646972656,532.3569946289062 228.66900634765625,574.2780151367188"
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
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-219.88400268554688,-584.4990234375 C-194.29299926757812,-332.0820007324219 -53.242000579833984,-366.8059997558594 3.0230000019073486,-283.11199951171875 C101.91600036621094,-135.91400146484375 -7.4720001220703125,-98.35099792480469 -44.10599899291992,85.68199920654297 C-100.37699890136719,368.3420104980469 143.08399963378906,533.9710083007812 219.88299560546875,584.4990234375"
                      />
                    </g>
                  </g>
                  <g
                    transform="matrix(0.8934231996536255,0.29767128825187683,-0.29767128825187683,0.8934231996536255,327.6778564453125,-156.1527099609375)"
                    opacity={1}
                    style={{ display: "block" }}
                  >
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,825.135009765625,1345.196044921875)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M136.99899291992188,-397.7669982910156 C136.99899291992188,-397.7669982910156 -234.45799255371094,-358.7250061035156 -234.45799255371094,-358.7250061035156 C-277.79998779296875,-354.1700134277344 -313.2799987792969,-322.2229919433594 -322.34100341796875,-279.593994140625 C-322.34100341796875,-279.593994140625 -399.9960021972656,85.74600219726562 -399.9960021972656,85.74600219726562 C-409.0570068359375,128.375 -389.6390075683594,171.99099731445312 -351.89599609375,193.781005859375 C-351.89599609375,193.781005859375 -28.433000564575195,380.5329895019531 -28.433000564575195,380.5329895019531 C9.309000015258789,402.322998046875 56.790000915527344,397.3330078125 89.177001953125,368.1709899902344 C89.177001953125,368.1709899902344 366.7439880371094,118.2490005493164 366.7439880371094,118.2490005493164 C399.1319885253906,89.08699798583984 409.0570068359375,42.387001037597656 391.33099365234375,2.5739998817443848 C391.33099365234375,2.5739998817443848 239.41299438476562,-338.63800048828125 239.41299438476562,-338.63800048828125 C221.68699645996094,-378.45098876953125 180.3419952392578,-402.322998046875 136.99899291992188,-397.7669982910156z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,792.1480102539062,1367.344970703125)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M178.58700561523438,-392.5780029296875 C178.58700561523438,-392.5780029296875 -194.85899353027344,-386.0589904785156 -194.85899353027344,-386.0589904785156 C-238.4340057373047,-385.29901123046875 -276.56298828125,-356.5660095214844 -289.30499267578125,-314.8890075683594 C-289.30499267578125,-314.8890075683594 -398.5060119628906,42.292999267578125 -398.5060119628906,42.292999267578125 C-411.24798583984375,83.97000122070312 -395.7040100097656,129.11199951171875 -360.0050048828125,154.10899353027344 C-360.0050048828125,154.10899353027344 -54.04899978637695,368.34100341796875 -54.04899978637695,368.34100341796875 C-18.349000930786133,393.3389892578125 29.38599967956543,392.5050048828125 64.19200134277344,366.27801513671875 C64.19200134277344,366.27801513671875 362.4840087890625,141.4980010986328 362.4840087890625,141.4980010986328 C397.2900085449219,115.2699966430664 411.24798583984375,69.61299896240234 397.0589904785156,28.4060001373291 C397.0589904785156,28.4060001373291 275.4580078125,-324.74798583984375 275.4580078125,-324.74798583984375 C261.2690124511719,-365.9540100097656 222.16200256347656,-393.3389892578125 178.58700561523438,-392.5780029296875z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,758.10498046875,1372.75)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M218.81500244140625,-369.9989929199219 C218.81500244140625,-369.9989929199219 -153.7779998779297,-396.0530090332031 -153.7779998779297,-396.0530090332031 C-197.2530059814453,-399.0929870605469 -237.74099731445312,-373.7929992675781 -254.06700134277344,-333.385009765625 C-254.06700134277344,-333.385009765625 -393.9830017089844,12.920999526977539 -393.9830017089844,12.920999526977539 C-410.3089904785156,53.327999114990234 -398.7590026855469,99.65299987792969 -365.3739929199219,127.66699981689453 C-365.3739929199219,127.66699981689453 -79.25399780273438,367.7489929199219 -79.25399780273438,367.7489929199219 C-45.86899948120117,395.76300048828125 1.7580000162124634,399.0929870605469 38.71699905395508,375.9989929199219 C38.71699905395508,375.9989929199219 355.4649963378906,178.07200622558594 355.4649963378906,178.07200622558594 C392.42401123046875,154.97799682617188 410.3089904785156,110.71099853515625 399.7650146484375,68.42400360107422 C399.7650146484375,68.42400360107422 309.4070129394531,-293.9840087890625 309.4070129394531,-293.9840087890625 C298.8630065917969,-336.2699890136719 262.2900085449219,-366.9590148925781 218.81500244140625,-369.9989929199219z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,723.2630004882812,1372.1669921875)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M257.3789978027344,-341.0010070800781 C257.3789978027344,-341.0010070800781 -111.5250015258789,-399.4289855957031 -111.5250015258789,-399.4289855957031 C-154.57000732421875,-406.24700927734375 -197.10899353027344,-384.5719909667969 -216.89500427246094,-345.7409973144531 C-216.89500427246094,-345.7409973144531 -386.46099853515625,-12.946999549865723 -386.46099853515625,-12.946999549865723 C-406.24700927734375,25.884000778198242 -398.77801513671875,73.03900146484375 -367.96099853515625,103.85600280761719 C-367.96099853515625,103.85600280761719 -103.8550033569336,367.9620056152344 -103.8550033569336,367.9620056152344 C-73.03800201416016,398.77801513671875 -25.882999420166016,406.24700927734375 12.947999954223633,386.46099853515625 C12.947999954223633,386.46099853515625 345.7409973144531,216.8939971923828 345.7409973144531,216.8939971923828 C384.572998046875,197.10899353027344 406.24700927734375,154.57000732421875 399.42999267578125,111.5250015258789 C399.42999267578125,111.5250015258789 341.0010070800781,-257.3789978027344 341.0010070800781,-257.3789978027344 C334.1830139160156,-300.42401123046875 300.42401123046875,-334.1830139160156 257.3789978027344,-341.0010070800781z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,687.8909912109375,1369.2060546875)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M293.9830017089844,-309.4070129394531 C293.9830017089844,-309.4070129394531 -68.42500305175781,-399.7659912109375 -68.42500305175781,-399.7659912109375 C-110.71199798583984,-410.3089904785156 -154.97799682617188,-392.42401123046875 -178.072998046875,-355.4649963378906 C-178.072998046875,-355.4649963378906 -375.9989929199219,-38.715999603271484 -375.9989929199219,-38.715999603271484 C-399.0929870605469,-1.7569999694824219 -395.76300048828125,45.869998931884766 -367.75,79.25499725341797 C-367.75,79.25499725341797 -127.66600036621094,365.3739929199219 -127.66600036621094,365.3739929199219 C-99.65299987792969,398.7590026855469 -53.327999114990234,410.3089904785156 -12.920000076293945,393.9840087890625 C-12.920000076293945,393.9840087890625 333.385009765625,254.06700134277344 333.385009765625,254.06700134277344 C373.7929992675781,237.74099731445312 399.0929870605469,197.2519989013672 396.0530090332031,153.7760009765625 C396.0530090332031,153.7760009765625 369.9989929199219,-218.81500244140625 369.9989929199219,-218.81500244140625 C366.9580078125,-262.2909851074219 336.2699890136719,-298.864013671875 293.9830017089844,-309.4070129394531z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,655.8590087890625,1363.8890380859375)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M324.74798583984375,-275.4590148925781 C324.74798583984375,-275.4590148925781 -28.4060001373291,-397.05999755859375 -28.4060001373291,-397.05999755859375 C-69.61299896240234,-411.2489929199219 -115.2699966430664,-397.28900146484375 -141.4969940185547,-362.4840087890625 C-141.4969940185547,-362.4840087890625 -366.2770080566406,-64.19200134277344 -366.2770080566406,-64.19200134277344 C-392.5050048828125,-29.38599967956543 -393.3380126953125,18.350000381469727 -368.34100341796875,54.04999923706055 C-368.34100341796875,54.04999923706055 -154.10800170898438,360.0050048828125 -154.10800170898438,360.0050048828125 C-129.11099243164062,395.7049865722656 -83.96900177001953,411.2489929199219 -42.29199981689453,398.5069885253906 C-42.29199981689453,398.5069885253906 314.8900146484375,289.3039855957031 314.8900146484375,289.3039855957031 C356.5669860839844,276.56201171875 385.29901123046875,238.43299865722656 386.0589904785156,194.85899353027344 C386.0589904785156,194.85899353027344 392.5780029296875,-178.58799743652344 392.5780029296875,-178.58799743652344 C393.3380126953125,-222.16299438476562 365.9549865722656,-261.2699890136719 324.74798583984375,-275.4590148925781z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,638.2100219726562,1356.2550048828125)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M338.63800048828125,-239.4149932861328 C338.63800048828125,-239.4149932861328 -2.5739998817443848,-391.3320007324219 -2.5739998817443848,-391.3320007324219 C-42.387001037597656,-409.0580139160156 -89.08699798583984,-399.1319885253906 -118.2490005493164,-366.7439880371094 C-118.2490005493164,-366.7439880371094 -368.1700134277344,-89.177001953125 -368.1700134277344,-89.177001953125 C-397.3320007324219,-56.78900146484375 -402.3219909667969,-9.309000015258789 -380.5320129394531,28.433000564575195 C-380.5320129394531,28.433000564575195 -193.77999877929688,351.89599609375 -193.77999877929688,351.89599609375 C-171.98899841308594,389.6390075683594 -128.37399291992188,409.0580139160156 -85.74500274658203,399.99700927734375 C-85.74500274658203,399.99700927734375 279.59600830078125,322.34100341796875 279.59600830078125,322.34100341796875 C322.2239990234375,313.2799987792969 354.1709899902344,277.79998779296875 358.72601318359375,234.45799255371094 C358.72601318359375,234.45799255371094 397.7669982910156,-137 397.7669982910156,-137 C402.3219909667969,-180.3419952392578 378.45098876953125,-221.68899536132812 338.63800048828125,-239.4149932861328z"
                      />
                    </g>
                  </g>
                  <g
                    transform="matrix(0.8089037537574768,-0.3169925808906555,0.3169925808906555,0.8089037537574768,-469.50067138671875,363.6806640625)"
                    opacity={1}
                    style={{ display: "block" }}
                  >
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,715.1610107421875,1381.6529541015625)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-253.98199462890625,-367.61199951171875 C-253.98199462890625,-367.61199951171875 -420.7919921875,7.048999786376953 -420.7919921875,7.048999786376953 C-438.51800537109375,46.86199951171875 -428.59100341796875,93.56199645996094 -396.2040100097656,122.7229995727539 C-396.2040100097656,122.7229995727539 -91.4280014038086,397.1449890136719 -91.4280014038086,397.1449890136719 C-59.04100036621094,426.3070068359375 -11.557999610900879,431.2969970703125 26.18400001525879,409.5069885253906 C26.18400001525879,409.5069885253906 381.3550109863281,204.447998046875 381.3550109863281,204.447998046875 C419.0979919433594,182.6580047607422 438.5169982910156,139.04200744628906 429.4549865722656,96.41300201416016 C429.4549865722656,96.41300201416016 344.18798828125,-304.74200439453125 344.18798828125,-304.74200439453125 C335.12701416015625,-347.3710021972656 299.6470031738281,-379.3169860839844 256.30499267578125,-383.87298583984375 C256.30499267578125,-383.87298583984375 -151.56700134277344,-426.7409973144531 -151.56700134277344,-426.7409973144531 C-194.90899658203125,-431.2969970703125 -236.25599670410156,-407.42498779296875 -253.98199462890625,-367.61199951171875z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,688.7940063476562,1379.1669921875)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-212.87399291992188,-379.35198974609375 C-212.87399291992188,-379.35198974609375 -411.7030029296875,-20.655000686645508 -411.7030029296875,-20.655000686645508 C-432.83099365234375,17.461999893188477 -427.01300048828125,64.8489990234375 -397.2909851074219,96.72200012207031 C-397.2909851074219,96.72200012207031 -117.59100341796875,396.6629943847656 -117.59100341796875,396.6629943847656 C-87.86900329589844,428.5360107421875 -41.00299835205078,437.64599609375 -1.5049999952316284,419.2279968261719 C-1.5049999952316284,419.2279968261719 370.1860046386719,245.90499877929688 370.1860046386719,245.90499877929688 C409.6839904785156,227.48599243164062 432.8320007324219,185.72900390625 427.5199890136719,142.47300720214844 C427.5199890136719,142.47300720214844 377.5400085449219,-264.5870056152344 377.5400085449219,-264.5870056152344 C372.2279968261719,-307.843994140625 339.6679992675781,-342.760986328125 296.8869934082031,-351.07598876953125 C296.8869934082031,-351.07598876953125 -105.69499969482422,-429.3299865722656 -105.69499969482422,-429.3299865722656 C-148.4759979248047,-437.64599609375 -191.7449951171875,-417.468994140625 -212.87399291992188,-379.35198974609375z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,661.989013671875,1375.133056640625)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-170.14599609375,-388.2040100097656 C-170.14599609375,-388.2040100097656 -399.48199462890625,-48.20100021362305 -399.48199462890625,-48.20100021362305 C-423.85198974609375,-12.071000099182129 -422.18499755859375,35.641998291015625 -395.3529968261719,69.98400115966797 C-395.3529968261719,69.98400115966797 -142.86099243164062,393.1619873046875 -142.86099243164062,393.1619873046875 C-116.02999877929688,427.5050048828125 -70.13500213623047,440.6650085449219 -29.18199920654297,425.7590026855469 C-29.18199920654297,425.7590026855469 356.2019958496094,285.489990234375 356.2019958496094,285.489990234375 C397.1549987792969,270.5849914550781 423.85101318359375,231.0030059814453 422.3299865722656,187.447998046875 C422.3299865722656,187.447998046875 408.0169982910156,-222.41799926757812 408.0169982910156,-222.41799926757812 C406.49700927734375,-265.9729919433594 377.10400390625,-303.5950012207031 335.21099853515625,-315.60699462890625 C335.21099853515625,-315.60699462890625 -59.02000045776367,-428.6510009765625 -59.02000045776367,-428.6510009765625 C-100.91300201416016,-440.66400146484375 -145.7760009765625,-424.3349914550781 -170.14599609375,-388.2040100097656z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,646.7160034179688,1369.5799560546875)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-137.88800048828125,-394.1029968261719 C-137.88800048828125,-394.1029968261719 -395.9830017089844,-75.38099670410156 -395.9830017089844,-75.38099670410156 C-423.4100036621094,-41.512001037597656 -425.9079895019531,6.164000034332275 -402.1719970703125,42.71500015258789 C-402.1719970703125,42.71500015258789 -178.80599975585938,386.6679992675781 -178.80599975585938,386.6679992675781 C-155.07000732421875,423.2179870605469 -110.4990005493164,440.3290100097656 -68.4020004272461,429.04901123046875 C-68.4020004272461,429.04901123046875 327.7409973144531,322.90301513671875 327.7409973144531,322.90301513671875 C369.8370056152344,311.62298583984375 399.88299560546875,274.5199890136719 402.1629943847656,230.99899291992188 C402.1629943847656,230.99899291992188 423.62701416015625,-178.5570068359375 423.62701416015625,-178.5570068359375 C425.9079895019531,-222.07899475097656 399.9049987792969,-262.1199951171875 359.218994140625,-277.7380065917969 C359.218994140625,-277.7380065917969 -23.659000396728516,-424.71099853515625 -23.659000396728516,-424.71099853515625 C-64.34500122070312,-440.3290100097656 -110.46099853515625,-427.97198486328125 -137.88800048828125,-394.1029968261719z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,639.1710205078125,1362.552978515625)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-112.42400360107422,-397.00201416015625 C-112.42400360107422,-397.00201416015625 -397.31500244140625,-101.98799896240234 -397.31500244140625,-101.98799896240234 C-427.5889892578125,-70.63899993896484 -434.2340087890625,-23.360000610351562 -413.77398681640625,15.119999885559082 C-413.77398681640625,15.119999885559082 -221.23500061035156,377.23199462890625 -221.23500061035156,377.23199462890625 C-200.77499389648438,415.7120056152344 -157.86399841308594,436.6409912109375 -114.94499969482422,429.072998046875 C-114.94499969482422,429.072998046875 288.9419860839844,357.85699462890625 288.9419860839844,357.85699462890625 C331.8609924316406,350.28900146484375 365.0260009765625,315.9469909667969 371.09100341796875,272.7900085449219 C371.09100341796875,272.7900085449219 428.1679992675781,-133.33700561523438 428.1679992675781,-133.33700561523438 C434.2340087890625,-176.4949951171875 411.82000732421875,-218.6490020751953 372.64898681640625,-237.75399780273438 C372.64898681640625,-237.75399780273438 4.038000106811523,-417.5369873046875 4.038000106811523,-417.5369873046875 C-35.13199996948242,-436.6419982910156 -82.1500015258789,-428.35198974609375 -112.42400360107422,-397.00201416015625z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,631.5670166015625,1354.10302734375)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-86.10399627685547,-396.8789978027344 C-86.10399627685547,-396.8789978027344 -395.6239929199219,-127.81800079345703 -395.6239929199219,-127.81800079345703 C-428.5159912109375,-99.22599792480469 -439.2550048828125,-52.70600128173828 -422.22698974609375,-12.58899974822998 C-422.22698974609375,-12.58899974822998 -261.9800109863281,364.92498779296875 -261.9800109863281,364.92498779296875 C-244.95199584960938,405.0419921875 -204.0279998779297,429.6310119628906 -160.61300659179688,425.8330078125 C-160.61300659179688,425.8330078125 247.94400024414062,390.0889892578125 247.94400024414062,390.0889892578125 C291.3590087890625,386.2900085449219 327.3900146484375,354.968994140625 337.1940002441406,312.5050048828125 C337.1940002441406,312.5050048828125 429.45001220703125,-87.10199737548828 429.45001220703125,-87.10199737548828 C439.2539978027344,-129.5659942626953 420.5989990234375,-173.51400756835938 383.2430114746094,-195.9600067138672 C383.2430114746094,-195.9600067138672 31.70400047302246,-407.1860046386719 31.70400047302246,-407.1860046386719 C-5.6529998779296875,-429.6319885253906 -53.2130012512207,-425.47100830078125 -86.10399627685547,-396.8789978027344z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,623.9630126953125,1344.2960205078125)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-59.130001068115234,-393.7349853515625 C-59.130001068115234,-393.7349853515625 -390.9219970703125,-152.6739959716797 -390.9219970703125,-152.6739959716797 C-426.17999267578125,-127.05799865722656 -440.9330139160156,-81.6510009765625 -427.46600341796875,-40.202999114990234 C-427.46600341796875,-40.202999114990234 -300.7330017089844,349.84100341796875 -300.7330017089844,349.84100341796875 C-287.2650146484375,391.2900085449219 -248.63999938964844,419.35198974609375 -205.0590057373047,419.35198974609375 C-205.0590057373047,419.35198974609375 205.05799865722656,419.35198974609375 205.05799865722656,419.35198974609375 C248.63900756835938,419.35198974609375 287.2650146484375,391.2900085449219 300.7330017089844,349.84100341796875 C300.7330017089844,349.84100341796875 427.4649963378906,-40.202999114990234 427.4649963378906,-40.202999114990234 C440.9320068359375,-81.6510009765625 426.1789855957031,-127.05799865722656 390.9209899902344,-152.6739959716797 C390.9209899902344,-152.6739959716797 59.12900161743164,-393.7349853515625 59.12900161743164,-393.7349853515625 C23.871000289916992,-419.35101318359375 -23.871999740600586,-419.35101318359375 -59.130001068115234,-393.7349853515625z"
                      />
                    </g>
                  </g>
                  <g
                    transform="matrix(0.9010392427444458,0.2677033841609955,-0.2677033841609955,0.9010392427444458,281.1239013671875,-147.087158203125)"
                    opacity={1}
                    style={{ display: "block" }}
                  >
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,715.1610107421875,1381.6529541015625)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-253.98199462890625,-367.61199951171875 C-253.98199462890625,-367.61199951171875 -420.7919921875,7.048999786376953 -420.7919921875,7.048999786376953 C-438.51800537109375,46.86199951171875 -428.59100341796875,93.56199645996094 -396.2040100097656,122.7229995727539 C-396.2040100097656,122.7229995727539 -91.4280014038086,397.1449890136719 -91.4280014038086,397.1449890136719 C-59.04100036621094,426.3070068359375 -11.557999610900879,431.2969970703125 26.18400001525879,409.5069885253906 C26.18400001525879,409.5069885253906 381.3550109863281,204.447998046875 381.3550109863281,204.447998046875 C419.0979919433594,182.6580047607422 438.5169982910156,139.04200744628906 429.4549865722656,96.41300201416016 C429.4549865722656,96.41300201416016 344.18798828125,-304.74200439453125 344.18798828125,-304.74200439453125 C335.12701416015625,-347.3710021972656 299.6470031738281,-379.3169860839844 256.30499267578125,-383.87298583984375 C256.30499267578125,-383.87298583984375 -151.56700134277344,-426.7409973144531 -151.56700134277344,-426.7409973144531 C-194.90899658203125,-431.2969970703125 -236.25599670410156,-407.42498779296875 -253.98199462890625,-367.61199951171875z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,688.7940063476562,1379.1669921875)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-212.87399291992188,-379.35198974609375 C-212.87399291992188,-379.35198974609375 -411.7030029296875,-20.655000686645508 -411.7030029296875,-20.655000686645508 C-432.83099365234375,17.461999893188477 -427.01300048828125,64.8489990234375 -397.2909851074219,96.72200012207031 C-397.2909851074219,96.72200012207031 -117.59100341796875,396.6629943847656 -117.59100341796875,396.6629943847656 C-87.86900329589844,428.5360107421875 -41.00299835205078,437.64599609375 -1.5049999952316284,419.2279968261719 C-1.5049999952316284,419.2279968261719 370.1860046386719,245.90499877929688 370.1860046386719,245.90499877929688 C409.6839904785156,227.48599243164062 432.8320007324219,185.72900390625 427.5199890136719,142.47300720214844 C427.5199890136719,142.47300720214844 377.5400085449219,-264.5870056152344 377.5400085449219,-264.5870056152344 C372.2279968261719,-307.843994140625 339.6679992675781,-342.760986328125 296.8869934082031,-351.07598876953125 C296.8869934082031,-351.07598876953125 -105.69499969482422,-429.3299865722656 -105.69499969482422,-429.3299865722656 C-148.4759979248047,-437.64599609375 -191.7449951171875,-417.468994140625 -212.87399291992188,-379.35198974609375z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,661.989013671875,1375.133056640625)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-170.14599609375,-388.2040100097656 C-170.14599609375,-388.2040100097656 -399.48199462890625,-48.20100021362305 -399.48199462890625,-48.20100021362305 C-423.85198974609375,-12.071000099182129 -422.18499755859375,35.641998291015625 -395.3529968261719,69.98400115966797 C-395.3529968261719,69.98400115966797 -142.86099243164062,393.1619873046875 -142.86099243164062,393.1619873046875 C-116.02999877929688,427.5050048828125 -70.13500213623047,440.6650085449219 -29.18199920654297,425.7590026855469 C-29.18199920654297,425.7590026855469 356.2019958496094,285.489990234375 356.2019958496094,285.489990234375 C397.1549987792969,270.5849914550781 423.85101318359375,231.0030059814453 422.3299865722656,187.447998046875 C422.3299865722656,187.447998046875 408.0169982910156,-222.41799926757812 408.0169982910156,-222.41799926757812 C406.49700927734375,-265.9729919433594 377.10400390625,-303.5950012207031 335.21099853515625,-315.60699462890625 C335.21099853515625,-315.60699462890625 -59.02000045776367,-428.6510009765625 -59.02000045776367,-428.6510009765625 C-100.91300201416016,-440.66400146484375 -145.7760009765625,-424.3349914550781 -170.14599609375,-388.2040100097656z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,646.7160034179688,1369.5799560546875)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-137.88800048828125,-394.1029968261719 C-137.88800048828125,-394.1029968261719 -395.9830017089844,-75.38099670410156 -395.9830017089844,-75.38099670410156 C-423.4100036621094,-41.512001037597656 -425.9079895019531,6.164000034332275 -402.1719970703125,42.71500015258789 C-402.1719970703125,42.71500015258789 -178.80599975585938,386.6679992675781 -178.80599975585938,386.6679992675781 C-155.07000732421875,423.2179870605469 -110.4990005493164,440.3290100097656 -68.4020004272461,429.04901123046875 C-68.4020004272461,429.04901123046875 327.7409973144531,322.90301513671875 327.7409973144531,322.90301513671875 C369.8370056152344,311.62298583984375 399.88299560546875,274.5199890136719 402.1629943847656,230.99899291992188 C402.1629943847656,230.99899291992188 423.62701416015625,-178.5570068359375 423.62701416015625,-178.5570068359375 C425.9079895019531,-222.07899475097656 399.9049987792969,-262.1199951171875 359.218994140625,-277.7380065917969 C359.218994140625,-277.7380065917969 -23.659000396728516,-424.71099853515625 -23.659000396728516,-424.71099853515625 C-64.34500122070312,-440.3290100097656 -110.46099853515625,-427.97198486328125 -137.88800048828125,-394.1029968261719z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,639.1710205078125,1362.552978515625)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-112.42400360107422,-397.00201416015625 C-112.42400360107422,-397.00201416015625 -397.31500244140625,-101.98799896240234 -397.31500244140625,-101.98799896240234 C-427.5889892578125,-70.63899993896484 -434.2340087890625,-23.360000610351562 -413.77398681640625,15.119999885559082 C-413.77398681640625,15.119999885559082 -221.23500061035156,377.23199462890625 -221.23500061035156,377.23199462890625 C-200.77499389648438,415.7120056152344 -157.86399841308594,436.6409912109375 -114.94499969482422,429.072998046875 C-114.94499969482422,429.072998046875 288.9419860839844,357.85699462890625 288.9419860839844,357.85699462890625 C331.8609924316406,350.28900146484375 365.0260009765625,315.9469909667969 371.09100341796875,272.7900085449219 C371.09100341796875,272.7900085449219 428.1679992675781,-133.33700561523438 428.1679992675781,-133.33700561523438 C434.2340087890625,-176.4949951171875 411.82000732421875,-218.6490020751953 372.64898681640625,-237.75399780273438 C372.64898681640625,-237.75399780273438 4.038000106811523,-417.5369873046875 4.038000106811523,-417.5369873046875 C-35.13199996948242,-436.6419982910156 -82.1500015258789,-428.35198974609375 -112.42400360107422,-397.00201416015625z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,631.5670166015625,1354.10302734375)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-86.10399627685547,-396.8789978027344 C-86.10399627685547,-396.8789978027344 -395.6239929199219,-127.81800079345703 -395.6239929199219,-127.81800079345703 C-428.5159912109375,-99.22599792480469 -439.2550048828125,-52.70600128173828 -422.22698974609375,-12.58899974822998 C-422.22698974609375,-12.58899974822998 -261.9800109863281,364.92498779296875 -261.9800109863281,364.92498779296875 C-244.95199584960938,405.0419921875 -204.0279998779297,429.6310119628906 -160.61300659179688,425.8330078125 C-160.61300659179688,425.8330078125 247.94400024414062,390.0889892578125 247.94400024414062,390.0889892578125 C291.3590087890625,386.2900085449219 327.3900146484375,354.968994140625 337.1940002441406,312.5050048828125 C337.1940002441406,312.5050048828125 429.45001220703125,-87.10199737548828 429.45001220703125,-87.10199737548828 C439.2539978027344,-129.5659942626953 420.5989990234375,-173.51400756835938 383.2430114746094,-195.9600067138672 C383.2430114746094,-195.9600067138672 31.70400047302246,-407.1860046386719 31.70400047302246,-407.1860046386719 C-5.6529998779296875,-429.6319885253906 -53.2130012512207,-425.47100830078125 -86.10399627685547,-396.8789978027344z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,623.9630126953125,1344.2960205078125)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-59.130001068115234,-393.7349853515625 C-59.130001068115234,-393.7349853515625 -390.9219970703125,-152.6739959716797 -390.9219970703125,-152.6739959716797 C-426.17999267578125,-127.05799865722656 -440.9330139160156,-81.6510009765625 -427.46600341796875,-40.202999114990234 C-427.46600341796875,-40.202999114990234 -300.7330017089844,349.84100341796875 -300.7330017089844,349.84100341796875 C-287.2650146484375,391.2900085449219 -248.63999938964844,419.35198974609375 -205.0590057373047,419.35198974609375 C-205.0590057373047,419.35198974609375 205.05799865722656,419.35198974609375 205.05799865722656,419.35198974609375 C248.63900756835938,419.35198974609375 287.2650146484375,391.2900085449219 300.7330017089844,349.84100341796875 C300.7330017089844,349.84100341796875 427.4649963378906,-40.202999114990234 427.4649963378906,-40.202999114990234 C440.9320068359375,-81.6510009765625 426.1789855957031,-127.05799865722656 390.9209899902344,-152.6739959716797 C390.9209899902344,-152.6739959716797 59.12900161743164,-393.7349853515625 59.12900161743164,-393.7349853515625 C23.871000289916992,-419.35101318359375 -23.871999740600586,-419.35101318359375 -59.130001068115234,-393.7349853515625z"
                      />
                    </g>
                  </g>
                  <g
                    transform="matrix(0.7823979258537292,0.39434346556663513,-0.39434346556663513,0.7823979258537292,534.4837646484375,-65.4808349609375)"
                    opacity={1}
                    style={{ display: "block" }}
                  >
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,754.7349853515625,1400.8089599609375)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-89.822998046875,-456.6239929199219 C-89.822998046875,-456.6239929199219 -544.0419921875,-119.68699645996094 -544.0419921875,-119.68699645996094 C-584.0789794921875,-89.98699951171875 -596.3270263671875,-35.44499969482422 -572.8309936523438,8.520999908447266 C-572.8309936523438,8.520999908447266 -350.0050048828125,425.49200439453125 -350.0050048828125,425.49200439453125 C-330.6570129394531,461.6969909667969 -291.25201416015625,482.5150146484375 -250.4409942626953,478.09100341796875 C-250.4409942626953,478.09100341796875 368.5150146484375,410.99700927734375 368.5150146484375,410.99700927734375 C409.32598876953125,406.572998046875 443.3550109863281,377.7959899902344 454.4960021972656,338.2860107421875 C454.4960021972656,338.2860107421875 582.7990112304688,-116.74700164794922 582.7990112304688,-116.74700164794922 C596.3270263671875,-164.7259979248047 572.677001953125,-215.3769989013672 527.2050170898438,-235.80799865722656 C527.2050170898438,-235.80799865722656 11.33899974822998,-467.5899963378906 11.33899974822998,-467.5899963378906 C-21.881000518798828,-482.5150146484375 -60.573001861572266,-478.3210144042969 -89.822998046875,-456.6239929199219z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,752.4710083007812,1388.3299560546875)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-58.40700149536133,-449.0690002441406 C-58.40700149536133,-449.0690002441406 -540.2630004882812,-153.00100708007812 -540.2630004882812,-153.00100708007812 C-582.7369995117188,-126.90399932861328 -599.6909790039062,-73.63700103759766 -580.1179809570312,-27.791000366210938 C-580.1179809570312,-27.791000366210938 -394.4800109863281,407.0140075683594 -394.4800109863281,407.0140075683594 C-378.36199951171875,444.76800537109375 -340.9209899902344,468.94000244140625 -299.8789978027344,468.0899963378906 C-299.8789978027344,468.0899963378906 322.5679931640625,455.1969909667969 322.5679931640625,455.1969909667969 C363.6099853515625,454.34698486328125 400.0169982910156,428.6449890136719 414.5580139160156,390.2569885253906 C414.5580139160156,390.2569885253906 582.031982421875,-51.86199951171875 582.031982421875,-51.86199951171875 C599.6909790039062,-98.4800033569336 580.5460205078125,-150.99899291992188 537.0280151367188,-175.31500244140625 C537.0280151367188,-175.31500244140625 43.32400131225586,-451.1759948730469 43.32400131225586,-451.1759948730469 C11.531999588012695,-468.94000244140625 -27.378000259399414,-468.1340026855469 -58.40700149536133,-449.0690002441406z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,750.0780029296875,1397.133056640625)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-26.547000885009766,-460.2359924316406 C-26.547000885009766,-460.2359924316406 -532.3740234375,-207.29200744628906 -532.3740234375,-207.29200744628906 C-576.9600219726562,-184.99600219726562 -598.4929809570312,-133.40899658203125 -582.989013671875,-86.03099822998047 C-582.989013671875,-86.03099822998047 -435.9540100097656,363.29901123046875 -435.9540100097656,363.29901123046875 C-423.18701171875,402.31298828125 -387.9960021972656,429.6570129394531 -347.0360107421875,432.3869934082031 C-347.0360107421875,432.3869934082031 274.1669921875,473.7929992675781 274.1669921875,473.7929992675781 C315.1260070800781,476.52398681640625 353.635986328125,454.093994140625 371.4670104980469,417.1189880371094 C371.4670104980469,417.1189880371094 576.8369750976562,-8.722999572753906 576.8369750976562,-8.722999572753906 C598.4920043945312,-53.624000549316406 583.9959716796875,-107.61199951171875 542.7630004882812,-135.62899780273438 C542.7630004882812,-135.62899780273438 74.98200225830078,-453.468994140625 74.98200225830078,-453.468994140625 C44.85900115966797,-473.9360046386719 6.026000022888184,-476.5249938964844 -26.547000885009766,-460.2359924316406z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,747.5780029296875,1411.904052734375)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M5.517000198364258,-474.7929992675781 C5.517000198364258,-474.7929992675781 -520.4299926757812,-266.8970031738281 -520.4299926757812,-266.8970031738281 C-566.7899780273438,-248.57200622558594 -592.7369995117188,-199.05799865722656 -581.4219970703125,-150.50900268554688 C-581.4219970703125,-150.50900268554688 -474.1080017089844,309.9259948730469 -474.1080017089844,309.9259948730469 C-464.7900085449219,349.9049987792969 -432.114990234375,380.21099853515625 -391.54998779296875,386.5010070800781 C-391.54998779296875,386.5010070800781 223.67999267578125,481.8909912109375 223.67999267578125,481.8909912109375 C264.2460021972656,488.1809997558594 304.56298828125,469.1910095214844 325.54901123046875,433.9110107421875 C325.54901123046875,433.9110107421875 567.2529907226562,27.59000015258789 567.2529907226562,27.59000015258789 C592.7379760742188,-15.253000259399414 583.0020141601562,-70.29900360107422 544.3679809570312,-101.802001953125 C544.3679809570312,-101.802001953125 106.06999969482422,-459.2030029296875 106.06999969482422,-459.2030029296875 C77.84500122070312,-482.2179870605469 39.38600158691406,-488.1809997558594 5.517000198364258,-474.7929992675781z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,744.989013671875,1425.636962890625)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M37.5369987487793,-485.73699951171875 C37.5369987487793,-485.73699951171875 -504.52801513671875,-324.47100830078125 -504.52801513671875,-324.47100830078125 C-552.3090209960938,-310.2560119628906 -582.4719848632812,-263.1929931640625 -575.4320068359375,-213.8419952392578 C-575.4320068359375,-213.8419952392578 -508.656005859375,254.19400024414062 -508.656005859375,254.19400024414062 C-502.8580017089844,294.8330078125 -472.9490051269531,327.87200927734375 -433.08599853515625,337.6730041503906 C-433.08599853515625,337.6730041503906 171.49000549316406,486.3210144042969 171.49000549316406,486.3210144042969 C211.35299682617188,496.12200927734375 253.1719970703125,480.718994140625 277.15399169921875,447.4020080566406 C277.15399169921875,447.4020080566406 553.3499755859375,63.69300079345703 553.3499755859375,63.69300079345703 C582.4719848632812,23.233999252319336 577.572021484375,-32.45100021362305 541.8300170898438,-67.20099639892578 C541.8300170898438,-67.20099639892578 136.34800720214844,-461.4419860839844 136.34800720214844,-461.4419860839844 C110.23699951171875,-486.8290100097656 72.44400024414062,-496.12200927734375 37.5369987487793,-485.73699951171875z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,742.3300170898438,1438.22900390625)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,
                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M69.27200317382812,-492.9840087890625 C69.27200317382812,-492.9840087890625 -484.7860107421875,-379.57598876953125 -484.7860107421875,-379.57598876953125 C-533.6240234375,-369.5799865722656 -567.7739868164062,-325.3240051269531 -565.0609741210938,-275.5480041503906 C-565.0609741210938,-275.5480041503906 -539.3309936523438,196.5260009765625 -539.3309936523438,196.5260009765625 C-537.0969848632812,237.51600646972656 -510.1820068359375,273.0369873046875 -471.32501220703125,286.2749938964844 C-471.32501220703125,286.2749938964844 117.99500274658203,487.04998779296875 117.99500274658203,487.04998779296875 C156.8520050048828,500.2879943847656 199.85499572753906,488.5880126953125 226.6490020751953,457.4880065917969 C226.6490020751953,457.4880065917969 535.2360229492188,99.31099700927734 535.2360229492188,99.31099700927734 C567.7739868164062,61.54499816894531 567.7449951171875,5.644000053405762 535.1690063476562,-32.0890007019043 C535.1690063476562,-32.0890007019043 165.58999633789062,-460.1700134277344 165.58999633789062,-460.1700134277344 C141.79100036621094,-487.7359924316406 104.95099639892578,-500.2869873046875 69.27200317382812,-492.9840087890625z"
                      />
                    </g>
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,732.7969970703125,1449.5810546875)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,
                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(32,29,30)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M107.30599975585938,-496.47900390625 C107.30599975585938,-496.47900390625 -454.52801513671875,-431.7929992675781 -454.52801513671875,-431.7929992675781 C-504.0509948730469,-426.09100341796875 -541.9290161132812,-384.97900390625 -543.5640258789062,-335.156005859375 C-543.5640258789062,-335.156005859375 -559.0759887695312,137.36500549316406 -559.0759887695312,137.36500549316406 C-560.4229736328125,178.39300537109375 -536.7059936523438,216.1230010986328 -499.1510009765625,232.697998046875 C-499.1510009765625,232.697998046875 70.4280014038086,484.0719909667969 70.4280014038086,484.0719909667969 C107.98300170898438,500.64599609375 151.8419952392578,492.739013671875 181.2449951171875,464.0929870605469 C181.2449951171875,464.0929870605469 519.875,134.17300415039062 519.875,134.17300415039062 C555.5809936523438,99.38600158691406 560.4240112304688,43.69599914550781 531.260009765625,3.2669999599456787 C531.260009765625,3.2669999599456787 200.39700317382812,-455.39599609375 200.39700317382812,-455.39599609375 C179.09100341796875,-484.9320068359375 143.48599243164062,-500.6449890136719 107.30599975585938,-496.47900390625z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="employEngageSection">
        <div className="containerPageLand">
          <div className="employBgImgFigDiv">
            {/* <figure className="employBgImgFig">
              <img
                src={employEngageBackImg}
                alt="..."
               
              />
            </figure> */}
            <div
              data-is-ix2-target={1}
              className="lottie-animation-vh-scroll waveanimunique-change-001"
              data-w-id="17f80ce7-2e83-08e9-cf70-083e6575c5e4"
              data-animation-type="lottie"
              data-src="https://assets-global.website-files.com/60f7fb81f020d41a00e2fd84/60f7fb81f020d40ea2e2fdb4_wave-square-future-r01c01.json"
              data-loop={0}
              data-direction={1}
              data-autoplay={0}
              data-renderer="svg"
              data-default-duration="4.004003840917587"
              data-duration={0}
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
                  height: "auto",
                  transform: "translate3d(0px, 0px, 0px)",
                  contentVisibility: "visible",
                }}
              >
                <defs>
                  <clipPath id="__lottie_element_90">
                    <rect width={1000} height={1000} x={0} y={0} />
                  </clipPath>
                </defs>
                <g clipPath="url(#__lottie_element_90)">
                  <g
                    transform="matrix(1,0,0,1,129.40798950195312,-21.37701416015625)"
                    opacity={1}
                    style={{ display: "block" }}
                  >
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,313.82000732421875,639.39599609375)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(255,255,255)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-165.35000610351562,-636.89599609375 C-194.48800659179688,-545.4439697265625 -100.56800079345703,-513.989013671875 -38.6150016784668,-476.7090148925781 C50.5,-423.0849914550781 29.645999908447266,-295.97198486328125 -67.16699981689453,-214.31500244140625 C-269.32000732421875,-43.80699920654297 122.7490005493164,282.62200927734375 253.99000549316406,510.1610107421875"
                      />
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,126.7760009765625,-21.57098388671875)"
                    opacity={1}
                    style={{ display: "block" }}
                  >
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,294.76800537109375,636.9039916992188)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(255,255,255)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-141.1199951171875,-634.4039916992188 C-173.3070068359375,-543.0170288085938 -69.53399658203125,-512.97998046875 -5.333000183105469,-473.11700439453125 C83.00900268554688,-418.2650146484375 61.12699890136719,-292.6570129394531 -45.42300033569336,-212.0469970703125 C-279.239013671875,-27.59600067138672 214.60499572753906,340.6390075683594 284.6969909667969,593.2969970703125"
                      />
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,124.14599609375,-21.7650146484375)"
                    opacity={1}
                    style={{ display: "block" }}
                  >
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,284.2019958496094,634.4119873046875)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(255,255,255)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-125.37799835205078,-631.9119873046875 C-160.61399841308594,-540.5889892578125 -46.97100067138672,-512.0070190429688 19.461999893188477,-469.5249938964844 C107.06099700927734,-413.5069885253906 84.12100219726562,-289.3420104980469 -32.16600036621094,-209.7790069580078 C-249.9759979248047,-49.58700180053711 116.23400115966797,263.6419982910156 243.7270050048828,522.7650146484375"
                      />
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,121.5159912109375,-21.958984375)"
                    opacity={1}
                    style={{ display: "block" }}
                  >
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,203.63900756835938,568.8809814453125)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(255,255,255)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-39.638999938964844,-566.3809814453125 C-77.92400360107422,-475.12298583984375 45.608001708984375,-448.02899169921875 114.25299835205078,-402.89300537109375 C201.13900756835938,-345.7650146484375 177.11099243164062,-222.98699951171875 51.0880012512207,-144.4720001220703 C-167.69700622558594,5.001999855041504 -68.52200317382812,392.322998046875 -31.976999282836914,525.0969848632812"
                      />
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,118.885986328125,-22.15399169921875)"
                    opacity={1}
                    style={{ display: "block" }}
                  >
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,210.41000366210938,566.3900146484375)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(255,255,255)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-41.233001708984375,-563.8900146484375 C-82.56600189208984,-472.6969909667969 50.87300109863281,-447.1260070800781 121.71199798583984,-399.302001953125 C207.91099548339844,-341.1090087890625 182.7689971923828,-219.67300415039062 47.007999420166016,-142.20599365234375 C-162.74600219726562,-9.633999824523926 -98.52999877929688,339.7120056152344 -64.00900268554688,494.8179931640625"
                      />
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,116.2550048828125,-22.3480224609375)"
                    opacity={1}
                    style={{ display: "block" }}
                  >
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,217.19400024414062,563.8980102539062)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(255,255,255)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-42.84199905395508,-561.3980102539062 C-87.2239990234375,-470.2699890136719 56.14400100708008,-446.2539978027344 129.15499877929688,-395.7099914550781 C214.69400024414062,-336.4930114746094 188.41099548339844,-216.35800170898438 42.91400146484375,-139.93800354003906 C-197.65899658203125,0.061000000685453415 -100.9749984741211,422.82501220703125 -79.96700286865234,541.0679931640625"
                      />
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,113.625,-22.5419921875)"
                    opacity={1}
                    style={{ display: "block" }}
                  >
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,223.99099731445312,561.406005859375)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(255,255,255)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-44.46200180053711,-558.906005859375 C-91.89299774169922,-467.8420104980469 61.42599868774414,-445.4150085449219 136.58799743652344,-392.1180114746094 C221.49099731445312,-331.9129943847656 194.04299926757812,-213.04200744628906 38.808998107910156,-137.6699981689453 C-162.67100524902344,-30.30500030517578 -143.2100067138672,273.7439880371094 -120.27799987792969,447.8139953613281"
                      />
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,57.11199951171875,-22.735992431640625)"
                    opacity={1}
                    style={{ display: "block" }}
                  >
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,257.739990234375,525.906005859375)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(255,255,255)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-19.152000427246094,-523.406005859375 C-69.63200378417969,-432.4070129394531 93.66100311279297,-411.6000061035156 170.9499969482422,-355.5169982910156 C255.24000549316406,-294.3550109863281 226.60400390625,-176.718994140625 61.632999420166016,-102.39399719238281 C-155.0709991455078,2.6689999103546143 -229.79600524902344,288.56201171875 -245.02499389648438,444.3869934082031"
                      />
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,33.852996826171875,-22.92999267578125)"
                    opacity={1}
                    style={{ display: "block" }}
                  >
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,274.9209899902344,523.4140014648438)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(255,255,255)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-10.527000427246094,-520.9149780273438 C-64.05599975585938,-429.9809875488281 109.3239974975586,-410.9519958496094 188.6280059814453,-351.9259948730469 C272.4209899902344,-289.968994140625 242.4810028076172,-173.40499877929688 67.77300262451172,-100.12799835205078 C-167.19200134277344,2.7269999980926514 -252.63600158691406,317.0610046386719 -264.2080078125,470.02899169921875"
                      />
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,10.59197998046875,-23.123992919921875)"
                    opacity={1}
                    style={{ display: "block" }}
                  >
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,292.0169982910156,520.9219970703125)"
                    >
                      <path
                        className="animated-path"
                        style={{
                          strokeDasharray: 770,

                          strokeDashoffset: dashOffset,
                        }}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={10}
                        stroke="rgb(255,255,255)"
                        strokeOpacity={1}
                        strokeWidth={1}
                        d=" M-1.8170000314712524,-518.4219970703125 C-58.39500045776367,-427.552001953125 124.91799926757812,-410.0769958496094 206.38999938964844,-348.3330078125 C289.51800537109375,-285.3340148925781 258.4419860839844,-170.08900451660156 73.99800109863281,-97.85900115966797 C-129.50599670410156,-18.165000915527344 -233.40199279785156,219.33299255371094 -268.77801513671875,386.8890075683594"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
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
