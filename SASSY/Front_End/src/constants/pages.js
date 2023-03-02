import { DoctorDashboard, AdminDashboard } from "../pages"
import { CreateDoctor } from "../pages/Admin"

const usermap = {
  1: "front-desk-operator",
  2: "data-entry-operator",
  3: "doctor",
  4: "adminstrator",
}

const createUserPaths = [
  { breadcrumb: "Front desk operators", path: "create-front-desk-operator", element: CreateDoctor },
  { breadcrumb: "Data entry operators", path: "create-data-entry-operator", element: CreateDoctor },
  { breadcrumb: "Doctors", path: "create-doctor", element: CreateDoctor },
  { breadcrumb: "Adminstrators", path: "create-adminstrator", element: CreateDoctor },
]

const pages = [
  { breadcrumb: "Doctor dashboard", usertype: 3, element: DoctorDashboard },
  { breadcrumb: "Admin dashboard", usertype: 4, element: AdminDashboard, children: createUserPaths }
]

export { pages, usermap, createUserPaths }