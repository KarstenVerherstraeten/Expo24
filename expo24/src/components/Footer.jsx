import { Outlet, Link } from "react-router-dom";
import LogoB from "../assets/LogoB.svg";
import css from "../styles/Footer.module.css";

function Footer() {
	return (
		<>
			<nav className={css.FooterContainer}>
				<Link to="/">
					<img src={LogoB} alt="Logo" />
				</Link>
				<div>
					<ul className={css.Footer}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/Activities">Programma</Link>
						</li>
						<li>
							<Link to="/Accessibility">Bereikbaarheid</Link>
						</li>
						<li>
							<Link to="/Practical">FAQ</Link>
						</li>
						<li>
							<Link to="/">Portfolio</Link>
						</li>
						<li>
							<Link to="/">Awards</Link>
						</li>
						<li>
							<Link to="/">Projecten</Link>
						</li>
					</ul>
				</div>
			</nav>
			<Outlet />
		</>
	);
}

export default Footer;
