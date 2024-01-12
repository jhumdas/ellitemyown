import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProfileImg1 from "../Images/profile1.png";
import ProfileImg2 from "../Images/profile2.png";
import ProfileImg3 from "../Images/profile3.png";
import ProfileImg4 from "../Images/profile4.png";
import ChatIcon from "../Images/chaticon.png";
import SendIcon from "../Images/sendicon.png";
import { useDispatch, useSelector } from "react-redux";
import { useAuthCtx } from "../context/AuthCtx";
import { getAffinityGroups } from "../redux/slices/affinitySlice";
import { ApiHelperFunction } from "../services/api/apiHelpers";
import { toast } from "react-toastify";

export default function AffinityGroups() {
  const affinityData = useSelector((state) => state?.affinitySlice?.groups);
  const loadingStatus = useSelector((state) => state.affinitySlice.isLoading);
  const [colorValues, setColorValues] = useState([]);
  // const { setLoading } = useAuthCtx();
  const dispatch = useDispatch();
  const [groupName, setGroupName] = useState("");
  const { userData, getUserDetails } = useAuthCtx();
  const [loading, setLoading] = useState(false);

  const createAffinityGroups = async (e) => {
    e.preventDefault();
    const data = {
      name: groupName,
    };
    setLoading(true);
    const response = await ApiHelperFunction({
      urlPath: `/add-affinity-group`,
      method: "POST",
      data,
    });

    if (response.status === 200) {
      toast.success(response?.data?.data?.message);
      dispatch(getAffinityGroups());
      setGroupName('');
    } else {
      toast.error(response?.error);
    }
    setLoading(false);
  };

  useEffect(() => {
    dispatch(getAffinityGroups());
    getUserDetails();
  }, []);


  const colors = useMemo(() => {
    return ColorPicker(affinityData?.length);
  }, [affinityData]);

  // console.log("colorValues",colors)

  return (
    <>
      {/* <div className='text'>
                                    <p>Created by Admin</p>
                                </div> */}
      {/* <div className='chat_btn'>
                                    <Link to="/" className='btn'><img src={ChatIcon} className="" alt='chat' /></Link>
                                </div> */}
      {/* <div className='seeall_btn'>
                        <Link to="/" className='btn'>See all Groups</Link>
                    </div> */}
      {/* <div className='all_profile d-flex align-items-center'>
        <div className='social_profile'>
          <img src={ProfileImg1} className='img-fluid' alt='profile' />
        </div>
        <div className='social_profile' style={{ marginLeft: "-8px" }}>
          <img src={ProfileImg2} className='img-fluid' alt='profile' />
        </div>
        <div className='social_profile' style={{ marginLeft: "-8px" }}>
          <img src={ProfileImg3} className='img-fluid' alt='profile' />
        </div>
        <div className='social_profile' style={{ marginLeft: "-8px" }}>
          <img src={ProfileImg4} className='img-fluid' alt='profile' />
        </div>
      </div> */}
      <section id="affinity_groups">
        <div className="top_area">
          <div className="head">
            <h4>Other Affinity Groups</h4>
          </div>
          <div className="">

          </div>
        </div>

        <div className="bottom_area">
          {userData?.userType === 'Manager' && <div className="card_area" style={{ background: "#F1E5DD" }}>
            <div className="top" style={{ borderBottom: "1px solid #FFD9C0" }}>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <div className="head">
                  <h4>Create Groups </h4>
                </div>
              </div>

              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              ></div>
            </div>
            <div className="bottom">

              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    aria-describedby="textHelp"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    placeholder="Enter group name"
                  />
                  <button onClick={createAffinityGroups} className="btn">
                    <img src={SendIcon} className="img-fluid" alt="send" />
                  </button>
                </div>
              </form>

            </div>
          </div>}
          {loading && <div
            // key={index}
            className="card_area"
            style={{ background: "#E5E5E5" }}
          >
            <div className="top">
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <div className="head">
                  <h4>Adding..... </h4>
                </div>


              </div>

              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div className="text">
                  <p>Adding....</p>
                </div>
                <div className="chat_btn">
                  <Link to="/" className="btn">
                    <img src={ChatIcon} className="" alt="chat" />
                  </Link>
                </div>
              </div>
            </div>
          </div>}
          {affinityData?.map((item, index) => {
            return (
              <div
                key={index}
                className="card_area"
                style={{ background: `#${colors[index]}` }}
              >
                <div className="top">
                  <div
                    className=""
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "15px",
                    }}
                  >
                    <div className="head">
                      <h4>{item?.groupName} </h4>
                    </div>

                    {/* <div className="all_profile d-flex align-items-center">
                      <div className="social_profile">
                        <img
                          src={ProfileImg1}
                          className="img-fluid"
                          alt="profile"
                        />
                      </div>
                      <div
                        className="social_profile"
                        style={{ marginLeft: "-8px" }}
                      >
                        <img
                          src={ProfileImg2}
                          className="img-fluid"
                          alt="profile"
                        />
                      </div>
                      <div
                        className="social_profile"
                        style={{ marginLeft: "-8px" }}
                      >
                        <img
                          src={ProfileImg3}
                          className="img-fluid"
                          alt="profile"
                        />
                      </div>
                      <div
                        className="social_profile"
                        style={{ marginLeft: "-8px" }}
                      >
                        <img
                          src={ProfileImg4}
                          className="img-fluid"
                          alt="profile"
                        />
                      </div>
                    </div> */}
                  </div>

                  <div
                    className=""
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="text">
                      <p>Created by {item?.userType}</p>
                    </div>
                    <div className="chat_btn">
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

const ColorPicker = (length) => {
  let colorCodes = [];

  for (let i = 0; i < length; i++) {
    let number = 97025487 * (i + 1);
    let color = number.toString(16).substr(-6);
    colorCodes[i] = color;
  }
  console.log("calledColor", colorCodes);

  return colorCodes;
};
