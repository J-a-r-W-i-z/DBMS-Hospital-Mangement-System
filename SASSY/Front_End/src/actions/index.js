import * as api from "../api"
import { toast } from "react-toastify"
import { toastOptions, usermap } from "../constants"

const handleError = (err, noredirect) => {
  const defaultError = "Something went wrong. Please try again later."

  if (err === null || err.response === undefined) {
    toast.error(defaultError, toastOptions)
    return
  }

  switch (err.response.status) {
    case 401:
      if (noredirect) break
      toast.error(err.response.data.detail, toastOptions)

      // const checkAuth = async () => await redirectUser()
      // checkAuth()

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
      return
    })

  return response
}

export const redirectUser = async (userType, navigate, setLoading) => {
  let response = await checkAuth()

  if (response === null) {
    if (userType === null) {
      console.log("response is", response, ":loading is set to false")
      setLoading(false)
      return
    }

    navigate("/")
    return
  }

  if (userType === response) {
    console.log("loading is set to false")
    setLoading(false)
    return
  }

  navigate(`/${usermap[response]}`)
}

export const handleLogin = async (user) => {
  let response = null
  await api.logIn(user)
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
  let response = []
  await api.listUsers({ user_type: usertype })
    .then(res => {
      response = res.data
    })
    .catch(err => {
      handleError(err)
    })

  return response
}

export const handleCreateUser = async (userData, initialData, resetData) => {
  console.log(userData)
  await api.createUser(userData)
    .then(res => {
      toast.success("User created successfully.", toastOptions)
      resetData(initialData)
    })
    .catch(err => {
      handleError(err)
    })
}

export const handleDeleteUser = async (id, type) => {
  let status = null
  await api.deleteUser({ EmployeeId_id: id, user_type: type })
    .then(res => {
      status = true
      toast.success("User deleted successfully.", toastOptions)
    })
    .catch(err => {
      handleError(err)
    })

  return status
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