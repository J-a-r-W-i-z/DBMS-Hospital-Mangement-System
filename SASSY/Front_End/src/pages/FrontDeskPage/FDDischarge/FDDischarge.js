import React, { useState, useEffect } from "react"
import "./FDDischarge.css"
import axios from "axios"

const FDDischarge = () => {
    const [patients, setPatients] = useState([
        { id: "1", name: "John Doe", stayID: 35, gender: 1 },
        { id: "2", name: "Jane Smith", stayID: 42, gender: 1},
    
    ])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/patientstay')
            .then(response => {
                console.log(response.data);
                setPatients(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    });

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

        axios.post('http://127.0.0.1:8000/api/dischargePatient', formData)
            .then((response) => {

                console.log(response.status)
                toast.success(patients.filter(obj => {
                    return obj.stayID === stayId;
                }).name + ' discharged Successfully!',
                    { position: toast.POSITION.BOTTOM_CENTER })
                console.log("Discharged successfully!");                // setTimeout(() => window.location.reload(), 3000); // Refresh page after 3 seconds
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.message,
                    { position: toast.POSITION.BOTTOM_CENTER });
            });

    }


    return (
        <div className="sectionDis s-wrapper">
            <div className="margin-divider-sm" />
            <h1 className="center-text doctor-subheading">Discharge Patients</h1>
            <input
                type="text"
                placeholder="Search patients"
                value={searchTerm}
                onChange={handleSearch}
                className="inputsearch"
            />
            <table className="disTable">
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
                            <tr key={patient.stayID}>
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
                            <tr key={patient.stayID}>
                                <td>{patient.id}</td>
                                <td>{patient.name}</td>
                                <td>{patient.stayID}</td>
                                <td>{patient.gender}</td>
                                <td> <button className="DischargeButton" onClick={() => handleDischarge(patient.stayID)}>Discharge</button></td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default FDDischarge