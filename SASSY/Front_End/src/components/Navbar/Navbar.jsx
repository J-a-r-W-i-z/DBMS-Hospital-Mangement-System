import React, { useState } from "react"
import { HiMenuAlt1, HiMenuAlt3, HiOutlineX } from "react-icons/hi"
import { pages, images } from "../../constants"
import "./Navbar.scss"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="app__navbar app__pad">
			<div className="app__navbar-logo">
				<img src={images.logo} alt="logo" />
			</div>
			<ul className="app__navbar-links">
				{pages.map((page) => (
					<li key={page.name}>
						<a href={page.path}>{page.name}</a>
					</li>
				))}
			</ul>
			<div />

			<div className="app__navbar-menu">
				<HiMenuAlt1 onClick={() => setIsOpen(true)} />

				{isOpen && (
					<div>
						<HiOutlineX onClick={() => setIsOpen(false)} />
						<ul>
							{pages.map((page) => (
								<li key={page.name}>
									<a href={page.path}>{page.name}</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
