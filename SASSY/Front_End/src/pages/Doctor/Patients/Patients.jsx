import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Table } from "../../../components"
import { handleListPatients } from "../../../actions"

const Patients = () => {
  const [users, setUsers] = useState([
    {
      username: "johnsnow",
      name: "John Snow",
      date_joined: "2021-01-01",
      something: "no",
    },
    {
      username: "janesmith",
      name: "Jane Smith",
      date_joined: "2021-01-01",
    },
    {
      username: "bobjohnson",
      name: "Bob Johnson",
      date_joined: "2021-01-01",
    },
  ])

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    console.log("useEffect")
    // setUsers(handleListPatients())
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
    console.log(index)
    navigate(`/doctor/patients/${users[index].username}`)
  }

  return (
    <div className="table-container">
      <Table
        title="Patients seen"
        headers={["Username", "Name", "Date Joined"]}
        data={limitedData(users)}
        searchKey="username"
        getInfo={(user) => getPatientDetails(user)}
      />
    </div>
  )
}

export default Patients
