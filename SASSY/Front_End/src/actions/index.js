import { toast } from "react-toastify"
import * as api from "../api"
import { toastOptions } from "../constants"

const handleError = (err) => {
  const defaultError = "Something went wrong. Please try again later."

  if (err === null || err.response === undefined) {
    toast.error(defaultError, toastOptions)
    return
  }

  switch (err.response.status) {
    case 401:
      toast.error(err.response.data.detail, toastOptions)
      break
    case 405:
      toast.error(err.response.data.detail, toastOptions)
      break
    default:
      toast.error(defaultError, toastOptions)
  }
}

export const checkAuth = async () => {
  let response = null
  await api.isAuth()
    .then(res => {
      response = res.data.response.user_type
    })
    .catch(err => {
      handleError(err, true)
    })

  return response
}

export const handleLogin = async (username, password, userType) => {
  let response = null
  await api.logIn({
    username: username,
    password: password,
    user_type: userType,
  })
    .then(res => {
      toast.success("Login successful.", toastOptions)
      response = res
    })
    .catch(err => {
      handleError(err)
    })

  return response
}

export const handleLogout = async () => {
  let response = null
  await api.logOut()
    .then(res => {
      toast.success("Logout successful.", toastOptions)
      response = res
    })
    .catch(err => {
      handleError(err)
    })

  return response
}

export const handleListUsers = async (usertype) => {
  let response = null
  await api.listUsers({ req_user_type: usertype })
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

export const handleDeleteUser = async (username) => {
  await api.deleteUser({ req_user_name: username })
    .then(res => {
      toast.success("User deleted successfully.", toastOptions)
    })
    .catch(err => {
      handleError(err)
    })
}

export const handleListAppointments = async () => {
  let response = null
  await api.listAppointments()
    .then(res => {
      response = res.data
    })
    .catch(err => {
      handleError(err)
    })

  return response
}

export const handleDeleteAppointment = async (username) => {
  await api.deleteAppointment({ req_user_name: username })
    .then(res => {
      toast.success("Appointment deleted successfully.", toastOptions)
    })
    .catch(err => {
      handleError(err)
    })
}

export const handleListPatients = async () => {
  let response = null
  await api.listPatients()
    .then(res => {
      response = res.data
    })
    .catch(err => {
      handleError(err)
    })

  return response
}

export const handleShowPatient = async (username) => {
  let response = null
  await api.showPatient({ req_user_name: username })
    .then(res => {
      response = res.data
    })
    .catch(err => {
      handleError(err)
    })

  return response
}