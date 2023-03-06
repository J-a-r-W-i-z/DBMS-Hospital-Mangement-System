import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Table } from "../../../components"
import { handleListAppointments, redirectUser } from "../../../actions"

const Appointments = () => {
  const [loading, setLoading] = useState(true)
  const [patients, setPatients] = useState([])

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    console.log("Appointments")
    const handleQuery = async () => {
      const res = await redirectUser(3, navigate)
      if (res) return
      handleListAppointments(setPatients, setLoading)
    }

    handleQuery()
  }, [location])

  function limitedData(users) {
    users = Array.from(users)

    return users.map((user) => ({
      username: user.username,
      name: user.Name,
      date_joined: user.date_joined,
    }))
  }

  function deleteAndFetch(id) {
    // handleDeleteAppointment(id)
    // setUsers(handleListAppointments())
  }

  function getPatientDetails(index) {
    console.log(index)
    navigate(`/doctor/patients/${users[index].username}`)
  }

  return (
    <>
      {!loading && (
        <div className="table-container">
          <Table
            title="Pending appointments"
            headers={["Username", "Name", "Date Joined", "Action"]}
            data={limitedData(patients)}
            searchKey="username"
            getInfo={(user) => getPatientDetails(user)}
            handleAction={(key) => deleteAndFetch(key)}
            buttonLabel="Close"
            buttonClass="btn-primary-sm"
            clickKey="username"
          />
        </div>
      )}
    </>
  )
}

export default Appointments
