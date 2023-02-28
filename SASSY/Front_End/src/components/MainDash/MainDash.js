import React from "react";
import Cards from "../Cards/Cards";
import FDRegForm from "../FDRegForm/FDRegForm";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      {/* <h1>Dashboard</h1> */}
      <FDRegForm />
    </div>
  );
};

export default MainDash;
