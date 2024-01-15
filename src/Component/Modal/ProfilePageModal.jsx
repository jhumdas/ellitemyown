import React, { useState, useEffect } from "react";
import "./Modal2.css";
import { useDispatch } from "react-redux";
import { ApiHelperFunction, fileUpload } from "../../services/api/apiHelpers";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import { useAuthCtx } from "../../context/AuthCtx";
import { getBadgeData } from "../../redux/slices/badgeSlice";

function ProfilePageModal({ closemodal, activity, initialValues }) {
  const { setLoading, loading, getUserDetails, userData } = useAuthCtx();
  const [imageURL, setImageURL] = useState("");
  const dispatch = useDispatch();
  const [localerror, setlocalerror] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [shouldValidateOnChange, setShouldValidateOnChange] = useState(false);
  const [shouldValidateOnBlur, setShouldValidateOnBlur] = useState(false);
  const [badgeName, setBadgeName] = useState([]);
  const [empData, setempData] = useState([]);


  const getBadgeNameData = async () => {
    const response = await ApiHelperFunction({
      urlPath: `/view-all-badge`,
      method: "GET",
    });
    console.log("RESPONSEFgb", response?.data?.data);
    if (response && response.status) {
      setBadgeName(response?.data?.data);
    } else {
      // toast.error(response.error);
    }
  };

  console.log("njkvnfjn", badgeName)

  const getEmployeeData = async () => {
    const response = await ApiHelperFunction({
      urlPath: `/view-all-employees`,
      method: "GET",
    });
    console.log("RESPONSEF", response?.data?.data);
    if (response && response.status) {
      setempData(response?.data?.data);
    } else {
      // toast.error(response.error);
    }
  };

  useEffect(() => {
    getBadgeNameData();
    getEmployeeData();
  }, [])


  // const getNameFromUserId = (selectedUserId) => {
  //   const selectedEmployee = empData.find(
  //     (employee) => employee._id === selectedUserId
  //   );
  //   return selectedEmployee ? selectedEmployee.userName : "";
  // };

  // console.log("pppmmmkkk", badgeName);

  const submitHandler = async (e, selectedSubscription) => {
    e.preventDefault();
    setShouldValidateOnChange(true);
    setShouldValidateOnBlur(true);

    let data = {};
    setLoading(true);
    if (values.badgeID == "" || values.desc == "" || values?.employeeID == "") {
      return toast.error("All fields required");
    }

    data = {
      badgeID: values?.badgeID,
      desc: values?.desc,
      employeeID: values?.employeeID,
      image: imageURL,
    };

    const res = await ApiHelperFunction({
      urlPath: "/add-badge",
      method: "POST",
      data,
    });

    if (res?.status) {
      console.log(res, "responser");
      toast.success(res?.data?.message);
      resetForm();
      dispatch(getBadgeData());
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
        }
        : activity === "badge" || activity === "editBadge"
          ? {
            name: Yup.string().required("Event Name is required"),
            desc: Yup.string().required("Description is required"),
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
    <section className="hallOfFrmeModal">
      <div className="hallOfFrameInner">
        <p className="newBulleBrodHead">Badge Details</p>
        <button className="bulleBrodCloseBtn" onClick={() => closemodal()}>
          <i class="fa-solid fa-xmark"></i>
        </button>
        {/* <div className="mb-3 mt-3">
          <p className="empListSubHead">Badge Name</p>
          <input
            type="text"
            className="empListSelect"
            placeholder="Badge Name"
            value={values?.name}
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div> */}

        <div className="emplListDiv">
          <p className="empListSubHead">Badge Name</p>
          <select
            class="empListSelect"
            aria-label="Select Badge name"
            name="badgeID"
            value={values.badgeID}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            <option value={""} disabled>
              Select BadgeName
            </option>
            {badgeName?.map((item, i) => (
              <option key={i} value={item?._id}>
                {item?.badgename}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <textarea
            id=""
            cols=""
            rows="8"
            className="empListTextArea"
            placeholder="Description"
            value={values?.desc}
            name="desc"
            onBlur={handleBlur}
            onChange={handleChange}
          >
            Description
          </textarea>
        </div>

        <div className="emplListDiv">
          <p className="empListSubHead">Employee Name</p>
          <select
            class="empListSelect"
            aria-label="Select Employee name"
            name="employeeID"
            value={values.employeeID}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            <option value={""} disabled>
              Select Employee
            </option>
            {empData?.map((item, i) => (
              <option key={i} value={item?._id}>
                {`${item?.userName} - ${item?.employeeid}`}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <p className="empListSubHead">Badge Image</p>
          {/* <input type="file" className="empListSelect" /> */}

          <div className="homePgModInnerInpDivs">
            <input
              type="file"
              id="hostedBy"
              placeholder="Choose a photo"
              value={image}
              accept="image/*"
              name="hostedBy"
              onBlur={handleBlur}
              onChange={handleImageChange}
            />
            <small id="emailHelp" style={{ color: "red" }}>
              {errors?.image}
            </small>
            {uploading ? <p>image uploading......</p> : null}
            {imageURL !== "" && (
              <div style={{ display: "flex" }}>
                <img
                  style={{ marginTop: "1rem" }}
                  src={imageURL}
                  alt=""
                  height="100rem"
                  width="100rem"
                />
                <div
                  onClick={() => {
                    setImageURL("");
                    setImage("");
                  }}
                >
                  <i
                    class="fa-solid fa-xmark"
                    style={{
                      color: "red",
                      fontSize: "2rem",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
              </div>
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
      </div>
    </section>
  );
}

export default ProfilePageModal;
