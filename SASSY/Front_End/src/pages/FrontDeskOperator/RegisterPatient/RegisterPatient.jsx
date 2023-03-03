import React, { useState } from "react"
import { handleRegisterPatient } from "../../../actions"
import { PersonalFields } from "../../../components"

const RegisterPatient = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("")
  const [dob, setDob] = useState("")
  const [occupation, setOccupation] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    handleRegisterPatient({
      name: name,
      email: email,
      phone: phone,
      gender: gender,
      dob: dob,
      occupation: occupation,
    })
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Patient registration</h1>
        <div className="form-container-div">
          <PersonalFields
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            gender={gender}
            setGender={setGender}
            dob={dob}
            setDob={setDob}
            occupation={occupation}
            setOccupation={setOccupation}
          />
        </div>
        <button type="submit" className="btn-primary-sm submit-btn">
          Register patient
        </button>
      </form>
    </div>
  )
}

export default RegisterPatient
