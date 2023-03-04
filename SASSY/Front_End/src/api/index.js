import axios from "axios"

const api = axios.create({
  baseURL: `http://localhost:8000/api`,
})

export const listUsers = payload => api.get(`/list-users`, payload)
export const createUser = payload => api.post(`/create-user`, payload)
export const deleteUser = payload => api.delete(`/delete-user`, payload)

export const listAppointments = () => api.get(`/list-appointments`)
export const deleteAppointment = payload => api.delete(`/delete-appointment`, payload)

export const listPatients = () => api.get(`/list-patients`)
export const showPatient = payload => api.get(`/show-patient`, payload)

export const isAuth = () => api.get(`/isAuth`)
export const logIn = payload => api.post(`/login`, payload)

export const logOut = () => api.post(`/logout`)
