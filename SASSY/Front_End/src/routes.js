import React from "react"
import { useRoutes } from "react-router-dom"
import { pages } from "./constants"
import { HelmetWrap } from "./wrapper"

export default function Router() {
  const routes = useRoutes([
    ...pages.map((page) => ({
      path: page.path,
      ...(page.children ? {
        children: [
          {
            path: page.path,
            element: <Navigate to={page.children[0].path} replace />
          },
          ...page.children.map((child) => ({
            path: child.path,
            element: HelmetWrap(child.element, child.name)
          }))
        ]
      } : {
        element: HelmetWrap(page.element, page.name)
      })
    })),
  ])

  return routes
}