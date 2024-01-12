import axios from "axios";
import { toast } from "react-toastify";

// Constants
import { BASE_URL, API_ENDPOINT_PATH } from "../../constants/config";

const API_URL = BASE_URL + API_ENDPOINT_PATH;

// let token = localStorage.getItem("Authorization");
// console.log("token", token);
// let token = reactLocalStorage.get("Authorization")
let user_type = "Admin";
// let user_type = reactLocalStorage.get("userType");

// export async function requestData(url, method, data = {}) {
//   // let token = "";
//   // let user = reactLocalStorage.getObject("adminData");
//   // if (user && user != null && Object.keys(user).length > 0) {
//   //   token = user.token;
//   //   console.log(token);
//   // }
//   let token = localStorage.getItem("Authorization");
//   let apiUrl = API_URL + url;
//   var myHeaders = new Headers();
//   // if (token != "") {
//   //   myHeaders.append("authorization", token);

//   // }
//   // myHeaders.append("userType", "Admin");
//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.append("Authorization", token);
//   myHeaders.append("userType", "Admin");
//   myHeaders.append("Access-Control-Allow-Origin", BASE_URL);
//   var raw = JSON.stringify(data);

//   var requestOptions = {};
//   if (method === "POST") {
//     requestOptions = {
//       method: method,
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow",
//     };
//   } else if (method === "PUT") {
//     requestOptions = {
//       method: method,
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow",
//     };
//   } else {
//     requestOptions = {
//       method: method,
//       headers: myHeaders,
//       redirect: "follow",
//     };
//   }

//   return await fetch(apiUrl, requestOptions)
//     .then((response) => response.json())
//     .then((result) => {
//       // console.log("API response", result);
//       return result;
//     })
//     .catch((error) => console.log("error", error));
// }

export async function fileUpload(url, method, file) {
  let token = localStorage.getItem("Authorization");
  let user_type = localStorage.getItem("userType");
  let apiEndpoint = API_URL + url;
  let headers = {
    // 'Accept': 'application/json',
    // "Content-Type": "multipart/form-data",
    // "Access-Control-Allow-Origin": BASE_URL, // "http://128.199.25.86:5008",
    // 'Authorization': 'Bearer ' + token,
    Authorization: token,
    userType: "User",
  };

  return await fetch(apiEndpoint, {
    method: method,
    body: file,
    redirect: "follow",
    headers: headers,
  })
    .then((response) => {
      // console.log("responseee", response, headers);
      return response.json();
    })
    .then(
      (result) => {
        // console.log(result);
        return result;
      },
      (error) => {
        return error;
      }
    );
}

export const ApiHelperFunction = async (props) => {
  // const { userToken } = useSelector(state => state.adminProfileSlice);
  // console.log("userToken", userToken);

  let token = localStorage.getItem("Authorization");
  // console.log("token",token)
  const { urlPath, method, data } = props;
  
  console.log("ggtdata",data)
  
  let config = {
    method: `${method}`,
    url: `${API_URL}${urlPath}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
      userType: "User",
    },
    data: data,
  };
  let responseData;

  await axios(config)
    .then(function (res) {
      // console.log("ApiHelperFunction res", res);
      responseData = res;
    })
    .catch(function (error) {
      if (error?.response?.status === 401) {
        toast.error("Unauthorized");
        responseData = error;
      } else {
        responseData = error;
      }
    });

  return responseData;
};
