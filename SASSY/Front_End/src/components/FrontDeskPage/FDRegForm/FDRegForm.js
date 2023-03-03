import React, { useState } from 'react';
import './FDRegForm.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function FDRegForm() {
    const [formData, setFormData] = useState({
        Name: '',
        dob: '',
        email: '',
        mobile: '',
        gender: '',
        address: '',
        aadharid: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(formData)
        axios.post('http://10.145.230.85:8080/api/registerPatient', formData)
            .then((response) => {
                setFormData({
                    Name: '',
                    dob: '',
                    email: '',
                    mobile: '',
                    gender: '',
                    address: '',
                    aadharid: '',
                });
                console.log(response)
                toast.success('Admitted Successfully!',
                    { position: toast.POSITION.BOTTOM_CENTER })
                console.log("Admitted successfully!");                // setTimeout(() => window.location.reload(), 3000); // Refresh page after 3 seconds
            })
            .catch((error) => {
                toast.error(error.response.data.message,
                    { position: toast.POSITION.BOTTOM_CENTER });
            });
    };

    return (
        <div className="container">
            <header>Registration</header>

            <form action="#">
                <div className="form first">
                    <div className="details personal">
                        <span className="title">Personal Details</span>

                        <div className="fields">
                            <div className="input-field">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter your name" name="Name" value={formData.Name} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>Date of Birth</label>
                                <input type="date" placeholder="Enter birth date" name="dob" value={formData.dob} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>Email</label>
                                <input type="text" placeholder="Enter your email" name="email" value={formData.email} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>Mobile Number</label>
                                <input type="number" placeholder="Enter mobile number" name="mobile" value={formData.mobile} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>Gender</label>
                                <select name="gender" value={formData.gender} onChange={handleInputChange} required>
                                    <option selected>Select gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </div>

                            <div className="input-field">
                                <label>Address</label>
                                <input type="text" placeholder="Enter your Mobile Number" name="address" value={formData.address} onChange={handleInputChange} required />
                            </div>
                        </div>
                    </div>

                    <div className="details ID">
                        <span className="title">Identity Details</span>

                        <div className="fields">
                            <div className="input-field">
                                <label>ID Type</label>
                                <input type="text" placeholder="Enter ID type" required />
                            </div>

                            <div className="input-field">
                                <label>ID Number</label>
                                <input type="number" placeholder="Enter ID number" name="aadharid" value={formData.aadharid} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>Issued Authority</label>
                                <input type="text" placeholder="Enter issued authority" required />
                            </div>


                        </div>

                        <button className="nextBtn" onClick={handleSubmit}>
                            <span className="btnText">Submit</span>
                        </button>
                    </div>
                </div>


            </form>
            <ToastContainer />
        </div>
    );
}

export default FDRegForm;
