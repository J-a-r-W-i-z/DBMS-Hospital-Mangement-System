import { useRoutes } from "react-router-dom"
import { pages } from "./constants"
import { HelmetWrap } from "./wrapper"

export default function Router() {
  const routes = useRoutes([
    ...pages.map((page) => ({
      path: page.path,
      element: HelmetWrap(page.element, page.name)
    })),
  ])

  return routes
}