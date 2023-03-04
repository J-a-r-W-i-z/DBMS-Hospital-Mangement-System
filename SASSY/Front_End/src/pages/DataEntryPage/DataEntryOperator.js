import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Switches, Redirect } from 'react-router-dom';
import "../FrontDeskPage/SideBar/SideBar.css";
import Logo from "../../assets/Favicon.png";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import './DataEntryOperator.css'
import MainDash from "./MainDash/MainDash";

import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt
} from "@iconscout/react-unicons";

function DataEntryOperator() {
    const [page, setPage] = useState("Patients");
    const SidebarData = [
        {
            icon: UilEstate,
            heading: "Profile",
        },
        {
            icon: UilClipboardAlt,
            heading: "Patients",
        },


    ];
    const [selected, setSelected] = useState(1);

    const [expanded, setExpaned] = useState(true)

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }
    console.log(window.innerWidth)
    return (
        <div className="Appde">
            <div className="AppGlassde">
                <>
                    <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
                        <UilBars />
                    </div>
                    <motion.div className='sidebar'
                        variants={sidebarVariants}
                        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
                    >
                        {/* logo */}
                        <div className="logo">
                            <img src={Logo} alt="logo" />
                            <span>
                                Sou<span>v</span>ik
                            </span>
                        </div>

                        <div className="menu">
                            {SidebarData.map((item, index) => {
                                return (
                                    <div
                                        className={selected === index ? "menuItem active" : "menuItem"}
                                        key={index}
                                        onClick={() => {
                                            setSelected(index);
                                            setPage(item.heading);
                                            console.log(item.heading)

                                        }}
                                    >
                                        <item.icon />
                                        <span>{item.heading}</span>
                                    </div>

                                );
                            })}
                            {/* signoutIcon */}
                            <div className="menuItem">
                                <UilSignOutAlt />
                                Logout
                            </div>
                        </div>
                    </motion.div>
                </>
                <MainDash page={page} />
            </div>
        </div>
    );
}

export default DataEntryOperator;
