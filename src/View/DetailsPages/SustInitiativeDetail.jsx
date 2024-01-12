import React, { useEffect, useState } from "react";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { useAuthCtx } from "../../context/AuthCtx";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import CreateModal from "../../Component/Modal/CreateModal";
import { getEmployeeData } from "../../redux/slices/employeeSlice";
import ProfileImg1 from "../../Images/No-Image-Placeholder.png";
import { getSustainable } from "../../redux/slices/sustainableSlice";
import { Link } from "react-router-dom";
import GoalAchiverModal from "../../SeprateModal/GoalAchiverModal";
const initialValues = {
  // eventName: "",
  // hostedBy: "",
  // eventDate: "",
  // name: "",
  // trainingDate: "",
  // editTrainingName: "",
  // editTraininDate: "",

  nameofInitiative: "",
  duration: "",
  desc: "",
  contact: "",
  rewardPoints: "",
};

function SustInitiativeDetail() {
  const [modala, setModala] = useState(false);
  const [modalB, setModalB] = useState(false);
  const [modalId] = useState("");
  const [BulletinBoardSingleData] = useState({});
  const { setLoading, userData } = useAuthCtx();

  const sustainable = useSelector((state) => state?.sustainableSlice?.data);

  console.log("sustainable", sustainable);
  const dispatch = useDispatch();

  const createModal = () => {
    setModala(true);
  };

  // const getAllGoals = async () => {
  //   setLoading(true);

  //   const response = await ApiHelperFunction({
  //     urlPath: "/view-sustainable-employees",
  //     method: "GET",
  //   });

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
    <section className="bulleDetail sustainableInitiateDetail">
      <div className="container">
        <div className="row">
          <div className="col">
            <section id="GoalAchiver">
              <div className="top">
                <div className="head" style={{display:"flex", alignItems:"center"}}>
                  <h4>Sustainable Initiative </h4>
                  <div className="" style={{ marginLeft: "15px" }}>
                    {userData?.userType === "Admin" ||
                      userData?.userType === "Manager" ? (
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
                </div>
                <div>
                  <Link to="/" className="backHomeBtn">
                    Back
                  </Link>
                </div>
              </div>
              <div className="bottomsustaldiv">


                {sustainable?.length > 0 ? (
                  sustainable?.map((item, index) => {
                    // console.log(item?.nameofInitiative, "itemkio");
                    return (
                      <div key={index} className="mainssutandiv">
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
                                src={ProfileImg1}
                                className="img-fluid"
                                alt="profile"
                              />
                            )}
                          </div>
                          <div className="details">
                            <h4>{item?.nameofInitiative}</h4>
                            <p>Contact : {item?.contact}</p>
                            <p>Duration: {item?.duration}</p>
                            <p>Reward Points : {item?.rewardPoints}</p>
                            <p>Description : {item?.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p>No sustainable initiative to show!</p>
                )}
              </div>
            </section>

            {modalB && (
              <CreateModal
                closemodal={setModalB}
                activity={"editGoalAchiver"}
                BulletinBoardSingleData={BulletinBoardSingleData}
                id={modalId}
                initialValues={BulletinBoardSingleData}
              />
            )}

            {/* {modala && (
        <CreateModal
          closemodal={setModala}
          activity={"goalAchiver"}
          initialValues={initialValues}
        />
      )} */}
            {modala && (
              <GoalAchiverModal
                closemodal={setModala}
                activity={"goalAchiver"}
                initialValues={initialValues}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SustInitiativeDetail;
