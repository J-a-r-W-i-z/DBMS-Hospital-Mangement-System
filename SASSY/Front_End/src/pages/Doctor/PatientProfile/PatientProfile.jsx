import React, { useEffect } from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import { redirectUser } from "../../../actions"

const PatientProfile = () => {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    console.log("PatientProfile")
    if (redirectUser(3, navigate)) return
  }, [location])

  return <div>{id}</div>
}

export default PatientProfile
