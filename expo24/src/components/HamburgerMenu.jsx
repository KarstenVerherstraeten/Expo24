import React, { useState } from "react";
import { Link } from "react-router-dom";
import hamburgerCSS from "../styles/HamburgerMenu.module.css";
import LogoB from "../assets/LogoB.svg";

const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<div className={`${hamburgerCSS.hamburgerMenu} ${isOpen ? hamburgerCSS.open : ""}`}>
			<div className={hamburgerCSS.hamburgerIcon} onClick={toggleMenu}>
				<div className={hamburgerCSS.line}></div>
				<div className={hamburgerCSS.halfLine}></div>
			</div>
			<div className={hamburgerCSS.menuItems}>
				<img className={hamburgerCSS.HamburgerImg} src={LogoB} alt="Logo" />
				<Link to="/" onClick={closeMenu}>
					Home
				</Link>
				<Link to="/Accessibility" onClick={closeMenu}>
					Bereikbaarheid
				</Link>
				{/*<Link to="/Activities" onClick={closeMenu}>Programma</Link>*/}
				<Link to="/faq" onClick={closeMenu}>
					FAQ
				</Link>

				{/* <Link to="/Item2" onClick={closeMenu}>Awards</Link>
				<Link to="/Item3" onClick={closeMenu}>Projecten</Link>	 */}
			</div>
		</div>
	);
};

export default HamburgerMenu;
