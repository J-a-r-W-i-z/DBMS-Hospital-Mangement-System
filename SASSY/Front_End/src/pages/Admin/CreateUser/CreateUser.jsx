import React, { useState } from "react"
import { AuthFields } from "../../../components"
import { createUser } from "../../../api"
import "./CreateUser.scss"

const CreateUser = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState("")
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [aadharId, setAadharId] = useState("")
  const [gender, setGender] = useState("")
  const [dob, setDob] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Create User</h1>
          <div className="form-container-div">
            <AuthFields
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              userType={userType}
              setUserType={setUserType}
            />
            <input
              placeholder="Name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <input
              placeholder="Phone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              pattern="[0-9]{10}"
              title="Phone number must be 10 digits long."
              required
            />
            <input
              placeholder="Aadhar ID"
              type="text"
              value={aadharId}
              onChange={(event) => setAadharId(event.target.value)}
              pattern="[0-9]{12}"
              title="Aadhar ID must be 12 digits long."
              required
            />
            <select
              value={gender}
              onChange={(event) => setGender(event.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </select>
            <input
              placeholder="Date of Birth"
              type="date"
              value={dob}
              onChange={(event) => setDob(event.target.value)}
              required
            />
            <textarea
              placeholder="Address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              rows="4"
              required
            />
          </div>
          <button type="submit" className="btn-primary submit-btn">
            Add user
          </button>
        </form>
      </div>
    </>
  )
}

export default CreateUser
