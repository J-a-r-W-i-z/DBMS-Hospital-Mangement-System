import React, { useState } from "react"
import { AuthFields, PersonalFields } from "../../../components"
import { handleCreateUser } from "../../../actions"
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

    handleCreateUser({
      username: username,
      password: password,
      user_type: userType,
      name: name,
      address: address,
      phone: phone,
      email: email,
      aadhar_id: aadharId,
      gender: gender,
      dob: new Date(dob.valueOf())
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
    })
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>User creation</h1>
        <div className="form-container-div">
          <AuthFields
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            userType={userType}
            setUserType={setUserType}
          />
        </div>
        <hr className="span-full fields-separator" />
        <div className="form-container-div">
          <PersonalFields
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            aadharId={aadharId}
            setAadharId={setAadharId}
            gender={gender}
            setGender={setGender}
            dob={dob}
            setDob={setDob}
            address={address}
            setAddress={setAddress}
          />
        </div>
        <button type="submit" className="btn-primary-sm submit-btn">
          Add user
        </button>
      </form>
    </div>
  )
}

export default CreateUser