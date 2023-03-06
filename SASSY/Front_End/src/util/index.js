export const userModalData = (user) => {
  return [
    {
      key: "Username",
      value: user.username
    },
    {
      key: "Name",
      value: user.Name
    },
    {
      key: "Date of Birth",
      value: user.DOB
    },
    {
      key: "Gender",
      value: genderMap(user.Gender)
    },
    {
      key: "Aadhar Number",
      value: user.AadharId
    },
    {
      key: "Email",
      value: user.email,
    },
    {
      key: "Phone Number",
      value: user.Phone
    },
    {
      key: "Address",
      value: user.Address
    }
  ]
}

export const patientModalData = (patient) => {
  // name, dob, gender, aadhar, email, phone, address
  return [
    {
      key: "Name",
      value: patient.Name
    },
    {
      key: "Date of Birth",
      value: patient.DOB
    },
    {
      key: "Gender",
      value: genderMap(patient.Gender),
    },
    {
      key: "Aadhar Number",
      value: patient.AadharId
    },
    {
      key: "Email",
      value: patient.Email,
    },
    {
      key: "Phone Number",
      value: patient.Phone
    },
    {
      key: "Address",
      value: patient.Address
    }
  ]
}

export const genderMap = (index) => {
  switch (index) {
    case 1:
      return "Male"
    case 2:
      return "Female"
    case 3:
      return "Other"
  }
}