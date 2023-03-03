import React from "react"
import { FrontDeskOperator, DoctorDashboard } from "../pages"
import { CreateUser, ListUsers } from "../pages/Admin"
import { RegisterPatient } from "../pages/FrontDeskOperator"

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

const fdoTasks = [
  { breadcrumb: "Register", path: "register", element: <RegisterPatient /> },
  { breadcrumb: "Admit", path: "admit", element: <CreateUser /> },
  { breadcrumb: "Appoint", path: "appoint", element: <CreateUser /> },
  { breadcrumb: "Discharge", path: "discharge", element: <CreateUser /> },
  { breadcrumb: "Profile", path: "profile", element: <CreateUser /> }
]

export const entityChildren = {
  1: fdoTasks,
  2: [],
  3: fdoTasks,
  4: adminTasks,
}

export const pages = [
  { breadcrumb: "FDO dashboard", usertype: 1, element: FrontDeskOperator, children: fdoTasks },
  { breadcrumb: "Doctor dashboard", usertype: 3, element: DoctorDashboard },
  { breadcrumb: "Admin dashboard", usertype: 4, children: adminTasks }
]
