import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Table } from "../../../components"
import { handleListPatients, redirectUser } from "../../../actions"

const Patients = () => {
  const [loading, setLoading] = useState(true)
  const [patients, setPatients] = useState([])

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    console.log("Patients")
    const handleQuery = async () => {
      const res = await redirectUser(3, navigate)
      if (res) return
      handleListPatients(setPatients, setLoading)
    }

    handleQuery()
  }, [location])

  function limitedData(users) {
    users = Array.from(users)

    return users.map((user) => ({
      username: user.AadharId,
      name: user.Name,
      dob: user.DOB,
    }))
  }

  function getPatientDetails(index) {
    navigate(`/doctor/patients/${patients[index].AadharId}`)
  }

  return (
    <>
      {!loading && (
        <div className="table-container">
          <Table
            title="Patients seen"
            headers={["Username", "Name", "Date of birth"]}
            data={limitedData(patients)}
            searchKey="name"
            getInfo={(user) => getPatientDetails(user)}
          />
        </div>
      )}
    </>
  )
}

export default Patients
