import React, { useState, useEffect } from "react"
import axios from "axios"
import Router from "./routes.js"
import { Navbar } from "./components"

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userType, setUserType] = useState(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/api/isauth")
        if (res.status === 200) {
          setIsAuthenticated(true)
          setUserType(res.data.user_type)
        } else {
          setIsAuthenticated(false)
          setUserType(null)
        }
      } catch (err) {
        console.log(err)
      }
    }

    checkAuth()
  }, [])

  // const handleLogin = async (username, password, userType) => {
  //   try {
  //     const res = await axios.post("/api/login", {
  //       username,
  //       password,
  //       userType,
  //     })
  //     setIsAuthenticated(res.data.isAuthenticated)
  //     setUserType(res.data.userType)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  const handleLogout = async () => {
    try {
      const res = await axios.post("/hms/logout")
      setIsAuthenticated(false)
      setUserType(null)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} handleLout={handleLogout} />
      <div className="app">
        <Router />
      </div>
    </>
  )
}

export default App