import { toast } from "react-toastify"
import * as api from "../api"
import { toastOptions } from "../constants"

export const handleError = (err, dontToast) => {
  const defaultError = "Something went wrong. Please try again later."

  if (err === null || err.response === undefined) {
    toast.error(defaultError, toastOptions)
    return
  }

  if (err.response.status === 401 || err.response.status === 405) {
    if (dontToast) return
    toast.error(err.response.data.detail, toastOptions)
  } else {
    toast.error(defaultError, toastOptions)
  }
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
  console.log("handleCreateUser: ", userData)

  await api.createUser(userData)
    .then(res => {
      toast.success("User created successfully.", toastOptions)
    })
    .catch(err => {
      handleError(err)
    })
}