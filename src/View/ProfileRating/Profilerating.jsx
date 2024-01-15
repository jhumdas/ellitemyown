import React, { useEffect, useState } from "react";
import ProMentConnetion from "../Profile/ProMentConnetion";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Img11 from "../../Images/comment_person_1.png";
// import Img12 from "../../Images/table_icon.png";
import Img12 from "../../Images/Icons/PNG/Share.png";
import Img13 from "../../Images/comment_person_2.png";
import Img14 from "../../Images/table_icon.png";
import camera from "../../Images/camera.png";
import AspiringHobby from "../Profile/AspiringHobby";
import HubAffinityGrp from "../Hub/HubAffinityGrp";
import ProSocialCommit from "../Profile/ProSocialCommit";
import RateSkills from "../Profile/RateSkills";
import chmpMsgPic from "../../Images/chmpMsgPic.png";
import user_image_2 from "../../Images/user_image_2.png";
import empMnthPic from "../../Images/empMnthPic.png";
import Image4 from "../../Images/companylogo.png";
import eliteCard from "../../Images/eliteCard.png";
import battery from "../../Images/battery.png";
import trophy from "../../Images/trophy.png";
import { ApiHelperFunction, fileUpload } from "../../services/api/apiHelpers";
import { toast } from "react-toastify";
import { useAuthCtx } from "../../context/AuthCtx";
import { useLocation } from "react-router-dom";
import AddSkill from "../../Component/Modal/AddSkill";
import AddSkillcomment from "../../Component/Modal/AddSkillcomment";
import eliteExp from "../../Images/Icons/PNG/Elite employee experience logo.png";
import goldIcon from "../../Images/Icons/PNG/Reward - Gold.png";
import AspireHobby from "../../View/Profile/AspireHobby";
import { RWebShare } from "react-web-share";
import { getAllPosts } from "../../redux/slices/postSlice";
import { useDispatch, useSelector } from "react-redux";


function Profilerating() {
  const { userData, getUserDetails } = useAuthCtx();
  const [skillmodalrating, setSkillmodalrating] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [particularSkillData, setParticularSkillData] = useState([]);
  const [skillId, setSkillId] = useState("");
  const [AvgRating, setAvgRating] = useState("");
  const [goldCard, setGoldCard] = useState([]);
  const [skillData, setSkillData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [modalA, setModalA] = useState(false);
  const badgeData = useSelector((state) => state?.badgeSlice?.badge);
  const dispatch = useDispatch()

  console.log("PRODATA", profileData);
  useEffect(() => {
    window.scroll(0, 0);
    if (location?.pathname == "/Profile_rating") {
      setProfileData(location?.state?.data[0]);
      setSkillData(location?.state?.data[0]?.skills);
      HandleSkill(location?.state?.data[0]?.skills[0]?._id);
      setSkillId(location?.state?.data[0]?.skills[0]?._id);
    }
  }, []);

  const handleClick = () => {
    setSkillmodalrating(!skillmodalrating);
  };


  function openModalOne() {
    setModalA(true);
  }


  const handleChange2 = async (e) => {
    let file = e.target.files[0];
    const data = new FormData();
    data.append("image", file);

    let res = await fileUpload("/image-upload", "POST", data);

    if (res.status) {
      // setImageUrl(res?.image);
      updateCoverImage(res?.image);
    } else {
      toast.error("Error uploading image");
    }
    // setUploading(false);
  };

  const updateCoverImage = async (img) => {
    let data = {
      coverImage: img,
    };
    let response2 = await ApiHelperFunction({
      urlPath: "/update-cover-image",
      method: "PUT",
      data,
    });

    console.log(data, response2, "responkdhjli");

    if (response2?.status) {
      toast.success("Cover picture updated successfully");
      getUserDetails();
    } else {
      // toast.error("Error fetching data");
    }
  };

  const handleChange = async (e) => {
    let file = e.target.files[0];
    const data = new FormData();
    data.append("image", file);

    let res = await fileUpload("/image-upload", "POST", data);

    if (res.status) {
      // setImageUrl(res?.image);
      ProfileUpdate(res?.image);
    } else {
      toast.error("Error uploading image");
    }
    // setUploading(false);
  };

  const ProfileUpdate = async (image) => {
    let data = {
      coverImage: image,
    };
    let response = await ApiHelperFunction({
      urlPath: "/update-profile",
      method: "PUT",
      data,
    });
    if (response?.status) {
      toast.success("Cover picture updated successfully");
      getUserDetails();
    } else {
      toast.error("Error fetching data");
    }
  };


  const handlePost = async (e, item) => {
    let data = {
      description: item?.name,
      image: [item.image],
      postType: "public",
    };

    // return;
    let response = await ApiHelperFunction({
      urlPath: "/user-add-post",
      method: "POST",
      data: data,
    });

    if (response?.status === 200) {
      // setPost({
      //   description: "",
      //   image: "",
      // });
      toast.success(response?.data?.message);
      dispatch(getAllPosts());
    } else {
      toast.error(response?.response?.data?.message);
    }

    // try {
    //   // Dispatch the addPosts action with the data
    //   await dispatch(addPosts(data));

    //   // Optionally, you can also dispatch getAllPosts to update the posts list
    //   await dispatch(getAllPosts());

    //   toast.success("Post added successfully");
    // } catch (error) {
    //   toast.error("Error adding post");
    // }
  };

  const Rating = (val) => {
    switch (val) {
      case 1:
        return <i className="fa-solid fa-star" />;
      case 2:
        return (
          <>
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </>
        );

      case 3:
        return (
          <>
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </>
        );
      case 4:
        return (
          <>
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </>
        );
      case 5:
        return (
          <>
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </>
        );

      default:
        return null;
    }
    // for(let i=0 ; i< val ; i++){
    // return(
    // <i className="fa-solid fa-star" />
    // )
    // }
  };

  const HandleSkill = async (id) => {
    let data = {
      id: id,
    };
    setSkillId(id);
    let response = await ApiHelperFunction({
      urlPath: "/view-skill-rating",
      method: "POST",
      data,
    });
    if (response?.status) {
      setParticularSkillData(response?.data?.data[0]?.reviewData);
      setAvgRating(response?.data?.data[0]);
      console.log("DATADFF", response?.data);
    } else {
      toast.error("Error fetching skill data");
    }
  };

  console.log(profileData, "profileData");
  return (
    <>
      <section className="profilePageSection">
        <div className="profileCvrPicDiv">
          <figure className="profileBackFigure">
            {profileData?.coverImage && (
              <img src={profileData?.coverImage} alt="..." />
            )}
          </figure>
          <div>
            <p className="proCvrTagLine">Your Tag Line</p>
            {userData?.userType === "Admin" ? (
              <div className="proEditFigText">
                <input
                  type="file"
                  className="proEditFigInp"
                  onChange={handleChange2}
                />
                <div className="proEditFigInnerText">
                  <figure className="proEditCamFig">
                    <img src={camera} alt="..." />
                  </figure>
                  <span className="proEditText">Edit your cover picture</span>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3">
              <div className="leftMrkDiv">
                <div className="mrkHubFigDiv">
                  <figure className="mrkHubFig">
                    {profileData?.image ? (
                      <img src={profileData?.image} alt="..." />
                    ) : (
                      <img
                        src="http://52.66.120.170:4049/uploads/imageUploads/530060.com-4811117"
                        alt="..."
                      />
                    )}
                  </figure>
                  <div className="mrkInpFigDiv">
                    <figure className="mrkCamFig">
                      {/* <img src={camera} alt="..." /> */}
                    </figure>
                    {/* <input type="file" className="mrkInpFigFile" /> */}
                  </div>
                </div>
                <div className="empDegId">
                  {profileData && (
                    <p className="mrkHbHead">{`${profileData?.firstName} ${profileData.lastName}`}</p>
                  )}
                  <div className="mrkNmBtnDiv">
                    <span className="mrkHbName">
                      {profileData?.designation}
                    </span>
                    {/* <button className="mrkPenBtn">
                  <i class="fa-solid fa-pen"></i>
                </button> */}
                  </div>
                </div>
              </div>
              <div className="hobbyPersoDiv">
                <AspireHobby hobbyDatas={profileData?.hobbies} />
              </div>
              {/* <div className="aspiringProDiv">
                            <AspiringHobby />
                        </div> */}
              <div className="myAffitiDiv">
                <HubAffinityGrp />
              </div>
              {/* <div className="proSocialCmtDiv">
                <ProSocialCommit />
              </div> */}
            </div>
            <div className="col-xl-6 mt-3 mt-md-4 mt-xl-0">
              {/* <p className="proAboutSelf">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                            eligendi mollitia nisi, suscipit vitae repellat optio quasi
                            perspiciatis, eius esse excepturi odit ipsam vero maiores impedit
                            debitis eum soluta laudantium possimus officiis a incidunt
                            ducimus! Dolores temporibus cum consequuntur, earum vero doloribus
                            excepturi accusamus quo omnis consequatur deleniti obcaecati in
                            eaque expedita fugit labore odit ipsam? Explicabo illo quisquam
                            perspiciatis.
                        </p> */}
              {/* <RateSkills /> */}
              {/* <div className="rateMyInnerDivParent">
                <div className="rateMyInnerDiv">
                  <p className="rateMyComText">Critical Pending Task</p>
                  <div className="rateMyNumCirDiv">
                    <p className="rateMyNumHead">40</p>
                    <figure className="rateMybatteFig">
                      <img src={battery} alt="..." />
                    </figure>
                  </div>
                </div>
                <div className="rateMyNtrkInnerDiv">
                  <p className="rateMyComText">Total points Gained</p>
                  <div className="rateMyNumCirDiv">
                    <p className="rateMyNumHead">08</p>
                    <figure className="rateMyTropFig">
                      <img src={trophy} alt="..." />
                    </figure>
                  </div>
                </div>
              </div> */}
              <div className="myTestRatingDiv">
                <p className="myVetTestHead">
                  My Vet Skills and Write Testimonials
                </p>
                <div>
                  <Tabs>
                    <div className="tabListAddBtnDiv">
                      <div className="tabListPartDiv">
                        <TabList>
                          {skillData &&
                            skillData?.map((ele, index) => {
                              return (
                                <Tab
                                  key={index}
                                  onClick={() => HandleSkill(ele?._id)}
                                >
                                  {ele?.skill}
                                </Tab>
                              );
                            })}
                        </TabList>
                      </div>
                      <button className="addSkillsTabBtn" onClick={handleClick}>
                        <span>Add Ratings</span>
                      </button>
                    </div>
                    <div className="tabPanelPartDiv">
                      {skillData &&
                        skillData?.map((ele, index) => {
                          return (
                            <TabPanel key={index}>
                              {particularSkillData && (
                                <div id="rating">
                                  <div className="rateJavaHeadDiv">
                                    <p className="rateJavaHead">
                                      {AvgRating?.skillname} Skill Vetted Score
                                    </p>
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
                                        <h2>
                                          {Math.round(AvgRating?.avgRating)}
                                        </h2>
                                        <p>out of</p>
                                        <h3>5.00</h3>
                                      </div>
                                    </div>
                                    <div className="col-xl-9 col-lg-9 col-md-8 col-12">
                                      {particularSkillData ? (
                                        <p className="totalFiveText">
                                          Total {particularSkillData?.length}{" "}
                                          reviews given
                                        </p>
                                      ) : (
                                        <p className="totalFiveText">
                                          Total 0 reviews given
                                        </p>
                                      )}

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
                                        <span className="amount">
                                          {Math.round(AvgRating?.avgRating) == 5
                                            ? 1
                                            : 0}
                                        </span>
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
                                        <span className="amount">
                                          {Math.round(AvgRating?.avgRating) == 4
                                            ? 1
                                            : 0}
                                        </span>
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
                                        <span className="amount">
                                          {Math.round(AvgRating?.avgRating) == 3
                                            ? 1
                                            : 0}
                                        </span>
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
                                        <span className="amount">
                                          {Math.round(AvgRating?.avgRating) == 2
                                            ? 1
                                            : 0}
                                        </span>
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
                                        <span className="amount">
                                          {Math.round(AvgRating?.avgRating) == 1
                                            ? 1
                                            : 0}
                                        </span>
                                      </div>
                                    </div>
                                    {particularSkillData?.map((ele) => {
                                      return (
                                        <div className="comment_section">
                                          <div className="comment_left">
                                            <div className="comment_person">
                                              {ele?.image ? (
                                                <img
                                                  className="img-fluid"
                                                  src={ele?.image}
                                                  alt="pic"
                                                />
                                              ) : (
                                                <img
                                                  className="img-fluid"
                                                  src="http://52.66.120.170:4049/uploads/imageUploads/530060.com-4811117"
                                                  alt="pic"
                                                />
                                              )}
                                            </div>
                                          </div>
                                          <div className="comment_right">
                                            <div className="comment_top">
                                              <div className="comment_top_left">
                                                <h5>{ele?.reviewedBy}</h5>
                                                <div className="star">
                                                  {Rating(
                                                    Math.round(ele?.rating)
                                                  )}
                                                </div>
                                              </div>
                                              {/* <div className="comment_top_right">
                                                <p>5 months ago</p>
                                              </div> */}
                                            </div>
                                            <div className="person_description">
                                              <p>{ele?.review}</p>
                                            </div>
                                            <div className="comment_icon">
                                              <button className="cmntLinkBtn">
                                                <i class="fa-brands fa-linkedin"></i>
                                              </button>
                                              <img
                                                className="img-fluid"
                                                src={Img12}
                                                alt="icon"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}

                                    <div className="rating_btn">
                                      <button className="review_btn">
                                        Show More Reviews
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </TabPanel>
                          );
                        })}
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="jourChampDiv">
                {/* <figure className="jourEliteCardFig">
                  <img src={eliteCard} alt="..." />
                </figure> */}
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
                        <p className="cardNumbText">
                          {profileData?.goldClubNo}
                        </p>
                        <p className="sanjNameText">
                          {profileData?.firstName} {profileData?.lastName}
                        </p>
                      </div>
                      {/* <p className="goldSmClub">Gold Club</p> */}
                      <figure className="goldIcoFigDiv">
                        <img src={goldIcon} alt="..." />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="mycarddiv">
                  {/* {userData?.userType === "Admin" ? (
                    <div className="tyEvMainDiv" onClick={openModalOne}>
                      <span className="tyEvIcon">
                        <i class="fa-solid fa-plus"></i>
                      </span>
                      <p className="tyEvText">Badge Name</p>
                    </div>
                  ) : (
                    ""
                  )} */}
                  <p className="tyEvText">Badge Name</p>
                  <div className="champMainDivParent">
                    {badgeData?.length > 0 ? (
                      badgeData?.map((item, ind) => {
                        return (
                          <div
                            className="champMainDiv"
                            style={{ backgroundColor: "#EDF0FF" }}
                          >
                            <div className="champFigTextDiv">
                              <figure className="champFig">
                                <img src={user_image_2} alt="..." />
                              </figure>
                              <div>
                                <span className="champHead">{item?.badgeName}</span>
                                <span className="champDate">17 Jan</span>
                              </div>
                            </div>

                            <div className="champFigTextDiv">
                              <figure className="champFig2">
                                <img src={item?.image} alt="..." />
                              </figure>
                              <p className="chmpThisText">{item?.desc}</p>
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
                                <span
                                  className="chmpMsgSpan"
                                  onClick={(e) => handlePost(e, item)}
                                >
                                  Post
                                </span>
                              </div>
                              {/* <div className="svCoShBtnDiv">
                                <figure className="svMsgFig">
                                  <img src={chmpMsgPic} alt="..." />
                                </figure>
                                <span className="chmpMsgSpan">Share</span>
                              </div> */}

                              <RWebShare
                                data={{
                                  text: `${item?.badgeName}`,
                                  // url: `${item?.link}`,
                                  title: "Share badge",
                                }}
                                // onClick={() =>
                                //   console.log("shared successfully!")
                                // }
                                sites={[
                                  "linkedin",
                                  "facebook",
                                  "twitter",
                                  "whatsapp",
                                  "mail",
                                  "copy",
                                ]}

                                // onClick={() => console.log("shared successfully!")}
                                onClick={(platform) => {
                                  if (platform === "copy") {
                                    // Copy to clipboard logic
                                    const textToCopy = `${item?.badgeName}`;
                                    navigator.clipboard.writeText(textToCopy).then(() => {
                                      console.log("Text copied to clipboard:", textToCopy);
                                      // You can also show a notification or toast here
                                      toast.success("Text copied to clipboard!");
                                    });
                                  } else {
                                    // Handle other platforms
                                    console.log("Shared successfully on", platform);
                                  }
                                }}
                              >
                                <div className="svCoShBtnDiv">
                                  <img
                                    src={chmpMsgPic}
                                    alt="..."
                                    className="chmpMsgSpan"
                                  />
                                  <span className="chmpMsgSpan">Share</span>
                                </div>
                              </RWebShare>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p>No badge is added</p>
                    )}

                  </div>
                </div>
                {/* <div className="champMainDivParent">
                  <div
                    className="champMainDiv"
                    style={{ backgroundColor: "#EDF0FF" }}
                  >
                    <div className="champFigTextDiv">
                      <figure className="champFig">
                        <img src={user_image_2} alt="..." />
                      </figure>
                      <div>
                        <span className="champHead">
                          Champion Learner Badge
                        </span>
                        <span className="champDate">17 Jan</span>
                      </div>
                    </div>
                    <div className="champFigTextDiv">
                      <figure className="champFig2">
                        <img src={empMnthPic} alt="..." />
                      </figure>
                      <p className="chmpThisText">
                        This is to certify that Mark Anderson has achieved
                        Champion Learner Badge for SAP HANA Certification by
                        Fractalz Learning Centre dated 17 Jan 2023
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
                        <span className="champHead">
                          Champion Learner Badge
                        </span>
                        <span className="champDate">17 Jan</span>
                      </div>
                    </div>
                    <div className="champFigTextDiv">
                      <figure className="champFig2">
                        <img src={empMnthPic} alt="..." />
                      </figure>
                      <p className="chmpThisText">
                        This is to certify that Mark Anderson has achieved
                        Champion Learner Badge for SAP HANA Certification by
                        Fractalz Learning Centre dated 17 Jan 2023
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
                        <span className="champHead">
                          Champion Learner Badge
                        </span>
                        <span className="champDate">17 Jan</span>
                      </div>
                    </div>
                    <div className="champFigTextDiv">
                      <figure className="champFig2">
                        <img src={empMnthPic} alt="..." />
                      </figure>
                      <p className="chmpThisText">
                        This is to certify that Mark Anderson has achieved
                        Champion Learner Badge for SAP HANA Certification by
                        Fractalz Learning Centre dated 17 Jan 2023
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
                <div className="mentConnecDivWrap">
                  <ProMentConnetion />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {skillmodalrating && (
        <AddSkillcomment
          HandleSkill={HandleSkill}
          SkillId={skillId}
          closemodal={setSkillmodalrating}
        />
      )}
    </>
  );
}

export default Profilerating;
