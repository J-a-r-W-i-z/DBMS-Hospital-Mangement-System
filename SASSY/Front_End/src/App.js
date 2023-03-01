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

  const handleError = (err) => {
    if (err.response === null) {
      toast.error("Something went wrong. Please try again later.", toastOptions)
    } else {
      toast.error(err.response.data.detail, toastOptions)
    }
  }

  useEffect(() => {
    const checkAuth = async () => {
      axios.get("/api/isAuth")
        .then(res => {
          setIsAuthenticated(true)
          setUserType(res.data.user_type)
        })
        .catch(err => {
          setIsAuthenticated(false)
          setUserType(null)
          console.log(err)

          handleError(err)
        })
    }

    checkAuth()
  }, [])

  const handleLogin = async (username, password, userType) => {
    const userTypeInt = getUserTypeInt(userType)
    console.log(username, password, userTypeInt)
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
    try {
      const res = await axios.post("/api/logout")
      if (res.status === 200) {
        setIsAuthenticated(false)
        setUserType(null)

        toast.success("Logout successful.", toastOptions)
      }
    } catch (err) {
      handleError(err)
    }
  }

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} handleLout={handleLogout} />
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LoginForm handleLogin={handleLogin} />} />
            <Route exact path="/doctor" render={() => (
              isAuthenticated && getUserTypeStr(userType) === 'doctor' ? (
                <DoctorDashboard />
              ) : (
                <Navigate to="/" />
              )
            )} />
            <Route path="/" render={() => (
              <Navigate to="/" />
            )} />
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