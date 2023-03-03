import React from "react"

const Name = ({ name, setName, required }) => {
  return (
    <input
      placeholder="Name"
      type="text"
      value={name}
      onChange={(event) => setName(event.target.value)}
      required={required}
    />
  )
}

const Email = ({ email, setEmail, required }) => {
  return (
    <input
      placeholder="Email"
      type="email"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      required={required}
    />
  )
}

const Phone = ({ phone, setPhone, required }) => {
  return (
    <input
      placeholder="Phone"
      type="tel"
      value={phone}
      onChange={(event) => setPhone(event.target.value)}
      pattern="[0-9]{10}"
      title="Phone number must be 10 digits long."
      required={required}
    />
  )
}

const AadharId = ({ aadharId, setAadharId, required }) => {
  return (
    <input
      placeholder="Aadhar ID"
      type="text"
      value={aadharId}
      onChange={(event) => setAadharId(event.target.value)}
      pattern="[0-9]{12}"
      title="Aadhar ID must be 12 digits long."
      required={required}
    />
  )
}

const Gender = ({ gender, setGender, required }) => {
  return (
    <select
      value={gender}
      onChange={(event) => setGender(event.target.value)}
      required={required}
    >
      <option value="">Select Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
      <option value="3">Other</option>
    </select>
  )
}

const Dob = ({ dob, setDob, required }) => {
  return (
    <input
      placeholder="Date of Birth"
      type="date"
      value={dob}
      onChange={(event) => setDob(event.target.value)}
      required={required}
    />
  )
}

const Address = ({ address, setAddress, required }) => {
  return (
    <input
      placeholder="Address"
      type="text"
      value={address}
      onChange={(event) => setAddress(event.target.value)}
      required={required}
    />
  )
}

const PersonalFields = ({
  hasName,
  hasEmail,
  hasPhone,
  hasAadharId,
  hasGender,
  hasDob,
  hasAddress,
  ...props
}) => {
  return (
    <>
      {hasName && <Name {...props} />}
      {hasEmail && <Email {...props} />}
      {hasPhone && <Phone {...props} />}
      {hasAadharId && <AadharId {...props} />}
      {hasGender && <Gender {...props} />}
      {hasDob && <Dob {...props} />}
      {hasAddress && <Address {...props} />}
    </>
  )
}

export default PersonalFields
