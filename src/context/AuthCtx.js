import {
  createContext,
  useContext,
  useDebugValue,
  useEffect,
  useState,
} from "react";
import { ApiHelperFunction } from "../services/api/apiHelpers";
import { toast } from "react-hot-toast";

const AuthContext = createContext(null);

export const useAuthCtx = () => useContext(AuthContext);

export const ContextProvider = ({ children }) => {
  const [logIn, setLogIn] = useState(
    () => localStorage.getItem("login") || false
  );
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [calenderMonth, setCalenderMonth] = useState("");
  const [calenderYear, setCalenderYear] = useState("");
  const [BulletinBoardSingleData1, setBulletinBoardSingleData1] = useState({});
  const [HallfameSingleData1, setHallfameSingleData1] = useState({});
  const [modalC, setModalC] = useState(false);
  const [modalD, setModalD] = useState(false);
  const [modalE, setModalE] = useState(false);
  const [modalF, setModalF] = useState(false);
  const [modalG, setModalG] = useState(false);
  const [modalH, setModalH] = useState(false);
  const [modalI, setModalI] = useState(false);
  const [modalJ, setModalJ] = useState(false);
  const [modala, setModala] = useState(false);
  const [modalK, setModalK] = useState(false);
  const [modalL, setModalL] = useState(false);
  const [modalM, setModalM] = useState(false);
  const [modalN,setModalN]=useState(false);
  const [modalO,setModalO]=useState(false);
  const [employeeModal, setEmployeeModal] = useState(false);
  const [trainingData, setTrainingData] = useState({});
  const [BulletinBoardSingleData, setBulletinBoardSingleData] = useState({});
  //user login
  const loginUser = async (data) => {
    let urlPath = "/login";
    return ApiHelperFunction({ urlPath, method: "POST", data });
  };

  // get logged in user details

  const getUserDetails = async (data = {}) => {
    let urlPath = "/get-profile";
    setLoading(true);
    let res = await ApiHelperFunction({ urlPath, method: "GET", data });
    console.log("sdsd", res);
    if (res?.status) {
      setUserData(res?.data?.data);
    } else {
      // toast.error(res?.data?.message || "Error Fetching User Details");
    }
    setLoading(false);
  };

  //employee register by hr-admin
  const registerUser = async (data) => {
    let urlPath = "/register";
    return ApiHelperFunction({ urlPath, method: "POST", data });
  };
  // console.log("userDetails", userData)

  useEffect(() => {
    if (logIn) {
      getUserDetails();
    }
  }, [logIn]);

  return (
    <AuthContext.Provider
      value={{
        logIn,
        setLogIn,
        modalC,
        setModalC,
        modalD,
        setModalD,
        modalE,
        setModalE,
        modalF, setModalF,
        modalG, setModalG,
        modalH, setModalH,
        modalI, setModalI,
        modalJ, setModalJ,
        trainingData, setTrainingData,
        employeeModal, setEmployeeModal,
        HallfameSingleData1,setHallfameSingleData1,
        modalK, setModalK,
        modalL, setModalL,
        modalM, setModalM,
        modalN,setModalN,
        modalO,setModalO,
        setModala,
        modala,
        loginUser,
        loading,
        setLoading,
        registerUser,
        userData,
        getUserDetails,
        calenderMonth,
        setCalenderMonth,
        calenderYear,
        setCalenderYear,
        BulletinBoardSingleData,
        setBulletinBoardSingleData,
        BulletinBoardSingleData1,
        setBulletinBoardSingleData1
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
