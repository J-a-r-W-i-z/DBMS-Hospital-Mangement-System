import React, { useState } from "react"
import { handleRegisterPatient } from "../../../actions"
import { PersonalFields } from "../../../components"
import "./RegisterPatient.scss"

const RegisterPatient = () => {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [aadharId, setAadharId] = useState("")
  const [gender, setGender] = useState("")
  const [dob, setDob] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    handleRegisterPatient({
      name: name,
      address: address,
      phone: phone,
      email: email,
      aadhar_id: aadharId,
      gender: gender,
      dob: dob,
      address: address,
    })
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Register patient</h1>
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
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterPatient
