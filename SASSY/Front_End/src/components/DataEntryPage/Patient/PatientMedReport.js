import React, { useState } from "react"
import "./PatientMedReport.css"

const Popup = ({ onClose, handleFormSubmit, handleInputChange, inputValue }) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <form onSubmit={handleFormSubmit}>
                    <label>
                        Add Todo:
                        <input type="text" value={inputValue} onChange={handleInputChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
                <button>Submit</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};
const FDDischarge = () => {
    const [patients, setPatients] = useState([
        { id: 1, name: "John Doe", appId: 35, gender: "Male" },
        { id: 2, name: "Jane Smith", appId: 42, gender: "Female" },
        { id: 3, name: "Bob Johnson", appId: 58, gender: "Male" },
        { id: 4, name: "Souvik Rana", appId: 20, gender: "Male" },
        { id: 5, name: "Yashwant", appId: 20, gender: "Male" },
        { id: 6, name: "Anuj Kakde", appId: 20, gender: "Male" },
        { id: 7, name: "Sarthak", appId: 20, gender: "Male" },
        { id: 8, name: "Ayush Dwiedi", appId: 20, gender: "Male" },
        { id: 9, name: "Saptarshi", appId: 20, gender: "Male" },
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

    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const handlePopupClose = () => {
        setShowPopup(false);
        setTodos([])
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleFormSubmit = (e) => {
        // e.preventDefault();
        handleAddTodo();
    };
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleFormSubmit();
        }
    }
    return (
        <div className="section s-wrapper">
            <div className="margin-divider-sm" />
            <h1 className="center-text doctor-subheading">Patient Medicine and Report</h1>
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
                        <th>Appointment ID</th>

                        <th>Medication</th>
                        <th>Report</th>
                    </tr>
                </thead>
                <tbody>
                    {searchTerm === ""
                        ? patients.map((patient) => (
                            <tr key={patient.id}>
                                <td>{patient.id}</td>
                                <td>{patient.name}</td>
                                <td>{patient.appId}</td>

                                <td> <button className="DischargeButton" onClick={handleButtonClick}>Add</button></td>
                                <td> <button className="DischargeButton" onClick={handleButtonClick}>Add</button></td>
                            </tr>
                        ))
                        : filteredPatients.map((patient) => (
                            <tr key={patient.id}>
                                <td>{patient.id}</td>
                                <td>{patient.name}</td>
                                <td>{patient.appId}</td>

                                <td> <button className="DischargeButton" onClick={handleButtonClick}>Add</button></td>
                                <td> <button className="DischargeButton" onClick={handleButtonClick}>Add</button></td>
                            </tr>
                        ))}
                </tbody>
            </table>

            {showPopup && <><div className="popup-overlay"></div> <div className="popup">
                <div className="popup-content">
                    <h1>Add Medicine</h1>
                    <div className="inputDiv">
                        <input className="popInput" type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} />
                        <button className="popAddButton" type="submit" onClick={handleFormSubmit}>Add</button>
                    </div>
                    <div className="ListDiv">
                        <ul>
                            {todos.map((todo, index) => (
                                <li key={index}>{todo}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="buttonDiv">
                        <button className="popSubmitButton">Submit</button>
                        <button className="popCloseButton" onClick={handlePopupClose}>Close</button>
                    </div>
                </div>
            </div></>}
        </div>
    )
}

export default FDDischarge