import React from "react"

const PersonalFields = ({
  setName,
  setEmail,
  setPhone,
  setAadharId,
  setGender,
  setDob,
  setAddress,
  ...props
}) => {
  return (
    <>
      <input
        placeholder="Name"
        type="text"
        value={props.name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <input
        placeholder="Email"
        type="email"
        value={props.email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <input
        placeholder="Phone"
        type="tel"
        value={props.phone}
        onChange={(event) => setPhone(event.target.value)}
        pattern="[0-9]{10}"
        title="Phone number must be 10 digits long."
        required
      />
      <input
        placeholder="Aadhar ID"
        type="text"
        value={props.aadharId}
        onChange={(event) => setAadharId(event.target.value)}
        pattern="[0-9]{12}"
        title="Aadhar ID must be 12 digits long."
        required
      />
      <select
        value={props.gender}
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
        value={props.dob}
        onChange={(event) => setDob(event.target.value)}
        required
      />
      <input
        placeholder="Address"
        type="text"
        value={props.address}
        onChange={(event) => setAddress(event.target.value)}
        className="span-full"
        required
      />
    </>
  )
}

export default PersonalFields
