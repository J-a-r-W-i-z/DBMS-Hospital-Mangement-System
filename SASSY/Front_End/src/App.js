import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import axios from "axios"
import { DoctorDashboard, LoginForm } from "./pages"
import { Navbar } from "./components"

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userType, setUserType] = useState(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/api/isAuth")
        if (res.status === 200) {
          setIsAuthenticated(true)
          setUserType(res.data.user_type)
        } else {
          setIsAuthenticated(false)
          setUserType(null)
        }

        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }

    checkAuth()
  }, [])

  const mapUserTypeToInt = (userType) => {
    switch (userType) {
      case "front-desk-operator":
        return 1
      case "data-entry-operator":
        return 2
      case "doctor":
        return 3
      case "adminstrator":
        return 4
      default:
        return 0
    }
  }

  const mapUserTypeToString = (userType) => {
    switch (userType) {
      case 1:
        return "front-desk-operator"
      case 2:
        return "data-entry-operator"
      case 3:
        return "doctor"
      case 4:
        return "adminstrator"
      default:
        return "unknown"
    }
  }

  const handleLogin = async (username, password, userType, setErrorMessage) => {
    const userTypeInt = mapUserTypeToInt(userType)
    try {
      const res = await axios.post("/api/login", {
        username,
        password,
        userTypeInt,
      })

      if (res.status === 200) {
        setIsAuthenticated(true)
        setUserType(userTypeInt)
      } else {
        setErrorMessage(res.data.detail)
      }
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again later.")
    }
  }

  const handleLogout = async () => {
    try {
      const res = await axios.post("/api/logout")
      if (res.status === 200) {
        setIsAuthenticated(false)
        setUserType(null)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} handleLout={handleLogout} />
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route exact path="/" render={() => (
              isAuthenticated ? (
                <Navigate to={`/${mapUserTypeToString(userType)}`} />
              ) : (
                <LoginForm handleLogin={handleLogin} />
              )
            )} />
            <Route exact path="/doctor" render={() => (
              isAuthenticated && mapUserTypeToString(userType) === 'doctor' ? (
                <DoctorDashboard />
              ) : (
                <Navigate to="/" />
              )
            )} />
            <Route path="/" render={() => (
              <Navigate to="/" />
            )} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App