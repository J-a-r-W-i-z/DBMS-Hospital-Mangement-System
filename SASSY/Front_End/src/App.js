import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { isAuth, logIn, logOut } from "./api"
import { Navbar } from "./components"
import { toastOptions, usermap } from "./constants"
import { handleError } from "./actions"
import Router from "./routes"

import { ToastContainer, toast, Slide } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./styles/Toast.scss"

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userType, setUserType] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    await isAuth()
      .then(res => {
        setIsAuthenticated(true)
        setUserType(res.data.response.user_type)
      })
      .catch(err => {
        handleError(err, true)

        setIsAuthenticated(false)
        setUserType(null)

        navigate("/")
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

        navigate(`/${usermap[userType]}`)
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

        navigate("/")
      })
      .catch(err => {
        handleError(err)
      })
  }

  return (
    <>
      <Navbar
        isAuthenticated={isAuthenticated}
        userType={userType}
        handleLogout={handleLogout} />

      <div className="app">
        <Router
          handleLogin={handleLogin}
          isAuthenticated={isAuthenticated}
        />
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