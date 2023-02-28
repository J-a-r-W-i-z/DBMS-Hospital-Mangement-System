import { LoginForm, DoctorDashboard } from "../pages"

const pages = [
	{ name: "Home", path: "/", element: DoctorDashboard },
	{ name: "Doctor Dashboard", path: "/doctor-dashboard", element: DoctorDashboard }
	// { name: "Login", path: "/login", element: LoginForm },
]

export { pages }