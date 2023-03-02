import React from 'react';
import './Profile.css'
const ProfileCard = ({ name, contact, email, age, sex, address }) => {
    name = "Souvik Rana"
    contact = "9339005762"
    email = "ranasouvik07@gmail.com"
    age = 20
    sex = "Male"
    address = "Kharagpur,India"
    return (
        <div className="containerPro">
            <div className="col-lg-6">
                <h1 className="dark-color">Souvik Rana</h1>
                <h3 className="theme-color lead">Front Desk Operator</h3>
            </div>
            <div className="about-text go-to">
                {/* <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p> */}
                <div className="row about-list">
                    <div className="col-md-6">
                        <div className="media">
                            <label>Birthday</label>
                            <p>4th april 1998</p>
                        </div>
                        <div className="media">
                            <label>Age</label>
                            <p>22 Yr</p>
                        </div>
                        <div className="media">
                            <label>Residence</label>
                            <p>Canada</p>
                        </div>
                        <div className="media">
                            <label>Address</label>
                            <p>California, USA</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media">
                            <label>E-mail</label>
                            <p>info@domain.com</p>
                        </div>
                        <div className="media">
                            <label>Phone</label>
                            <p>820-885-3321</p>
                        </div>
                        <div className="media">
                            <label>Skype</label>
                            <p>skype.0404</p>
                        </div>
                        <div className="media">
                            <label>Freelance</label>
                            <p>Available</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProfileCard;
