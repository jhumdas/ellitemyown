import React,{useState,useEffect} from 'react'
import { useAuthCtx } from '../context/AuthCtx';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from 'react-hot-toast';
import { ApiHelperFunction, fileUpload } from '../services/api/apiHelpers';
import { useDispatch } from 'react-redux';
import { getEventData } from '../redux/slices/eventSlice';
import Select from "react-select";
import { getEmployeeData } from '../redux/slices/employeeSlice';



const EmployeeModal = ({closemodal , activity , initialValues}) => {
    const { setLoading, loading, getUserDetails, userData } = useAuthCtx();

    const INITIAL = {
      managedBy:[],
      firstName:"",
      lastName:"",
      companyCode:userData?.companyCode,userType:"",
      email:"",
      password:"",
      phoneNo:"",
      image:"",
      designation:""
    }

    const [imageURL, setImageURL] = useState("");
    const dispatch = useDispatch();
    const [localerror, setlocalerror] = useState("");
    const [image, setImage] = useState("");
    const [uploading, setUploading] = useState(false);
    const [AllManagerData , setAllManagerData] = useState([]);
    const [managerSeperateData , setManagerSepreatedData] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const [EmployeeData , setEmployeeData] = useState(INITIAL);
    const [hideManager , setHIdeManager] = useState(true);


    useEffect(() => {
      ViewAllManager();
    },[])

    useEffect(() => {
      AllManagerDataFormat();
    },[AllManagerData])

    const AllManagerDataFormat = () => {
      let arr = [];
      AllManagerData && AllManagerData.map((item , index) => {
        arr.push({ label: `${item?.firstName} ${item?.lastName}`, value: item?._id },)
      });
      setManagerSepreatedData(arr);
    }

    const ViewAllManager = async() => {
      let arr = [];
      const res = await ApiHelperFunction({
        urlPath: "/view-all-manager",
        method: "GET",
      
      });

      if (res && res?.status) {
        // arr.push({ label: "L", value: "L" },)
        setAllManagerData(res?.data?.data)

      } else {
        toast.error(res?.message || "Something went wrong");
      }
    }

    const handleChange = (e) => {
      setEmployeeData({
        ...EmployeeData, [e.target.name]: e.target.value,
      })
    }

    const HandleUserType = (e) => {
      if(e.target.value === "Manager"){
        setHIdeManager(false);
      }else{
        setHIdeManager(true);
      }
      setEmployeeData({
        ...EmployeeData,
        userType: e.target.value,
      });
    }


    const HandleManager = (e) => {
      
      setSelectedOptions(e);
      let arr = [];
      e?.map((item) => {
        return arr.push(item?.value);
      });
      setEmployeeData({
        ...EmployeeData,
        managedBy: arr,
      });
    }

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     // setShouldValidateOnChange(true);
    //     // setShouldValidateOnBlur(true);
    
    //     // let data = {};
    //     setLoading(true);
    //     if (
    //         values.eventName == "" ||
    //         values.hostedBy == "" ||
    //         values.eventDate == ""
    //       ) {
    //         return toast.error("All fields required");
            
    //       }
    
    //       data = {
    //         eventName: values?.eventName,
    //         hostedBy: values?.hostedBy,
    //         eventDate: values?.eventDate,
    //         image: imageURL,
    //       };
    
          // const res = await ApiHelperFunction({
          //   urlPath: "/add-event",
          //   method: "POST",
          //   data,
          // });
    
          // if (res?.status) {
          //   toast.success("Event added successfully");
          //   resetForm();
          //   dispatch(getEventData());
          //   closemodal();
          // } else {
          //   toast.error(res?.message || "Something went wrong");
          //   console.log("ERROR CREATING USER3", res);
          // }
        
    //     setLoading(false);
    //   };


    const submitHandler = async() =>{

    if(EmployeeData?.firstName && EmployeeData?.lastName && EmployeeData?.email && 
         EmployeeData?.password && EmployeeData?.phoneNo && EmployeeData?.userType && EmployeeData?.designation
         && EmployeeData?.image){
          // dispatch(getTrainingData());
          let data = EmployeeData;
          const res = await ApiHelperFunction({
            urlPath: "/user-type-admin-add-epm",
            method: "POST",
            data,
          });
    
          if (res && res?.status) {
            toast.success("Employee added successfully");
            setEmployeeData(INITIAL);
            closemodal();
            dispatch(getEmployeeData());
            
          } else {
            toast.error(res?.message || "Something went wrong");
            console.log("ERROR CREATING USER3", res);
          }
         }else{
          toast.error("All fields are required");
         }
          console.log("EmployeeDATA" , EmployeeData);
    }

      const handleImageChange = async (e) => {
        let image = e.target.files[0];
        setUploading(true);
    
        const form = new FormData();
        form.append("image", image);
    
        let res = await fileUpload("/image-upload", "POST", form);
    
        if (res.status) {
          toast.success("Image uploaded successfully");
          setImageURL(res?.image);
          setEmployeeData({
            ...EmployeeData,
            image: res?.image,
          });
        } else {
          toast.error("Error uploading image");
        }
        setUploading(false);
      };

  return (
    <div className="createmodal_main">
    <div className="create_modal">
      <div className="create_modal_content crte_own">
        <div
          className="frm_own"
          style={{ width: "100%", height: "100%", padding: "20px 0" }}
        >
          <div className="newBulleCloseModDiv">
            <span className="newBulleCreHead">Add Employee</span>
            <div onClick={() => closemodal()}>
              <i
                class="fa-solid fa-xmark"
                style={{
                  color: "red",
                  fontSize: "24px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </div>
        
          <form
     
            className="homePageCreModal"
          >


            <div className="homePgModInnerInpDivs">
              <input
                type="text"
                id="firstName"
                aria-describedby="emailHelp"
                placeholder="First Name"
                value={EmployeeData.firstName}
                name="firstName"
                onChange={handleChange}
                className="homePgMoInps"
              />
            </div>
            <div className="homePgModInnerInpDivs">
              <input
                type="text"
                id="lastName"
                aria-describedby="emailHelp"
                placeholder="Last Name"
                value={EmployeeData.lastName}
                name="lastName"
                // onBlur={handleBlur}
                onChange={handleChange}
                className="homePgMoInps"
              />
         
            </div>


            <span style={{ marginLeft:"1.2rem" , fontWeight:"500"}}>User type</span>
            <div className="homePgModInnerInpDivs">
            <select
                    className="form-select slct_frm"
                    aria-label="Default select example"
                    name="userType"
                    value={EmployeeData?.userType}
                    onChange={HandleUserType}
                    style={{
                      width: "-webkit-fill-available",
                      height:"36px",
                      borderRadius:"4px"
                    }}
                  >
                    <option value={""}>User Type...</option>
                    <option value="Employee">Employee</option>
                    {/* <option value="Admin">Admin</option> */}
                    <option value="Manager">Manager</option>
                  </select>
            </div>
{
  hideManager ? <>
   <span style={{ marginLeft:"1.2rem" , fontWeight:"500"}}>Select Manager</span>
            <div className="homePgModInnerInpDivs">
            <Select
                    className="select"
                    options={managerSeperateData}
                    value={selectedOptions}
                    name="size"
                    isMulti
                    onChange={HandleManager}
                  />
            </div></> :
          null
}


<div className="homePgModInnerInpDivs">
              <input
                type="text"
                id="designation"
                aria-describedby="emailHelp"
                placeholder="Designation"
                value={EmployeeData.designation}
                name="designation"
                // onBlur={handleBlur}
                onChange={handleChange}
                className="homePgMoInps"
              />
         
            </div>

            {/* <div className="homePgModInnerInpDivs">
              <input
                type="text"
                id="companyCode"
                placeholder="Company Code"
                value={EmployeeData.companyCode}
                name="companyCode"
                onChange={handleChange}
                className="homePgMoInps"
              />
            </div> */}
            <div className="homePgModInnerInpDivs">
              <input
                type="text"
                id="email"
                placeholder="Email"
                value={EmployeeData.email}
                name="email"
                onChange={handleChange}
                className="homePgMoInps"
              />
            </div>
            <div className="homePgModInnerInpDivs">
              <input
                type="password"
                id="password"
                placeholder="Password"
                min={5}
                value={EmployeeData.password}
                name="password"
                onChange={handleChange}
                className="homePgMoInps"
              />
            </div>
            <div className="homePgModInnerInpDivs">
              <input
                type="text"
                id="phoneNo"
                placeholder="PhoneNo"
                maxlength="10"
                value={EmployeeData.phoneNo}
                name="phoneNo"
                // onBlur={handleBlur}
                onChange={handleChange}
                className="homePgMoInps"
              />
            </div>
            <div className="homePgModInnerInpDivs">
              <input
                type="file"
                id="hostedBy"
                placeholder="Choose a photo"
                value={image}
                accept="image/*"
                name="hostedBy"
                // onBlur={handleBlur}
                onChange={handleImageChange}
              />

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
            <div className="homePgCreModSubmitDiv">
              <button
                type="button"
                className="homePgCreModSubmitBtn"
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>
          </form>
          {/* </Formik> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default EmployeeModal