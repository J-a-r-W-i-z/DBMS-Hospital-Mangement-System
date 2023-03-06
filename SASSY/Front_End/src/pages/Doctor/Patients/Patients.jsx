import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Table } from "../../../components"
import { handleListPatients } from "../../../actions"

const Patients = () => {
  const [loading, setLoading] = useState(true)
  const [patients, setPatients] = useState([])

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    console.log("Patients")
    handleListPatients(setPatients, setLoading)
    console.log(patients)
  }, [location])

  function limitedData(users) {
    users = Array.from(users)

    return users.map((user) => ({
      username: user.username,
      name: user.name,
      date_joined: user.date_joined,
    }))
  }

  function getPatientDetails(index) {
    navigate(`/doctor/patients/${users[index].username}`)
  }

  return (
    <>
      {!loading && (
        <div className="table-container">
          <Table
            title="Patients seen"
            headers={["Username", "Name", "Date Joined"]}
            data={limitedData(patients)}
            searchKey="username"
            getInfo={(user) => getPatientDetails(user)}
          />
        </div>
      )}
    </>
  )
}

export default Patients
