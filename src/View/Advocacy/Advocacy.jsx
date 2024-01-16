import React, { useEffect, useState } from "react";
import "./Advocacy.css";
import profilephoto from "../../Images/profilephoto.png";
import advoTop1 from "../../Images/advoTop1.png";
import advoTop2 from "../../Images/advoTop2.png";
import advoTop3 from "../../Images/advoTop3.png";
import advoWhite from "../../Images/advoWhite.png";
import advLorPic from "../../Images/advLorPic.png";
import myRightPanPic from "../../Images/myRightPanPic.png";
import personImg from "../../Images/personImg.png";
import advoSlidePic1 from "../../Images/advoSlidePic1.png";
import table_icon from "../../Images/Icons/PNG/share-icon-elite-web.svg";
import advLorePic from "../../Images/advLorePic.png";
import likeAdvPic from "../../Images/likeAdvPic.png";
import advTwoChtPic from "../../Images/advTwoChtPic.png";
import Advoimg1 from "../../Images/Advoimg1.png";
import Advoimg2 from "../../Images/Advoimg2.png";
import Advoimg3 from "../../Images/Advoimg3.png";
import Advoimg4 from "../../Images/Advoimg4.png";
import Advoimg5 from "../../Images/Advoimg5.png";
import Advoimg6 from "../../Images/Advoimg6.png";
import Advoimg7 from "../../Images/Advoimg7.png";
import Advoimg8 from "../../Images/Advoimg8.png";
import Advoimg9 from "../../Images/Advoimg9.png";
import Advoimg10 from "../../Images/Advoimg10.png";
import Advoimg11 from "../../Images/Advoimg11.png";
import Advoimg12 from "../../Images/Advoimg12.png";
import Advoimg13 from "../../Images/Advoimg13.png";
import Advoimg14 from "../../Images/Advoimg14.png";
import Advoimg15 from "../../Images/Advoimg15.png";
import RateSkills from "../Profile/RateSkills";
import HubAdvocy from "../Hub/HubAdvocy";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useAuthCtx } from "../../context/AuthCtx";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-toastify";
import profileImg from "../../Images/Icons/PNG/Profile (2).png";
import { RWebShare } from "react-web-share";
import GrowWel from "../Hub/GrowWel";
import bgprfldiv from "../../Images/bgprfldiv.png";
function Advocacy() {
  const { userData } = useAuthCtx();
  const [advocacyCategory, setAdvocacyCategory] = useState([]);
  const [advocacyData, setAdvocacyData] = useState([]);
  const [advocacyDatas, setAdvocacyDatas] = useState([]);
  const [approvedAdvocacyData, setApprovedAdvocacyData] = useState([]);

  const [postData, setPostData] = useState([]);
  const [modalB, setModalB] = useState(false);
  const [modalId, setModalId] = useState("");
  const [modalA, setModalA] = useState(false);
  const [changeShow, setChangeShow] = useState(false);
  const [singleAdvocacyData, setSingleAdvocacyData] = useState("");

  console.log("jujiui", advocacyCategory);
  useEffect(() => {
    viewAllCategory();
    // viewAdvocacy();
    viewApprovedAdvocacy();
  }, []);

  const viewAllCategory = async () => {
    let res = await ApiHelperFunction({
      urlPath: "/view-advocacy-category",
      method: "GET",
    });
    if (res && res?.status) {
      setAdvocacyCategory(res?.data?.data);
    } else {
      toast.error(res?.message);
    }
  };

  const viewAdvocacy = async (id) => {
    let res = await ApiHelperFunction({
      urlPath: `/view-advocacy/${id}`,
      method: "GET",
    });
    console.log("resfftyuihf", res);
    if (res && res?.status) {
      setAdvocacyData(res?.data?.data);

      setAdvocacyDatas(res?.data?.data.sort((a, b) => a.priority - b.priority));
    } else {
      toast.error(res?.message);
    }
  };

  const viewApprovedAdvocacy = async () => {
    let res = await ApiHelperFunction({
      urlPath: "/view-approved-advocacy",
      method: "GET",
    });

    if (res && res?.status) {
      setApprovedAdvocacyData(res?.data?.data);
    } else {
      toast.error(res?.message);
    }
  };

  console.log(approvedAdvocacyData, "approvedAdvocacyData");

  const handleOptionClick = (index) => {
    setChangeShow(index === modalId);
  };

  return (
    <section className="advocacySection">
      <div className="headFirstPart">
        {/* <div className="custContain"> */}
        <GrowWel />
        {/* </div> */}
      </div>
      <div className="custContain">
        <div className="row">
          <div className="col-lg-9">
            <div className="advocayskillengage">
              {/* <div className="nameFigAdvo"> */}
              {/* <div className="advbhdivmaingh"> */}
              {/* <figure className="advoProFig"> */}
              {/* <img src={userData?.image} alt="..." /> */}
              {/* {userData?.image === "image" ? (
                      <img src={profileImg} alt="..." />
                    ) : (
                      <img src={userData?.image} alt="..." />
                    )}
                  </figure> */}
              {/* <div className="nameTextAdvo"> */}
              {/* <p className="proAdvoName">{`${userData?.firstName} ${userData.lastName}`}</p>
                    <p className="proAdvoDesig">{userData?.designation}</p> */}
              {/* <p className="proAdvoEmpId">
                  Employee Id: <span>1234</span>
                </p> */}
              {/* </div> */}
              {/* </div> */}

              {/* </div> */}
              <div className="user_aboutnbet">
                    <div className="bg-userdtwht" style={{ backgroundImage: `url(${bgprfldiv})` }}>
                      <div className="bg-txtppp">
                        {/* <p className="bghhkpp">PLATINUM</p>
                        <p>Club</p> */}
                      </div>
                      <div className="divpaddingghh">
                        <div className="prflimgdiv">
                          <div className="prflimgbrdr">
                            <div className="prflimgfh">
                              <img src={userData?.image} alt="..." />
                            </div>
                          </div>
                          <div className="divpatyn">
                            <p className="thounsabpp">50,000</p>
                            <p className="pointshttx">POINTS BALANCE</p>
                          </div>
                        </div>

                        <div className="tstdfghmrl">
                          <p className="txtppght">{`${userData?.firstName} ${userData.lastName}`}</p>
                          <p className="dvjknjpp">{userData?.designation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
              <div className="advoRateSkillDiv advocayskilldiv">
                <RateSkills />
              </div>
            </div>


            {/* <div className="topPicAdvoDiv">
              <p className="topPicHead">Top pick for you</p>
              <ul className="topPicUl">
                {advocacyData &&
                  advocacyData?.map((ele) => {
                    return (
                      <li className="topPicLi">
                        <p className="turnTopText">{ele?.AdvocacyName}</p>
                        <figure className="turnTopFig">
                          <img src={ele?.image} alt="..." />
                        </figure>
                      </li>
                    );
                  })}
  
              </ul>
            </div> */}

            {/* change it */}

          </div>
          <div className="col-lg-3">
            <div className="">
              {/* <div className="advoRateSkillDiv">
                <RateSkills />
              </div> */}
              <div className="advoAdvocyDiv">
                <HubAdvocy />
              </div>
            </div>

            {/* code chage it */}
            {/* <div class="advoCardDiv">
              <div class="advoCard">
                <div class="advoCardTop">
                  <div class="advorow">
                    <div class="advoimgwrap advoimgwrap1">
                      <img src={Advoimg1} alt="img" />
                    </div>
                    <div class="advoimgwrap advoimgwrap2">
                      <img src={Advoimg2} alt="img" />
                    </div>
                    <div class="advoimgwrap advoimgwrap3">
                      <img src={Advoimg3} alt="img" />
                    </div>
                    <div class="advoimgwrap advoimgwrap4">
                      <img src={Advoimg4} alt="img" />
                    </div>
                    <div class="advoimgwrap advoimgwrap5">
                      <img src={Advoimg5} alt="img" />
                    </div>
                  </div>
                </div>
                <div class="advocardTxt">
                  <div class="advoCardtxtLeft">
                    <h3 class="advocardhead">Rewards</h3>
                    <p class="advocardpara">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <div class="advoCardtxtRight">
                    <button class="advoCardbtn">View</button>
                  </div>
                </div>
              </div>
              <div class="advoCard">
                <div class="advoCardTop">
                  <div class="advorow">
                    <div class="advoimgwrap advoimgwrap1">
                      <img src={Advoimg6} alt="img" />
                    </div>
                    <div class="advoimgwrap advoimgwrap2">
                      <img src={Advoimg7} alt="img" />
                    </div>
                    <div class="advoimgwrap advoimgwrap3">
                      <img src={Advoimg8} alt="img" />
                    </div>
                    <div class="advoimgwrap advoimgwrap4">
                      <img src={Advoimg9} alt="img" />
                    </div>
                    <div class="advoimgwrap advoimgwrap5">
                      <img src={Advoimg10} alt="img" />
                    </div>
                  </div>
                </div>
                <div class="advocardTxt">
                  <div class="advoCardtxtLeft">
                    <h3 class="advocardhead">Blog Post</h3>
                    <p class="advocardpara">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <div class="advoCardtxtRight">
                    <button class="advoCardbtn">View</button>
                  </div>
                </div>
              </div>
              <div class="advoCard">
                <div class="advoCardTop">
                  <div class="advorow">
                    <div class="advoimgwrap advoimgwrap1">
                      <img src={Advoimg11} alt="img" />
                    </div>
                    <div class="advoimgwrap advoimgwrap2">
                      <img src={Advoimg12} alt="img" />
                    </div>
                    <div class="advoimgwrap advoimgwrap3">
                      <img src={Advoimg13} alt="img" />
                    </div>
                    <div class="advoimgwrap advoimgwrap4">
                      <img src={Advoimg14} alt="img" />
                    </div>
                    <div class="advoimgwrap advoimgwrap5">
                      <img src={Advoimg15} alt="img" />
                    </div>
                  </div>
                </div>
                <div class="advocardTxt">
                  <div class="advoCardtxtLeft">
                    <h3 class="advocardhead">White Chart</h3>
                    <p class="advocardpara">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <div class="advoCardtxtRight">
                    <button class="advoCardbtn">View</button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-9 col-md-12 col-12">
            <div className="">
              <div>
                <Tabs className="myAdvoProTab">
                  <TabList>
                    {/* <Tab>Advocacy Content Hub</Tab> */}
                    {/* <Tab>My Testimonials</Tab>
                  <Tab>Referrals</Tab>
                  <Tab>Rewards</Tab> */}
                  </TabList>

                  <TabPanel>
                    <div className="myAdvoPanelDiv">
                      {/* <div className="myAdvoPanDiv">
                      {approvedAdvocacyData &&
                        approvedAdvocacyData?.reverse()?.map((ele, index) => {
                          return index == 0 ? (
                            <div className="myAdvoLeftPan">
                              <figure className="myAdvLFig">
                                <img src={advoWhite} alt="..." />
                              </figure>
                              <div className="myAdvInnerTextDiv">
                                <div className="whitAdvFigDiv">
                                 
                                </div>
                                <p className="advLorPara">
                         
                                </p>
                                <p className="advLorSmallPara">
                                  {ele?.description}
                                </p>
                             
                              </div>
                            </div>
                          ) : index == 1 ? (
                            <div className="myAdvoRightPan">
                              <figure className="myRghtFig">
                                <img src={ele?.image?.[0]} alt="..." />
                              </figure>
                              <div className="myAdvoRightText">
                               
                          
                              </div>
                            </div>
                          ) : null;
                        })}
                    </div> */}

                      {/* <div className="myAdvoPanDiv">
                      {advocacyDatas &&
                        advocacyDatas?.map((ele, index) => {
                          return index == 0 ? (
                            <div className="myAdvoLeftPan">
                              <figure className="myAdvLFig">
                                <img src={advoWhite} alt="..." />
                              </figure>
                              <div className="myAdvInnerTextDiv">
                                <div className="whitAdvFigDiv">
                                  <p className="advLorWhit">{ele?.catName}</p>
                                 
                                </div>
                                <p className="advLorPara">
                                  {ele?.AdvocacyName}
                                </p>
                                <p className="advLorSmallPara">{ele?.desc}</p>
                                
                              </div>
                            </div>
                          ) : index == 1 ? (
                            <div className="myAdvoRightPan">
                              <figure className="myRghtFig">
                                <img src={ele?.image} alt="..." />
                              </figure>
                              <div className="myAdvoRightText">
                                <p className="engHead">{ele?.catName}</p>
                                <p className="csrText">{ele?.AdvocacyName}</p>
                                
                              </div>
                            </div>
                          ) : null;
                        })}
                    </div> */}


                      {/*add it  */}
                      <div className="advoSwipeShortDiv">
                        <div className="advoSwiperDiv">
                          {approvedAdvocacyData &&
                            approvedAdvocacyData?.slice(0, 1)?.map((ele) => {
                              return (
                                // <SwiperSlide>
                                <div className="advoSlides">
                                  <figure className="advoSliFig">
                                    <img src={ele?.image} alt="..." />
                                  </figure>
                                  <div className="advoSlideText">
                                    <p className="advSliLoHead">
                                      {ele?.description}
                                    </p>
                                    {/* <div className="advLorMainDiv">
                                      <figure className="advLorPicFig">
                                        <img src={advLorPic} alt="..." />
                                      </figure>
                                      <div>
                                        <p className="advBlkLorNm">Lorem Ipsum</p>
                                        <p className="advLorBlkDt">
                                          May 08, 2023. 5 min read
                                        </p>
                                      </div>
                                    </div> */}
                                  </div>
                                </div>
                                // {/* </SwiperSlide> */}
                              );
                            })}
                          {/* <Swiper
                          slidesPerView={1}
                          spaceBetween={10}
                          pagination={{
                            clickable: true,
                          }}
                          loop={true}
                          breakpoints={{
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            1200: {
                              slidesPerView: 3,
                              spaceBetween: 30,
                            },
                            1400: {
                              slidesPerView: 3.5,
                              spaceBetween: 30,
                            },
                          }}
                          className="myAdvoSwiper"
                        >
                      
                        </Swiper> */}
                        </div>
                        <div
                          className="advoSwiperDiv"
                          // onClick={(e) => {
                          //   if (e.target.closest(".advoSlides") !== null) {
                          //     document
                          //       .querySelector(".advoSwipeShortDiv")
                          //       .classList.add("advoSwiperHideDiv");
                          //     document
                          //       .querySelector(".advoSwipeDetailDiv")
                          //       .classList.remove("advoSwiperHideDiv");
                          //   }
                          // }}
                          onClick={(e) => {
                            const clickedSlide = e.target.closest(".advoSlides");

                            if (clickedSlide !== null) {
                              const singleId = clickedSlide.dataset.id; // Assuming you set the id as a data attribute
                              console.log("Clicked_slide_id:", singleId);
                              setSingleAdvocacyData(singleId);

                              // Your existing logic here...
                              document
                                .querySelector(".advoSwipeShortDiv")
                                .classList.add("advoSwiperHideDiv");
                              document
                                .querySelector(".advoSwipeDetailDiv")
                                .classList.remove("advoSwiperHideDiv");
                            }
                          }}
                        >
                          <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                              clickable: true,
                            }}
                            navigation={true}
                            modules={[Navigation]}
                            loop={true}
                            breakpoints={{
                              640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                              },
                              1200: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                              },
                              1400: {
                                slidesPerView: 3.5,
                                spaceBetween: 30,
                              },
                            }}
                            className="myAdvoSwiper"
                          >
                            {advocacyData &&
                              advocacyData?.map((ele, id) => {
                                console.log(ele, "iddddddddd");
                                return (
                                  <SwiperSlide key={id}>
                                    <div
                                      className="advoSlides"
                                      data-id={ele?._id}
                                    >
                                      <figure className="advcydiv">
                                        <img src={ele?.image} alt="..." />
                                      </figure>
                                      <div className="advoSlideText">
                                        <p className="advSliLoHeadtxt">
                                          {ele?.desc}
                                        </p>
                                        <div className="advLorMainDiv">
                                          <figure className="advLorPicFig">
                                            <img src={advLorPic} alt="..." />
                                          </figure>
                                          <div>
                                            <p className="advBlkLorNm">Lorem Ipsum</p>
                                            <p className="advLorBlkDt">
                                              May 08, 2023. 5 min read
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                );
                              })}
                          </Swiper>
                        </div>
                      </div>
                      {/* add it end */}

                      {/* singleAdvocacyData */}
                      <div className="advoSwipeDetailDiv advoSwiperHideDiv">
                        {advocacyData &&
                          advocacyData?.map((item, id) => {
                            console.log(
                              "sdes",
                              item?._id,
                              singleAdvocacyData,
                              item
                            );
                            console.log("item", item);
                            if (item?._id === singleAdvocacyData)
                              return (
                                <div className="">
                                  {" "}
                                  {/* <div className="dticon">
                                  <div className="boxdt">
                                    <p className="thtxtdt">21th Dec  2023 </p>
                                  </div>
                                  <div className="icndivflx">
                                    <div className="icndivbg">
                                      <i className="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className="icndivbg">
                                      <i className="fa-brands fa-linkedin-in"></i>
                                    </div>
                                  </div>
                                </div> */}
                                  {/* <RWebShare
                                  data={{
                                    text: `${item?.AdvocacyName}`,
                                    url: "https://google.com",
                                    title: "Share Advocacy",
                                  }}
                                  onClick={() =>
                                    console.log("shared successfully!")
                                  }
                                >
                                  <div className="shareimggghhj ">
                                    <img
                                      src={table_icon}
                                      alt="..."
                                      className="shareIconImg"
                                    />
                                    <span></span>
                                  </div>
                                </RWebShare> */}
                                  <figure className="imgdivmain">
                                    <img src={item?.image} alt="..." />
                                  </figure>
                                  <div className="sharetdiv">
                                    <RWebShare
                                      data={{
                                        text: `${item?.AdvocacyName}`,
                                        url: "https://google.com",
                                        title: "Share Advocacy",
                                      }}
                                      onClick={() =>
                                        console.log("shared successfully!")
                                      }
                                    >
                                      <div className="shareimggghhj ">
                                        <img
                                          src={table_icon}
                                          alt="..."
                                          className="shareIconImg"
                                        />
                                        <span></span>
                                      </div>
                                    </RWebShare>
                                  </div>
                                  <div className="advoSwipeRightDiv">
                                    <div className="advSwipRightTextDiv">
                                      <p className="advoSwipeHead">
                                        {item?.AdvocacyName}
                                      </p>
                                      <p className="advoSwipeText">
                                        {item?.desc}
                                      </p>
                                    </div>
                                    <div className="advoBackBtnDiv">
                                      <button
                                        className="advoBackBtn"
                                        onClick={() => {
                                          document
                                            .querySelector(".advoSwipeDetailDiv")
                                            .classList.add("advoSwiperHideDiv");
                                          document
                                            .querySelector(".advoSwipeShortDiv")
                                            .classList.remove(
                                              "advoSwiperHideDiv"
                                            );
                                        }}
                                      >
                                        <i class="fa-solid fa-arrow-left"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              );
                          })}
                      </div>
                    </div>

                    {/* <div className="advoLoreTwoDiv">
                    <div className="loreTwoDivParent">
                      <div className="loreTwoDiv">
                        <div className="loreTwoTextMainDiv">
                          <p className="loreTwoInText">
                            Lorem ipsum dolor sit amet consectetur. Mattis
                            pharetra purus etiam in ut velit eu pharetra.
                            Sagittis massa phasellus quam magna{" "}
                          </p>
                          <div className="shrAdvDiv">
                            <Link to="/" className="advShrMainDivAn">
                              <div className="advShrMainDiv">
                                <figure className="advShareFig">
                                  <img src={table_icon} alt="..." />
                                </figure>
                                <span className="advShrText">Share</span>;
                              </div>
                            </Link>
                            <p className="hrsAgoText">2 hours ago</p>
                          </div>
                        </div>
                        <figure className="adcLorPicFig">
                          <img src={advLorePic} alt="..." />
                        </figure>
                      </div>
                      <div className="loreTwoDiv">
                        <div className="loreTwoTextMainDiv">
                          <p className="loreTwoInText">
                            Lorem ipsum dolor sit amet consectetur. Mattis
                            pharetra purus etiam in ut velit eu pharetra.
                            Sagittis massa phasellus quam magna{" "}
                          </p>
                          <div className="shrAdvDiv">
                            <Link to="/" className="advShrMainDivAn">
                              <div className="advShrMainDiv">
                                <figure className="advShareFig">
                                  <img src={table_icon} alt="..." />
                                </figure>
                                <span className="advShrText">Share</span>
                              </div>
                            </Link>
                            <p className="hrsAgoText">2 hours ago</p>
                          </div>
                        </div>
                        <figure className="adcLorPicFig">
                          <img src={advLorePic} alt="..." />
                        </figure>
                      </div>
                    </div>
                  </div> */}
                  </TabPanel>
                  <TabPanel>
                    <div className="testiDiv">
                      <ul className="testiDivUl">
                        <li className="testiDivLi">
                          <span>Testimonials- People’s page</span>
                        </li>
                        <li className="testiDivLi">
                          <span>Name</span>
                        </li>
                        <li className="testiDivLi">
                          <span>Profile</span>
                        </li>
                        <li className="testiDivLi">
                          <span>Department</span>
                        </li>
                        <li className="testiDivLi">
                          <span>Date</span>
                        </li>
                        <li className="testiDivLi">
                          <span>Statement</span>
                        </li>
                      </ul>
                      <div className="cmntFigDiv">
                        <p className="cmntAdvText">Comment</p>
                        <figure className="likeAdFig">
                          <img src={likeAdvPic} alt="..." />
                        </figure>
                      </div>
                      <div className="cmntFigAfterDiv"></div>
                    </div>
                    <figure className="advChtTwoFig">
                      <img src={advTwoChtPic} alt="..." />
                    </figure>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 3</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 4</h2>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="">
              <div className="unAdvoDiv">
                <ul
                  className="unAdvUl"
                  onClick={(e) => {
                    if (e.target.closest(".unAdvLi") !== null) {
                      document
                        .querySelector(".unAdvLiActive")
                        .classList.remove("unAdvLiActive");
                      e.target.closest(".unAdvLi").classList.add("unAdvLiActive");
                    }
                  }}
                >
                  {advocacyCategory &&
                    advocacyCategory?.map((ele, index) => {
                      return (
                        <li
                          style={{ cursor: "pointer" }}
                          className={
                            index === 0 ? "unAdvLi unAdvLiActive" : "unAdvLi"
                          }
                          onClick={() => {
                            viewAdvocacy(ele?._id);
                          }}
                        >
                          <span>{ele?.categoryName}</span>
                        </li>
                      );
                    })}

                  {/* <li className="unAdvLi">
                  <span>Engagement</span>
                </li>
                <li className="unAdvLi">
                  <span>Rewards</span>
                </li>
                <li className="unAdvLi">
                  <span>Blog Post</span>
                </li>
                <li className="unAdvLi">
                  <span>White Chart</span>
                </li>
                <li className="unAdvLi">
                  <span>Newsletter</span>
                </li>
                <li className="unAdvLi">
                  <span>Skills</span>
                </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Advocacy;
