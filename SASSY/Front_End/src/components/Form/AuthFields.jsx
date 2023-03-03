import React from "react"

const AuthFields = ({ setUsername, setPassword, setUserType, ...props }) => {
  return (
    <>
      <input
        type="text"
        value={props.username}
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
        required
      />
      <input
        type="password"
        value={props.password}
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <select
        value={props.userType}
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
    </>
  )
}

export default AuthFields
