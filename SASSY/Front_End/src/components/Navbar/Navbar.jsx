import React, { useState } from "react"
import { Link } from "react-router-dom"
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi"
import { routeChildren, images, usermap } from "../../constants"
import "./Navbar.scss"

const Navbar = ({ isAuthenticated, userType, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(0)

  const handleMenuItemClick = (index) => {
    setActiveLink(index)
    setIsMenuOpen(false)
  }

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
              {routeChildren[userType].map((task, index) => (
                <li key={index}>
                  <Link
                    to={`${usermap[userType]}/${task.path}`}
                    onClick={() => setActiveLink(index)}
                    className={activeLink === index ? "nav-link-active" : ""}
                  >
                    {task.breadcrumb}
                  </Link>
                </li>
              ))}
            </ul>
            {routeChildren[userType].length > 0 && (
              <div className="app__navbar-menu">
                <HiMenuAlt1 onClick={() => setIsMenuOpen(true)} />
                {isMenuOpen && (
                  <div>
                    <HiOutlineX onClick={() => setIsMenuOpen(false)} />
                    <ul>
                      {routeChildren[userType].map((task, index) => (
                        <li
                          key={index}
                          onClick={() => handleMenuItemClick(index)}
                        >
                          <Link
                            to={`${usermap[userType]}/${task.path}`}
                            className={
                              activeLink === index ? "nav-tab-active" : ""
                            }
                          >
                            {task.breadcrumb}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
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
