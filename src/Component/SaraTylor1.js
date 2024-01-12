import React from "react";
import ProfileImg1 from "../Images/halloof1.png";
import SilverIcon from "../Images/awyaicon1.png";
import { Link } from "react-router-dom";
import InImg from "../Images/in-icon.png";
import Fancybox from "./FAncyBox";
import Gallery1 from "../Images/bigimg1.png";
import Gallery2 from "../Images/bigimg2.png";

export default function SaraTylor1() {
  return (
    <>
      <section id="sara_tylor">
        <div className="top_area">
          <div className="left">
            <div className="profile_img">
              <img src={ProfileImg1} className="img-fluid" alt="profile" />
            </div>
            <div className="details">
              <div className="name">
                <h2>Sara Tylor</h2>
                <span>
                  <img src={SilverIcon} className="img-fluid" alt="icon" />
                  Silver Club
                </span>
              </div>
              <div className="text">
                <p>
                  <span>Senior Employee,</span>
                  <span>Posted on 2nd Feb 2022</span>
                </p>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="dots_btn">
              <Link to="/" className="btn">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            aliquet dignissim nisl, fermentum.
          </p>
        </div>

        <div className="like_comment_area">
          <div className="left">
            <i className="fa-solid fa-thumbs-up"></i>
            <p>
              <span>7</span> People Reacts
            </p>
          </div>

          <div className="right">
            <h6>
              <span>2</span> People Comments
            </h6>
            <p>
              <span>1</span> Share
            </p>
          </div>
        </div>

        <div className="reaction_area">
          <button type="submit" className="reaction">
            <i className="fa-regular fa-thumbs-up"></i>
            <span>Reaction</span>
          </button>

          <button className="comments">
            <i className="fa-regular fa-comment-dots"></i>
            <span>Comments</span>
          </button>

          <button className="share">
            <i className="fa-regular fa-share-from-square"></i>
            <span>Share</span>
          </button>
        </div>
      </section>
    </>
  );
}
