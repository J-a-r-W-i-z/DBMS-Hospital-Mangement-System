import React, { useState, useEffect } from "react"
import axios from "axios";
import "./PatientMedReport.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ff = ({ onClose, handleFormSubmit, handleInputChange, inputValue }) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <form onSubmit={handleFormSubmit}>
                    <label>
                        Add Medicine:
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
const PatientMedReport = () => {
    const [patients, setPatients] = useState([
        { Patient_id: 1, Name: "John Doe", AppointmentID: 35, Start: "2022-08-01" },

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

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/appointmentDetails')
            .then(response => {
                console.log(response.data.List);
                setPatients(response.data.List);
                toast.success('Appointment List Updated Successfully!',
                    { position: toast.POSITION.BOTTOM_CENTER })
            })
            .catch(error => {
                console.log(error);
                toast.error('Could not refresh appointment list',
                    { position: toast.POSITION.BOTTOM_CENTER })
            });
    }, []);

    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);

    const handleButtonClick1 = () => {
        setShowPopup1(true);
    };
    const handleButtonClick2 = () => {
        setShowPopup2(true);
    };
    const handleButtonClick3 = () => {
        setShowPopup3(true);
    };

    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const handlePopupClose1 = () => {
        setShowPopup1(false);
        setTodos([])
    };
    const handlePopupClose2 = () => {
        setShowPopup2(false);
        setTodos([])
    };
    const handlePopupClose3 = () => {
        setShowPopup3(false);
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

    const handleMedicineSubmit = (appID) => {
        const mess = {
            applicationid: appID.toString(),
            MedicineList: todos,
        };
        console.log(mess);
        axios.post('http://127.0.0.1:8000/api/insertMedicine', mess)
            .then((response) => {
                setTodos([])
                toast.success('Medicines added Successfully!',
                    { position: toast.POSITION.BOTTOM_CENTER })
                console.log("Medicines added successfully!");                // setTimeout(() => window.location.reload(), 3000); // Refresh page after 3 seconds
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.response.data.detail,
                    { position: toast.POSITION.BOTTOM_CENTER });
            });
    };
    const handleTestSubmit = (appID) => {
        const mess = {
            applicationid: appID.toString(),
            MedicineList: todos,
        };
        console.log(mess);
        axios.post('http://127.0.0.1:8000/api/insertTest', mess)
            .then((response) => {
                setTodos([])
                toast.success('Medicines added Successfully!',
                    { position: toast.POSITION.BOTTOM_CENTER })
                console.log("Medicines added successfully!");                // setTimeout(() => window.location.reload(), 3000); // Refresh page after 3 seconds
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.response.data.detail,
                    { position: toast.POSITION.BOTTOM_CENTER });
            });

    };
    const handleTreatmentSubmit = (appID) => {
        const mess = {
            applicationid: appID.toString(),
            MedicineList: todos,
        };
        console.log(mess);
        axios.post('http://127.0.0.1:8000/api/insertTreatment', mess)
            .then((response) => {
                setTodos([])
                toast.success('Medicines added Successfully!',
                    { position: toast.POSITION.BOTTOM_CENTER })
                console.log("Medicines added successfully!");                // setTimeout(() => window.location.reload(), 3000); // Refresh page after 3 seconds
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.response.data.detail,
                    { position: toast.POSITION.BOTTOM_CENTER });
            });

    };


    return (
        <div className="sectionMed s-wrapper">
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
                        <th>Date</th>

                        <th>Medication</th>
                        <th>Test</th>
                        <th>Treatment</th>
                    </tr>
                </thead>
                <tbody>
                    {searchTerm === ""
                        ? patients.map((patient) => (
                            <tr key={patient.Patient_id}>
                                <td>{patient.Patient_id}</td>
                                <td>{patient.Name}</td>
                                <td>{patient.AppointmentID}</td>
                                <td>{patient.Start}</td>

                                <td> <button className="DischargeButton" onClick={handleButtonClick1}>Add</button></td>
                                <td> <button className="DischargeButton" onClick={handleButtonClick2}>Add</button></td>
                                <td> <button className="DischargeButton" onClick={handleButtonClick3}>Add</button></td>
                            </tr>
                        ))
                        : filteredPatients.map((patient) => (
                            <tr key={patient.id}>
                                <td>{patient.Patient_id}</td>
                                <td>{patient.Name}</td>
                                <td>{patient.AppointmentID}</td>
                                <td>{patient.Start}</td>

                                <td> <button className="DischargeButton" onClick={handleButtonClick1}>Add</button></td>
                                <td> <button className="DischargeButton" onClick={handleButtonClick2}>Add</button></td>
                                <td> <button className="DischargeButton" onClick={handleButtonClick3}>Add</button></td>
                            </tr>
                        ))}
                </tbody>
            </table>

            {showPopup1 && <><div className="popup-overlay"></div> <div className="popup">
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
                        <button className="popSubmitButton" onClick={handleMedicineSubmit}>Submit</button>
                        <button className="popCloseButton" onClick={handlePopupClose1}>Close</button>
                    </div>
                </div>
            </div></>}
            {showPopup2 && <><div className="popup-overlay"></div> <div className="popup">
                <div className="popup-content">
                    <h1>Add Test</h1>
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
                        <button className="popSubmitButton" onClick={handleTestSubmit}>Submit</button>
                        <button className="popCloseButton" onClick={handlePopupClose2}>Close</button>
                    </div>
                </div>
            </div></>}
            {showPopup3 && <><div className="popup-overlay"></div> <div className="popup">
                <div className="popup-content">
                    <h1>Add Treatment</h1>
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
                        <button className="popSubmitButton" onClick={handleTreatmentSubmit}>Submit</button>
                        <button className="popCloseButton" onClick={handlePopupClose3}>Close</button>
                    </div>
                </div>
            </div></>}
            <ToastContainer />
        </div>
    )
}

export default PatientMedReport