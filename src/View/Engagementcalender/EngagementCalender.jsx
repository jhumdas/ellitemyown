import React, { useState, useEffect } from "react";
import markImg from "../../Images/markImg.png";
import { Link, useParams } from "react-router-dom";
import InputImg from "../../Images/input_icon.png";
import EliteCardicon from "../../Images/elitecardicon.png";
import bi_calendarevent from "../../Images/bi_calendarevent.png";
import NewYear from "../../Images/new_year.png";
import table_icon from "../../Images/table_icon.png";
import world_day from "../../Images/world_day.png";
import earth_day from "../../Images/earth_day.png";
import eventimg1 from "../../Images/eventimg1.png";
import bgprfldiv from "../../Images/bgprfldiv.png";
import prfl from "../../Images/Ellipse _8.png"
// import eventimg2 from "../../Images/eventimg2.png";
import "../Engagementcalender/Mycalender.css";
import EngagementeventCard from "../../Component/EngagementeventCard";
import HighlightedEvents from "../../Component/HighlightedEvents";
import MysubscribedEvents from "../../Component/MysubscribedEvents";
import EngagementPlaceCard from "../../Component/EngagementPlacecard";
import ReactCalender from "../../Component/customComponent/ReactCalender";
import BigCalender from "../../Component/customComponent/BigCalender";
import Allapicall from "../../services/Allapicall";
import moment from "moment";
import { useAuthCtx } from "../../context/AuthCtx";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import goldIcon from "../../Images/Icons/PNG/Reward - Gold.png";
import eliteExp from "../../Images/Icons/PNG/Elite employee experience logo.png";
import SaraTylor from "../../Component/SaraTylor";
import ShareThoughts from "../../Component/ShareThoughts";
import { useDispatch, useSelector } from "react-redux";
import GrowWel from "../Hub/GrowWel";

function EngagementCalender() {
  const {
    BulletinBoardSingleData1,
    HallfameSingleData1,
    modala,
    modalD,
    setModalD,
    modalE,
    setModalE,
    modalK,
    setModalK,
    modalL,
    setModalL,
    modalM,
    setModalM,
    modalF,
    setModalF,
    modalG,
    setModalG,
    modalH,
    setModalH,
    modalI,
    employeeModal,
    setEmployeeModal,
    setModalI,
    modalJ,
    setModalJ,
    setModala,
    trainingData,
    setTrainingData,
    modalC,
    setModalC,
    modalO,
    setModalO,
    BulletinBoardSingleData,
  } = useAuthCtx();
  const postDataReducer = useSelector((state) => state.postGetSlice);
  const dispatch = useDispatch();
  const [postData, setPostData] = useState([]);
  const [modalB, setModalB] = useState(false);
  const [modalId, setModalId] = useState("");
  const [modalA, setModalA] = useState(false);
  const [changeShow, setChangeShow] = useState(false);
  const params = useParams();

  const [fetchcalenderdata, setfetchcalenderdata] = useState([]);
  const [question, setQuestion] = useState("");
  const { userData, setLoading } = useAuthCtx();
  const [singleData, setSingleData] = useState({});
  const navigate = useNavigate();
  console.log("UserDATA", singleData?.id);
  const [goldCard, setGoldCard] = useState([]);

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
      // toast.error(response.message);
    }
    setLoading(false);
  };


  const handleOptionClick = (index) => {
    setChangeShow(index === modalId);
  };


  const getAffinityPosts = async () => {
    const data = {
      affinityGroupId: params?.id,
      postType: "private",
    };
    setLoading(true);
    const response = await ApiHelperFunction({
      urlPath: `/view-all-post`,
      method: "POST",
      data,
    });
    console.log("responseddfftt", response);
    if (response.status === 200) {
      setPostData(response?.data?.data);
    } else {
    }
    setLoading(false);
  };

  useEffect(() => {
    getAffinityPosts();
  }, [params?.id]);

  useEffect(() => {
    setPostData(postDataReducer?.posts);
  }, [postDataReducer?.posts]);

  const HandleAgenda = () => {
    if (userData?.userType === "Admin") {
      navigate("/agendaModal");
    } else {
      toast.error("Only Admin can access");
    }
  };
  // function formatDate(year, month, day) {
  //   const date = new Date(year, month - 1, day);

  //   const formattedYear = date.getFullYear();
  //   const formattedMonth = (date.getMonth() + 1).toString().padStart(2, "0"); // Add 1 to month since it's 0-based.
  //   const formattedDay = date.getDate().toString().padStart(2, "0");

  //   const formattedDate = `${formattedYear}-${formattedMonth}-${formattedDay}`;

  //   return formattedDate;
  // }

  const fetchcalenderdatafunc = async () => {
    let res = await Allapicall.Allcalenderdata();

    console.log("res99", res);
    if (res && res.status) {
      const temparr = res?.data?.map((ele, id) => {
        console.log("yyrt", ele);
        return {
          id: ele?._id,
          title: ele?.eventName,
          // image: (
          //   <img
          //     style={{ height: "50px", width: "120px" }}
          //     src={ele?.image}
          //     alt=""
          //   />
          // ),
          notes: ele?.notes,
          image: ele?.image,
          start: moment(ele?.eventDate),
          end: moment(ele?.eventDate),
        };
      });

      if (temparr.length > 0) {
        setSingleData(temparr[0]);
      }
      setfetchcalenderdata(temparr);
    }
  };

  const handleQuestionClick = async () => {
    const data = {
      userQuestion: question,
    };
    setLoading(true);
    const response = await ApiHelperFunction({
      urlPath: `/add-hr-question`,
      method: "POST",
      data,
    });

    if (response.status === 200) {
      toast.success(response?.data?.data?.message);
      setQuestion('');
    } else {
      toast.error(response?.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchcalenderdatafunc();
    getGoldCard();
  }, []);


  return (
    <>
      <section className="engaghementmaindiv">
     
        <section id="usrclndr">
          <div className="headFirstPart">
          
            <GrowWel />
      
        </div>
          <div className="">
            <div className="custContain">
              <div className="row">
                <div className="col-xl-9 col-lg-9">
                  <div className="">
                    <div className="user_wrap">
                      {/* <div className="user_about">
                        <div className="user_image">
                          <img
                            className="img-fluid"
                            src={userData?.image}
                            alt="user"
                          />
                        </div>
                        <div className="prfl_all_txt" style={{ paddingTop: "10px" }}>
                          <h4>{`${userData?.firstName} ${userData.lastName}`}</h4>
                          <h5>{userData?.designation}</h5>

                        </div>
                      </div> */}
                      {/* <div className="user_about">
                          <div className="bg-userdtwht">
                      
                            <div className="bg-wht">

                            </div>
                          </div>
                      </div> */}
                      <div className="user_about">
                         <div className="bg-userdtwht" style={{ backgroundImage: `url(${bgprfldiv})` }}>
                            <div className="bg-txtppp">
                               <p className="bghhkpp">PLATINUM</p>
                               <p>Club</p>
                            </div>
                            <div className="prflimgbrdr">
                              <div className="prflimgfh">
                                <img src={prfl} alt="..." />
                              </div>

                            </div>
                            <div className="">
                              <p>Irine Adler</p>
                            </div>
                         </div>
                      </div>
                      <ShareThoughts getAffinityPosts={getAffinityPosts} />
                      {/* <div className="user_helpdesk">
                    <div className="top_desk">
                      <div className="desk_image">
                        <img
                          className="img-fluid"
                          src={userData?.image}
                          alt="user"
                        />
                      </div>
                      <span className="help_text">
                        <form className="form">
                          <input
                            type="text"
                            id="question"
                            name="question"
                            value={question}
                            onChange={(e)=>setQuestion(e.target.value)}
                            placeholder="Ask for help... let’s have great experience"
                          />
                        </form>
                      </span>
                    </div>
                    <div className="bottom_desk">
                      <div className="helps">
                        {userData?.userType === "Manager" ||
                        userData?.userType === "Admin" ? (
                          <></>
                        ) : (
                          <div className="ask_hr">
                            <span className="ask_image">
                              <img
                                className="img-fluid"
                                src={InputImg}
                                alt="icon"
                              />
                            </span>
                            <span className="ask_text">ASK HR</span>
                          </div>
                        )}
                        
                        <div className="event">
                          <span className="event_image">
                            <img
                              className="img-fluid"
                              src={bi_calendarevent}
                              alt="icon"
                            />
                          </span>
                          <span className="event_text">Initiate an Event</span>
                        </div>
                       
                        <button className="post_btn">Post</button>
                      </div>
                    </div>


                  </div> */}
                    </div>
                    {/* <div className="admin_calender"> */}


                      {/* <div className="calender_head"> */}
                      {/* <form className="form">
                      <input
                        type="text"
                        id=""
                        name=""
                        placeholder="Search Event"
                      />
                      <span className="search_icon">
                        <i className="fa-solid fa-magnifying-glass" />
                      </span>
                    </form> */}
                      {/* <div className="calender_date">
                      <span className="prev_icon">
                        <i className="fa-solid fa-chevron-left" />
                      </span>
                      <span className="month_name">APRIL 2023</span>
                      <span className="right_icon">
                        <i className="fa-solid fa-chevron-right" />
                      </span>
                    </div> */}
                    {/* </div> */}
                    {/* <div className="table-responsive">
                    <table className="table">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td className="day_name" scope="row">
                            SUN
                          </td>
                          <td className="day_name">MON</td>
                          <td className="day_name">TUE</td>
                          <td className="day_name">WED</td>
                          <td className="day_name">THU</td>
                          <td className="day_name">FRI</td>
                          <td className="day_name">
                            <div>SAT</div>
                            <div
                              className=""
                              style={{
                                fontSize: "16PX",
                                color: "#3030303",
                                fontWeight: "600",
                              }}
                            >
                              01
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row" className="day_name table_date">
                            01
                          </td>
                          <td scope="row" className="day_name table_date">
                            02
                          </td>
                          <td className="day_name table_date">
                            03
                            <div className="blue_box">
                              <h5>MS Excel Training</h5>
                              <h6>04:15 PM</h6>
                            </div>
                          </td>
                          <td className="day_name table_date">
                            04
                            <Link to="/">
                              <div className="blue_box">
                                <h5>Live Coaching... </h5>
                                <h6>04:15 PM</h6>
                              </div>
                            </Link>
                          </td>
                          <td className="day_name table_date">05</td>
                          <td className="day_name table_date">
                            06
                            <div className="yellow_box">
                              <h5>FIRE DRILL</h5>
                              <h6>04:15 PM</h6>
                            </div>
                          </td>
                          <td className="day_name table_date">07</td>
                          <td className="day_name table_date">08</td>
                        </tr>
                        <tr>
                          <td scope="row" className="day_name table_date">
                            09
                          </td>
                          <td colSpan className="day_name table_date">
                            10
                          </td>
                          <td className="day_name table_date">
                            11
                            <br />
                            <div className="white_box">
                              <span className="cell_image">
                                <img
                                  className="img-fluid"
                                  src={eventimg1}
                                  alt="img"
                                />
                              </span>
                              <span className="table_icon">
                                <img
                                  className="img-fluid"
                                  src={table_icon}
                                  alt="icon"
                                />
                              </span>
                              <h5>Cleaning Drive near Taj Mahal</h5>
                              <span className="fb_icon">
                                <i className="fa-brands fa-facebook-f" />
                              </span>
                              <span className="twitter_icon">
                                <i className="fa-brands fa-twitter" />
                              </span>
                              <span className="linkdin_icon">
                                <i className="fa-brands fa-linkedin-in" />
                              </span>
                            </div>
                          </td>
                          <td className="day_name table_date">
                            12
                            <div className="yellow_box">
                              <h5>CYBER SECURITY</h5>
                              <h6>07:15 PM</h6>
                            </div>
                          </td>
                          <td className="day_name table_date">13</td>
                          <td className="day_name table_date">
                            14
                            <div className="blue_box">
                              <h5>Live Coaching... </h5>
                              <h6>04:15 PM</h6>
                            </div>
                          </td>
                          <td className="day_name table_date">
                            15
                            <br />
                            <span className="cell_image">
                              <img
                                className="img-fluid"
                                src={NewYear}
                                alt="img"
                              />
                            </span>
                            <br />
                            <span className="table_icon">
                              <img
                                className="img-fluid"
                                src={table_icon}
                                alt="icon"
                              />
                            </span>
                            <span className="fb_icon">
                              <i className="fa-brands fa-facebook-f" />
                            </span>
                            <span className="twitter_icon">
                              <i className="fa-brands fa-twitter" />
                            </span>
                            <span className="linkdin_icon">
                              <i className="fa-brands fa-linkedin-in" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="day_name table_date">
                            16
                          </th>
                          <td colSpan className="day_name table_date">
                            17
                            <br />
                            <div className="green_box">
                              <p>Zero Plastic Usage week</p>
                            </div>
                          </td>
                          <td className="day_name table_date">
                            18
                            <br />
                            <div className="green_box">
                              <p>Zero Plastic Usage week</p>
                            </div>
                          </td>
                          <td className="day_name table_date">
                            19
                            <br />
                            <div className="green_box">
                              <p>Zero Plastic Usage week</p>
                            </div>
                          </td>
                          <td className="day_name table_date">
                            20
                            <br />
                            <div className="green_box">
                              <p>Zero Plastic Usage week</p>
                            </div>
                          </td>
                          <td className="day_name table_date">
                            21
                            <br />
                            <div className="green_box">
                              <p>Zero Plastic Usage week</p>
                            </div>
                          </td>
                          <td className="day_name table_date">
                            22
                            <br />
                            <div className="green_box">
                              <span className="cell_image">
                                <img
                                  className="img-fluid"
                                  src={earth_day}
                                  alt="img"
                                />
                              </span>
                              <br />
                              <span className="table_icon">
                                <img
                                  className="img-fluid"
                                  src={table_icon}
                                  alt="icon"
                                />
                              </span>
                              <span className="fb_icon">
                                <i className="fa-brands fa-facebook-f" />
                              </span>
                              <span className="twitter_icon">
                                <i className="fa-brands fa-twitter" />
                              </span>
                              <span className="linkdin_icon">
                                <i className="fa-brands fa-linkedin-in" />
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row" className="day_name table_date">
                            23
                          </td>
                          <td colSpan className="day_name table_date">
                            24
                          </td>
                          <td className="day_name table_date">25</td>
                          <td className="day_name table_date">
                            26
                            <div className="yellow_box">
                              <h5>DRIVING SAFETY</h5>
                              <h6>12:15 PM</h6>
                            </div>
                          </td>
                          <td className="day_name table_date">27</td>
                          <td className="day_name table_date">
                            28
                            <span className="cell_image">
                              <img
                                className="img-fluid"
                                src={world_day}
                                alt="img"
                              />
                            </span>
                            <br />
                            <span className="table_icon">
                              <img
                                className="img-fluid"
                                src={table_icon}
                                alt="icon"
                              />
                            </span>
                            <span className="fb_icon">
                              <i className="fa-brands fa-facebook-f" />
                            </span>
                            <span className="twitter_icon">
                              <i className="fa-brands fa-twitter" />
                            </span>
                            <span className="linkdin_icon">
                              <i className="fa-brands fa-linkedin-in" />
                            </span>
                          </td>
                          <td className="day_name table_date">29</td>
                        </tr>
                        <tr>
                          <td className="day_name table_date">30</td>
                          <td className="day_name table_date">31</td>
                          <td className="day_name table_date"></td>
                          <td className="day_name table_date"></td>
                          <td className="day_name table_date"></td>
                          <td className="day_name table_date"></td>
                          <td className="day_name table_date"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div> */}
                    {/* </div> */}
                    {/* <button
                      type="button"
                      class="mb-2 btn btn-primary"
                      onClick={HandleAgenda}
                    >
                      View Event
                    </button> */}
                    <BigCalender fetchcalenderdata={fetchcalenderdata} />
                  </div>
                </div>
                <div className="col-lg-3 col-xl-3">
                  <div className="user_right">
                    {/* <EngagementeventCard /> */}



                    <div className="eliteFigDiv" style={{ marginTop: "15px", marginBottom: "25px" }}>
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
                            <p className="cardNumbText">{goldCard?.goldClubNo}</p>
                            <p className="sanjNameText">
                              {goldCard?.firstName} {goldCard?.lastName}
                            </p>
                          </div>
                          {/* <p className="goldSmClub">Gold Club</p> */}
                          <figure className="goldIcoFigDiv">
                            <img src={goldIcon} alt="..." />
                          </figure>
                        </div>
                      </div>
                    </div>

                    <EngagementPlaceCard />
                    <HighlightedEvents />

                    <MysubscribedEvents />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </section>
    </>
  );
}

export default EngagementCalender;
