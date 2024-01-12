import React, { useState } from "react";
import ThoughtsImg from "../../Images/profile_img.png";
import connection4 from "../../Images/connection4.png";
import { Link } from "react-router-dom";
import InputImg from "../../Images/input_icon.png";
import CreditsIcon from "../../Images/Credits.png";
import EliteCardicon from "../../Images/elitecardicon.png";

import { ApiHelperFunction, fileUpload } from "../../services/api/apiHelpers";
import { useAuthCtx } from "../../context/AuthCtx";
import { BASE_URL } from "../../constants/config";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, getAllPosts } from "../../redux/slices/postSlice";
import Loader from "../loader/Loader";
import { toast } from "react-hot-toast";
export default function AddSkill({ closemodal, ViewAllSkill }) {
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [skill, setSkill] = useState("");
  const [post, setPost] = useState({
    description: "",
    image: [],
  });
  const { userData } = useAuthCtx();
  const dispatch = useDispatch();

  const AddSkill = async () => {
    let data = {
      skill: skill,
    };
    if (skill) {
      let res = await ApiHelperFunction({
        urlPath: "/add-skill",
        method: "POST",
        data,
      });
      console.log("RESPONSE", res);
      if (res && res?.status) {
        toast.success("Skill added successfully");
        setSkill("");
        closemodal();
        ViewAllSkill();
      } else {
        toast.error(res?.message);
      }
    } else {
      toast.error("Skill field is required");
    }
  };

  const handleImageChange = async (e) => {
    let images = Array.from(e.target.files);
    let imageArray = [];
    setUploading(true);
    for (let i = 0; i < images.length; i++) {
      const form = new FormData();
      form.append("image", images[i]);

      let res = await fileUpload("/image-upload", "POST", form);
      //   console.log("resimg", res);

      if (res?.status) {
        toast.success("Images uploaded successfully");
        console.log("Images uploaded successfully");
        imageArray.push(res?.image);
      } else {
        toast.error("Error uploading image");
      }
    }
    setPost({ ...post, image: imageArray });
    setUploading(false);
  };

  const removeImage = (index) => {
    let images = [...post.image];
    images.splice(index, 1);
    setPost({ ...post, image: images });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handlePost = async (e) => {
    if (post.description === "") {
      toast.error("Please enter description!");
      return;
    }
    setUploading(true);

    let data = {
      description: post.description,
      image: post.image,
    };

    let response = await ApiHelperFunction({
      urlPath: "/user-add-post",
      method: "POST",
      data: data,
    });

    if (response?.status === 200) {
      setPost({
        description: "",
        image: "",
      });
      closemodal();
      dispatch(getAllPosts());
    } else {
      toast.error("Can't get data. Something went wrong");
    }

    setUploading(false);
  };

  console.log("aapost", post?.image);

  return (
    <div className="add_moadal_main">
      <div className="add_moadal">
        {/* <div className="Create_overlay"></div> */}
        <div className="add_modal_content">
          <div className="close_icon" onClick={() => closemodal()}>
            <i
              class="fa-solid fa-xmark"
              style={{ color: "red", fontSize: "24px", cursor: "pointer" }}
            ></i>
          </div>

          <div className="">
            <label class="custom-field two">
              <input
                type="text"
                placeholder="&nbsp;"
                onChange={(e) => setSkill(e.target.value)}
                value={skill}
              />
              <span class="placeholder">Skill Add</span>
            </label>
            <button className="add_btn_nn" onClick={AddSkill}>
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
