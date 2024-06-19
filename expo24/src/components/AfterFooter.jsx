import { Outlet, Link } from "react-router-dom";
import LogoW from "../assets/LogoW.svg";
import LogoEHB from "../assets/LogoEHB.svg";
import css from "../styles/Footer.module.css";
import LinkedIn from "../assets/LinkedIn.svg";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Insta.svg";
import Tiktok from "../assets/TikTok.svg";

function AfterFooter() {
	return (
		<>
			<nav className={css.FooterContainer}>
				<div className={css.topRow}>
					<ul className={css.links}>
						<Link to="/">
							<img src={LogoW} className={css.whiteLogo} alt="Logo" />
						</Link>
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

export default AfterFooter;
