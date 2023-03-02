import React, { useState } from "react"
import "./FDDischarge.css"

const FDDischarge = () => {
    const [patients, setPatients] = useState([
        { id: 1, name: "John Doe", age: 35, gender: "Male" },
        { id: 2, name: "Jane Smith", age: 42, gender: "Female" },
        { id: 3, name: "Bob Johnson", age: 58, gender: "Male" },
        { id: 4, name: "Souvik Rana", age: 20, gender: "Male" },
        { id: 5, name: "Yashwant", age: 20, gender: "Male" },
        { id: 6, name: "Anuj Kakde", age: 20, gender: "Male" },
        { id: 7, name: "Sarthak", age: 20, gender: "Male" },
        { id: 8, name: "Ayush Dwiedi", age: 20, gender: "Male" },
        { id: 9, name: "Saptarshi", age: 20, gender: "Male" },
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
            <div className="margin-divider-sm" />
            <h1 className="center-text doctor-subheading">Discharge Patients</h1>
            <input
                type="text"
                placeholder="Search patients"
                value={searchTerm}
                onChange={handleSearch}
            />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Action</th>
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
                                <td> <button className="DischargeButton">Discharge</button></td>
                            </tr>
                        ))
                        : filteredPatients.map((patient) => (
                            <tr key={patient.id}>
                                <td>{patient.id}</td>
                                <td>{patient.name}</td>
                                <td>{patient.age}</td>
                                <td>{patient.gender}</td>
                                <td> <button className="DischargeButton">Discharge</button></td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default FDDischarge