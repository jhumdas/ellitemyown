import React, { useEffect, useState } from "react";
import "./Profile.css";
import AspiringHobby from "./AspiringHobby";
import HubAffinityGrp from "../Hub/HubAffinityGrp";
import ProSocialCommit from "./ProSocialCommit";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import camera from "../../Images/camera.png";
import battery from "../../Images/battery.png";
import trophy from "../../Images/trophy.png";
import Img11 from "../../Images/comment_person_1.png";
// import Img12 from "../../Images/table_icon.png";
import Img12 from "../../Images/Icons/PNG/Share.png";
import Img13 from "../../Images/comment_person_2.png";
import Img14 from "../../Images/table_icon.png";
import Image4 from "../../Images/companylogo.png";
import eliteCard from "../../Images/eliteCard.png";
import chmpMsgPic from "../../Images/chmpMsgPic.png";
import user_image_2 from "../../Images/user_image_2.png";
import empMnthPic from "../../Images/empMnthPic.png";
import profileCvrPic from "../../Images/profileCvrPic.png";
import ProMentConnetion from "./ProMentConnetion";
import RateSkills from "./RateSkills";
import { useAuthCtx } from "../../context/AuthCtx";
import { ApiHelperFunction, fileUpload } from "../../services/api/apiHelpers";
import { toast } from "react-hot-toast";
import AddSkill from "../../Component/Modal/AddSkill";
import ProfilePageModal from "../../Component/Modal/ProfilePageModal";
import { getBadgeData } from "../../redux/slices/badgeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RWebShare } from "react-web-share";
import table_icon from "../../Images/table_icon.png";
import { addPosts, getAllPosts } from "../../redux/slices/postSlice";
import profileImg from "../../Images/Icons/PNG/Profile (2).png";
import goldIcon from "../../Images/Icons/PNG/Reward - Gold.png";
import eliteExp from "../../Images/Icons/PNG/Elite employee experience logo.png";
import Skills from "../../Images/Icons/PNG/Skills.png";

import { Link, useLocation } from "react-router-dom";
import CreateModal from "../../Layout/Modal/CreateModal";

function Profile() {
  const { modalN, setModalN } = useAuthCtx();
  const { userData, getUserDetails } = useAuthCtx();
  const [skillData, setSkillData] = useState([]);
  const [particularSkillData, setParticularSkillData] = useState([]);
  const [profileImage, setProfileImage] = useState("");
  const [AvgRating, setAvgRating] = useState("");
  // console.log("Particular Skill", particularSkillData);
  const [skillmodal, setSkillmodal] = useState(false);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [goldCard, setGoldCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imgLoading, setimgLoading] = useState(false);
  const [profileData, setProfileData] = useState({});
  const location = useLocation();

  const badgeData = useSelector((state) => state?.badgeSlice?.badge);

  console.log(userData, "userDaaklb")

  const [post, setPost] = useState({
    description: "",
    image: [],
  });

  const initialValues = {
    badgeID: "",
    image: "",
    desc: "",
    employeeID: ""
  };

  useEffect(() => {
    window.scroll(0, 0);
    ViewAllSkill();
    HandleSkill(skillData[0]?._id);
    getGoldCard();

  }, []);

  useEffect(() => {
    HandleSkill(skillData[0]?._id);
  }, [skillData]);

  useEffect(() => {
    dispatch(getBadgeData());
  }, []);

  const Rating = (val) => {
    console.log("VALA", val);
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
      // toast.error(response?.message);
    }
    setLoading(false);
  };

  const HandleSkill = async (id) => {
    let data = {
      id: id,
    };
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

  // const SkillRating = async(ele) => {
  //   let data =
  //     {
  //       "id":ele?._id
  //     }

  //   let response= await ApiHelperFunction({ urlPath:"view-skill-rating", method:"POST" , data})
  //   if(response && response?.status){
  //     console.log("RESDSDSDfsdfgsdf", response);
  //   }else{
  //       toast.error('Error fetching skill rating data')
  //   }
  // }

  const handleClick = () => {
    setSkillmodal(!skillmodal);
  };

  const ViewAllSkill = async () => {
    let response = await ApiHelperFunction({
      urlPath: "/view-skill",
      method: "GET",
    });
    if (response?.status) {
      console.log("RESDSDSD", response);
      setSkillData(response?.data?.data);
    } else {
      // toast.error("Error fetching skill data");
    }
  };

  // const handleChange = async (e) => {
  //   let file = e.target.files[0];
  //   const data = new FormData();
  //   setProfileImage(URL.createObjectURL(file));
  //   data.append("image", file);

  //   let res = await fileUpload("update-cover-image", "PUT", data);

  //   if (res.status) {
  //     // setImageUrl(res?.image);
  //     ProfileUpdate(res?.coverImage, "coverImage");
  //   } else {
  //     toast.error("Error uploading image");
  //   }
  //   // setUploading(false);
  // };

  // const handleChange = async (e) => {
  //   let file = e.target.files[0];
  //   const data = new FormData();
  //   data.append("image", file);

  //   let res = await fileUpload("/image-upload", "POST", data);

  //   if (res.status) {
  //     // setImageUrl(res?.image);
  //     ProfileUpdate(res?.image, "profileImage");
  //   } else {
  //     toast.error("Error uploading image");
  //   }
  //   // setUploading(false);
  // };

  const handleChange = async (e) => {
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

  const ProfileUpdate = async (coverImage, image, val) => {
    let data;
    if (val === "coverImage") {
      let data2 = {
        coverImage: coverImage,
      };
      let response2 = await ApiHelperFunction({
        urlPath: "/update-cover-image",
        method: "PUT",
        data2,
      });

      console.log(data2, "responkdhjli");

      if (response2?.status) {
        toast.success("Cover picture updated successfully");
        getUserDetails();
      } else {
        // toast.error("Error fetching data");
      }
    } else {
      data = {
        image: image,
      };
    }
    console.log("DATAGHJDHAJKS", data);
    let response = await ApiHelperFunction({
      urlPath: "/update-profile",
      method: "PUT",
      data,
    });
    if (response?.status) {
      toast.success("Profile Picture updated successfully");
      getUserDetails();
    } else {
      // toast.error("Error fetching data");
    }
  };

  const [modalA, setModalA] = useState(false);

  function openModalOne() {
    setModalA(true);
  }

  const handlePost = async (e, item) => {
    let data = {
      description: item?.badgeName,
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

  console.log(userData, "userDataoopit");
  return (
    <>
      <section className="profilePageSection">
        <div className="profileCvrPicDiv">
          <figure className="profileBackFigure">
            {userData?.coverImage && (
              <img src={userData?.coverImage} alt="..." />
            )}
          </figure>
          <div>
            <p className="proCvrTagLine">Your Tag Line</p>
            {userData?.userType === "Admin" ? (
              <div className="proEditFigText">
                <input
                  type="file"
                  className="proEditFigInp"
                  onChange={handleChange}
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
                  <div className="mrkInpFigDiv">
                    {/* <figure className="mrkCamFig">
                      
                      <i class="fa-regular fa-pen-to-square"></i>
                    </figure>
                    <input
                      type="file"
                      className="mrkInpFigFile"
                      onChange={handleProfile}
                    /> */}
                    {/* {userData?.userType === "Admin" ? ( */}
                    <Link
                      className="dropdown-item"
                      style={{ cursor: "pointer" }}
                      onClick={() => setModal(true)}
                    >
                      {/* <i className="fa-solid fa-user mr-2"></i> */}
                      <figure className="mrkCamFig">
                        {/* <img src={camera} alt="..." /> */}
                        <i class="fa-regular fa-pen-to-square"></i>
                      </figure>
                    </Link>
                    {/* ) : (
                      <></>
                    )} */}
                  </div>

                  {/* <div className="proEditFigInnerText">
                    <figure className="proEditCamFig">
                      <img src={camera} alt="..." />
                    </figure>
                    <span className="proEditText">Edit your cover picture</span>
                  </div> */}
                </div>
                <div className="empDegId">
                  <p className="mrkHbHead">{`${userData?.firstName} ${userData.lastName}`}</p>
                  <div className="mrkNmBtnDiv">
                    <span className="mrkHbName">{userData?.designation}</span>
                    {/* <button className="mrkPenBtn">
                    <i class="fa-solid fa-pen"></i>
                  </button> */}
                  </div>
                </div>
              </div>
              <div className="hobbyPersoDiv">
                {/* <div className="tyEvMainDiv" onClick={() => setModalN(true)}>
                  <span className="tyEvIcon">
                    <i class="fa-solid fa-plus"></i>
                  </span>
                  <p className="tyEvText">
                    Add Hobbies and Personal Information
                  </p>
                </div> */}
                <AspiringHobby hobbyDatas={userData?.hobbies} />
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
              <RateSkills />
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
                <div className="myVegsDiv">
                  <figure className="myVetFig">
                    <img src={Skills} alt="..." />
                  </figure>
                  <p className="myVetTestHead">
                    My Vet Skills and Write Testimonials
                  </p>
                </div>
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
                        <span>Add Skills for Review</span>
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
                                                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
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
                                              <div className="comment_top_right">
                                                <p>5 months ago</p>
                                              </div>
                                              <div className="comment_icon cmnticnk">
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
                                            <div className="person_description">
                                              <p>{ele?.review}</p>
                                            </div>
                                            {/* <div className="comment_icon">
                                              <button className="cmntLinkBtn">
                                                <i class="fa-brands fa-linkedin"></i>
                                              </button>
                                              <img
                                                className="img-fluid"
                                                src={Img12}
                                                alt="icon"
                                              />
                                            </div> */}
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

                      {/* <TabPanel>
                      <div id="rating">
                        <h4>Reviews</h4>
                        <div className="row">
                          <div className="col-xl-3 col-lg-3 col-md-12 col-12">
                            <div className="rating_text">
                              <h2>4.7</h2>
                              <p>out of</p>
                              <h3>5.00</h3>
                            </div>
                          </div>
                          <div className="col-xl-9 col-lg-9 col-md-12 col-12">
                            <p className="totalFiveText">
                              Total 5,569 reviews given
                            </p>
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
                                <img
                                  className="img-fluid"
                                  src={Img11}
                                  alt="pic"
                                />
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
                                  Last month we designed Testerz.io web platform
                                  where Amazon sellers can get better reviews
                                  for their products. Sellers can post their
                                  products, people can order them for free, test
                                  them and add their reviews. We’ve been part of
                                  the project time.
                                </p>
                              </div>
                              <div className="comment_icon">
                                <img
                                  className="img-fluid"
                                  src={Img12}
                                  alt="icon"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="comment_section">
                            <div className="comment_left">
                              <div className="comment_person">
                                <img
                                  className="img-fluid"
                                  src={Img13}
                                  alt="pic"
                                />
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
                                  Last month we designed Testerz.io web platform
                                  where Amazon sellers can get better reviews
                                  for their products. Sellers can post their
                                  products, people can order them for free, test
                                  them and add their reviews. We’ve been part of
                                  the project time.
                                </p>
                              </div>
                              <div className="comment_icon">
                                <img
                                  className="img-fluid"
                                  src={Img14}
                                  alt="icon"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="rating_btn">
                            <button className="review_btn">
                              Show More Reviews
                            </button>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div id="rating">
                        <h4>Reviews</h4>
                        <div className="row">
                          <div className="col-xl-3 col-lg-3 col-md-12 col-12">
                            <div className="rating_text">
                              <h2>4.7</h2>
                              <p>out of</p>
                              <h3>5.00</h3>
                            </div>
                          </div>
                          <div className="col-xl-9 col-lg-9 col-md-12 col-12">
                            <p className="totalFiveText">
                              Total 5,569 reviews given
                            </p>
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
                                <img
                                  className="img-fluid"
                                  src={Img11}
                                  alt="pic"
                                />
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
                                  Last month we designed Testerz.io web platform
                                  where Amazon sellers can get better reviews
                                  for their products. Sellers can post their
                                  products, people can order them for free, test
                                  them and add their reviews. We’ve been part of
                                  the project time.
                                </p>
                              </div>
                              <div className="comment_icon">
                                <img
                                  className="img-fluid"
                                  src={Img12}
                                  alt="icon"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="comment_section">
                            <div className="comment_left">
                              <div className="comment_person">
                                <img
                                  className="img-fluid"
                                  src={Img13}
                                  alt="pic"
                                />
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
                                  Last month we designed Testerz.io web platform
                                  where Amazon sellers can get better reviews
                                  for their products. Sellers can post their
                                  products, people can order them for free, test
                                  them and add their reviews. We’ve been part of
                                  the project time.
                                </p>
                              </div>
                              <div className="comment_icon">
                                <img
                                  className="img-fluid"
                                  src={Img14}
                                  alt="icon"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="rating_btn">
                            <button className="review_btn">
                              Show More Reviews
                            </button>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div id="rating">
                        <h4>Reviews</h4>
                        <div className="row">
                          <div className="col-xl-3 col-lg-3 col-md-12 col-12">
                            <div className="rating_text">
                              <h2>4.7</h2>
                              <p>out of</p>
                              <h3>5.00</h3>
                            </div>
                          </div>
                          <div className="col-xl-9 col-lg-9 col-md-12 col-12">
                            <p className="totalFiveText">
                              Total 5,569 reviews given
                            </p>
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
                                <img
                                  className="img-fluid"
                                  src={Img11}
                                  alt="pic"
                                />
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
                                  Last month we designed Testerz.io web platform
                                  where Amazon sellers can get better reviews
                                  for their products. Sellers can post their
                                  products, people can order them for free, test
                                  them and add their reviews. We’ve been part of
                                  the project time.
                                </p>
                              </div>
                              <div className="comment_icon">
                                <img
                                  className="img-fluid"
                                  src={Img12}
                                  alt="icon"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="comment_section">
                            <div className="comment_left">
                              <div className="comment_person">
                                <img
                                  className="img-fluid"
                                  src={Img13}
                                  alt="pic"
                                />
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
                                  Last month we designed Testerz.io web platform
                                  where Amazon sellers can get better reviews
                                  for their products. Sellers can post their
                                  products, people can order them for free, test
                                  them and add their reviews. We’ve been part of
                                  the project time.
                                </p>
                              </div>
                              <div className="comment_icon">
                                <img
                                  className="img-fluid"
                                  src={Img14}
                                  alt="icon"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="rating_btn">
                            <button className="review_btn">
                              Show More Reviews
                            </button>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <h2>Any content 2</h2>
                    </TabPanel> */}
                    </div>
                  </Tabs>
                </div>
              </div>
              {/* <div className="myJourDiv">
              <p className="myVetTestHead">My Journey so far</p>
              <div className="myJourTabListDiv">
                <Tabs>
                  <TabList>
                    <Tab>MY SKILLS</Tab>
                    <Tab>MY EXPERIENCE</Tab>
                    <Tab>ACADEMICS</Tab>
                    <Tab>CERTIFICATES</Tab>
                    <Tab>AWARDS</Tab>
                  </TabList>

                  <div className="myJourneyListDiv">
                    <TabPanel>
                      <div className="skills">
                        <div className="expAddInfoDiv">
                          <p className="jourExpText">Experience</p>
                          <button className="jourAddInfoBtn">Add Info</button>
                        </div>
                        <div className="founder-ceo">
                          <div className="founder-lft">
                            <img src={Image4} alt="loog" />
                          </div>
                          <div className="founder-rgt">
                            <p className="foundCeoHead">Founder &amp; CEO</p>
                            <p className="fractFullText">
                              FRACTALZ LAB - FULL-TIME
                            </p>
                            <p className="jourDecText">
                              Dec 2023 - Present - 2 yrs 2 mon
                              <br />
                              Kolkata, West Bengal, india
                            </p>
                            <div>
                              <span className="jourDescription">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Sapiente incidunt quibusdam
                                qui, et fugiat, suscipit voluptas quod, sunt
                                praesentium ratione non sint? Molestias aliquid
                                ullam beatae ut exercitationem ipsa vero
                                tempore!.
                              </span>
                              <span className="jourSeeMore">See more</span>
                            </div>
                          </div>
                        </div>
                        <div className="founder-ceo">
                          <div className="founder-lft">
                            <img src={Image4} alt="loog" />
                          </div>
                          <div className="founder-rgt">
                            <p className="foundCeoHead">Founder &amp; CEO</p>
                            <p className="fractFullText">
                              FRACTALZ LAB - FULL-TIME
                            </p>
                            <p className="jourDecText">
                              Dec 2023 - Present - 2 yrs 2 mon
                              <br />
                              Kolkata, West Bengal, india
                            </p>
                            <div>
                              <span className="jourDescription">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Sapiente incidunt quibusdam
                                qui, et fugiat, suscipit voluptas quod, sunt
                                praesentium ratione non sint? Molestias aliquid
                                ullam beatae ut exercitationem ipsa vero
                                tempore!.
                              </span>
                              <span className="jourSeeMore">See more</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                      <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                      <h2>Any content 4</h2>
                    </TabPanel>
                    <TabPanel>
                      <h2>Any content 5</h2>
                    </TabPanel>
                  </div>
                </Tabs>
              </div>
            </div> */}
            </div>
            <div className="col-xl-3">
              <div className="jourChampDiv">
                {/* <figure className="jourEliteCardFig">
                  <img src={eliteCard} alt="..." />
                </figure> */}

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
                    <figure className="goldIcoFigDiv">
                      <img src={goldIcon} alt="..." />
                    </figure>
                  </div>
                </div>

                <div className="mycarddiv">
                  {/* <div className="tyEvMainDiv" onClick={openModalOne}>
                    <span className="tyEvIcon">
                      <i class="fa-solid fa-plus"></i>
                    </span>
                    <p className="tyEvText">Badge Name</p>
                  </div> */}

                  {userData?.userType === "Admin" ? (
                    <div className="tyEvMainDiv" onClick={openModalOne}>
                      <span className="tyEvIcon">
                        <i class="fa-solid fa-plus"></i>
                      </span>
                      <p className="tyEvText">Badge Name</p>
                    </div>
                  ) : (
                    ""
                  )}

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
                    {/* <div
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
                    <div className="tyEvMainDiv" onClick={openModalOne}>
                      <span className="tyEvIcon">
                        <i class="fa-solid fa-plus"></i>
                      </span>
                      <p className="tyEvText">Event Name</p>
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
                        <span className="chmpMsgSpan">Post</span>
                      </div>
                      <div className="svCoShBtnDiv">
                        <figure className="svMsgFig">
                          <img src={chmpMsgPic} alt="..." />
                        </figure>
                        <span className="chmpMsgSpan">Share</span>
                      </div>
                    </div>
                  </div> */}

                    {/* <div
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
                    <div className="tyEvMainDiv" onClick={openModalOne}>
                      <span className="tyEvIcon">
                        <i class="fa-solid fa-plus"></i>
                      </span>
                      <p className="tyEvText">Event Name</p>
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
                        <span className="chmpMsgSpan">Post</span>
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
                    <div className="tyEvMainDiv" onClick={openModalOne}>
                      <span className="tyEvIcon">
                        <i class="fa-solid fa-plus"></i>
                      </span>
                      <p className="tyEvText">Badge Name</p>
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
                        <span className="chmpMsgSpan">Post</span>
                      </div>
                      <div className="svCoShBtnDiv">
                        <figure className="svMsgFig">
                          <img src={chmpMsgPic} alt="..." />
                        </figure>
                        <span className="chmpMsgSpan">Share</span>
                      </div>
                    </div>
                  </div> */}
                  </div>
                </div>
                {/* <div className="mentConnecDivWrap">
                <ProMentConnetion />
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {modal && <CreateModal closemodal={() => setModal(false)} />}
      {skillmodal && (
        <AddSkill closemodal={setSkillmodal} ViewAllSkill={ViewAllSkill} />
      )}

      {modalA && (
        <ProfilePageModal
          closemodal={setModalA}
          activity={"badge"}
          initialValues={initialValues}
        />
      )}
    </>
  );
}

export default Profile;
