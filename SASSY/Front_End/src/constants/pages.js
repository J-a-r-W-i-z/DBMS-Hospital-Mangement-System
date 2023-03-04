import React from "react"
import { DoctorDashboard, FrontDeskOperator, DataEntryOperator } from "../pages"
import { CreateUser, ListUsers } from "../pages/Admin"
// import { RegisterPatient, AdmitPatient, AppointPatient, DischarePatient } from "../pages/FrontDeskOperator"

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
  // { breadcrumb: "Register", path: "register", element: <RegisterPatient /> },
  // { breadcrumb: "Admit", path: "admit", element: <AdmitPatient /> },
  // { breadcrumb: "Appoint", path: "appoint", element: <AppointPatient /> },
  // { breadcrumb: "Discharge", path: "discharge", element: <DischarePatient /> },
]

export const entityChildren = {
  1: fdoTasks,
  2: [],
  3: fdoTasks,
  4: adminTasks,
}

export const pages = [
  { breadcrumb: "FDO Dashboard", usertype: 1, element: FrontDeskOperator },
  { breadcrumb: "DE Dashboard", usertype: 2, element: DataEntryOperator },
  { breadcrumb: "Doctor dashboard", usertype: 3, element: DoctorDashboard },
  { breadcrumb: "Admin dashboard", usertype: 4, children: adminTasks }
]
