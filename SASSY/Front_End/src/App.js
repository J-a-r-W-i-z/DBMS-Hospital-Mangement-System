import React, { useState, useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { isAuth, logIn, logOut } from "./api"
import { Navbar } from "./components"
import { toastOptions } from "./constants"
import Router from "./routes"

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
    await isAuth()
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
    await logIn({
      username: username,
      password: password,
      user_type: userType,
    })
      .then(res => {
        setIsAuthenticated(true)
        setUserType(userType)

        toast.success("Login successful.", toastOptions)
      })
      .catch(err => {
        handleError(err)
      })
  }

  const handleLogout = async () => {
    await logOut()
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
          <Router
            handleLogin={handleLogin}
            isAuthenticated={isAuthenticated}
            userType={userType}
          />
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