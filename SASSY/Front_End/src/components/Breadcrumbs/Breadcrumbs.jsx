import React from "react"
import { Link } from "react-router-dom"
import useBreadcrumbs from "use-react-router-breadcrumbs"
import "./Breadcrumbs.scss"

function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs()
  console.log(breadcrumbs)

  return (
    <>
      <nav className="breadcrumb-nav">
        <ul>
          {breadcrumbs.map(({ key, breadcrumb }, index) => (
            <li key={index}>
              <a href={key}>
                <h2>{breadcrumb}</h2>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <hr className="breadcrumb-line" />
      <div className="margin-divider-sm"></div>
    </>
  )
}

export default Breadcrumbs
