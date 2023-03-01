import React from "react"
import { Helmet } from "react-helmet-async"

const HelmetWrap = (Component, title) => {
  const appender = " | SASSY"
  return (
    <>
      <Helmet>
        <title>{title + appender}</title>
      </Helmet>
      <Component />
    </>
  )
}

export default HelmetWrap
