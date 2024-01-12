import { Route, Routes } from "react-router-dom";
import CheckRoutes from "./CheckRoutes";

import Registration from "../Athentication/Registration";

import React from "react";
import Index from "../View/Home/Index";

import Main from "../Component/Main/Main";
import Login from "../Foldable Login & Registration form/Login";
import Onboarding from "../View/Employee/Onboarding";
import EmployeePage from "../View/Employees/EmployeePage";

import HubPage from "../View/Hub/HubPage";
import NetWorking from "../View/Hub/NetWorking";
import HubDevelopment from "../View/Hub/HubDevelopment";
import Profile from "../View/Profile/Profile";
import EngagementCalender from "../View/Engagementcalender/EngagementCalender";
import Advocacy from "../View/Advocacy/Advocacy";
import Learning from "../View/Learning/Learning";
import BulletinDetails from "../View/DetailsPages/BulletinDetails";
import HallOfDetails from "../View/DetailsPages/HallOfDetails";
import EmployeeDetail from "../View/DetailsPages/EmployeeDetail";
import InitiativeDetail from "../View/DetailsPages/InitiativeDetail";
import SustInitiativeDetail from "../View/DetailsPages/SustInitiativeDetail";
import EventsDeails from "../View/DetailsPages/EventsDeails";
import TrainingDetails from "../View/DetailsPages/TrainingDetails";
import JobsReferDetail from "../View/DetailsPages/JobsReferDetail";
import MyAffinityDetails from "../View/DetailsPages/MyAffinityDetails";
import Profilerating from "../View/ProfileRating/Profilerating";
import AgendaModal from "../Component/Modal/AgendaModal";
import NotiHome from "../View/Notifications/NotiHome";
import Surveys from "../View/Hub/Surveys";
import SingleAffinityGroup from "../View/AffinityGroup/SingleAffinityGroup";
import MyAffinityMyGroupsDetails from "../View/DetailsPages/MyAffinityMyGroupsDetails";
import SingleImage from "../View/Home/SingleImage";
import Landingpage from "../View/Landingpage/Landingpage";
import Main2 from "../Component/Main/Main2";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<CheckRoutes />}>
        <Route element={<Main />}>
          <Route path="/" element={<Index />} />
          <Route path="/affinity/:id" element={<SingleAffinityGroup />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="employees" element={<EmployeePage />} />
          <Route path="hubpage" element={<HubPage />} />
          <Route path="registration" element={<Registration />} />
          <Route path="netWorking" element={<NetWorking />} />
          <Route path="surveys" element={<Surveys />} />
          <Route path="hubDevelopment" element={<HubDevelopment />} />
          <Route path="profile" element={<Profile />} />
          <Route path="engagementcalender" element={<EngagementCalender />} />
          <Route path="advocacy" element={<Advocacy />} />
          <Route path="bulletinDetails" element={<BulletinDetails />} />
          <Route path="hallOfDetails" element={<HallOfDetails />} />
          <Route path="employeeDetail" element={<EmployeeDetail />} />
          <Route path="initiativeDetail" element={<InitiativeDetail />} />
          <Route path="singleimage" element={<SingleImage />} />
          <Route
            path="sustInitiativeDetail"
            element={<SustInitiativeDetail />}
          />
          <Route path="eventsDeails" element={<EventsDeails />} />
          <Route path="trainingDetails" element={<TrainingDetails />} />
          <Route path="jobsReferDetail" element={<JobsReferDetail />} />
          <Route path="myAffinityDetails" element={<MyAffinityDetails />} />
          <Route
            path="myaffinitymygroups"
            element={<MyAffinityMyGroupsDetails />}
          />
          <Route path="notiHome" element={<NotiHome />} />
          {/* <Route path="/bulletin-board" element={<BulletinBoard />} /> */}
          <Route path="Learning" element={<Learning />} />
          <Route path="Profile_rating" element={<Profilerating />} />
        </Route>
        <Route path="agendaModal" element={<AgendaModal />} />
      </Route>

      {/* <Route path="/" element={<Landingpage />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/landingpage" element={<Landingpage />} />
    </Routes>
  );
};

export default AppRoutes;
