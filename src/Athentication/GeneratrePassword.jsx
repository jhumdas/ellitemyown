import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import {
  getChangePasswordUserMail,
  generateNewUserPassword,
} from "../services/AuthServices";
import MainLoader from "../Component/Loaders/MainLoader";
import AlertScreen from "../Component/AlertScreens/AlertScreen";
import { toast } from "react-hot-toast";

const INITIAL = {
  email: "",
  password: "",
  confirmPassword: "",
};

const GeneratrePassword = () => {
  const [credentials, setCredentials] = useState(
    JSON.parse(JSON.stringify(INITIAL))
  );
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [pageNum, setPageNum] = useState(0);

  const { userToken, flag } = useParams();

  const fetchUserMail = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getChangePasswordUserMail(userToken);

      if (res && res?.status) {
        setCredentials((prev) => {
          let update = JSON.parse(JSON.stringify(prev));
          update.email = res?.data?.email;
          update.id = res?.data?.id;
          return { ...update };
        });
      } else {
        setPageNum(2);
        console.log("ERROR FETCHING EMAIL ID", res);
      }
    } catch (error) {
      setPageNum(2);
      console.log("ERROR FETCHING EMAIL ID", error);
    }
    setIsLoading(false);
  }, [userToken]);

  useEffect(() => {
    fetchUserMail();
  }, [fetchUserMail]);

  const changeHandler = (e) => {
    setCredentials((prev) => {
      let update = JSON.parse(JSON.stringify(prev));
      update[e.target.name] = e.target.value;
      return { ...update };
    });
  };
  const validator = () => {
    // if (credentials.password.length < 8 || credentials.confirmPassword.length < 8) {
    //   setError('Passwords length must be greater than 7');
    //   return false;
    // }
    if (credentials?.password?.length !== credentials.confirmPassword?.length) {
      setError("Password and Confirm Password must be same");
      return false;
    }

    setError("");
    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validator()) return;
    if (error) return;
    const data = { ...credentials };
    delete data.confirmPassword;

    console.log("DATA", data);

    setIsLoading(true);

    try {
      const res = await generateNewUserPassword(userToken, data);
      if (res && res?.status) {
        setPageNum(1);
      } else {
        toast.error(res?.message || "Something went wrong, Please try again!");
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong, Please try again!");
    }

    setIsLoading(false);
  };

  return (
    <>
      <MainLoader
        isLoading={isLoading}
        backgroundColor="#f3f0ff"
        userLoadingTextStyles={{ fontWeight: "600" }}
        userLoaderStyles={{ height: "90px", width: "90px" }}
      />
      {pageNum === 0 && (
        <>
          <div className="changePasswordContainer">
            <div className="header">
              <h1>FinMan</h1>
            </div>
            <div className="changePasswordCard">
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <h3 className="font-weight-bold">Generate New Password</h3>
                </div>
                <div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      value={credentials.email}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password<span style={{ color: "#fa5252" }}>*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      id="password"
                      autoComplete="off"
                      value={credentials.password}
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                      <span style={{ color: "#fa5252" }}>*</span>
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="form-control"
                      id="confirmPassword"
                      autoComplete="off"
                      value={credentials.confirmPassword}
                      onChange={changeHandler}
                    />
                  </div>
                  {error !== "" && (
                    <div className="mb-3" style={{ color: "#fa5252" }}>
                      <p>{error}</p>
                    </div>
                  )}
                  <div
                    className="mt-4"
                    style={{ display: "flex", flexDirection: "row-reverse" }}
                  >
                    <button type="submit" className="btn btn-primary ">
                      CHANGE PASSWORD
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
      {pageNum === 1 && (
        <AlertScreen
          confirmationText={"Password Changed Successfully"}
          btnText={"Go To Login Page"}
          navigateLink={"/login"}
        />
      )}
      {pageNum === 2 && (
        <AlertScreen
          confirmationText="Link Expired"
          error={true}
          btnText={"Go To Login Page"}
          navigateLink={"/login"}
        />
      )}
    </>
  );
};

export default GeneratrePassword;
