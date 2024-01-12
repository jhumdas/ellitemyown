import React, { useEffect, useState } from "react";
import "./Modal2.css";
import "./Modal.css";
import { useDispatch, useSelector } from "react-redux";
import { ApiHelperFunction, fileUpload } from "../../services/api/apiHelpers";
import {
  getAffinityGroups,
  getMyAffinityGroups,
} from "../../redux/slices/affinitySlice";
import { useAuthCtx } from "../../context/AuthCtx";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import Select from "react-select";
import makeAnimated from "react-select/animated";
// import { colourOptions } from "../data";

const animatedComponents = makeAnimated();

const MyAffinityGroupModal = ({ closemodal, activity, initialValues }) => {
  const { setLoading, loading, getUserDetails, userData } = useAuthCtx();
  const [imageURL, setImageURL] = useState("");
  const dispatch = useDispatch();
  const [localerror, setlocalerror] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [shouldValidateOnChange, setShouldValidateOnChange] = useState(false);
  const [shouldValidateOnBlur, setShouldValidateOnBlur] = useState(false);
  const [empData, setempData] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [colourOptions, setColourOptions] = useState([]);
  const myGroup = useSelector((state) => state?.affinitySlice?.myGroups);
  // const [myGroup, setMyGroup] = useState([]);

  const submitHandler = async (e, selectedSubscription) => {
    e.preventDefault();
    setShouldValidateOnChange(true);
    setShouldValidateOnBlur(true);
    console.log("handleSubmit", values);

    let data = {};
    setLoading(true);
    if (values.groupName == "") {
      return toast.error("All fields required");
    }

    if (values.grouptype == "") {
      return toast.error("All fields required");
    }

    if (values.purpose == "") {
      return toast.error("All fields required");
    }

    if (imageURL == "") {
      return toast.error("All fields required");
    }

    data = {
      groupName: values?.groupName,
      grouptype: values?.grouptype,
      charter: values?.charter,
      purpose: values?.purpose,
      image: imageURL,
      // addEmp: selectedOptions,
      addEmp: selectedOptions?.map((item) => item?.value),
    };

    console.log("click_affinity_group", data);
    const res = await ApiHelperFunction({
      urlPath: "/add-affinity-group",
      method: "POST",
      data,
    });
    if (res?.status) {
      toast.success(res?.data?.message);
      resetForm();
      // dispatch(getAffinityGroups());
      // getAffinityMyGroupData();
      dispatch(getMyAffinityGroups());
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
      : activity === "affinity" || activity === "editAffinity"
      ? {
          groupName: Yup.string().required("Affinity Group Name is required"),
          grouptype: Yup.string().required("Affinity Group Type is required"),
          charter: Yup.string().required("Affinity Group Charter is required"),
          purpose: Yup.string().required("Affinity Group Purpose is required"),
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

  // const getEmployeeData = async () => {
  //   const response = await ApiHelperFunction({
  //     urlPath: `/view-all-employees`,
  //     method: "GET",
  //   });
  //   console.log("RESPONSEF", response?.data?.data);
  //   if (response && response.status) {
  //     setempData(response?.data?.data);
  //   } else {
  //     toast.error(response.message);
  //   }
  // };

  const getEmployeeData = async () => {
    const response = await ApiHelperFunction({
      urlPath: `/view-all-employees`,
      method: "GET",
    });

    console.log("RESPONSEF", response?.data?.data);

    if (response && response.status) {
      const formattedOptions = response?.data?.data?.map((item) => ({
        value: item?._id,
        label: item?.userName,
      }));

      setColourOptions(formattedOptions);
      setempData(response?.data?.data);
    } else {
      // toast.error(response.message);
    }
  };

  // const getAffinityMyGroupData = async () => {
  //   const response = await ApiHelperFunction({
  //     urlPath: `/view-my-affinity-group`,
  //     method: "GET",
  //   });
  //   console.log("RESPONSEFSDFu", response?.data?.data);
  //   if (response && response.status) {
  //     setMyGroup(response?.data?.data?.reverse());
  //   } else {
  //     toast.error(response.response?.data?.message);
  //   }
  // };

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

  // const handleSelectChange = (e) => {
  //   console.log("essdr", e);

  // };

  const handleSelectChange = (e) => {
    console.log("Selected Options:", e);

    // Update the colourOptions state with the selected options
    setSelectedOptions(e);
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
    dispatch(getMyAffinityGroups());
    // getAffinityMyGroupData();
  }, []);

  return (
    <section className="hallOfFrmeModal">
      <div className="hallOfFrameInner">
        <p className="newBulleBrodHead">My Affinity Groups</p>
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
            <p className="empListSubHead">Enter Group Name</p>
            <input
              type="text"
              className="empListSelect"
              placeholder="Group Name"
              value={values?.groupName}
              name="groupName"
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>

          <div className="emplListDiv">
            <p className="empListSubHead">Enter Group Type</p>
            <input
              type="text"
              className="empListSelect"
              placeholder="Group Type"
              value={values?.grouptype}
              name="grouptype"
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>

          <div className="emplListDiv">
            <p className="empListSubHead">Enter Group Charter</p>
            <input
              type="text"
              className="empListSelect"
              placeholder="Group Charter"
              value={values?.charter}
              name="charter"
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>

          <div className="emplListDiv">
            <p className="empListSubHead">Enter Group Purpose</p>
            <input
              type="text"
              className="empListSelect"
              placeholder="Group Purpose"
              value={values?.purpose}
              name="purpose"
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>

          {/* <div className="inpCmntAttach">
            <i class="fa-solid fa-paperclip"></i>
            <input
              type="file"
              class="form-control"
              id="hostedBy"
              placeholder="Choose a photo"
              value={image}
              name="hostedBy"
              onChange={handleImageChange}
            />
          </div>
          {uploading ? (
            <p
              style={{
                position: "absolute",
                right: 0,
                top: "-84%",
              }}
            >
              image uploading......
            </p>
          ) : null} */}

          <div className="homePgModInnerInpDivs">
            <input
              type="file"
              id="image"
              placeholder="Choose a photo"
              value={image}
              accept="image/*"
              name="image"
              onBlur={handleBlur}
              onChange={handleImageChange}
            />
            {/* <small id="emailHelp" style={{ color: "red" }}>
              {errors?.image}
            </small> */}
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

          <div className="emplListDiv">
            <p className="empListSubHead">Employees Name</p>
            {/* <select
              class="empListSelect"
              aria-label="Select Employee name"
              name="addEmp"
              value={selectedEmployees}
              onBlur={handleBlur}
              // onChange={handleChange}
              onChange={(e) =>
                setSelectedEmployees(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
              // multiple
            >
              <option value={""} disabled>
                Select Employee
              </option>
              {empData?.map((item, i) => (
                <option key={i} value={item?._id}>
                  {item?.userName}
                </option>
              ))}
            </select> */}

            {/* <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={[colourOptions[4], colourOptions[5]]}
              isMulti
              options={colourOptions}
            /> */}

            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={[]}
              isMulti
              options={colourOptions}
              onChange={handleSelectChange}
            />

            {/* <Select
              className="select"
              options={PrimaryVarient}
              value={selectedOptions}
              name="size"
              isMulti
              onChange={HandlePrimaryVarient}
            /> */}
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

export default MyAffinityGroupModal;
