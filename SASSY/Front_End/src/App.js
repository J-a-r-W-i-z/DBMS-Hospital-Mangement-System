import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import axios from "axios"
import { DoctorDashboard, LoginForm } from "./pages"
import { Navbar } from "./components"
import { HelmetWrap } from "./wrapper"
import { toastOptions } from "./constants"
import { getUserTypeInt, getUserTypeStr } from "./util"

import { ToastContainer, toast, Slide } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./styles/Toast.scss"

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userType, setUserType] = useState(null)

  useEffect(() => {
    checkAuth()
  }, [])

  const handleError = (err, dontToast) => {
    if (err.response === null) {
      toast.error("Something went wrong. Please try again later.", toastOptions)
    } else {
      if (dontToast) return
      toast.error(err.response.data.detail, toastOptions)
    }
  }

  const checkAuth = async () => {
    axios.get("/api/isAuth")
      .then(res => {
        setIsAuthenticated(true)
        setUserType(res.data.response.user_type)
      })
      .catch(err => {
        if (err.response.status === 401 && isAuthenticated) {
          toast.error("Session expired. Please login again.", toastOptions)
        } else {
          handleError(err, true)
        }

        setIsAuthenticated(false)
        setUserType(null)
      })
  }

  const handleLogin = async (username, password, userType) => {
    const userTypeInt = getUserTypeInt(userType)

    axios.post("/api/login", {
      username: username,
      password: password,
      user_type: userTypeInt,
    })
      .then(res => {
        setIsAuthenticated(true)
        setUserType(userTypeInt)

        toast.success("Login successful.", toastOptions)
      })
      .catch(err => {
        handleError(err)
      })
  }

  const handleLogout = async () => {
    axios.post("/api/logout")
      .then(res => {
        setIsAuthenticated(false)
        setUserType(null)

        toast.success("Logout successful.", toastOptions)
      })
      .catch(err => {
        handleError(err)
      })
  }

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to={`/${getUserTypeStr(userType)}`} />
                ) : (
                  <LoginForm handleLogin={handleLogin} />
                )
              }
            />
            <Route
              exact
              path="/doctor"
              element={
                isAuthenticated && getUserTypeStr(userType) === "doctor" ? (
                  <DoctorDashboard />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route path="/" element={<Navigate to="/" />} />
          </Routes>

        </BrowserRouter>
      </div>

      <ToastContainer
        position={toastOptions.position}
        autoClose={toastOptions.autoClose}
        hideProgressBar={toastOptions.hideProgressBar}
        closeOnClick={toastOptions.closeOnClick}
        pauseOnHover={toastOptions.pauseOnHover}
        theme={toastOptions.theme}
        transition={Slide}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
      />
    </>
  )
}

export default App