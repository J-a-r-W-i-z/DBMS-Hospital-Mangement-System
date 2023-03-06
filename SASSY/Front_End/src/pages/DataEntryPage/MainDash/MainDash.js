import React from "react";
import { BrowserRouter as Router, Routes, Route, Switches, Link, Redirect } from 'react-router-dom';

import ProfileCard from "../ProfilePage/Profile";
import PatientMedReport from "../Patient/PatientMedReport";
import "./MainDash.css";
const MainDash = ({ page }) => {
  return (
    <div className="MainDash">

      {page === "Profile" && <ProfileCard />}
      {page === "Patients" && <PatientMedReport />}

    </div>
  );
};

export default MainDash;