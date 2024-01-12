import HttpClient from "../utils/HttpClient";

async function Allcalenderdata() {
  // let endPoint = 'get-engagement-calender-date';
  let endPoint = "view-event";
  return HttpClient.get(endPoint);
}

async function HighlightEvent(data) {
  let endPoint = "get-highlights-events";
  return HttpClient.get(endPoint, data);
}

export default {
  Allcalenderdata,
  HighlightEvent,
};
