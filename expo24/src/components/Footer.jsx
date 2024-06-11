import { Outlet, Link } from "react-router-dom";
import LogoW from "../assets/LogoW.svg";
import LogoEHB from "../assets/LogoEHB.svg";
import css from "../styles/Footer.module.css";

function Footer() {
	return (
		<>
			<nav className={css.FooterContainer}>
				<Link to="/">
					<img src={LogoW} className={css.whiteLogo} alt="Logo" />
				</Link>
				<div>
					<ul className={css.links}>
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
					<div className={css.ehbLogo}>
					<img className={css.logoEhb} src={LogoEHB}></img>
				</div>
				</div>
				
			</nav>
			<Outlet />
		</>
	);
}

export default Footer;
