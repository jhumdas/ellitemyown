import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Learning/Learning.css";
import systm from "../../Images/systm.png";
import lght from "../../Images/lght.png";
import video from "../../Images/video/Intro-Short-Video-Edinboro-University.mp4";
import star from "../../Images/star.png";
import clock from "../../Images/clock.png";
import format from "../../Images/format.png";
import point from "../../Images/point.png";
import bokk_img from "../../Images/bokk_img.png";
import twitter from "../../Images/twitter.png";
import facebook from "../../Images/facebook.png";
import Instagram from "../../Images/Instagram.png";
import stary from "../../Images/stary.png";
import starb from "../../Images/starb.png";
import Price from "../../Images/Price.png";
import Course from "../../Images/Course.png";
import Swatchbook from "../../Images/Swatchbook.png";
import Img11 from "../../Images/comment_person_1.png";
import Img12 from "../../Images/table_icon.png";
import Img13 from "../../Images/comment_person_2.png";
import Img14 from "../../Images/table_icon.png";
const Learning = () => {
  const loop = [
    {
      brdr: "1px solid #FFC700",
      bgclr: "rgba(255, 199, 0, 0.1)",
      descriptin: "Rating",
      text: "4.7/5",
      image: star,
    },
    {
      brdr: "1px solid #9321AF",
      bgclr: "rgba(147, 33, 175, 0.1)",
      descriptin: "Rating",
      text: "4.7/5",
      image: clock,
    },
    {
      brdr: "1px solid #AF214C",
      bgclr: "rgba(175, 33, 76, 0.1)",
      descriptin: "Rating",
      text: "4.7/5",
      image: format,
    },
    {
      brdr: "1px solid #FFA800",
      bgclr: "rgba(255, 168, 0, 0.1)",
      descriptin: "Rating",
      text: "4.7/5",
      image: point,
    },
  ];
  const Curriculum = [
    {
      text: "Section 1",
      intro: "Introduction",
      time: "24 mins",
      vido: "2 videos",
    },
    {
      text: "Section 2",
      intro: " knife tools intro & descriminition",
      time: "24 mins",
      vido: "2 videos",
    },
    {
      text: "Section 3",
      intro: "Sciezer tool editing",
      time: "24 mins",
      vido: "5 videos",
    },
    {
      text: "Section 4",
      intro: "Convergent and divergent plate margins",
      time: "24 mins",
      vido: "2 videos",
    },
    {
      text: "Section 5",
      intro: " Citizenship",
      time: "24 mins",
      vido: "2 videos",
    },
    {
      text: "Section 6",
      intro: " Revision poster on cells",
      time: "24 mins",
      vido: "2 videos",
    },
    {
      text: "Section 7",
      intro: " Master Mission Homework",
      time: "24 mins",
      vido: "2 videos",
    },
  ];
  const faq = [
    { text: "Do I have the right to return an item?" },
    { text: "What does LOREM mean?" },
    { text: "General Terms & Conditions (GTC)?" },
    { text: "Where can in edit my address?" },
    { text: "Are you on Twitter, Facebook and other social media platforms?" },
  ];
  const faqt = [
    {
      texttt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  const vdo = [
    {
      video: video,
    },
    {
      video: video,
    },
    {
      video: video,
    },
    {
      video: video,
    },
  ];
  const [shwmore, setShwmore] = useState(false);
  const [isplaying, setIsplaying] = useState(false);
  const [shwdts, setShwdts] = useState(false);
  const [shwlst, setShwlst] = useState(false);
  const [tggleshw, setTggleshw] = useState(false);
  const [showOne, setShowOne] = useState("");
  const [fqtggle, setFqtggle] = useState(false);
  const [shwon, setShwon] = useState("");
  const videoRef = useRef(null);
  const [tggshow, setTggshow] = useState(true);

  const shwHandleClick = () => {
    setShwmore(!shwmore);
  };
  const shwdtlsHandleClick = () => {
    setShwdts(!shwdts);
  };
  // const videoRef = useRef()
  // const handlePlay = () => {
  //     setIsplaying(!isplaying);
  //     videoRef.current.pause();
  // }
  // const handlePause = () => {
  //     setIsplaying(!isplaying);
  //     videoRef.current.play();
  // }
  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsplaying(true);
    } else {
      videoRef.current.pause();
      setIsplaying(false);
    }
  };
  const shwlstHandleClick = () => {
    setShwlst(!shwlst);
  };
  const handleClickshw = (ind) => {
    setTggleshw(!tggleshw);
    setShowOne(ind);
  };

  const handleClickshwMinus = () => {
    setShowOne("");
  };
  const handleClickshwDown = (ind) => {
    setFqtggle(!fqtggle);
    setShwon(ind);
  };
  const handleClickshwUp = () => {
    setShwon("");
  };

  return (
    <>
      <section className="lrning_main_section">
        <div className="custContain">
          <div className="lrning_main_section_flx">
            <div className="lrning_main_sctsdbr">
              <div className="mndrt_sdbr_mn">
                <div
                  onClick={() => setTggshow(!tggshow)}
                  className="mndrt_sdbr_mn_icn"
                >
                  <i class="fa-solid fa-bars-staggered"></i>
                </div>
                {tggshow ? (
                  <div className="mndrt_sdbr">
                    <div className="mandtry_lrning">
                      <div className="mndtry_lrn_btn_main">
                        <Link to="/" className="mndtry_lrn_btn">
                          Mandatory Learning
                        </Link>
                      </div>
                      <p>Recommended Learning</p>
                      <div className="mndtry_skl">
                        <p>Skill</p>

                        <form>
                          <div className="skl">
                            <input
                              type="checkbox"
                              id=""
                              name=""
                              defaultValue=""
                              className="bxchck"
                            />
                            <label htmlFor="vehicle1">Accounting</label>
                          </div>
                          <div className="skl">
                            <input
                              type="checkbox"
                              id=""
                              name=""
                              defaultValue=""
                              className="bxchck"
                            />
                            <label htmlFor="vehicle2"> Advocacy+</label>
                          </div>
                          <div className="skl">
                            <input
                              type="checkbox"
                              id=""
                              name=""
                              defaultValue=""
                              className="bxchck"
                            />
                            <label htmlFor="vehicle3">Business Analytics</label>
                          </div>
                          <div className="skl">
                            <input
                              type="checkbox"
                              id=""
                              name=""
                              defaultValue=""
                              className="bxchck"
                            />
                            <label htmlFor="vehicle3"> Economics</label>
                          </div>

                          {shwmore && (
                            <>
                              <div className="skl">
                                <input
                                  type="checkbox"
                                  id=""
                                  name=""
                                  defaultValue=""
                                  className="bxchck"
                                />
                                <label htmlFor="vehicle1">Accounting</label>
                              </div>
                              <div className="skl">
                                <input
                                  type="checkbox"
                                  id=""
                                  name=""
                                  defaultValue=""
                                  className="bxchck"
                                />
                                <label htmlFor="vehicle2"> Advocacy+</label>
                              </div>
                              <div className="skl">
                                <input
                                  type="checkbox"
                                  id=""
                                  name=""
                                  defaultValue=""
                                  className="bxchck"
                                />
                                <label htmlFor="vehicle3">
                                  Business Analytics
                                </label>
                              </div>
                              <div className="skl">
                                <input
                                  type="checkbox"
                                  id=""
                                  name=""
                                  defaultValue=""
                                  className="bxchck"
                                />
                                <label htmlFor="vehicle3"> Economics</label>
                              </div>
                            </>
                          )}
                          <div className="shw_icn" onClick={shwHandleClick}>
                            {!shwmore ? "Show More" : "Show Less"}
                            <span
                              className={
                                shwmore
                                  ? "fa-solid fa-caret-up "
                                  : "fa-solid fa-caret-down"
                              }
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="assmnt">
                      <div className="assmnt_img_txt">
                        <img src={systm} alt="" />
                      </div>
                      <p>Assignment</p>
                    </div>
                    <div className="hlpcntr">
                      <div className="hlpcntr_img_txt">
                        <img src={lght} alt="" />
                      </div>
                      <p>Help center</p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="lrning_main_sctvdotxt">
              <div className="mastrcls_course_main">
                <div className="bck_main">
                  <Link to="/" className="bck_btn">
                    Back
                  </Link>
                </div>
                <h2>Blender 3D Full Masterclass course</h2>
                <div className="vdo_brdr">
                  <div className="vdo_main">
                    <video poster width="100%" ref={videoRef}>
                      <source src={video} type="video/mp4"></source>
                    </video>
                    <div className="vdo_btn">
                      <div className="btn_main" onClick={togglePlayPause}>
                        {isplaying ? (
                          <i class="fa-solid fa-pause"></i>
                        ) : (
                          <i class="fa-solid fa-play"></i>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rtng_durt_frmt_lylt_main">
                  {loop?.map((item, index) => {
                    return (
                      <div
                        className="bg_txt_main"
                        style={{ border: item.brdr }}
                        key={index}
                      >
                        <div
                          className="bg_main"
                          style={{ background: item.bgclr }}
                        >
                          <img src={item.image} alt="" />
                        </div>
                        <div className="bg_txt">
                          <p>{item.descriptin}</p>
                          <h4>{item.text}</h4>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="shwtxt">
                  <p>
                    Last month we designed Testerz.io web platform where Amazon
                    sellers can get better reviews for their products. Sellers
                    can post their products, people can order them for free,
                    test them and add their reviews. We’ve been part of the
                    project time.
                  </p>

                  <p>
                    Last month we designed Testerz.io web platform where Amazon
                    sellers can get better reviews for their products. Sellers
                    can post their products, people can order them for free,
                    test them and add their reviews. We’ve been part of the
                    project time.
                  </p>
                  {shwdts && (
                    <div className="shwtxt">
                      <p>
                        Last month we designed Testerz.io web platform where
                        Amazon sellers can get better reviews for their
                        products. Sellers can post their products, people can
                        order them for free, test them and add their reviews.
                        We’ve been part of the project time.Last month we
                        designed Testerz.io web platform where Amazon sellers
                        can get better reviews for their products. Sellers can
                        post their products, people can order them for free,
                        test them and add their reviews. We’ve been part of the
                        project time.Last month we designed Testerz.io web
                        platform where Amazon sellers can get better reviews for
                        their products. Sellers can post their products, people
                        can order them for free, test them and add their
                        reviews. We’ve been part of the project time.
                      </p>
                    </div>
                  )}
                  <div className="shwbtn" onClick={shwdtlsHandleClick}>
                    {!shwdts ? "Show More" : "Show Less"}
                    <span
                      className={
                        shwdts
                          ? "fa-solid fa-caret-up "
                          : "fa-solid fa-caret-down"
                      }
                    />
                  </div>
                </div>

                <div className="lrn_main">
                  <p>What you will learn?</p>
                  <div className="lrn_main_lst_itm">
                    <ul className="lrn_lst">
                      <li className="lrn_lst_itm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem volutpat
                      </li>
                      <li className="lrn_lst_itm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem volutpat
                      </li>
                      <li className="lrn_lst_itm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem volutpat
                      </li>
                      <li className="lrn_lst_itm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem volutpat
                      </li>
                      <li className="lrn_lst_itm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem volutpat
                      </li>
                      <li className="lrn_lst_itm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem volutpat
                      </li>

                      {shwlst && (
                        <>
                          <li className="lrn_lst_itm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Lorem volutpat
                          </li>
                          <li className="lrn_lst_itm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Lorem volutpat
                          </li>
                          <li className="lrn_lst_itm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Lorem volutpat
                          </li>
                          <li className="lrn_lst_itm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Lorem volutpat
                          </li>
                          <li className="lrn_lst_itm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Lorem volutpat
                          </li>
                          <li className="lrn_lst_itm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Lorem volutpat
                          </li>
                        </>
                      )}
                      <div className="shwbtn" onClick={shwlstHandleClick}>
                        {!shwlst ? "Show More" : "Show Less"}
                        <span
                          className={
                            shwlst
                              ? "fa-solid fa-caret-up "
                              : "fa-solid fa-caret-down"
                          }
                        />
                      </div>
                    </ul>
                  </div>
                </div>

                <div className="curclmn_main">
                  <p>Curriculum</p>
                  <div className="crclmn_main_txt_icon_sec">
                    {Curriculum.map?.((item, index) => {
                      return (
                        <div
                          className=" "
                          key={index}
                          style={
                            index === Curriculum?.length - 1
                              ? { borderBottom: "none" }
                              : {}
                          }
                        >
                          <div className="crclmn_main_txt_icon_main">
                            <div className="crclmn_main_txt_icon">
                              <div className="crclmn_main_txt_icon_tm">
                                <div className="crclmn_main_txt">
                                  <p>
                                    {item.text} :{item.intro}
                                  </p>
                                </div>
                                <div className="crclmn_main_vdo">
                                  <p>{item.vido}</p>
                                </div>
                              </div>
                              <div className="crclmn_main_txt_icon_mnt">
                                <p>{item.time}</p>
                              </div>
                            </div>
                            {/* <div className='crclmn_main_icon' onClick={crclmhandleClick}>
                                                        <span className={crclm ? "fa-solid fa-caret-up " : "fa-solid fa-caret-down"} />
                                                    </div> */}
                            {showOne === index ? (
                              <div
                                className="crtdwn"
                                onClick={() => handleClickshwMinus(index)}
                              >
                                <span className="fa-solid fa-caret-up "></span>
                              </div>
                            ) : (
                              <div
                                className="crtdwn"
                                onClick={() => handleClickshw(index)}
                              >
                                <span className="fa-solid fa-caret-down"></span>
                              </div>
                            )}
                          </div>
                          {showOne === index && (
                            <div className="crclm_vdo_main">
                              {vdo.map((item, index) => {
                                return (
                                  <div className="" key={index}>
                                    <Link to="/">
                                      <div className="crclm_vdo">
                                        <video poster muted ref={videoRef}>
                                          <source
                                            src={item.video}
                                            type="video/mp4"
                                          ></source>
                                        </video>
                                      </div>
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="fqs_main">
                  <p>FAQ’S</p>
                  <div className="faqs_main_txt_icon">
                    {faq.map?.((item, index) => {
                      return (
                        <div className="faqs_main_txt_icon_brdr">
                          <div className="faqs_txt_icn">
                            <p>{item.text}</p>
                            {shwon === index ? (
                              <div
                                className="crtdwn"
                                onClick={() => handleClickshwUp(index)}
                              >
                                <span className="fa-solid fa-caret-up "></span>
                              </div>
                            ) : (
                              <div
                                className="crtdwn"
                                onClick={() => handleClickshwDown(index)}
                              >
                                <span className="fa-solid fa-caret-down"></span>
                              </div>
                            )}
                          </div>
                          {shwon === index && (
                            <div className="">
                              {faqt.map((item, index) => {
                                return (
                                  <div className="faqtxtpp" key={index}>
                                    <p>{item.texttt}</p>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bkindvdlcal">
                  <div className="bk_img_txt_main">
                    <div className="bk_img">
                      <img src={bokk_img} alt="" />
                    </div>
                    <div className="bkname_str_rtn_prc_main_attnd_cls">
                      <div className="bkname">
                        <p>Skylar Siphron</p>
                        <div className="">
                          <ul className="icn_lst_itm_main">
                            <li className="icn_lst_itm">
                              <Link to="/">
                                <img src={facebook} alt="" />
                              </Link>
                            </li>
                            <li className="icn_lst_itm">
                              <Link to="/">
                                <img src={twitter} alt="" />
                              </Link>
                            </li>
                            <li className="icn_lst_itm">
                              <Link to="/">
                                <img src={Instagram} alt="" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="str_rtn_prc_main">
                        <div className="txt_icn">
                          <img src={stary} alt="" />
                          <span className="rtn_txt">4.8</span>
                        </div>
                        <div className="txt_icn">
                          <img src={starb} alt="" />
                          <span className="rtn_txt">48/hr</span>
                        </div>
                        <div className="txt_icn">
                          <img src={Price} alt="" />
                          <span className="rtn_txt">2 Total courses</span>
                        </div>
                        <div className="txt_icn">
                          <img src={Course} alt="" />
                          <span className="rtn_txt">5k+ Reviews</span>
                        </div>
                      </div>
                      <div className="attnd_cls">
                        <img src={Swatchbook} alt="" />
                        <span className="attnd_cls_sp">200 coaching </span>
                        <p>Classes attended</p>
                      </div>
                      <div className="bkmreatndytxt">
                        <p>
                          Something has always existed. According to physics,
                          there can never be true physical nothingness—though
                          there can be times when existence resembles nothing,
                          such as a vacuum (the state of minimum possible
                          energy) (Phys.org). Creating a space where there are
                          no quantum fluctuations requires an enormous amount of
                          energy, and there would be a remnant of that energy in
                          that space afterwards if the fluctuations were flushed
                          out, plus an unstable environment (1veritasium). Even
                          on computers, deleted data is not actually tossed
                          away, by rather written over.
                        </p>
                      </div>

                      <button className="btn_bk_mn_btn">
                        Book an Individual Coaching Call
                      </button>
                    </div>
                  </div>
                </div>

                <div id="rating">
                  <div className="rateJavaHeadDiv">
                    <p className="rateJavaHead">Reviews</p>
                    <div className="rateLinkShareDiv">
                      <button className="rateLinkedinBtn">
                        <i class="fa-brands fa-linkedin"></i>
                      </button>
                      <figure className="tabRateIconFig">
                        <img src={Img12} alt="..." />
                      </figure>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-12">
                      <div className="rating_text">
                        <h2>4.7</h2>
                        <p>out of</p>
                        <h3>5.00</h3>
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-8 col-12">
                      <p className="totalFiveText">Total 5,569 reviews given</p>
                      <div className="progress_wrap">
                        <span className="number">5</span>
                        <span className="icon">
                          <i className="fa-solid fa-star" />
                        </span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span className="amount">5000</span>
                      </div>
                      <div className="progress_wrap">
                        <span className="number">4</span>
                        <span className="icon">
                          <i className="fa-solid fa-star" />
                        </span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "80%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span className="amount">800</span>
                      </div>
                      <div className="progress_wrap">
                        <span className="number">3</span>
                        <span className="icon">
                          <i className="fa-solid fa-star" />
                        </span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span className="amount">600</span>
                      </div>
                      <div className="progress_wrap">
                        <span className="number">2</span>
                        <span className="icon">
                          <i className="fa-solid fa-star" />
                        </span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "30%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span className="amount">56</span>
                      </div>
                      <div className="progress_wrap">
                        <span className="number">1</span>
                        <span className="icon">
                          <i className="fa-solid fa-star" />
                        </span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "10%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span className="amount">4</span>
                      </div>
                    </div>
                    <div className="comment_section">
                      <div className="comment_left">
                        <div className="comment_person">
                          <img className="img-fluid" src={Img11} alt="pic" />
                        </div>
                      </div>
                      <div className="comment_right">
                        <div className="comment_top">
                          <div className="comment_top_left">
                            <h5>Aspen Calzoni</h5>
                            <div className="star">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                            </div>
                          </div>
                          <div className="comment_top_right">
                            <p>5 months ago</p>
                          </div>
                        </div>
                        <div className="person_description">
                          <p>
                            Last month we designed Testerz.io web platform where
                            Amazon sellers can get better reviews for their
                            products. Sellers can post their products, people
                            can order them for free, test them and add their
                            reviews. We’ve been part of the project time.
                          </p>
                        </div>
                        <div className="comment_icon">
                          <button className="cmntLinkBtn">
                            <i class="fa-brands fa-linkedin"></i>
                          </button>
                          <img className="img-fluid" src={Img12} alt="icon" />
                        </div>
                      </div>
                    </div>
                    <div className="comment_section">
                      <div className="comment_left">
                        <div className="comment_person">
                          <img className="img-fluid" src={Img13} alt="pic" />
                        </div>
                      </div>
                      <div className="comment_right">
                        <div className="comment_top">
                          <div className="comment_top_left">
                            <h5>Aspen Calzoni</h5>
                            <div className="star">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                            </div>
                          </div>
                          <div className="comment_top_right">
                            <p>5 months ago</p>
                          </div>
                        </div>
                        <div className="person_description">
                          <p>
                            Last month we designed Testerz.io web platform where
                            Amazon sellers can get better reviews for their
                            products. Sellers can post their products, people
                            can order them for free, test them and add their
                            reviews. We’ve been part of the project time.
                          </p>
                        </div>
                        <div className="comment_icon">
                          <button className="cmntLinkBtn">
                            <i class="fa-brands fa-linkedin"></i>
                          </button>
                          <img className="img-fluid" src={Img14} alt="icon" />
                        </div>
                      </div>
                    </div>
                    <div className="rating_btn">
                      <button className="review_btn">Show More Reviews</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Learning;
