import { Outlet, Link } from "react-router-dom";
import LogoB from "../assets/LogoB.svg";
import styles from "../styles/Navigation.module.css";
import HamburgerMenu from "../components/HamburgerMenu";

function Navigation() {
	return (
		<>
			<nav className={styles.NavContainer}>
				<Link to="/">
					<img src={LogoB} alt="Logo" />
				</Link>
				<div>
					<ul className={styles.Nav}>
						  <li>
							<Link to="/Activities">Programma</Link>
						</li>
						
						<li className={styles.dropdown}>
							<span className={styles.dropdownToggle}>
								Eindwerken
								<span className="material-symbols-outlined">keyboard_arrow_down</span>
							</span>
							<ul className={styles.dropdownMenu}>
								<li>
									<Link to="https://multimedia.brussels/awards">Awards</Link>
								</li>
								<li>
									<Link to="https://multimedia.brussels">Projecten</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link to="/Accessibility">Bereikbaarheid</Link>
						</li>
						<li>
							<Link to="/Faq">FAQ</Link>
						</li>

						<button className={styles.btn}>
							<Link to="/Inschrijving">SCHRIJF JE IN</Link>
						</button>
					</ul>
				</div>
				<HamburgerMenu></HamburgerMenu>
			</nav>
			<Outlet />
		</>
	);
}

export default Navigation;
