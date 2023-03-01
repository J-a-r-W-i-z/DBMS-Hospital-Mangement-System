import React, { useState } from "react"
import { images } from "../../constants"
import "./Navbar.scss"

const Navbar = ({ isAuthenticated, handleLogout }) => {
  return (
    <nav className="app__navbar app__pad">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
        <h1>SASSY</h1>
      </div>
      {isAuthenticated && (
        <div className="logout-btn">
          <button className="btn-secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
