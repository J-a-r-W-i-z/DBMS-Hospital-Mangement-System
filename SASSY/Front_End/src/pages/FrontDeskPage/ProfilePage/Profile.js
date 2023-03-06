import React, { useState } from 'react';
import './Profile.css'
const ProfileCard = () => {
    const [profileinfo, setProfileinfo] = useState({
        employeeeId: '',
        name: '',
        address: '',
        contact: '',
        email: '',
        aadharId: '',
        gender: '',
        dob: '',

    })
    const genderMap = {
        '1': 'Male',
        '2': 'Female',
        '3': 'Other'
    }
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getProfile')
            .then(response => {
                console.log(response.data.List);
                setProfileinfo(response.data);

            })
            .catch(error => {
                console.log(error);
                toast.error('Could not refresh Profile page',
                    { position: toast.POSITION.BOTTOM_CENTER })
            });
    }, []);
    return (
        <div className="containerPro">
            <div className="col-lg-6">
                <h1 className="dark-color">{profileinfo.name}</h1>
                <h3 className="theme-color lead">Front Desk Operator</h3>
            </div>
            <div className="about-text go-to">
                {/* <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p> */}
                <div className="row about-list">
                    <div className="col-md-6">
                        <div className="media">
                            <label>Date of Birth</label>
                            <p>{profileinfo.dob}</p>
                        </div>

                        <div className="media">
                            <label>Address</label>
                            <p>{profileinfo.address}</p>
                        </div>
                        <div className="media">
                            <label>Employee Id</label>
                            <p>{profileinfo.employeeeId}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media">
                            <label>E-mail</label>
                            <p>{profileinfo.email}</p>
                        </div>
                        <div className="media">
                            <label>Phone</label>
                            <p>{profileinfo.contact}</p>
                        </div>
                        <div className="media">
                            <label>Gender</label>
                            <p>{profileinfo.gender}</p>
                        </div>
                        <div className="media">
                            <label>AadharID</label>
                            <p>{profileinfo.aadharId}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProfileCard;
