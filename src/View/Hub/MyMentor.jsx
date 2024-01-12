import React, { useEffect, useState } from "react";
import myMentPic1 from "../../Images/No-Image-Placeholder.png";
import myMentPic2 from "../../Images/myMentPic2.png";
import myMentPic3 from "../../Images/myMentPic3.png";
import Mentor_new from "../../Images/Icons/PNG/Mentor_new.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { useAuthCtx } from "../../context/AuthCtx";
import MyMentorModal from "../../Component/Modal/MyMentorModal";


const initialValues = {
  userID: "",
  description: ""
}

function MyMentor() {
  const { userData } = useAuthCtx();
  const [mentor, setMentor] = useState([]);
  const [modalMentor, seModalMentor] = useState(false);
  const navigate = useNavigate();


  // fetch mentor
  const fetchMentor = async () => {
    let response = await ApiHelperFunction({
      urlPath: "/view-mentor",
      method: "GET",
    });
    if (response && response.status === 200) {
      setMentor(response?.data?.data.reverse());
    } else {
      toast.error(response?.data?.message);
    }
  };

  const AnotherProfile = async (userID) => {
    
    if (userID == userData?._id) {
      // console.log(userID,userData,"uikodc")
      navigate("/profile");
    } else {
      let response = await ApiHelperFunction({ urlPath: `/get-others-profile/${userID}`, method: "GET" })
      if (response && response?.status) {
        console.log("RESPONSE", response?.data?.data);
        let data = response?.data?.data;
        response && navigate("/Profile_rating", {
          state: {
            data
          }
        })
      } else {
        // toast.error('Error to fetching another profile data')
      }
    }
  }

  useEffect(() => {
    fetchMentor();
  }, []);

  return (
    <>
      <div className="myMentorDiv">
        <div className="myMentBtnDiv">
          <div className="bulleBoardHead">
            <figure className="bulleBoardFig">
              <img src={Mentor_new} alt="..." />
            </figure>
            {
              userData?.userType === "Admin" ? (<p className="myMentPara">Mentor</p>) : (<p className="myMentPara">My Mentor</p>)
            }

          </div>
          {/* {
          userData?.userType==="Admin"?(<button className="mentAddBtn" onClick={() => seModalMentor(true)}>Add</button>):(<></>)
        } */}

        </div>
        <ul className="myMentorUl">
          {mentor?.map((item, index) => {
            return (
              <li className="myMentorLi">
                <Link className="myMentorLiAn" onClick={() => AnotherProfile(item?.userID)}>
                  <figure className="myMentFig">
                  <img src={item?.userImage} alt="..." />
                </figure>

                  {/* <figure className="mrkHubFig">
                    {userData?.image === "image" ? (
                      <img src={myMentPic1} alt="..." />
                    ) : (
                      <img src={userData?.image} alt="..." />
                    )}
                  </figure> */}
                  <div>
                    <p className="mentorName" onClick={() => AnotherProfile(item?.userID)}>
                      {item?.userfirstName}
                      {item?.userlastNAme}
                    </p>
                    <p className="mentorDesignation">{item?.designation}</p>
                  </div>
                </Link>
              </li>
            );
          })}
          {/* <li className="myMentorLi">
          <Link className="myMentorLiAn">
            <figure className="myMentFig">
              <img src={myMentPic2} alt="..." />
            </figure>
            <div>
              <p className="mentorName">Lorem Ipsum</p>
              <p className="mentorDesignation">Ux /Ui design</p>
            </div>
          </Link>
        </li>
        <li className="myMentorLi">
          <Link className="myMentorLiAn">
            <figure className="myMentFig">
              <img src={myMentPic3} alt="..." />
            </figure>
            <div>
              <p className="mentorName">Lorem Ipsum</p>
              <p className="mentorDesignation">Ux /Ui design</p>
            </div>
          </Link>
        </li> */}
        </ul>
      </div>
      {
        modalMentor && (
          <MyMentorModal
            closemodal={seModalMentor}
            activity={"mymentor"}
            initialValues={initialValues}
          />
        )
      }
    </>

  );
}

export default MyMentor;
