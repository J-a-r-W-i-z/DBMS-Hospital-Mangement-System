import React, { useState } from "react"
import { Link } from "react-router-dom"
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi"
import { entityChildren, images, usermap } from "../../constants"
import "./Navbar.scss"

const Navbar = ({ isAuthenticated, userType, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="app__navbar app__pad">
      <div className="app__navbar-container">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="logo" />
          <h1>SASSY</h1>
        </div>
        {isAuthenticated && (
          <>
            <ul className="app__navbar-links">
              {entityChildren[userType].map((task, index) => (
                <li key={index}>
                  <Link to={`${usermap[userType]}/${task.path}`}>
                    {task.breadcrumb}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="app__navbar-menu">
              <HiMenuAlt1 onClick={() => setIsMenuOpen(true)} />
              {isMenuOpen && (
                <div>
                  <HiOutlineX onClick={() => setIsMenuOpen(false)} />
                  <ul>
                    {entityChildren[userType].map((task, index) => (
                      <li key={index} onClick={() => setIsMenuOpen(false)}>
                        <Link to={`${usermap[userType]}/${task.path}`}>
                          {task.breadcrumb}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      {isAuthenticated && (
        <button onClick={handleLogout} className="btn-secondary-sm logout-btn">
          Logout
        </button>
      )}
    </nav>
  )
}

export default Navbar
