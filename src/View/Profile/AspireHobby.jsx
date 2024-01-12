import React, { useEffect, useState } from "react";
import "./Profile.css";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-hot-toast";
import { useAuthCtx } from "../../context/AuthCtx";
import HobbyModal from "../../Component/Modal/HobbyModal";

function AspireHobby(hobbies) {
  const { modalN, setModalN } = useAuthCtx();
  const [hobbyData, setHobbyData] = useState([]);
  // console.log("hobbyData", hobbies.hobbyDatas);
  console.log("hobbyDataqq", hobbyData);
  useEffect(() => {
    setHobbyData(hobbies.hobbyDatas);
  }, [hobbies]);

  const initialValues = {
    hobbies: "",
    hobbyBackColor:""
  };

  // const ViewAllHobby = async () => {
  //   let response = await ApiHelperFunction({
  //     urlPath: "/view-hobbies",
  //     method: "GET",
  //   });
  //   if (response?.status) {
  //     setHobbyData(response?.data?.data);
  //   } else {
  //     toast.error("Error fetching hobby data");
  //   }
  // };

  // useEffect(() => {
  //   ViewAllHobby();
  // }, []);
  const loop = [
    {
      data: "WORKING IN FRACTALZ PROJECT",
      bgClr: "#D7DBFF",
    },
    {
      data: "DEVELOPING MY UX SKILL",
      bgClr: "#FFDBDB",
    },
    {
      data: "VOLUNTEERING AT ANOLD AGE HOME",
      bgClr: "#B2FFDF",
    },
  ];
  return (
    <>
      <div className="hobbyAspiMainDiv">
        <p className="hobbyAspHead">Hobbies and Personal Information</p>
        {/* <div className="tyEvMainDiv" onClick={() => setModalN(true)}>
          <span className="tyEvIcon">
            <i class="fa-solid fa-plus"></i>
          </span>
          <p className="tyEvText">Add Hobbies and Personal Information</p>
        </div> */}

        <ul>
          {hobbyData &&
            hobbyData?.map((item, indx) => {
              return (
                <li className="hobbyAspLi">
                  <div
                    className="aspHobClrDivs"
                    style={{ backgroundColor: `${item?.hobbyBackColor}` }}
                  >
                    <p className="wrkHobbyText">{item?.hobbies}</p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      {modalN && (
        <HobbyModal
          closemodal={setModalN}
          activity={"hobby"}
          initialValues={initialValues}
          hobbies={hobbies}
          hobbyData={hobbyData}
          setHobbyData={setHobbyData}
        />
      )}
    </>
  );
}

export default AspireHobby;
