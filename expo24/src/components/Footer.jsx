import { Outlet, Link } from "react-router-dom";
import LogoW from "../assets/LogoW.svg";
import LogoEHB from "../assets/LogoEHB.svg";
import css from "../styles/Footer.module.css";
import LinkedIn from "../assets/LinkedIn.svg";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Insta.svg";
import Tiktok from "../assets/TikTok.svg";

function Footer() {
	return (
		<>
			<nav className={css.FooterContainer}>
				<div className={css.topRow}>
					<ul className={css.links}>
						<Link to="/">
							<img src={LogoW} className={css.whiteLogo} alt="Logo" />
						</Link>
						<div className={css.urlElements}>
							<div className={css.left}>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/Activities">Programma</Link>
								</li>
								<li>
									<Link to="https://multimedia.brussels/awards">Prijzen</Link>
								</li>
								<li>
									<Link to="https://multimedia.brussels">Projecten</Link>
								</li>
								
								<li className="afterNiet"></li>
							</div>
							<div className={css.right}>
							<li>
									<Link to="/Accessibility">Bereikbaarheid</Link>
								</li>
								<li className={css.after}>
									<Link to="/faq">FAQ</Link>
								</li>
							</div>
						</div>
					</ul>
					<div className={css.ehbLogo}>
						<div className={css.socials}>
							<a target="_blank" href="https://www.linkedin.com/school/erasmushogeschool-brussel/?originalSubdomain=be">
								<img src={LinkedIn} alt="LinkedIn" />
							</a>

							<a target="_blank" href="https://www.facebook.com/share/CXqyYvpnAxdgJRcy/">
								<img src={Facebook} alt="Facebook" />
							</a>
							<a target="_blank" href="https://www.instagram.com/multimedia.ehb/">
								<img src={Instagram} alt="Instagram" />
							</a>
							<a target="_blank" href="https://www.tiktok.com/@multimedia.ehb">
								<img src={Tiktok} alt="Tiktok" />
							</a>
						</div>
						<a className={css.privacy} href="/privacy">Privacy</a>
						<a target="_blank" href="https://www.erasmushogeschool.be/nl/opleidingen/multimedia-creatieve-technologie">
							<img className={css.logoEhb} src={LogoEHB} alt="EHB"></img>
						</a>
					</div>
				</div>
			</nav>
			<Outlet />
		</>
	);
}

export default Footer;
