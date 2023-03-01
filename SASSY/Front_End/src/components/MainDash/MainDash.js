import React from "react";
// import Cards from "../Cards/Cards";
import FDRegForm from "../FDRegForm/FDRegForm";
// import FDAdmitForm from "../FDAdmitForm/FDAdmitForm";
// import FDAppointmentForm from "../FDAppointmentForm/FDAppointmentForm";
// import FDDischarge from "../FDDischarge/FDDischarge";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      {/* <h1>Dashboard</h1> */}
      <FDRegForm />
      {/* <FDAdmitForm /> */}
      {/* <FDAppointmentForm /> */}
      {/* <FDDischarge /> */}
    </div>
  );
};

export default MainDash;
