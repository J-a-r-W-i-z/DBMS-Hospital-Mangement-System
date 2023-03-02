import React, { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import "../../styles/Tab.scss"
import "./Doctor.scss"

const DoctorDashboard = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", age: 35, gender: "Male" },
    { id: 2, name: "Jane Smith", age: 42, gender: "Female" },
    { id: 3, name: "Bob Johnson", age: 58, gender: "Male" },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPatients, setFilteredPatients] = useState([])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
    const filtered = patients.filter((patient) =>
      patient.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setFilteredPatients(filtered)
  }

  const [appointments, setAppointments] = useState([
    { id: 1, patientId: 1, time: "10:00 AM" },
    { id: 2, patientId: 2, time: "11:00 AM" },
    { id: 3, patientId: 3, time: "2:00 PM" },
  ])

  const getPatientName = (id) => {
    const patient = patients.find((patient) => patient.id === id)
    return patient ? patient.name : ""
  }

  const handleAppointmentClick = (id) => {
    // handle button click for appointment with given id
  }

  return (
    <div className="section s-wrapper">
      <p className="primary-heading center-text">Doctor Dashboard</p>
      <div className="margin-divider-sm" />
      <Tabs focusTabOnClick={false}>
        <TabList>
          <Tab>Appointments</Tab>
          <Tab>Patients</Tab>
        </TabList>
        <TabPanel>
          <h1 className="center-text doctor-subheading">
            Pending Appointments
          </h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.id}</td>
                  <td>{getPatientName(appointment.patientId)}</td>
                  <td style={{ paddingTop: 5, paddingBottom: 5 }}>
                    <button
                      className="btn-primary-sm"
                      onClick={() => handleAppointmentClick(appointment.id)}
                    >
                      Complete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabPanel>

        <TabPanel>
          <h1 className="center-text doctor-subheading">Patients</h1>
          <table>
            <thead>
              <tr>
                <th colSpan="4">
                  <input
                    type="text"
                    placeholder="Search patients"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </th>
              </tr>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {searchTerm === ""
                ? patients.map((patient) => (
                    <tr key={patient.id}>
                      <td>{patient.id}</td>
                      <td>{patient.name}</td>
                      <td>{patient.age}</td>
                      <td>{patient.gender}</td>
                    </tr>
                  ))
                : filteredPatients.map((patient) => (
                    <tr key={patient.id}>
                      <td>{patient.id}</td>
                      <td>{patient.name}</td>
                      <td>{patient.age}</td>
                      <td>{patient.gender}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default DoctorDashboard
