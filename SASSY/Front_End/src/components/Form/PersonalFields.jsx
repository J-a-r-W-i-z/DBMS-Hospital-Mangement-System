import React from "react"

const Name = ({ name, setName }) => {
  return (
    <input
      placeholder="Name"
      type="text"
      value={name}
      onChange={(event) => setName(event.target.value)}
      required
    />
  )
}

const Email = ({ email, setEmail }) => {
  return (
    <input
      placeholder="Email"
      type="email"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      required
    />
  )
}

const Phone = ({ phone, setPhone }) => {
  return (
    <input
      placeholder="Phone"
      type="tel"
      value={phone}
      onChange={(event) => setPhone(event.target.value)}
      pattern="[0-9]{10}"
      title="Phone number must be 10 digits long."
      required
    />
  )
}

const AadharId = ({ aadharId, setAadharId }) => {
  return (
    <input
      placeholder="Aadhar ID"
      type="text"
      value={aadharId}
      onChange={(event) => setAadharId(event.target.value)}
      pattern="[0-9]{12}"
      title="Aadhar ID must be 12 digits long."
      required
    />
  )
}

const Gender = ({ gender, setGender }) => {
  return (
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
  )
}

const Dob = ({ dob, setDob }) => {
  return (
    <input
      placeholder="Date of Birth"
      type="date"
      value={dob}
      onChange={(event) => setDob(event.target.value)}
      required
    />
  )
}

const Occupation = ({ occupation, setOccupation }) => {
  return (
    <input
      placeholder="Occupation"
      type="text"
      value={occupation}
      onChange={(event) => setOccupation(event.target.value)}
      required
    />
  )
}

const Address = ({ address, setAddress }) => {
  return (
    <input
      placeholder="Address"
      type="text"
      value={address}
      onChange={(event) => setAddress(event.target.value)}
      className="span-full"
      required
    />
  )
}

const PersonalFields = ({ ...props }) => {
  return (
    <>
      {props.name !== undefined && <Name {...props} />}
      {props.email !== undefined && <Email {...props} />}
      {props.phone !== undefined && <Phone {...props} />}
      {props.aadharId !== undefined && <AadharId {...props} />}
      {props.gender !== undefined && <Gender {...props} />}
      {props.dob !== undefined && <Dob {...props} />}
      {props.occupation !== undefined && <Occupation {...props} />}
      {props.address !== undefined && <Address {...props} />}
    </>
  )
}

export default PersonalFields
