import React, { useState } from "react";
import "./SideBar.css";
import Logo from "../../assets/logo.png";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { RiRegisterLine } from 'react-icons/ri';

import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt
} from "@iconscout/react-unicons";

const SideBar = () => {
    const SidebarData = [
        {
            icon: UilEstate,
            heading: "Dashboard",
        },
        {
            icon: UilClipboardAlt,
            heading: "Profile",
        },
        {
            icon: UilClipboardAlt,
            heading: "Register",
        },
        {
            icon: UilClipboardAlt,
            heading: "Admit",
        },
        {
            icon: UilClipboardAlt,
            heading: "Appointment",
        },
        {
            icon: UilClipboardAlt,
            heading: "Discharge",
        },


    ];
    const [selected, setSelected] = useState(0);

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
                                onClick={() => setSelected(index)}
                            >
                                <item.icon />
                                <span>{item.heading}</span>
                            </div>
                        );
                    })}
                    {/* signoutIcon */}
                    <div className="menuItem">
                        <UilSignOutAlt />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default SideBar;
