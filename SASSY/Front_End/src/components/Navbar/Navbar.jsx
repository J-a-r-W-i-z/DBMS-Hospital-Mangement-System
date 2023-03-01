import React, { useState } from "react"
import { Link } from "react-router-dom"
import { images } from "../../constants"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="app__navbar app__pad">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
        <h1>SASSY</h1>
      </div>
      <div className="logout-btn">
        <Link to={"adminstrator"}>
          <button className="btn-secondary">Admin Login</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
