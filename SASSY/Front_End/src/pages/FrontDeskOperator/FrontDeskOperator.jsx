import React, { useState } from "react"
import { Link } from "react-router-dom"

import "react-tabs/style/react-tabs.css"
import "./FrontDeskOperator.scss"

const FrontDeskOperator = ({ childrenRoutes }) => {
  return (
    <>
      {childrenRoutes.map((task, index) => (
        <Link to={task.path} key={index}>
          <button className="btn-primary-sm create-user-btn">
            {task.breadcrumb}
          </button>
        </Link>
      ))}
    </>
  )
}

export default FrontDeskOperator
