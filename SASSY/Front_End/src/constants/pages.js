import { LoginForm, DoctorDashboard } from "../pages"

const pages = [
  { name: "Home", path: "/", element: LoginForm },
  {
    path: "/hms/dashboard", children: [
      { name: "Doctor Dashboard", path: "doctor", element: DoctorDashboard },

    ]
  }
]

export { pages }