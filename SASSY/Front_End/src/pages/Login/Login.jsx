import React, { useState } from "react"
import { AuthFields } from "../../components"
import "../../App.scss"
import "./Login.scss"

function LoginForm({ handleLogin }) {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    user_type: "",
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    handleLogin(userDetails)
  }

  return (
    <div className="form-container login-form-container">
      <form onSubmit={handleSubmit}>
        <h1>Log in to continue</h1>
        <div className="form-container-div-sm">
          <AuthFields user={userDetails} setUser={setUserDetails} />
        </div>
        <button type="submit" className="btn-primary-sm submit-btn">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
