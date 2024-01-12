import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import "./Hub.css";
import { toast } from "react-hot-toast";
import { ApiHelperFunction } from "../../services/api/apiHelpers";

function OnboardingExp({ key, servey }) {
  console.log("servey1ww ", servey);
  const [onBoardingExp, setOnBoardingExp] = useState([]);
  const [rating, setRating] = useState(0);
  const [survey, setSurvey] = useState([]);

  console.log("SERVEY", survey);

  useEffect(() => {
    setSurvey(servey);
  }, [servey]);

  const fetchOnBoardingExp = async () => {
    let response = await ApiHelperFunction({
      urlPath: "/get-bording-experience-question",
      method: "GET",
    });
    if (response && response.status === 200) {
      console.log("RESPONSRHJHJK", response);
      setOnBoardingExp(response?.data?.data);
    } else {
      toast.error(response?.data?.message);
    }
  };

  const handleRating = async (rate, index, id) => {
    // setRating(rate);
    let data = {
      takesurveyID: id,
      rating: rate,
    };
    // console.log("rate",data)
    // return false
    let response = await ApiHelperFunction({
      urlPath: `/add-survey-rating`,
      method: "POST",
      data,
    });
    console.log("SERVEY RATING");
    // console.log("click", response);
    if (response && response.status === 200) {
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.response?.data?.message);
    }
    let newArr = [...survey];
    newArr[index].rating = rate;
    setSurvey(newArr);
  };

  useEffect(() => {
    fetchOnBoardingExp();
  }, []);

  return (
    <div className="onBoardCheckDiv">
      <div className="onBoTkDiv">
        <span className="onBoaSpan">On boarding Experience Rating</span>
        {/* <button className="tkSuBtn">Take Survey</button> */}
      </div>
      <div className="onBoardAccDiv">
        {survey &&
          survey?.map((item, index) => {
            console.log("itemrating", item?.rating);
            return (
              <div className="howSatAccDiv" key={index}>
                <span className="howSaText">{item.subquestion}</span>
                {/* <span className="howSaStarDiv">
                {item.avgRating >= 1 && <i class="fa-solid fa-star"></i>}
                {item.avgRating >= 2 && <i class="fa-solid fa-star"></i>}
                {item.avgRating >= 3 && <i class="fa-solid fa-star"></i>}
                {item.avgRating >= 4 && <i class="fa-solid fa-star"></i>}
              </span> */}
                <Rating
                  key={`${key}${index}`}
                  onClick={(rate) => {
                    handleRating(rate, index, item._id);
                  }}
                  initialValue={item?.rating}
                  size={25}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default OnboardingExp;
