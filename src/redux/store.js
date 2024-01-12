import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import HallOfFameReducer from "./slices/hallOffameSlice";
import sustainableSlice from "./slices/sustainableSlice";
import billBoardSlice from "./slices/billBoardSlice";
import trainingSlice from "./slices/trainingSlice";
import postSlice from "./slices/postSlice";
import advocacyPostSlice from "./slices/advocacyPostSlice";

import loginSlice from "./slices/loginSlice";
import engagementSlice from "./slices/engagementSlice";
import employeeSlice from "./slices/employeeSlice";
import affinitySlice from "./slices/affinitySlice";
import jobRefferedSlice from "./slices/jobRefferedSlice";
import eventSlice from "./slices/eventSlice";
import initiativeSlice from "./slices/initiativeSlice";
import badgeSlice from "./slices/badgeSlice";
import affinityPostSlice from "./slices/affinityPostSlice";

let rootReducer = combineReducers({
  hallOfFameSlice: HallOfFameReducer,
  sustainableSlice: sustainableSlice,
  initiativeSlice: initiativeSlice,
  billBoardData: billBoardSlice,
  traningData: trainingSlice,
  postGetSlice: postSlice,
  affinitypostGetSlice: affinityPostSlice,
  loginSliceReducer: loginSlice,
  engagementSlice: engagementSlice,
  employeeSlice: employeeSlice,
  affinitySlice: affinitySlice,
  jobSlice: jobRefferedSlice,
  eventSlice: eventSlice,
  badgeSlice: badgeSlice,
  postAdvocacySlice: advocacyPostSlice,
})

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);

export default store;