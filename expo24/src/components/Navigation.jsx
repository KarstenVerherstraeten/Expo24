import { Outlet, Link } from "react-router-dom";
import LogoB from "../assets/LogoB.svg";
import styles from "../styles/Navigation.module.css"; // Ensure the correct path to your CSS module

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
								Showcase
								<span className="material-symbols-outlined">
									keyboard_arrow_down
								</span>
							</span>
							<ul className={styles.dropdownMenu}>
								<li>
									<Link to="/Item2">Awards</Link>
								</li>
								<li>
									<Link to="/Item3">Projecten</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link to="/Accessibility">FAQ</Link>
						</li>
						<li>
							<Link to="/Practical">Bereikbaarheid</Link>
						</li>
					</ul>
				</div>
			</nav>
			<Outlet />
		</>
	);
}

export default Navigation;
