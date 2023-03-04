import React from "react"
import { DoctorDashboard } from "../pages"
import { CreateUser, ListUsers } from "../pages/Admin"
import { Appointments, Patients } from "../pages/Doctor"

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
    element: <ListUsers title="Front Desk Ooperators" userType={1} />
  },
  {
    breadcrumb: "DEOs",
    path: "deos",
    element: <ListUsers title="Data Entry Ooperators" userType={2} />
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
  { breadcrumb: "Patients", path: "patients", element: <Patients /> },
  { breadcrumb: "Appointments", path: "appointments", element: <Appointments /> },
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
