import React from "react"
import { useRoutes, Navigate } from "react-router-dom"
import { HelmetWrap } from "./wrapper"
import { LoginForm, Error404, AdminDashboard, DoctorDashboard } from "./pages"
import { CreateUser } from "./pages/Admin"
import { pages, usermap, createUserPaths } from "./constants"

export default function Router({ handleLogin, isAuthenticated, userType }) {
  const routes = useRoutes([
    {
      breadcrumb: "Home",
      path: "/",
      element: isAuthenticated ? (
        <Navigate to={`/${usermap[userType]}`} />
      ) : (
        <HelmetWrap
          title="Home"
          element={<LoginForm handleLogin={handleLogin} />}
        />
      ),
    },

    {
      breadcrumb: "Doctor dashboard",
      path: "/doctor",
      element: isAuthenticated && usermap[userType] === "doctor" ? (
        <HelmetWrap
          title="Doctor Dashboard"
          element={<DoctorDashboard />}
        />
      ) : (
        <Navigate to="/" />
      ),
    },

    {
      breadcrumb: "Admin dashboard",
      path: "/adminstrator",
      children: [
        {
          element: isAuthenticated && usermap[userType] === "adminstrator" ? (
            <HelmetWrap
              title="Admin Dashboard"
              element={<AdminDashboard createUserPaths={createUserPaths} />}
            />
          ) : (
            <Navigate to="/" />
          ),
          index: true
        },
        {
          path: "create-user",
          element: isAuthenticated && usermap[userType] === "adminstrator" ? (
            <HelmetWrap
              title="Create User"
              element={<CreateUser />}
            />
          ) : (
            <Navigate to="/" />
          ),
        }
        // ...createUserPaths.map((item) => ({
        //   breadcrumb: item.breadcrumb,
        //   path: item.path,
        //   element: (
        //     <HelmetWrap
        //       title={item.breadcrumb}
        //       element={<item.element />}
        //     />
        //   )
        // }))
      ]
    },

    {
      path: "*",
      element: <HelmetWrap title="Page not found" element={<Error404 />} />,
    },
  ])

  return routes
}