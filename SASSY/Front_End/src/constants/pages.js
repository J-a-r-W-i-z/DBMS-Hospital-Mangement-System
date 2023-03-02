import { LoginForm, DoctorDashboard } from "../pages"

const usermap = {
  1: "front-desk-operator",
  2: "data-entry-operator",
  3: "doctor",
  4: "adminstrator",
}

const pages = [
  { name: "Home", path: "/", element: LoginForm },
  { name: "Doctor Dashboard", path: "/doctor", element: DoctorDashboard }
]

export { pages, usermap }