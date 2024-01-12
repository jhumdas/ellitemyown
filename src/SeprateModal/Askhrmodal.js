import React, { useState } from 'react'
import connection5 from "../../src/Images/connection5.png"
import { useDispatch } from 'react-redux';
import { useAuthCtx } from '../context/AuthCtx';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { ApiHelperFunction } from '../services/api/apiHelpers';

const Askhrmodal = ({ Closemodal, initialValues, activity }) => {
    const { setLoading, loading, getUserDetails, userData } = useAuthCtx();
    const [imageURL, setImageURL] = useState("");
    const dispatch = useDispatch();
    const [uploading, setUploading] = useState(false);
    const [shouldValidateOnChange, setShouldValidateOnChange] = useState(false);
    const [shouldValidateOnBlur, setShouldValidateOnBlur] = useState(false);

    const submitHandler = async (e, selectedSubscription) => {
        e.preventDefault();
        setShouldValidateOnChange(true);
        setShouldValidateOnBlur(true);
        // console.log("handleSubmit", values);

        let data = {};
        setLoading(true);
        if (values.question == "") {
            return toast.error("All fields required");
        }

        data = {
            question: values?.question,
        };
        console.log("click_training", data);
        const res = await ApiHelperFunction({
            urlPath: "/add-question",
            method: "POST",
            data,
        });
        if (res?.status) {
            toast.success(res?.data?.message);
            resetForm();
            //   dispatch(getHallOfFame());
            Closemodal();
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
                    : activity === "askHr"
                        ? {
                            // name: Yup.string().required("name is required"),
                            question: Yup.string().required("Question is required"),
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

    const { values, errors, handleBlur, handleSubmit, resetForm, handleChange } =
        useFormik({
            initialValues,
            validationSchema: schemaCheck,
            validateOnChange: shouldValidateOnChange,
            validateOnBlur: shouldValidateOnBlur,
            onSubmit: (val) => {
                //   console.log("val", val);
            },
        });

    return (
        <>
            <div className='askmodal'>
                <div className='askmodalcontent'>
                    <div className='closemarkivpnj' onClick={() => Closemodal()}>
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                    <div className='askhrclose'>
                        <div className='askhdtxt'>
                            <h4>Ask Hr</h4>
                        </div>
                    </div>
                    <div className='askquestion'>

                        <div className='flxdivbgth'>
                            <div className='connrtybhr'>
                                <img src={userData?.image} alt="..." />
                            </div>
                            <div className='txtppdivhr'>
                                <p>{userData?.firstName} {userData?.lastName}</p>
                            </div>
                        </div>

                        <div className='asktstxarea'>
                            <textarea placeholder='What is Your Name ?' rows="2" cols="50"
                                value={values.question}
                                name="question"
                                onBlur={handleBlur}
                                onChange={handleChange}>

                            </textarea>
                        </div>
                        <button className='sbmtbtnsbmt' type='button' onClick={submitHandler}>
                            Submit
                        </button>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Askhrmodal
