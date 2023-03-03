import React, { useState, useEffect } from "react"
import "./FDDischarge.css"
import axios from "axios"

const FDDischarge = () => {
    const [patients, setPatients] = useState([
        { id: 1, name: "John Doe", stayID: 35, gender: "Male" },
        { id: 2, name: "Jane Smith", stayID: 42, gender: "Female" },
        { id: 3, name: "Bob Johnson", stayID: 58, gender: "Male" },
        { id: 4, name: "Souvik Rana", stayID: 20, gender: "Male" },
        { id: 5, name: "Yashwant", stayID: 20, gender: "Male" },
        { id: 6, name: "Anuj Kakde", stayID: 20, gender: "Male" },
        { id: 7, name: "Sarthak", stayID: 20, gender: "Male" },
        { id: 8, name: "Ayush Dwiedi", stayID: 20, gender: "Male" },
        { id: 9, name: "Saptarshi", stayID: 20, gender: "Male" },
    ])
    useEffect(() => {
        axios.get('/api/patientstay')
            .then(response => {
                setPatients(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const [searchTerm, setSearchTerm] = useState("")
    const [filteredPatients, setFilteredPatients] = useState([])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
        const filtered = patients.filter((patient) =>
            patient.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
        setFilteredPatients(filtered)
    }
    const handleDischarge = (stayId) => {


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
                className="inputsearch"
            />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Stay ID</th>
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
                                <td>{patient.stayID}</td>
                                <td>{patient.gender}</td>
                                <td> <button className="DischargeButton" onClick={() => {
                                    handleDischarge(patient.stayID);
                                }}>Discharge</button></td>
                            </tr>
                        ))
                        : filteredPatients.map((patient) => (
                            <tr key={patient.id}>
                                <td>{patient.id}</td>
                                <td>{patient.name}</td>
                                <td>{patient.stayID}</td>
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