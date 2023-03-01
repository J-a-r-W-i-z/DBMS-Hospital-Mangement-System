import { LoginForm, DoctorDashboard } from "../pages"

const pages = [
  { name: "Home", path: "/", element: LoginForm },
  { name: "Doctor Dashboard", path: "/doctor-dashboard", element: DoctorDashboard },
  { name: "Adminstrator", path: "/admin", element: DoctorDashboard }

]

export { pages }