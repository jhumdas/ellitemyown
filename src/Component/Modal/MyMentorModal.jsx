import React, { useState, useEffect } from "react";
import "./Modal2.css";
import { useAuthCtx } from "../../context/AuthCtx";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { ApiHelperFunction, fileUpload } from "../../services/api/apiHelpers";
import { useDispatch } from "react-redux";
import { getHallOfFame } from "../../redux/slices/hallOffameSlice";

const MyMentorModal = ({ closemodal, activity, initialValues }) => {
  const { setLoading, loading, getUserDetails, userData } = useAuthCtx();
  const [imageURL, setImageURL] = useState("");
  const dispatch = useDispatch();
  const [localerror, setlocalerror] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [shouldValidateOnChange, setShouldValidateOnChange] = useState(false);
  const [shouldValidateOnBlur, setShouldValidateOnBlur] = useState(false);
  const [empData, setempData] = useState([]);
  const [mentor, setMentor] = useState([]);

  console.log(mentor, "mentor");

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

  useEffect(() => {
    fetchMentor();
  }, []);

  const getNameFromUserId = (selectedUserId) => {
    const selectedEmployee = empData.find(
      (employee) => employee._id === selectedUserId
    );
    return selectedEmployee ? selectedEmployee.userName : "";
  };

  const submitHandler = async (e, selectedSubscription) => {
    e.preventDefault();
    setShouldValidateOnChange(true);
    setShouldValidateOnBlur(true);
    console.log("handleSubmit", values);

    let data = {};
    setLoading(true);
    if (values.description == "") {
      return toast.error("All fields required");
    }

    data = {
      // name: getNameFromUserId(values?.userId),
      userId: values?.userId,
      description: values?.description,
    };
    console.log("click_training", data);
    const res = await ApiHelperFunction({
      urlPath: "/add-mentor",
      method: "POST",
      data,
    });
    if (res?.status) {
      toast.success("Mentor is added successfully");
      resetForm();
      fetchMentor();
      closemodal();
    } else {
      toast.error(res?.response?.data?.message || "Something went wrong");
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
          : activity === "mymentor"
            ? {
              // name: Yup.string().required("name is required"),
              description: Yup.string().required("Description is required"),
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

  useEffect(() => {
    getEmployeeData();
  }, []);

  return (
    <section className="hallOfFrmeModal">
      <div className="hallOfFrameInner">
        <p className="newBulleBrodHead">Mentor</p>
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
          <div className="emplListDiv">
            <p className="empListSubHead">Mentor Name</p>
            <select
              class="empListSelect"
              aria-label="Select Employee name"
              name="userId"
              value={values.userId}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value={""} disabled>
                Select Mentor
              </option>
              {empData?.map((item, i) => (
                <option key={i} value={item?._id}>
                  {item?.userName}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <textarea
              id="description"
              cols=""
              rows="8"
              className="empListTextArea"
              placeholder="Designation"
              value={values.description}
              name="description"
              onBlur={handleBlur}
              onChange={handleChange}
            ></textarea>
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

export default MyMentorModal;
