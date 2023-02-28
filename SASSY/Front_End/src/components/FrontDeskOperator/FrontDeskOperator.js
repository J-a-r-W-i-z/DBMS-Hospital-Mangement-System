import React from 'react';
import './FrontDeskOperator.css'
import MainDash from '../MainDash/MainDash';
import Sidebar from '../SideBar/SideBar';

function FrontDeskOperator() {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <MainDash />
            </div>
        </div>
    );
}

export default FrontDeskOperator;
