import React, { useState } from "react";
import { Link } from "react-router-dom";
import hamburgerCSS from "../styles/HamburgerMenu.module.css";
import LogoB from "../assets/LogoB.svg";

const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`${hamburgerCSS.hamburgerMenu} ${isOpen ? hamburgerCSS.open : ""}`}>
			<div className={hamburgerCSS.hamburgerIcon} onClick={toggleMenu}>
				<div className={hamburgerCSS.line}></div>
				<div className={hamburgerCSS.halfLine}></div>
			</div>
			<div className={hamburgerCSS.menuItems}>
				<img className={hamburgerCSS.HamburgerImg} src={LogoB} alt="Logo" />
				<Link to="/">Home</Link>
				<Link to="/Activities">Activiteiten</Link>
				<Link to="/Timetable">Timetable</Link>
				<Link to="/Accessibility">Bereikbaarheid</Link>
				<Link to="/Practical">Praktische info</Link>
			</div>
		</div>
	);
};

export default HamburgerMenu;
