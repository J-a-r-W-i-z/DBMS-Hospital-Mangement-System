import { DoctorDashboard, AdminDashboard } from "../pages"
import { CreateDoctor } from "../pages/Admin"

const usermap = {
  1: "front-desk-operator",
  2: "data-entry-operator",
  3: "doctor",
  4: "adminstrator",
}

const createUserPaths = [
  { breadcrumb: "Create FDO", path: "create-FDO", element: CreateDoctor },
  { breadcrumb: "Createa DEO", path: "create-DEO", element: CreateDoctor },
  { breadcrumb: "Create doctor", path: "create-doctor", element: CreateDoctor },
  { breadcrumb: "Create adminstrator", path: "create-adminstrator", element: CreateDoctor },
]

const pages = [
  { breadcrumb: "Doctor dashboard", usertype: 3, element: DoctorDashboard },
  { breadcrumb: "Admin dashboard", usertype: 4, element: AdminDashboard, children: createUserPaths }
]

export { pages, usermap, createUserPaths }