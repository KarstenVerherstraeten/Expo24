import { Outlet, Link } from "react-router-dom";
import LogoB from "../assets/LogoB.svg";
import Navcss from "../styles/Navigation.module.css";

function Navigation() {
	return (
		<>
			<nav className={Navcss.NavContainer}>
				<Link to="/">
					<img src={LogoB} alt="Logo" />
				</Link>
				<div>
					<ul className={Navcss.Nav}>
						<li>
							<Link to="/Activities">Programma</Link>
						</li>
						<li className={Navcss.dropdown}>
							<span className={Navcss.dropdownToggle}>
								Showcase
								<span class="material-symbols-outlined">
									keyboard_arrow_down
								</span>
							</span>
							<ul className={Navcss.dropdownMenu}>
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
