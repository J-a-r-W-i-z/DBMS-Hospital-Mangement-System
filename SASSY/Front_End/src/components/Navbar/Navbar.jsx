import React, { useState } from "react"
import { images } from "../../constants"
import "./Navbar.scss"

const Navbar = () => {
	return (
		<nav className="app__navbar app__pad">
			<div className="app__navbar-logo">
				<img src={images.logo} alt="logo" />
				<h1>SASSY</h1>
			</div>
			<div className="logout-btn">
				<button className="btn-secondary">Logout</button>
			</div>
		</nav>
	)
}

export default Navbar
