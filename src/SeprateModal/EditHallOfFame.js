import React, { useState, useEffect } from "react";
import "../Component/Modal/Modal2.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getHallOfFame } from "../redux/slices/hallOffameSlice";
import { ApiHelperFunction } from "../services/api/apiHelpers";
import { useAuthCtx } from "../context/AuthCtx";


const EditHallOfFame = ({ closemodal, activity, initialValues, singleHallFameData }) => {
    const { setLoading, loading, getUserDetails, userData } = useAuthCtx();
    const dispatch = useDispatch();
    const [shouldValidateOnChange, setShouldValidateOnChange] = useState(false);
    const [shouldValidateOnBlur, setShouldValidateOnBlur] = useState(false);
    const [empData, setempData] = useState([]);

    const initData = {
        userId: singleHallFameData?.userId,
        reason: singleHallFameData?.reason
    }
    const [formData, setFormData] = useState(initData)

    console.log(singleHallFameData, "singleHallFameData");

    // onchange
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const getNameFromUserId = (selectedUserId) => {
        const selectedEmployee = empData.find(
            (employee) => employee._id === selectedUserId
        );
        return selectedEmployee ? selectedEmployee.userName : "";
    };

    // on submit
    const submitHandler = async (e) => {
        e.preventDefault();
        setShouldValidateOnChange(true);
        setShouldValidateOnBlur(true);

        setLoading(true);
        if (formData.reason == "") {
            return toast.error("All fields required");
        }

        const data = {
            // name: getNameFromUserId(formData?.userId),
            // userId: formData?.userId,
            reason: formData?.reason,
        };

        console.log("click_hallfame", data);

        const res = await ApiHelperFunction({
            urlPath: `/update-hallfame/${singleHallFameData?._id}`,
            method: "PUT",
            data,
        });
        if (res?.status) {
            toast.success("Hall of fame updated successfully");
            dispatch(getHallOfFame());
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
                : activity === "halloffame" || activity === "editHallFame"
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
        getEmployeeData();
    }, []);

    return (
        <section className="hallOfFrmeModal">
            <div className="hallOfFrameInner">
                <p className="newBulleBrodHead">Hall Of Frame</p>
                <button className="bulleBrodCloseBtn" onClick={() => closemodal()}>
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <form
                    onSubmit={(e) => {
                        setShouldValidateOnBlur(true);
                        setShouldValidateOnChange(true);
                    }}
                >
                    <div className="emplListDiv">
                        <p className="empListSubHead">Employees Name</p>
                        <select
                            class="empListSelect"
                            aria-label="Select Employee name"
                            name="userId"
                            value={formData.userId}
                            onChange={handleFormChange}
                            disabled
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
                    </div>

                    <div className="mb-3">
                        <textarea
                            id="reason"
                            cols=""
                            rows="8"
                            className="empListTextArea"
                            placeholder="Reason"
                            name="reason"
                            value={formData.reason}
                            onChange={handleFormChange}
                        ></textarea>
                    </div>
                    <div className="homePgCreModSubmitDiv">
                        <button
                            className="homePgCreModSubmitBtn"
                            type="button"
                            onClick={submitHandler}
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default EditHallOfFame;
