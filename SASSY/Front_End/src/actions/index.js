import { toast } from "react-toastify"
import * as api from "../api"
import { toastOptions } from "../constants"

export const handleError = (err, dontToast) => {
  if (err.response === null) {
    toast.error("Something went wrong. Please try again later.", toastOptions)
  } else {
    if (dontToast) return
    toast.error(err.response.data.detail, toastOptions)
  }
}

export const handleListUsers = async (usertype) => {
  let response = null
  await api.listUsers(usertype)
    .then(res => {
      response = res.data
    })
    .catch(err => {
      handleError(err)
    })
  return response
}

export const handleCreateUser = async (userData) => {
  await api.createUser(userData)
    .then(res => {
      toast.success("User created successfully.", toastOptions)
    })
    .catch(err => {
      handleError(err)
    })
}

// export const handleRegisterPatient = async (patientData) => {
//   console.log(patientData)
//   await api.registerPatient(patientData)
//     .then(res => {
//       toast.success("Patient registered successfully.", toastOptions)
//     })
//     .catch(err => {
//       handleError(err)
//     })
// }