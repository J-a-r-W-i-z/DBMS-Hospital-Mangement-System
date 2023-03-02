import React, { useState } from "react"
import "../../App.scss"
import "./Login.scss"

function LoginForm({ handleLogin }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    handleLogin(username, password, userType)
  }

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-form-heading">Log In to continue</h1>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <select
          value={userType}
          onChange={(event) => setUserType(event.target.value)}
          required
        >
          <option value="" disabled>
            Select user type
          </option>
          <option value={1}>Front desk operator</option>
          <option value={2}>Data entry operator</option>
          <option value={3}>Doctor</option>
          <option value={4}>Adminstrator</option>
        </select>
        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
