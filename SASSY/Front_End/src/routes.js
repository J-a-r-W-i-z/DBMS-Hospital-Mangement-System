import React from "react"
import { useRoutes, Navigate } from "react-router-dom"
import { HelmetWrap } from "./wrapper"
import { LoginForm, Error404, AdminDashboard, DoctorDashboard } from "./pages"
import { CreateUser } from "./pages/Admin"
import { pages, usermap } from "./constants"

export default function Router({ handleLogin, isAuthenticated, userType }) {
  const routes = useRoutes([
    {
      breadcrumb: "Home",
      path: "/",
      element:
        <HelmetWrap
          title="Home"
          element={<LoginForm handleLogin={handleLogin} />}
        />
    },

    ...pages.map((page) => ({
      breadcrumb: page.breadcrumb,
      path: `/${usermap[page.usertype]}`,
      ...page.children ? {
        children: [
          {
            element: <HelmetWrap
              title={page.breadcrumb}
              element={<page.element
                childrenRoutes={page.children}
              />}
            />,
            index: true
          },
          ...page.children.map((child) => ({
            breadcrumb: child.breadcrumb,
            path: child.path,
            element:
              <HelmetWrap
                title={child.breadcrumb}
                element={<child.element />}
              />
          }))
        ]
      } : {
        element: <HelmetWrap
          title={page.breadcrumb}
          element={<page.element />}
        />
      }
    })),

    {
      path: "*",
      element: <HelmetWrap title="Page not found" element={<Error404 />} />,
    },
  ])

  return routes
}