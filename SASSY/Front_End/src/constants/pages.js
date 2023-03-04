import React from "react"
import { DoctorDashboard } from "../pages"
import { CreateUser, ListUsers } from "../pages/Admin"

export const usermap = {
  1: "front-desk-operator",
  2: "data-entry-operator",
  3: "doctor",
  4: "adminstrator",
}

const adminTasks = [
  {
    breadcrumb: "FDOs",
    path: "fdos",
    element: <ListUsers title="Front desk operators" userType={1} />
  },
  {
    breadcrumb: "DEOs",
    path: "deos",
    element: <ListUsers title="Data entry operators" userType={2} />
  },
  {
    breadcrumb: "Doctors",
    path: "doctors",
    element: <ListUsers title="Doctors" userType={3} />
  },
  {
    breadcrumb: "Admins",
    path: "admins",
    element: <ListUsers title="Adminstrators" userType={4} />
  },
  { breadcrumb: "Create user", path: "create-user", element: <CreateUser /> }
]

const doctorTasks = [
  { breadcrumb: "Patients", path: "patients" },
  { breadcrumb: "Appointments", path: "appointments" },
]

export const routeChildren = {
  1: [],
  2: [],
  3: doctorTasks,
  4: adminTasks,
}

export const pages = [
  { breadcrumb: "Doctor dashboard", usertype: 3, element: DoctorDashboard },
  { breadcrumb: "Admin dashboard", usertype: 4 }
]
