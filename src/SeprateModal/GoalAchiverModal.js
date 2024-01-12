import React, { useState, useEffect } from "react";
import { useAuthCtx } from "../context/AuthCtx";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { ApiHelperFunction, fileUpload } from "../services/api/apiHelpers";
import { useDispatch, useSelector } from "react-redux";
import { getBillBoardData } from "../redux/slices/billBoardSlice";
import { getSustainable } from "../redux/slices/sustainableSlice";
import { getEmployeeData } from "../redux/slices/employeeSlice";
import ProfileImg1 from "../Images/No-Image-Placeholder.png";
// import AlartIcon1 from "../../Images/awyaicon1.png";
// import AlartIcon2 from "../../Images/awyaicon2.png";
import AlartIcon1 from "../Images/awyaicon1.png";
import AlartIcon2 from "../Images/awyaicon2.png";

const GoalAchiverModal = ({ closemodal, activity, initialValues }) => {
  const { setLoading, loading, getUserDetails, userData } = useAuthCtx();
  const [imageURL, setImageURL] = useState("");
  const dispatch = useDispatch();
  const [localerror, setlocalerror] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [shouldValidateOnChange, setShouldValidateOnChange] = useState(false);
  const [shouldValidateOnBlur, setShouldValidateOnBlur] = useState(false);

  const employeeData = useSelector((state) => state?.sustainableSlice?.data);
  const submitHandler = async (e, selectedSubscription) => {
    e.preventDefault();
    setShouldValidateOnChange(true);
    setShouldValidateOnBlur(true);
    console.log("handleSubmit", values);

    let data = {};
    setLoading(true);
    if (
      // values.eventName == "" ||
      // values.hostedBy == "" ||
      // values.eventDate == "" ||
      // values.eventstarttime == "" ||
      // values.eventendtime == "" ||
      // values.notes == ""

      values.nameofInitiative == "" ||
      values.desc == "" ||
      values.duration == "" ||
      values.contact == "" ||
      values.rewardPoints == ""

    ) {
      return toast.error("All fields required");
    }
    data = {

      // eventName: values?.eventName,
      // hostedBy: values?.hostedBy,
      // eventDate: values?.eventDate,
      // eventstarttime: values?.eventstarttime,
      // eventendtime: values?.eventendtime,
      // addNotes: values?.notes,
      // image: imageURL,

      nameofInitiative: values?.nameofInitiative,
      desc: values?.desc,
      duration: values?.duration,
      contact: values?.contact,
      rewardPoints: values?.rewardPoints,
    };

    console.log("kkkkkkk", data);
    const res = await ApiHelperFunction({
      urlPath: "/add-Sustainable",
      method: "POST",
      data,
    });
    if (res?.status) {
      toast.success(res?.data?.message);
      resetForm();
      dispatch(getSustainable());
      closemodal();
    } else {
      toast.error(res?.message || "Something went wrong");
      console.log("ERROR CREATING USER3", res);
    }
    setLoading(false);
  };

  const addSustainable = async (id) => {
    const response = await ApiHelperFunction({
      urlPath: `/set-in-sustainable-employees/${id}`,
      method: "PUT",
    });
    console.log("Employye_hall_message", response);

    if (response.status === 200) {
      dispatch(getSustainable());
      dispatch(getEmployeeData());
    } else {
      toast.error(response?.response?.data?.message);
    }
  };

  const schemaCheck = Yup.object(
    activity === "billBoard" ||
      activity === "events" ||
      activity === "kababMenu" ||
      activity === "editEvent"
      ? {
        eventName: Yup.string().required("Event Name is required"),
        hostedBy: Yup.string().required("Host name is required"),
        eventDate: Yup.string().required("Event date is required"),
        eventstarttime: Yup.string().required("start Time is required"),
        eventendtime: Yup.string().required(" End Time is required"),
        notes: Yup.string().required(" Notes is required"),
        addinvites: Yup.string().required(" Addinvites is required"),
        lattitude: Yup.string().required(" lattitude is required"),
        longitude: Yup.string().required(" longitude is required"),

        // nameofInitiative: Yup.string().required(" Name of Initiative is required"),
        // desc: Yup.string().required(" Description is required"),
        // duration: Yup.string().required(" Duration is required"),
        // contact: Yup.string().required(" Contact is required"),
        // rewardPoints: Yup.string().required(" Reward Points is required"),
      }
      : activity === "training" || activity === "editTraining"
        ? {
          name: Yup.string().required("Event Name is required"),
          trainingDate: Yup.string().required("Training date is required"),
        }


        : activity === "goalAchiver" || activity === "editGoalAchiver"
          ? {
            nameofInitiative: Yup.string().required(" Name of Initiative is required"),
            desc: Yup.string().required(" Description is required"),
            duration: Yup.string().required(" Duration is required"),
            contact: Yup.string().required(" Contact is required"),
            rewardPoints: Yup.string().required(" Reward Points is required"),
          }


          : activity === "jobReffered"
            ? {
              name: Yup.string().required("Job Name is required"),
              location: Yup.string().required("Job location is required"),
              salary: Yup.string().required("Salary range is required"),
              description: Yup.string().required("Description range is required"),
              opening: Yup.string().required("Opening is required"),
            }
            : ""
  );

  const handleImageChange = async (e) => {
    let image = e.target.files[0];
    setUploading(true);

    const form = new FormData();
    form.append("image", image);

    let res = await fileUpload("/image-upload", "POST", form);

    if (res.status) {
      toast.success("Image uploaded successfully");
      setImageURL(res?.image);
    } else {
      toast.error("Error uploading image");
    }
    setUploading(false);
  };

  const { values, errors, handleBlur, handleSubmit, resetForm, handleChange } =
    useFormik({
      initialValues,
      validationSchema: schemaCheck,
      validateOnChange: shouldValidateOnChange,
      validateOnBlur: shouldValidateOnBlur,
      onSubmit: (val) => {
        console.log("val", val);
      },
    });

  return (
    <div className="createmodal_main">
      <div className="create_modal">
        <div className="Create_overlay"></div>

        <div className="create_modal_content">
          <div className="close_icon" onClick={() => closemodal()}>
            <p className="emplModHead">Sustainable Initiative</p>
            <i
              class="fa-solid fa-xmark"
              style={{ color: "red", fontSize: "24px", cursor: "pointer" }}
            ></i>
          </div>

          <div
            className="frm_own"
            style={{ width: "100%", height: "100%", padding: "10px 20px" }}
          >
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name of Sustainable Initiative</label>
                <input
                  type="text"
                  placeholder="Enter Sustainable Initiative name"
                  className="form-control"
                  id="nameofInitiative"
                  aria-describedby="emailHelp"
                  value={values?.nameofInitiative}
                  name="nameofInitiative"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Description</label>
                <input
                  type="text"
                  placeholder="Enter Description"
                  className="form-control"
                  id="desc"
                  aria-describedby="emailHelp"
                  value={values?.desc}
                  name="desc"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Duration</label>
                <input
                  type="number"
                  placeholder="Enter Duration"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={values?.duration}
                  name="duration"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Mobile No.</label>
                <input
                  type="number"
                  placeholder="Enter Contact number"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={values?.contact}
                  name="contact"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Reward Points</label>
                <input
                  type="number"
                  placeholder="Enter Rewards Points"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={values?.rewardPoints}
                  name="rewardPoints"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" onClick={submitHandler} className="btn homePgCreModSubmitBtn" style={{ margin: '0 auto', display: 'table' }}>
                Submit
              </button>
            </form>

            {/* {employeeData.length > 0 ? (
                searching ? (
                  <p>Searching.....</p>
                ) : (
                  employeeData?.map((item, index) => {
                    return (
                      <ul className="empListModUl">
                        <li className="empListModLi">
                          <figure className="evModalFig">
                           
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
                          </figure>
                          <div className="empCryDiv">
                            <div>
                              <p className="empNmModal">
                              
                                {`${item?.firstName} ${item?.lastName}`}
                              </p>
                              <p className="creModText">Manager</p>
                            </div>
                            <div className="crypoFigDiv">
                              <figure className="crypoFig">
                               
                                {userData?.userType === "Admin" ? (
                                  item?.isSustainable ? (
                                    <img
                                      src={AlartIcon1}
                                      style={{ cursor: "pointer" }}
                                      className="img-fluid"
                                      alt="icon"
                                      onClick={() =>
                                        addSustainable(item?._id)
                                      }
                                    />
                                  ) : (
                                    <img
                                      src={AlartIcon2}
                                      style={{ cursor: "pointer" }}
                                      className="img-fluid"
                                      alt="icon"
                                      onClick={() =>
                                        addSustainable(item?._id)
                                      }
                                    />
                                  )
                                ) : (
                                  ""
                                )}
                              </figure>
                              <button className="chatEmpModBtn">
                                <i class="fa-regular fa-comment-dots"></i>
                              </button>
                              <div className="showAct"></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    );
                  })
                )
              ) : (
                ""
                
              )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalAchiverModal;
