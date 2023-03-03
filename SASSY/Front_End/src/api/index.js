import axios from "axios"

const api = axios.create({
  baseURL: `http://localhost:8000/api`,
})

export const listUsers = payload => api.get(`/list-users`, payload)
export const createUser = payload => api.post(`/create-user`, payload)

export const isAuth = () => api.get(`/isAuth`)
export const logIn = payload => api.post(`/login`, payload)

export const logOut = () => api.post(`/logout`)
