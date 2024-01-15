import React from "react";
import "./Hub.css";
import { useAuthCtx } from "../../context/AuthCtx";
import camera from "../../Images/camera.png";
import { ApiHelperFunction, fileUpload } from "../../services/api/apiHelpers";
import toast from "react-hot-toast";

function GrowWel() {
  const { userData, getUserDetails } = useAuthCtx();

  const handleChange = async (e) => {
    let file = e.target.files[0];
    const data = new FormData();
    data.append("image", file);

    let res = await fileUpload("/image-upload", "POST", data);

    if (res.status) {
      // setImageUrl(res?.image);
      updateCoverImage(res?.image);
    } else {
      toast.error("Error uploading image");
    }
    // setUploading(false);
  };

  const updateCoverImage = async (img) => {
    let data = {
      coverImage: img,
    };
    let response2 = await ApiHelperFunction({
      urlPath: "/update-cover-image",
      method: "PUT",
      data,
    });

    console.log(data, response2, "responkdhjli");

    if (response2?.status) {
      toast.success("Cover picture updated successfully");
      getUserDetails();
    } else {
      // toast.error("Error fetching data");
    }
  };
  return (
    // <div>
    //   <p className="hubGrowHead">GROWING TOGETHER, GOING GREAT!</p>
    //   <p className="hubGrowPara">
    //     We are a fast growing team driven by competency, camaraderie, and
    //     commitment towards success; in an environment filled with thrill,
    //     transparency, and trust. Here, the best in us is valued, and our work
    //     creates impact globally. We are FRACTALITIES!
    //   </p>
    // </div>

    <div className="profileCvrPicDiv">
      <figure className="profileBackFigure">
        {userData?.coverImage && (
          <img src={userData?.coverImage} alt="..." />
        )}
      </figure>
      <div>
        {/* <p className="proCvrTagLine">Your Tag Line</p> */}
        {userData?.userType === "Admin" ? (
          <div className="proEditFigText">
            <input
              type="file"
              className="proEditFigInp"
              onChange={handleChange}
            />
            <div className="proEditFigInnerText">
              <figure className="proEditCamFig">
                <img src={camera} alt="..." />
              </figure>
              <span className="proEditText">Edit your cover picture</span>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default GrowWel;
