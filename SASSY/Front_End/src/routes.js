import React from "react"
import { useRoutes, Navigate } from "react-router-dom"
import { HelmetWrap } from "./wrapper"
import { LoginForm, Error404 } from "./pages"
import { pages, usermap, routeChildren } from "./constants"

export default function Router({ handleLogin, isAuthenticated }) {
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
      ...(routeChildren[page.usertype].length > 0) ? {
        children: [
          {
            element: <Navigate to={routeChildren[page.usertype][0].path} replace />,
            index: true
          },
          ...routeChildren[page.usertype].map((child) => ({
            breadcrumb: child.breadcrumb,
            path: child.path,
            element:
              <HelmetWrap
                title={child.breadcrumb}
                element={child.element}
              />
          }))
        ]
      } : {
        element:
          <HelmetWrap
            title={page.breadcrumb}
            element={<page.element />}
          />
      }
    })),

    {
      path: "/404",
      element: <HelmetWrap title="Page not found" element={<Error404 />} />
    },

    {
      path: "*",
      element: isAuthenticated && <Navigate to="/404" replace />
    },
  ])

  return routes
}