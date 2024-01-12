import React, { useState, useEffect } from "react";
import "./Modal2.css";
import { useAuthCtx } from "../../context/AuthCtx";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { ApiHelperFunction, fileUpload } from "../../services/api/apiHelpers";
import { useDispatch } from "react-redux";
import { getHallOfFame } from "../../redux/slices/hallOffameSlice";
import { SketchPicker } from 'react-color';


const HobbyModal = ({
  closemodal,
  activity,
  initialValues,
  hobbies,
  hobbyData,
  setHobbyData
}) => {
  const { setLoading, loading, getUserDetails, userData } = useAuthCtx();
  const [imageURL, setImageURL] = useState("");
  const dispatch = useDispatch();
  const [localerror, setlocalerror] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [shouldValidateOnChange, setShouldValidateOnChange] = useState(false);
  const [shouldValidateOnBlur, setShouldValidateOnBlur] = useState(false);
  const [empData, setempData] = useState([]);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);

  //   const [hobbyData, setHobbyData] = useState([]);
  // console.log("hobbyData", hobbies.hobbyDatas);
  console.log("hobbyDataqqer", hobbyData);

  const getHobby = () => {
    console.log("hobbyyo", hobbyData);
    setHobbyData(hobbies.hobbyDatas);
  };

  useEffect(() => {
    getHobby();
  }, [hobbies]);

  // console.log(empData, "empData");

  //   const getNameFromUserId = (selectedUserId) => {
  //     const selectedEmployee = empData.find(
  //       (employee) => employee._id === selectedUserId
  //     );
  //     return selectedEmployee ? selectedEmployee.userName : "";
  //   };

  const submitHandler = async (e, selectedSubscription) => {
    e.preventDefault();
    setShouldValidateOnChange(true);
    setShouldValidateOnBlur(true);
    console.log("handleSubmit", values);

    let data = {};
    setLoading(true);
    if (values.hobbies == "") {
      return toast.error("All fields required");
    }
    if (values.hobbyBackColor == "") {
      return toast.error("All fields required");
    }
    data = {
      hobbies: values?.hobbies,
      hobbyBackColor:values?.hobbyBackColor
    };
    console.log("click_training", data);
    const res = await ApiHelperFunction({
      urlPath: "/add-hobbies",
      method: "POST",
      data,
    });
    if (res?.status) {
      toast.success("Hobby added successfully");
      resetForm();
      getHobby();
      //   dispatch(getHallOfFame());
      closemodal();
    } else {
      toast.error(res?.message || "Something went wrong");
      console.log("ERROR CREATING USER3", res);
    }
    setLoading(false);
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
        }
      : activity === "training" || activity === "editTraining"
      ? {
          name: Yup.string().required("Event Name is required"),
          trainingDate: Yup.string().required("Training date is required"),
          link: Yup.string().required("Training link is required"),
        }
      : activity === "halloffame" || activity === "edithalloffame"
      ? {
          // name: Yup.string().required("name is required"),
          reason: Yup.string().required("Reason is required"),
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

  //   const getEmployeeData = async () => {
  //     const response = await ApiHelperFunction({
  //       urlPath: `/view-all-employees`,
  //       method: "GET",
  //     });
  //     console.log("RESPONSEF", response?.data?.data);
  //     if (response && response.status) {
  //       setempData(response?.data?.data);
  //     } else {
  //       // toast.error(response.error);
  //     }
  //   };

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

  //   useEffect(() => {
  //     getEmployeeData();
  //   }, []);

  return (
    <section className="hallOfFrmeModal">
      <div className="hallOfFrameInner">
        <p className="newBulleBrodHead">Hobbies and Personal Information</p>
        <button className="bulleBrodCloseBtn" onClick={() => closemodal()}>
          <i class="fa-solid fa-xmark"></i>
        </button>
        <form
          onSubmit={(e) => {
            setShouldValidateOnBlur(true);
            setShouldValidateOnChange(true);
            handleSubmit(e);
          }}
        >
          {/* <div className="emplListDiv">
            <p className="empListSubHead">Employees Name</p>
            <select
              class="empListSelect"
              aria-label="Select Employee name"
              name="hobbies"
              value={values.hobbies}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value={""} disabled>
                Select Employee
              </option>
              {empData?.map((item, i) => (
                <option key={i} value={item?._id}>
                  {item?.userName}
                </option>
              ))}
            </select>
          </div> */}

          <div className="mb-3">
            <input
              id="hobbies"
              className="empListTextArea"
              placeholder="Hobbies"
              value={values.hobbies}
              name="hobbies"
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
          <label htmlFor="hobbyBackColor" className="form-label">
            Hobby Background Color
          </label>
          <div>
            <input
              id="hobbyBackColor"
              className="form-control"
              placeholder="Hobby Background Color"
              value={values.hobbyBackColor}
              name="hobbyBackColor"
              onClick={() => setColorPickerVisible(!colorPickerVisible)}
            />
            {colorPickerVisible && (
              <SketchPicker
                color={values.hobbyBackColor}
                onChange={(color) => {
                  handleChange({ target: { name: 'hobbyBackColor', value: color.hex } });
                }}
              />
            )}
          </div>
        </div>


          <div className="homePgCreModSubmitDiv">
            <button
              className="homePgCreModSubmitBtn"
              type="button"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HobbyModal;
