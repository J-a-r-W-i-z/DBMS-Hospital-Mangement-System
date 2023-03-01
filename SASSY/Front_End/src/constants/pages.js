import { LoginForm, DoctorDashboard } from "../pages"

const pages = [
  { name: "Home", path: "/", element: LoginForm },
  {
    path: "/hms/dashboard", children: [
      { path: "doctor", element: DoctorDashboard, name: "Doctor Dashboard" },
      { path: "patient", element: DoctorDashboard, name: "Patient Dashboard" },
      { path: "nurse", element: DoctorDashboard, name: "Nurse Dashboard" },
    ]
  }

]

export { pages }