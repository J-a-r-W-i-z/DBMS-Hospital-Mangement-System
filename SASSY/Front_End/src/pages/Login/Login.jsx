import React, { useState } from "react"
import { AuthFields } from "../../components"
import "../../App.scss"
import "./Login.scss"

function LoginForm({ handleLogin }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    handleLogin(username, password, userType)
  }

  return (
    <div className="form-container login-form-container">
      <form onSubmit={handleSubmit}>
        <h1>Log In to continue</h1>
        <div className="form-container-div-sm">
          <AuthFields
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            userType={userType}
            setUserType={setUserType}
          />
        </div>
        <button type="submit" className="btn-primary-sm submit-btn">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
