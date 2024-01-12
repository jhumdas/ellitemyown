import React, { useEffect, useMemo, useState } from "react";
import { ApiHelperFunction } from "../services/api/apiHelpers";
import { useAuthCtx } from "../context/AuthCtx";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import CreateModal from "./Modal/CreateModal";
import { getEmployeeData } from "../redux/slices/employeeSlice";
import ProfileImg1 from "../Images/No-Image-Placeholder.png";
import { getSustainable } from "../redux/slices/sustainableSlice";
import AlartIcon1 from "../Images/awyaicon1.png";
import { Link } from "react-router-dom";
import GoalAchiverModal from "../SeprateModal/GoalAchiverModal";
import user_image_2 from "../Images/user_image_2.png";

// const initialValues = {
//   eventName: "",
//   hostedBy: "",
//   eventDate: "",
//   name: "",
//   trainingDate: "",
//   editTrainingName: "",
//   editTraininDate: "",
// };

function GoalAchiver() {
  // const [modala, setModala] = useState(false);
  // const [modalB, setModalB] = useState(false);
  const [modalId, setModalId] = useState("");
  const [BulletinBoardSingleData, setBulletinBoardSingleData] = useState({});
  const { setLoading, userData, modalD,
    setModalD, } = useAuthCtx();
  const [searching, setSearching] = useState(false);

  const sustainable = useSelector((state) => state?.sustainableSlice?.data);

  console.log("sustainable", sustainable);
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state?.employeeSlice?.employee);

  const createModal = () => {
    setModalD(true);
  };

  // const getAllGoals = async () => {
  //   setLoading(true);

  //   const response = await ApiHelperFunction({
  //     urlPath: "/view-sustainable-employees",
  //     method: "GET",
  //   });

  //   // console.log("response", response?.data);

  //   if (response.status === 200) {
  //     console.log("data get successfully");
  //   } else {
  //     toast.error(response.error);
  //   }
  //   setLoading(false);
  // };

  useEffect(() => {
    // getAllGoals();
    // dispatch(getEmployeeData());
    dispatch(getSustainable());
  }, []);

  return (
    <>
      <section id="GoalAchiver">
        <div className="top">
          <div className="head">
            <h4>Sustainable Initiative </h4>
          </div>
          <div className="">
          {userData?.userType === "Admin" || userData?.userType === "Manager" ? (
            <div className="tyEvMainDiv" onClick={createModal}>
              <span className="tyEvIcon">
                <i class="fa-solid fa-plus"></i>
              </span>
              {/* <p className="tyEvText">Add Sustainable Initiative</p> */}
            </div>
          ) : (
            ""
          )}
          </div>
          <div>
            <Link to="/sustInitiativeDetail" className="seeAllAn">
              See All
            </Link>
          </div>
          {/* {userData?.userType === "Admin" ||
          userData?.userType === "Manager" ? (
            <div className="add_btn">
              <button type="" className="btn" onClick={createModal}>
                Add
              </button>
            </div>
          ) : (
            ""
          )} */}
        </div>
        <div className="bottom">
          {userData?.userType === "Admin" || userData?.userType === "Manager" ? (
            <div className="tyEvMainDiv" onClick={createModal}>
              {/* <span className="tyEvIcon">
                <i class="fa-solid fa-plus"></i>
              </span> */}
              {/* <p className="tyEvText">Add Sustainable Initiative</p> */}
            </div>
          ) : (
            ""
          )}
          {/* <div className="main">
            <button type="" className="add_img_btn">
              <i className="fa-solid fa-plus"></i>
              <input
                type="file"
                className="form-control"
                id=""
                aria-describedby=""
                placeholder=""
              />
            </button>

            <div className="typename form-group m-0">
              <input
                type="text"
                className="form-control"
                id=""
                aria-describedby="textHelp"
                placeholder="Type name"
              />
            </div>
          </div> */}

          {sustainable?.length > 0 ? (
            sustainable?.map((item, index) => {
              return (
                <div key={index} className="main">
                  <div className="left">
                    <div className="profile">
                      {item?.image ? (
                        <img
                          src={item?.image}
                          className="img-fluid"
                          alt="profile"
                        />
                      ) : (
                        <img
                          // src={ProfileImg1}
                          src={user_image_2}
                          className="img-fluid"
                          alt="profile"
                        />
                      )}
                    </div>
                    <div className="details">
                      <h4>{item?.nameofInitiative}</h4>
                      <p>Contact:{item?.contact}</p>
                    </div>
                  </div>
                  {/* <div className="activestatus">
            <img src={AlartIcon1} className="btn" alt="icon" />
          </div> */}
                </div>
              );
            })
          ) : (
            <p>No sustainable initiative to show!</p>
          )}
        </div>
      </section>





    </>
  );
}

export default GoalAchiver;
