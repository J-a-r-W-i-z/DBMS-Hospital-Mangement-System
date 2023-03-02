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

export const handleCreateUser = async (userData) => {
  await api.createUser(userData)
    .then(res => {
      toast.success("User created successfully.", toastOptions)
    })
    .catch(err => {
      handleError(err)
    })
}