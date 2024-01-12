import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { forgotPassword, registerUser } from "../services/AuthServices";
import {
  getAllSubscriptionTypes,
  getAllSubscriberTypes,
} from "../services/OtherServices";
import MainLoader from "../Component/Loaders/MainLoader";
import RenderSlider from "../Component/Slider/RenderSlider";
import AlertScreen from "../Component/AlertScreens/AlertScreen";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const mobileRegex = /^[0]?[6789]\d{9}$/;
const nameRegex =
  /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;

const INITIAL = {
  // Contact details
  email: "",
  mobileNumber: "",
  companyName: "",
  subscriberName: "",
  // Subscription details
  subscriberTypeId: "",
  subscriberTypeName: "",
  subscriptionTypeId: "",
  subscriptionDate: "",
  validity: "",
};

export default function ForgotPassWord() {
  const navigate = useNavigate();
  const [regData, setRegData] = useState(JSON.parse(JSON.stringify(INITIAL)));
  const [isLoading, setIsLoading] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const [subscriberTypes, setSubscriberTypes] = useState([]);
  const [formNum, setFormNum] = useState(0);

  const filteredSubscriptions =
    regData?.subscriberTypeName === "Financial Advisor"
      ? subscriptions?.filter((item) => item.name !== "Free Subscription")
      : subscriptions;

  const fetchSubscriptionTypes = async () => {
    try {
      const res = await getAllSubscriptionTypes();
      console.log("getAllSubscriptionTypes", res);
      if (res && res?.status) {
        setSubscriptions(res?.data);
      }
    } catch (error) {
      console.log("EROR FETCHING SUBSCRIPTION TYPES", error);
    }
  };
  const fetchSubscriberTypes = async () => {
    try {
      const res = await getAllSubscriberTypes();
      console.log("getAllSubscriberTypes", res);
      if (res && res?.status) {
        setSubscriberTypes(res?.data);
      }
    } catch (error) {
      console.log("EROR FETCHING SUBSCRIBER TYPES", error);
    }
  };

  useEffect(() => {
    fetchSubscriberTypes();
    fetchSubscriptionTypes();
  }, []);

  
  // @ Register Change
  const changeHandler = async (e) => {
    setRegData((oldState) => {
      oldState[e.target.name] = e.target.value;
      return { ...oldState };
    });
  };

  //@ Submit Handler
  const submitHandler = async (e, selectedSubscription) => {
    e.preventDefault();
    if (isLoading) return;

    try {
      setIsLoading(true);
      const res = await forgotPassword({ email: regData?.email });
      if (res && res?.status) {
        setRegData(JSON.parse(JSON.stringify(INITIAL)));
        alert("Check your Email");
      } else {
        toast.error(res?.message || "Something went wrong");
        console.log("ERROR CREATING USER3", res);
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
      console.log("ERROR CREATING USER2", error);
    }
    setIsLoading(false);
  };

  return (
    <>
      {formNum === 2 && (
        <AlertScreen
          confirmationText="Your Subscription is now Activated"
          navigateLink={`/login`}
          btnText="Go to Login Page"
        />
      )}
      <MainLoader isLoading={isLoading} />

      {
        <div className="h-100 g-0 row">
          <RenderSlider />
          <div className="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8">
            <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9 rightCntlogin">
              {/* <img src={logo} alt="logo" height={'100px'} width={'90px'} /> */}

              <h4 className="mb-0">
                <div>Forgot Password!</div>
                {/* <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> */}
              </h4>

              <div className="divider row" />
              <div>
                <>
                  <div className="">
                    <div className="row form-container">
                      <form autoComplete="off" onSubmit={submitHandler}>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={regData?.email}
                            onChange={changeHandler}
                            placeholder="Email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            autoComplete="off"
                          />
                        </div>
                        <button type="submit" className="btn btn-primary mr-2">
                          Submit
                        </button>
                        <button
                          type="submit"
                          className="btn btn-secondary"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(-1);
                          }}
                        >
                          Go Back
                        </button>
                      </form>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
