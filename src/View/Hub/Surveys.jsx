import React, { useEffect, useState } from "react";
import GrowWel from "./GrowWel";
import markImg from "../../Images/markImg.png";
import ShareThoughts from "../../Component/ShareThoughts";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OnboardingExp from "./OnboardingExp";
import "react-accessible-accordion/dist/fancy-example.css";
import battery from "../../Images/battery.png";
import trophy from "../../Images/trophy.png";
import mrkInPic1 from "../../Images/mrkInPic1.png";
import ImportantLinks from "./ImportantLinks";
import MyMentor from "./MyMentor";
import MentConnection from "./MentConnection";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-hot-toast";
import { useAuthCtx } from "../../context/AuthCtx";
import OnsurveysExp from "./onsurveysExp";
import suveyIcon from "../../Images/Icons/PNG/Survey.png";
import { Rating } from "react-simple-star-rating";
import goldIcon from "../../Images/Icons/PNG/Reward - Gold.png";
import eliteExp from "../../Images/Icons/PNG/Elite employee experience logo.png";

function Surveys() {
 
  const percentage = 68;
  const [checkListDay, setCheckListDay] = useState([]);
  const [tabId, setTabId] = useState("");
  const [checkList, setCheckList] = useState([]);
  const [task, setTask] = useState([]);
  const [newChecklistData, setNewChecklistData] = useState([]);
  const [linkId, setLinkId] = useState(0);
  const [viewProgressBarData, setProgressBarData] = useState({});
  const [status, setStatus] = useState("");
  const [questionInputs, setQuestionInputs] = useState({});
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

  const { userData,setLoading } = useAuthCtx();

  useEffect(() => {
    ViewProgressBar();
    getGoldCard();
  }, []);

  const ViewProgressBar = async () => {
    const res = await ApiHelperFunction({
      urlPath: `/view-progress-bar-status`,
      method: "GET",
    });
    if (res && res?.status) {
      setProgressBarData(res?.data?.data[0]);
    } else {
      toast.error(res?.message || "Something went wrong");
    }
  };


  const handleRating = async (rate, index, id) => {
    // setRating(rate);
    let data = {
      surveyID: id,
      rating: rate,
    };
    // console.log("rate",data)
    // return false
    let response = await ApiHelperFunction({
      urlPath: `/add-survey-ratings`,
      method: "POST",
      data,
    });
    console.log("SERVEY RATING");
    // console.log("click", response);
    if (response && response.status === 200) {
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.response?.data?.message);
    }
    // let newArr = [...survey];
    // newArr[index].rating = rate;
    // setSurvey(newArr);
  };

  const handleSubmitQuestion = async (id,index) => {
    if(questionInputs===""){
    return toast.error("All fields are required");
    }
    // console.log("ooooop", checklistDayID)
    let data = {
      surveyId: id,
      // question: question,
      question: questionInputs[index],
    };
    console.log("questiondata",data)
    // return false
    let response = await ApiHelperFunction({
      urlPath: `/add-question`,
      method: "POST",
      data,
    });
    console.log("click", response);
    if (response && response.status === 200) {
      toast.success(response?.data?.message);
      // setQuestion("");
      setQuestionInputs({});
    } else {
      // console.log(response,"ioprty")
      // toast.error(response?.response?.data?.message);
    }
  }


  // fetch checklist days
  const fetchCheckDay = async () => {
    let response = await ApiHelperFunction({
      urlPath: "/view-current-survey-Name",
      method: "GET",
    });
    console.log("ressdd", response);
    if (response && response.status === 200) {
      // console.log("response?.data?.data?.[0]?._id", response?.data?.data);
      setCheckListDay(response?.data?.data);
      let senddata = response?.data?.data;
      fetchCheckList(response?.data?.data?.[0]?._id, senddata);
    } else {
      toast.error(response?.data?.message);
    }
  };

  const fetchCheckList = async (tabId, senddata) => {
    let data = {
      surveyNameId: tabId,
    };

    let response = await ApiHelperFunction({
      urlPath: `/get-survey`,
      method: "POST",
      data,
    });

    if (response && response.status === 200) {
      setCheckList(response?.data?.data1);
      setStatus(response?.data?.data2);
      // console.log(response?.data.data1, "datawe");
      let Arr = [];
      senddata.forEach((element) => {
        const data = element.status;
        let myIndex = response?.data?.data1?.findIndex(
          (it) => it.surveyNameId == element?._id
        );
        // console.log("myIndex", myIndex);
        if (response?.data?.data1[myIndex]?.surveyNameId === element?._id) {
          if (response.data.data2.surveyStatus === "completed") {
            element.status = "completed";
          } else if (response?.data.data2.surveyStatus === "notStarted") {
            element.status = "notStarted";
          } else {
            if (response.data.data2.surveyStatus === "ongoing" || response.data.data2 === "")
              element.status = "ongoing";
            else {
              element.status = "process";
            }
          }
          Arr.push(element);
          console.log("arr push", Arr);
          setCheckListDay(Arr);
        } else {
          element.status = element.status;

          Arr.push(element);
          setCheckListDay(Arr);
        }
      });

      setCheckListDay(Arr);
    } else {
      toast.error(response?.response?.data?.message);
    }
  };

  //task
  const fetchTask = async () => {
    let response = await ApiHelperFunction({
      urlPath: `/view-section-wise-task/6516810fcc090d283efa331b`,
      // urlPath: `/view-section-wise-task/${id}`,
      method: "GET",
    });

    if (response && response.status === 200) {
      // console.log(response?.data, "responseeeeeeeeeee");
      setTask(response?.data?.data);
    } else {
      toast.error(response?.data?.message);
    }
  };

  useEffect(() => {
    fetchCheckDay();
    fetchTask();
  }, []);

  console.log(status, "statttt");
  return (
    <section className="hubNetWorkingSection">
      <div className="headFirstPart">
        <div className="custContain">
          <GrowWel />
        </div>
      </div>
      <div className="networkSecPart">
        <div className="custContain">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="ntrkLeftStartDiv">
                <div className="leftNtrkDiv">
                  <figure className="mrkHubFig">
                    <img src={userData?.image} alt="..." />
                  </figure>
                  <div className="empDegNetworkId">
                    <p className="mrkHbHead">{`${userData?.firstName} ${userData.lastName}`}</p>
                    <div className="mrkNmBtnDiv">
                      <span className="mrkHbName">{userData?.designation}</span>
                      {/* <button className="mrkPenBtn">
                        <i class="fa-solid fa-pen"></i>
                      </button> */}
                    </div>
                    {/* <p className="mrkHubEmpText">
                      Employee id: <span>1234</span>
                    </p> */}
                  </div>
                </div>
                <div className="rightNtrkDiv">
                  <ShareThoughts />
                </div>
              </div>
              <div className="ntrkLeftSectDiv">
                {/* <div className="ntrkLSInnerDiv">
                  <p className="perComText">% Complete</p>
                  <div className="perNumCirDiv">
                    <p className="perNumHead">
                      {task?.[linkId]?.completeTaskInPercentage}
                      <span>%</span>
                    </p>
                    <div className="perCirBarDiv">
                      <CircularProgressbar
                        value={task?.[linkId]?.completeTaskInPercentage}
                      />
                    </div>
                  </div>
                </div>
                <div className="ntrkLSInnerDiv">
                  <p className="perComText">Critical Pending Task</p>
                  <div className="perNumCirDiv">
                    <p className="perNumHead">
                      {task?.[linkId]?.pendingTaskInPercentage}
                    </p>
                    <figure className="batteFig">
                      <img src={battery} alt="..." />
                    </figure>
                  </div>
                </div>
                <div className="ntrkLSInnerDiv">
                  <p className="perComText">Total points Gained</p>
                  <div className="perNumCirDiv">
                    <p className="perNumHead">08</p>
                    <figure className="TropFig">
                      <img src={trophy} alt="..." />
                    </figure>
                  </div>
                </div> */}
              </div>
              <div className="joinChrtTabDiv">
                <Tabs className="joinChrtTab">
                  <TabList>
                    {checkListDay &&
                      checkListDay?.map((item, index) => {
                        console.log(item.status, "checkListDayyyyy");
                        return (
                          <Tab
                            onClick={() => {
                              fetchCheckList(item?._id, checkListDay);
                            }}
                          >
                            {item?.status && (
                              <div
                                className="comActDiv"
                                style={{ backgroundColor: "#02975A" }}
                              >
                                {item?.status}
                              </div>
                            )}

                            {item?.name}
                          </Tab>
                        );
                      })}
                  </TabList>

                  <div className="chlTabpanelDiv">
                    {checkListDay &&
                      checkListDay?.map((item, index) => {
                        // console.log(item, "itemmmmmmmmmmmmmme");
                        return (
                          <TabPanel key={index}>
                            <div className="checkListTableDiv">
                              <table className="checkListTable">
                                {/* <thead>
                                  <tr>
                                    <td className="chckLeftTd">
                                      <span>Checklist</span>
                                    </td>
                                    <td className="chckRightTd">
                                      <span>Action</span>
                                    </td>
                                    <td className="chckRightTd">
                                      <span>Progress</span>
                                    </td>
                                  </tr>
                                </thead> */}
                                <tbody>
                                  {checkList &&
                                    checkList?.map((item, index) => {
                                      console.log("checkListtttttt", item);
                                      // let newSur = item?.surveys?.map(
                                      //   (it, id) => {
                                      //     return {...it,rating:0};
                                      //     return { ...it };
                                      //   }
                                      // );
                                      // console.log("newSursdd", newSur);
                                      // setNewChecklistData(item?.servey)

                                      return (
                                        <tr key={index}>
                                          <td className="chckLeftTd">
                                            <div
                                              class="accordion myOwnChckListAccr"
                                              id={`myCheckListAccordion_${index}`} //--> Dynamically Change this id
                                            >
                                              <div class="card">
                                                <div
                                                  class="card-header"
                                                  id="headingOne"
                                                >
                                                  {/* <button
                                                    class="myOwnChckListAccrBtn"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target={`#collapseCheck1_${index}`} //--> This data-target value same 'collapse' class div's id value
                                                    aria-expanded="true"
                                                    aria-controls={`collapseCheck1_${index}`} //--> This aria-controls value same 'collapse' class div's id value
                                                  >
                                                    <span className="spanOne">
                                                      {item.survey}
                                                    </span>
                                                    <span className="spanTwo">
                                            2 videos
                                          </span>
                                                    <span className="spanThree">
                                                      {item?.duration}
                                                    </span>
                                                    <span className="spanFour">
                                                      <i class="fa-solid fa-angle-down"></i>
                                                    </span>
                                                  </button> */}
                                                  <div className="questionbrdr">
                                                    <div className="questionflx">
                                                      <span className="spanOne">
                                                        {item.survey}
                                                      </span>
                                                      <div className="" >
                                                        <Rating
                                                          // key={`${key}${index}`}
                                                          onClick={(rate) => {
                                                            handleRating(rate, index, item._id);
                                                          }}
                                                          initialValue={item?.ratings}
                                                          size={25}
                                                        />
                                                      </div>
                                                    </div>
                                                    <div className="textareasubmitflx">
                                                      <div className="textarediv">
                                                        <textarea placeholder="Text in this box"
                                                         rows="1" 
                                                         cols="50"
                                                         name={`question_${index}`} 
                                                         value={questionInputs[index] || ""}
                                                        //  value={question}
                                                        //  onChange={(e)=>setQuestion(e.target.value)}
                                                        onChange={(e) =>
                                                          setQuestionInputs({
                                                            ...questionInputs,
                                                            [index]: e.target.value,
                                                          })
                                                        }
                                                         ></textarea>
                                                      </div>
                                                      <button className="sbmtbtn" onClick={() => handleSubmitQuestion(item?._id,index)}>Submit</button>

                                                    </div>
                                                  </div>
                                                </div>

                                                <div
                                                  id={`collapseCheck1_${index}`} //--> Also, dynamically this div id
                                                  class="collapse"
                                                  aria-labelledby="headingOne"
                                                  data-parent={`#myCheckListAccordion_${index}`} //--> This date-parent value is same as main 'accordion' div id
                                                >
                                                  {/* <div class="card-body">
                                                    <OnsurveysExp
                                                      servey={newSur}
                                                    />
                                                  </div> */}
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          {/* <td className="chckRightTd">
                                            <button className="clsListChatBtn">
                                              <i class="fa-regular fa-comment-dots"></i>
                                            </button>
                                          </td> */}
                                          {/* <td className="chckRightTd">
                                            <div class="progress myChckListProgress">
                                              <div
                                                class="progress-bar"
                                                role="progressbar"
                                                style={{
                                                  width: `${item.mainSurveyPercent}%`,
                                                }}
                                                aria-valuenow={item.progressPercentage}
                                                aria-valuemin="0"
                                                aria-valuemax="10"
                                              ></div>
                                            </div>
                                          </td> */}
                                        </tr>
                                      );
                                    })}
                                </tbody>
                              </table>
                            </div>
                          </TabPanel>
                        );
                      })}
                    {/* <TabPanel></TabPanel>
                  <TabPanel>Panel 3</TabPanel>
                  <TabPanel>Panel 4</TabPanel>
                  <TabPanel>Panel 5</TabPanel>
                  <TabPanel>Panel 6</TabPanel>
                  <TabPanel>Panel 7</TabPanel>
                  <TabPanel>Panel 8</TabPanel>
                  <TabPanel>Panel 9</TabPanel>
                  <TabPanel>Panel 10</TabPanel>
                  <TabPanel>Panel 11</TabPanel> */}
                  </div>
                </Tabs>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              {/* <div
                className="mrkMiddleInnerDivs"
                style={{ backgroundColor: "#02975A" }}
              >
                <div className="midMrkMainInDiv">
                  <div className="midMrhHeadDiv">
                    <p className="middleMrkHeads">Voice and Surveys</p>
                    <div className="midleLogoHeadDiv">
                      <figure className="onboardIconFig">
                        <img src={suveyIcon} alt="..." />
                      </figure>
                    </div>
                  </div>
                  <div class="progress myMrkProgress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: viewProgressBarData?.percentageRating }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  {viewProgressBarData?.surveyStatus === "ongoing" ? (
                    <p className="mrkMidProText">Progress</p>
                  ) : (
                    <p className="mrkMidProText">Completed</p>
                  )}

                  <div className="penFlagTextDiv">
                    <i class="fa-solid fa-flag"></i>
                    <span>
                      {viewProgressBarData &&
                      viewProgressBarData?.surveyStatus == "ongoing"
                        ? "Pending Action"
                        : "Completed Action"}
                    </span>
                  </div>
                </div>
                <figure className="mrkMidInnBackFig">
                  <img src={mrkInPic1} alt="..." />
                </figure>
              </div> */}

<div className="eliteFigDiv" style={{ marginBottom: "25px" }}>
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
        
              <ImportantLinks linkChange={(id) => setLinkId(id)} />
              <MyMentor />
              {/* <MentConnection /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Surveys;
